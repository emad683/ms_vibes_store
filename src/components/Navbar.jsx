import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import brandLogoCream from '../assets/brand-logo-cream.png';
import brandLogoNavy from '../assets/brand-logo-navy.png';

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { user } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { href: '#products', label: 'الكوليكشن' },
    { href: '#lookbook', label: 'اللوك بوك' },
    { href: '#features', label: 'المميزات' },
    { href: '#payment', label: 'طرق الدفع' },
    { href: '#reviews', label: 'آراء العملاء' },
    { href: '#contact', label: 'تواصل معنا' },
  ];

  return (
    <nav
      role="navigation"
      aria-label="القائمة الرئيسية"
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? isDark
            ? 'bg-[#001428]/96 border-b border-white/10 py-2.5 shadow-lg shadow-[#001428]/60'
            : 'bg-[#FFFBF2]/96 border-b border-[#C5A888]/40 py-2.5 shadow-md'
          : isDark
            ? 'bg-[#001428]/90 border-b border-white/5 py-3.5'
            : 'bg-[#FFFBF2]/90 border-b border-[#C5A888]/30 py-3.5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between gap-3">
        {/* Brand Official Logo */}
        <a
          href="#"
          aria-label="M&S VIBES الرئيسية"
          className="flex items-center gap-2 group cursor-pointer py-0.5"
        >
          <img
            src={isDark ? brandLogoCream : brandLogoNavy}
            alt="M&S Vibes"
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={`text-sm font-semibold transition-all cursor-pointer py-1.5 px-1 relative group ${
                  isDark
                    ? 'text-[#FFF7E6]/80 hover:text-[#90E0EF]'
                    : 'text-slate-600 hover:text-sky-600'
                }`}
              >
                <span>{label}</span>
                <span className="absolute bottom-0 inset-x-1 h-0.5 bg-gradient-to-r from-[#00B4D8] to-[#90E0EF] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Actions & Modern Controls */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={isDark ? 'التحويل للوضع النهاري (Light Mode)' : 'التحويل للوضع الليلي (Dark Mode)'}
            title={isDark ? 'التحويل للوضع النهاري' : 'التحويل للوضع الليلي'}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer border ${
              isDark
                ? 'bg-[#001c38]/80 hover:bg-[#002447] text-[#FFD166] border-white/10 hover:border-[#FFD166]/50 shadow-sm'
                : 'bg-sky-50 hover:bg-sky-100 text-[#0077B6] border-sky-200 hover:border-sky-300 shadow-xs'
            }`}
          >
            {isDark ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform hover:rotate-45">
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform hover:-rotate-12">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          {/* Social Facebook */}
          <a
            href="https://facebook.com/msvibes"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="صفحة فيسبوك"
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer border ${
              isDark
                ? 'bg-[#001c38]/80 hover:bg-[#002447] text-[#90E0EF] border-white/10 hover:border-[#00B4D8]/60 hover:text-white'
                : 'bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-600 border-slate-200 hover:border-sky-300'
            }`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>

          {/* Social Instagram */}
          <a
            href="https://instagram.com/msvibes.eg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="صفحة إنستجرام"
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer border ${
              isDark
                ? 'bg-[#001c38]/80 hover:bg-[#002447] text-[#90E0EF] border-white/10 hover:border-[#00B4D8]/60 hover:text-white'
                : 'bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-600 border-slate-200 hover:border-sky-300'
            }`}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* User / Account Button → login page */}
          <a
            href="#/login"
            aria-label={user ? `حسابي (${user.name})` : 'تسجيل الدخول / إنشاء حساب'}
            title={user ? `حسابي (${user.name})` : 'تسجيل الدخول / إنشاء حساب'}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer border ${
              user
                ? 'bg-[#FFD166] text-[#001428] border-[#001428] shadow-[2px_2px_0px_#001428] font-black text-sm'
                : isDark
                  ? 'bg-[#001c38]/80 hover:bg-[#002447] text-[#90E0EF] border-white/10 hover:border-[#00B4D8]/60 hover:text-white'
                  : 'bg-slate-100 hover:bg-sky-50 text-slate-700 hover:text-sky-600 border-slate-200 hover:border-sky-300'
            }`}
          >
            {user ? (
              <span>{user.name.charAt(0)}</span>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            )}
          </a>

          {/* Mobile menu trigger */}
          <button
            className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center cursor-pointer transition-colors border ${
              isDark
                ? 'bg-[#001c38]/80 text-[#90E0EF] border-white/10'
                : 'bg-slate-100 text-slate-700 border-slate-200'
            }`}
            aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className={`md:hidden border-t px-4 py-4 shadow-2xl transition-all ${
            isDark
              ? 'bg-[#001428] border-white/10'
              : 'bg-[#FFFBF2] border-[#C5A888]/40'
          }`}
        >
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`block py-2.5 px-3 text-sm font-semibold rounded-xl transition-colors cursor-pointer ${
                    isDark
                      ? 'text-[#FFF7E6]/90 hover:text-[#90E0EF] hover:bg-white/5'
                      : 'text-slate-700 hover:text-sky-600 hover:bg-sky-50'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className={`pt-3 border-t mt-1 flex flex-col gap-2.5 ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
              <button
                onClick={toggleTheme}
                className={`flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl text-xs font-bold border transition-colors cursor-pointer ${
                  isDark
                    ? 'bg-[#001c38] text-[#FFD166] border-white/10'
                    : 'bg-sky-50 text-sky-800 border-sky-200'
                }`}
              >
                <span>المظهر: {isDark ? 'الوضع الليلي (Dark)' : 'الوضع النهاري (Light)'}</span>
                <span className="text-base">{isDark ? '☀️ تفعيل النهاري' : '🌙 تفعيل الليلي'}</span>
              </button>

              <a
                href="https://wa.me/201000000000"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-[#25D366] text-[#001428] font-black py-3 rounded-xl text-sm shadow-md"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>واتساب</span>
              </a>

              <div className="flex items-center justify-center gap-3 pt-1">
                <a
                  href="https://facebook.com/msvibes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl border ${
                    isDark
                      ? 'bg-[#001c38] text-[#90E0EF] border-white/10'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>فيسبوك</span>
                </a>
                <a
                  href="https://instagram.com/msvibes.eg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-xl border ${
                    isDark
                      ? 'bg-[#001c38] text-[#90E0EF] border-white/10'
                      : 'bg-slate-100 text-slate-700 border-slate-200'
                  }`}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <span>إنستجرام</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
