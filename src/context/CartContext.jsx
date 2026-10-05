import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('ms_vibes_cart');
        if (saved) return JSON.parse(saved);
      } catch {
        // Ignore storage errors
      }
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartBump, setCartBump] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('ms_vibes_cart', JSON.stringify(items));
      } catch {
        // Ignore storage errors
      }
    }
  }, [items]);

  const addToCart = (product, colorObj, displayImg) => {
    const itemKey = `${product.id}-${colorObj.id}`;
    setItems((prev) => {
      const existing = prev.find((i) => i.key === itemKey);
      if (existing) {
        return prev.map((i) =>
          i.key === itemKey ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [
        ...prev,
        {
          key: itemKey,
          id: product.id,
          nameAr: product.nameAr,
          price: product.price,
          oldPrice: product.oldPrice,
          colorId: colorObj.id,
          colorName: colorObj.name,
          colorHex: colorObj.hex,
          img: displayImg,
          quantity: 1,
        },
      ];
    });

    setCartBump(true);
    setTimeout(() => setCartBump(false), 650);
  };

  const updateQuantity = (key, delta) => {
    setItems((prev) =>
      prev
        .map((item) =>
          item.key === key
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (key) => {
    setItems((prev) => prev.filter((item) => item.key !== key));
  };

  const clearCart = () => setItems([]);

  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const totalOldPrice = items.reduce(
    (sum, item) => sum + (item.oldPrice || item.price) * item.quantity,
    0
  );
  const totalSavings = Math.max(0, totalOldPrice - totalPrice);

  return (
    <CartContext.Provider
      value={{
        items,
        isCartOpen,
        setIsCartOpen,
        cartBump,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        totalCount,
        totalPrice,
        totalSavings,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
