import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';

const SIZES = ['M', 'L', 'XL', 'XXL'];

export default function FloatingWhatsApp() {
  const { isDark } = useTheme();
  const {
    items,
    isCartOpen,
    setIsCartOpen,
    cartBump,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalCount,
    totalPrice,
    totalSavings,
  } = useCart();

  const [selectedSize, setSelectedSize] = useState('L');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [checkoutCrumpling, setCheckoutCrumpling] = useState(false);

  // Close on Escape key
  useEffect(() => {
    if (!isCartOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsCartOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isCartOpen, setIsCartOpen]);

  const handleCheckout = (e) => {
    e.preventDefault();
    if (items.length === 0 || checkoutCrumpling) return;

    setCheckoutCrumpling(true);

    const itemsLines = items
      .map(
        (item, idx) =>
          `${idx + 1}. ${item.nameAr} — اللون: (${item.colorName}) × ${item.quantity} = ${
            item.price * item.quantity
          } ج.م`
      )
      .join('\n');

    const message = encodeURIComponent(
      `مرحباً M&S VIBES 👋\nطلب جديد من عربة التسوق 🛒:\n\n${itemsLines}\n\n• المقاس المطلوب: ${selectedSize}\n• إجمالي القطع: ${totalCount}\n• الإجمالي: ${totalPrice} ج.م (توفير ${totalSavings} ج.م)\n${
        customerName ? `• الاسم: ${customerName}\n` : ''
      }${customerPhone ? `• الموبايل: ${customerPhone}\n` : ''}${
        customerAddress ? `• العنوان: ${customerAddress}\n` : ''
      }\n(شامل المعاينة والقياس مع المندوب قبل الدفع) 🚚`
    );

    setTimeout(() => {
      setCheckoutCrumpling(false);
      window.open(`https://wa.me/201000000000?text=${message}`, '_blank');
    }, 900);
  };

  return (
    <>
      {/* Floating Shopping Cart Trigger Button (Bottom-Left) */}
      <aside
        aria-label="عربة التسوق"
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 group"
      >
        {/* Desktop Tooltip / Live Price Pill */}
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          className={`hidden sm:flex items-center gap-2 text-xs font-black py-2 px-3.5 rounded-xl border-2 shadow-[3px_3px_0px_#001428] cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 ${
            isDark
              ? 'bg-[#001c38] text-[#FFF7E6] border-[#00B4D8]'
              : 'bg-[#FFFBF2] text-[#001428] border-[#001428]'
          }`}
        >
          <span>عربة التسوق</span>
          {totalCount > 0 && (
            <span className="px-2 py-0.5 rounded-md bg-[#FFD166] text-[#001428] font-english">
              {totalPrice} ج.م
            </span>
          )}
        </button>

        {/* Main Floating Cart Button */}
        <button
          type="button"
          onClick={() => setIsCartOpen(true)}
          aria-label={`فتح عربة التسوق (${totalCount} قطع)`}
          className={`relative w-15 h-15 rounded-2xl flex items-center justify-center cursor-pointer border-2 border-[#001428] shadow-[5px_5px_0px_#001428] transition-transform duration-200 hover:scale-105 active:scale-95 ${
            cartBump ? 'scale-125 -rotate-6' : ''
          } ${
            isDark
              ? 'bg-gradient-to-br from-[#FFD166] via-[#90E0EF] to-[#00B4D8] text-[#001428]'
              : 'bg-[#FFD166] hover:bg-[#90E0EF] text-[#001428]'
          }`}
        >
          {/* Shopping Cart SVG Icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-7 h-7"
          >
            <circle cx="9" cy="21" r="1.5" />
            <circle cx="20" cy="21" r="1.5" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>

          {/* Item Count Badge */}
          <span
            className={`absolute -top-2.5 -right-2.5 min-w-6 h-6 px-1.5 rounded-full text-xs font-english font-black flex items-center justify-center border-2 border-[#001428] shadow-[2px_2px_0px_#001428] ${
              totalCount > 0
                ? 'bg-[#FF4D9D] text-white'
                : 'bg-white text-[#001428]'
            }`}
          >
            {totalCount}
          </span>
        </button>
      </aside>

      {/* Shopping Cart Overlay Page (Appears Above Original Page) */}
      {isCartOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="صفحة عربة التسوق"
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-[#001428]/80"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsCartOpen(false);
          }}
        >
          <div className="crumpled-card-container w-full max-w-2xl my-auto pt-3">
            {/* Scotch Tape on Top */}
            <div className="paper-tape"></div>

            <div
              className={`rounded-3xl overflow-hidden relative max-h-[88vh] flex flex-col ${
                isDark ? 'paper-card-dark' : 'paper-card-light'
              }`}
            >
              {/* Paper Crease Overlay */}
              <div className="paper-crease-overlay rounded-3xl"></div>

              {/* Top Header Bar */}
              <div
                className={`px-5 py-4 flex items-center justify-between border-b-2 border-dashed relative z-10 ${
                  isDark
                    ? 'border-[#00B4D8]/40 bg-[#001428]/60'
                    : 'border-[#001428]/25 bg-[#FFF7E6]/70'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-xl bg-[#FFD166] text-[#001428] border-2 border-[#001428] shadow-[2px_2px_0px_#001428] flex items-center justify-center font-black">
                    🛒
                  </span>
                  <div>
                    <h2
                      className={`text-base sm:text-xl font-black ${
                        isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
                      }`}
                    >
                      عربة التسوق ({totalCount} قطع)
                    </h2>
                    <p
                      className={`text-[11px] font-bold font-english ${
                        isDark ? 'text-[#90E0EF]' : 'text-slate-600'
                      }`}
                    >
                      M&S VIBES // ARCHIVE ORDER SHEET
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsCartOpen(false)}
                  aria-label="إغلاق عربة التسوق"
                  className="w-9 h-9 rounded-xl bg-[#FF4D9D] text-white border-2 border-[#001428] shadow-[2px_2px_0px_#001428] font-black text-sm flex items-center justify-center cursor-pointer hover:scale-105 transition-transform"
                >
                  ✕
                </button>
              </div>

              {/* Scrollable Cart Content */}
              <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-5 relative z-10">
                {items.length === 0 ? (
                  <div className="text-center py-10 px-4 space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-[#FFD166] text-[#001428] border-2 border-[#001428] shadow-[4px_4px_0px_#001428] flex items-center justify-center text-3xl">
                      🛒
                    </div>
                    <h3
                      className={`text-lg sm:text-xl font-black ${
                        isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
                      }`}
                    >
                      عربة التسوق فاضية دلوقتي!
                    </h3>
                    <p
                      className={`text-xs sm:text-sm font-bold max-w-sm mx-auto ${
                        isDark ? 'text-[#F4D6A6]' : 'text-slate-600'
                      }`}
                    >
                      اختار القطع والألوان اللي تعجبك من الكوليكشن واضغط على «إضافة إلى العربة» عشان تظهر هنا.
                    </p>
                    <a
                      href="#products"
                      onClick={() => setIsCartOpen(false)}
                      className="crumpled-paper-btn inline-flex items-center gap-2 px-6 py-3 font-black text-sm cursor-pointer"
                    >
                      <span>تصفح الكوليكشن دلوقتي 🔥</span>
                    </a>
                  </div>
                ) : (
                  <>
                    {/* Added Items List */}
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div
                          key={item.key}
                          className={`p-3 rounded-2xl border-2 flex items-center gap-3 transition-all ${
                            isDark
                              ? 'bg-[#001428]/90 border-[#00B4D8]/60 shadow-[3px_3px_0px_#00B4D8]'
                              : 'bg-white border-[#001428] shadow-[3px_3px_0px_#001428]'
                          }`}
                        >
                          <img
                            src={item.img}
                            alt={item.nameAr}
                            className="w-16 h-20 rounded-xl object-cover object-top border-2 border-[#001428] shrink-0"
                          />

                          <div className="flex-1 min-w-0">
                            <h4
                              className={`text-xs sm:text-sm font-black truncate ${
                                isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
                              }`}
                            >
                              {item.nameAr}
                            </h4>

                            <div className="flex items-center gap-1.5 mt-1">
                              <span
                                className="w-3.5 h-3.5 rounded-full border border-[#001428] shrink-0"
                                style={{ backgroundColor: item.colorHex }}
                              />
                              <span
                                className={`text-[11px] font-bold ${
                                  isDark ? 'text-[#90E0EF]' : 'text-slate-600'
                                }`}
                              >
                                اللون: {item.colorName}
                              </span>
                            </div>

                            <div className="flex items-center justify-between mt-2">
                              <span
                                className={`text-sm font-black font-english ${
                                  isDark ? 'text-[#FFD166]' : 'text-[#001428]'
                                }`}
                              >
                                {item.price * item.quantity} ج.م
                              </span>

                              {/* Quantity Controls */}
                              <div className="flex items-center gap-1.5">
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.key, -1)}
                                  aria-label="تقليل الكمية"
                                  className="w-7 h-7 rounded-lg bg-[#FFF7E6] text-[#001428] border-2 border-[#001428] font-black text-sm flex items-center justify-center cursor-pointer hover:bg-[#FFD166]"
                                >
                                  -
                                </button>
                                <span
                                  className={`w-6 text-center text-xs font-english font-black ${
                                    isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
                                  }`}
                                >
                                  {item.quantity}
                                </span>
                                <button
                                  type="button"
                                  onClick={() => updateQuantity(item.key, 1)}
                                  aria-label="زيادة الكمية"
                                  className="w-7 h-7 rounded-lg bg-[#90E0EF] text-[#001428] border-2 border-[#001428] font-black text-sm flex items-center justify-center cursor-pointer hover:bg-[#FFD166]"
                                >
                                  +
                                </button>
                                <button
                                  type="button"
                                  onClick={() => removeFromCart(item.key)}
                                  aria-label="حذف القطعة"
                                  title="حذف القطعة"
                                  className="w-7 h-7 rounded-lg bg-[#FF4D9D]/20 text-[#FF4D9D] border border-[#FF4D9D] font-black text-xs flex items-center justify-center cursor-pointer hover:bg-[#FF4D9D] hover:text-white mr-1"
                                >
                                  ✕
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Size & Quick Delivery Info Form */}
                    <form onSubmit={handleCheckout} className="space-y-4 pt-2 border-t-2 border-dashed border-[#001428]/20">
                      {/* Size Picker */}
                      <div>
                        <label
                          className={`block text-xs font-black mb-2 ${
                            isDark ? 'text-[#90E0EF]' : 'text-[#001428]'
                          }`}
                        >
                          اختار المقاس المناسب (أوفرسايز مظبوط):
                        </label>
                        <div className="flex items-center gap-2">
                          {SIZES.map((sz) => (
                            <button
                              key={sz}
                              type="button"
                              onClick={() => setSelectedSize(sz)}
                              className={`flex-1 py-2 rounded-xl font-english font-black text-xs border-2 cursor-pointer transition-all ${
                                selectedSize === sz
                                  ? 'bg-[#FFD166] text-[#001428] border-[#001428] shadow-[3px_3px_0px_#001428] -translate-y-0.5'
                                  : isDark
                                    ? 'bg-[#001428] text-[#FFF7E6] border-[#003366]'
                                    : 'bg-white text-[#001428] border-[#001428]/40'
                              }`}
                            >
                              {sz}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Optional Customer Inputs */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        <input
                          type="text"
                          placeholder="الاسم بالكامل (اختياري)"
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-bold border-2 focus:outline-none ${
                            isDark
                              ? 'bg-[#001428] text-[#FFF7E6] border-[#00B4D8]/50 placeholder:text-[#FFF7E6]/40'
                              : 'bg-white text-[#001428] border-[#001428] placeholder:text-slate-400'
                          }`}
                        />
                        <input
                          type="tel"
                          placeholder="رقم الموبايل (اختياري)"
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-bold border-2 focus:outline-none ${
                            isDark
                              ? 'bg-[#001428] text-[#FFF7E6] border-[#00B4D8]/50 placeholder:text-[#FFF7E6]/40'
                              : 'bg-white text-[#001428] border-[#001428] placeholder:text-slate-400'
                          }`}
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="العنوان بالتفصيل / المحافظة (اختياري)"
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        className={`w-full px-3.5 py-2.5 rounded-xl text-xs font-bold border-2 focus:outline-none ${
                          isDark
                            ? 'bg-[#001428] text-[#FFF7E6] border-[#00B4D8]/50 placeholder:text-[#FFF7E6]/40'
                            : 'bg-white text-[#001428] border-[#001428] placeholder:text-slate-400'
                        }`}
                      />

                      {/* Order Summary Receipt */}
                      <div
                        className={`p-3.5 rounded-2xl border-2 space-y-1.5 ${
                          isDark
                            ? 'bg-[#001428] border-[#FFD166]/70 text-[#FFF7E6]'
                            : 'bg-[#FFF7E6] border-[#001428] text-[#001428]'
                        }`}
                      >
                        <div className="flex justify-between text-xs font-bold">
                          <span>إجمالي القطع:</span>
                          <span className="font-english font-black">{totalCount} قطع</span>
                        </div>
                        {totalSavings > 0 && (
                          <div className="flex justify-between text-xs font-bold text-emerald-600 dark:text-[#A5D6A7]">
                            <span>إجمالي التوفير:</span>
                            <span className="font-english font-black">-{totalSavings} ج.م</span>
                          </div>
                        )}
                        <div className="flex justify-between text-sm sm:text-base font-black pt-1.5 border-t border-dashed border-current/20">
                          <span>الإجمالي المطلوب:</span>
                          <span className="font-english text-[#0077B6] dark:text-[#FFD166]">
                            {totalPrice} ج.م
                          </span>
                        </div>
                        <p className="text-[11px] font-bold text-center pt-1 opacity-85">
                          ✓ متاح فتح الشحنة والمعاينة والقياس مع المندوب قبل الدفع
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
                        <button
                          type="submit"
                          className={`crumpled-paper-btn flex-1 py-3 px-4 font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer ${
                            checkoutCrumpling ? 'is-crumpling' : ''
                          }`}
                        >
                          <span className="crumple-label relative z-10 flex items-center gap-2">
                            <span>تأكيد الطلب الآن ({totalPrice} ج.م) 🚚</span>
                          </span>
                        </button>

                        <button
                          type="button"
                          onClick={clearCart}
                          className={`py-3 px-4 rounded-xl font-black text-xs border-2 cursor-pointer transition-colors ${
                            isDark
                              ? 'bg-[#001428] text-[#FF4D9D] border-[#FF4D9D]/60 hover:bg-[#FF4D9D] hover:text-white'
                              : 'bg-white text-[#001428] border-[#001428] hover:bg-rose-50'
                          }`}
                        >
                          إفراغ العربة
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
