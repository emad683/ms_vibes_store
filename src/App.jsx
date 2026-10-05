import { useState, useEffect } from 'react';
import './index.css';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Products from './components/Products';
import Lookbook from './components/Lookbook';
import WhyUs from './components/WhyUs';
import Payment from './components/Payment';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AuthPage from './components/AuthPage';
import ProductDetailPage from './components/ProductDetailPage';

// Lightweight hash router: "#/login" opens auth, "#/product/:id" opens product details, anything else is home
function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const onChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return hash;
}

function MainContent() {
  const { isDark } = useTheme();
  const hash = useHashRoute();
  const isAuthPage = hash === '#/login';
  const isProductPage = hash.startsWith('#/product/');
  const currentProductId = isProductPage ? hash.replace('#/product/', '') : null;

  useEffect(() => {
    if (isAuthPage || isProductPage || hash === '') window.scrollTo(0, 0);
  }, [isAuthPage, isProductPage, hash]);

  return (
    <div
      className={`min-h-screen font-sans antialiased transition-colors duration-300 relative pl-8 sm:pl-14 ${
        isDark
          ? 'text-[#FFF7E6] selection:bg-[#00B4D8] selection:text-[#001428]'
          : 'text-[#001428] selection:bg-[#0077B6] selection:text-white'
      }`}
    >
      {/* Light Crumple Texture across the entire page */}
      <div className="crumpled-page-texture" aria-hidden="true" />

      {/* Small Notebook / Binder Punch Holes along the left margin */}
      <div className="notebook-spine-holes" aria-hidden="true" />

      {isAuthPage ? (
        <AuthPage />
      ) : isProductPage ? (
        <div className="relative z-10">
          <Navbar />
          <ProductDetailPage
            key={currentProductId}
            productId={currentProductId}
            onBack={() => {
              window.location.hash = '#products';
            }}
          />
          <WhyUs />
          <Reviews />
          <Contact />
          <FloatingWhatsApp />
        </div>
      ) : (
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <Ticker />
          <Products
            onSelectProduct={(id) => {
              window.location.hash = `#/product/${id}`;
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
          <Lookbook />
          <WhyUs />
          <Payment />
          <Reviews />
          <Contact />
          <FloatingWhatsApp />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <MainContent />
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
