import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import brandLogoCream from '../assets/brand-logo-cream.png';
import brandLogoNavy from '../assets/brand-logo-navy.png';

const PHONE_RE = /^01[0125]\d{8}$/; // Egyptian mobile: 010 / 011 / 012 / 015 + 8 digits
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function AuthPage() {
  const { isDark } = useTheme();
  const { user, login, register, logout } = useAuth();

  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [method, setMethod] = useState('phone'); // 'phone' | 'email'
  const [name, setName] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [crumpling, setCrumpling] = useState(false);

  const goHome = () => {
    window.location.hash = '';
  };

  const switchMode = (m) => {
    setMode(m);
    setError('');
    setPassword('');
    setConfirm('');
  };

  const switchMethod = (m) => {
    setMethod(m);
    setIdentifier('');
    setError('');
  };

  const validate = () => {
    const id = identifier.trim().replace(/\s|-/g, '');
    if (mode === 'register' && name.trim().length < 2) return 'اكتب اسمك (حرفين على الأقل).';
    if (method === 'phone' && !PHONE_RE.test(id)) return 'رقم الموبايل لازم يكون 11 رقم ويبدأ بـ 010 / 011 / 012 / 015.';
    if (method === 'email' && !EMAIL_RE.test(identifier.trim())) return 'اكتب إيميل صحيح، مثلاً name@gmail.com';
    if (password.length < 8) return 'الباسورد لازم يكون 8 حروف/أرقام على الأقل.';
    if (mode === 'register' && password !== confirm) return 'الباسورد وتأكيده مش متطابقين.';
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;
    const msg = validate();
    if (msg) {
      setError(msg);
      return;
    }
    setError('');
    setLoading(true);
    try {
      if (mode === 'login') await login({ method, identifier, password });
      else await register({ name, method, identifier, password });
      setCrumpling(true);
      setTimeout(goHome, 900);
    } catch (err) {
      setError(err.message || 'حصلت مشكلة، جرّب تاني.');
      setLoading(false);
    }
  };

  const inputCls = `w-full px-4 py-3 rounded-xl text-sm font-bold border-2 focus:outline-none focus:-translate-y-0.5 transition-transform ${
    isDark
      ? 'bg-[#001428] text-[#FFF7E6] border-[#00B4D8]/60 placeholder:text-[#FFF7E6]/40 focus:border-[#FFD166]'
      : 'bg-white text-[#001428] border-[#001428] placeholder:text-slate-400 focus:shadow-[3px_3px_0px_#0077B6]'
  }`;
  const labelCls = `block text-xs font-black mb-1.5 ${isDark ? 'text-[#90E0EF]' : 'text-[#001428]'}`;

  const tabCls = (active) =>
    `flex-1 py-2.5 rounded-xl text-xs sm:text-sm font-black border-2 cursor-pointer transition-all ${
      active
        ? 'bg-[#FFD166] text-[#001428] border-[#001428] shadow-[3px_3px_0px_#001428] -translate-y-0.5'
        : isDark
          ? 'bg-[#001428] text-[#FFF7E6]/80 border-[#003366]'
          : 'bg-white/70 text-[#001428]/70 border-[#001428]/30'
    }`;

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-10 relative z-10">
      {/* Back to store */}
      <button
        type="button"
        onClick={goHome}
        className={`genz-sticker absolute top-5 right-5 text-xs px-4 py-2 rounded-full cursor-pointer ${
          isDark ? 'bg-[#001c38] text-[#FFF7E6]' : 'bg-white text-[#001428]'
        }`}
      >
        → رجوع للمتجر
      </button>

      <img
        src={isDark ? brandLogoCream : brandLogoNavy}
        alt="M&S Vibes"
        className="h-14 sm:h-16 w-auto object-contain mb-6"
      />

      <div className="crumpled-card-container w-full max-w-md pt-3">
        <div className="paper-tape"></div>

        <div className={`rounded-3xl overflow-hidden relative ${isDark ? 'paper-card-dark' : 'paper-card-light'}`}>
          <div className="paper-crease-overlay rounded-3xl"></div>

          <div className="relative z-10 p-5 sm:p-7">
            {user && !loading ? (
              /* Logged-in state */
              <div className="text-center space-y-4 py-4">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#90E0EF] text-[#001428] border-2 border-[#001428] shadow-[4px_4px_0px_#001428] flex items-center justify-center text-2xl font-black">
                  {user.name.charAt(0)}
                </div>
                <h1 className={`text-xl sm:text-2xl font-black ${isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'}`}>
                  أهلاً يا {user.name} 👋
                </h1>
                <p className={`text-xs font-bold font-english ${isDark ? 'text-[#90E0EF]' : 'text-slate-600'}`} dir="ltr">
                  {user.identifier}
                </p>
                <div className="flex flex-col gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={goHome}
                    className="crumpled-paper-btn w-full py-3 font-black text-sm cursor-pointer"
                  >
                    <span className="crumple-label relative z-10">كمّل تسوق 🔥</span>
                  </button>
                  <button
                    type="button"
                    onClick={logout}
                    className={`w-full py-3 rounded-xl font-black text-xs border-2 cursor-pointer ${
                      isDark
                        ? 'bg-[#001428] text-[#FF4D9D] border-[#FF4D9D]/60 hover:bg-[#FF4D9D] hover:text-white'
                        : 'bg-white text-[#001428] border-[#001428] hover:bg-rose-50'
                    }`}
                  >
                    تسجيل خروج
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Header */}
                <div className="text-center mb-5">
                  <span className="genz-sticker text-[10px] px-3 py-1 rounded-full bg-[#90E0EF] text-[#001428] font-english uppercase tracking-wider">
                    ✦ M&S VIBES // MEMBERS
                  </span>
                  <h1 className={`text-2xl sm:text-3xl font-black mt-3 ${isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'}`}>
                    {mode === 'login' ? 'ادخل على حسابك' : 'اعمل حساب جديد'}
                  </h1>
                  <p className={`text-xs sm:text-sm font-bold mt-1 ${isDark ? 'text-[#F4D6A6]' : 'text-slate-600'}`}>
                    {mode === 'login'
                      ? 'تابع طلباتك واحفظ عربة التسوق بتاعتك'
                      : 'سجّل في ثواني وخد أول الدروبات قبل أي حد ⚡'}
                  </p>
                </div>

                {/* Login / Register tabs */}
                <div className="flex gap-2 mb-4" role="tablist">
                  <button type="button" role="tab" aria-selected={mode === 'login'} onClick={() => switchMode('login')} className={tabCls(mode === 'login')}>
                    تسجيل دخول
                  </button>
                  <button type="button" role="tab" aria-selected={mode === 'register'} onClick={() => switchMode('register')} className={tabCls(mode === 'register')}>
                    حساب جديد
                  </button>
                </div>

                {/* Phone / Email method switch */}
                <div
                  className={`flex p-1 rounded-xl border-2 border-dashed mb-5 ${
                    isDark ? 'border-[#00B4D8]/40' : 'border-[#001428]/30'
                  }`}
                >
                  {[
                    { id: 'phone', label: '📱 برقم الموبايل' },
                    { id: 'email', label: '✉️ بالإيميل' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => switchMethod(m.id)}
                      className={`flex-1 py-2 rounded-lg text-xs font-black cursor-pointer transition-colors ${
                        method === m.id
                          ? 'bg-[#001428] text-[#FFD166]'
                          : isDark
                            ? 'text-[#FFF7E6]/70'
                            : 'text-[#001428]/60'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  {mode === 'register' && (
                    <div>
                      <label htmlFor="auth-name" className={labelCls}>الاسم</label>
                      <input
                        id="auth-name"
                        type="text"
                        autoComplete="name"
                        placeholder="اسمك بالكامل"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={inputCls}
                      />
                    </div>
                  )}

                  <div>
                    <label htmlFor="auth-id" className={labelCls}>
                      {method === 'phone' ? 'رقم الموبايل' : 'الإيميل'}
                    </label>
                    <input
                      id="auth-id"
                      type={method === 'phone' ? 'tel' : 'email'}
                      inputMode={method === 'phone' ? 'numeric' : 'email'}
                      autoComplete={method === 'phone' ? 'tel' : 'email'}
                      dir="ltr"
                      placeholder={method === 'phone' ? '01xxxxxxxxx' : 'name@gmail.com'}
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      className={`${inputCls} text-left font-english`}
                    />
                  </div>

                  <div>
                    <label htmlFor="auth-pass" className={labelCls}>الباسورد</label>
                    <div className="relative">
                      <input
                        id="auth-pass"
                        type={showPass ? 'text' : 'password'}
                        autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                        dir="ltr"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`${inputCls} text-left font-english pl-12`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass((s) => !s)}
                        aria-label={showPass ? 'إخفاء الباسورد' : 'إظهار الباسورد'}
                        className={`absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center cursor-pointer ${
                          isDark ? 'text-[#90E0EF] hover:bg-white/10' : 'text-[#001428] hover:bg-slate-100'
                        }`}
                      >
                        {showPass ? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                            <line x1="1" y1="1" x2="23" y2="23" />
                          </svg>
                        ) : (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                            <circle cx="12" cy="12" r="3" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {mode === 'register' && (
                    <div>
                      <label htmlFor="auth-confirm" className={labelCls}>تأكيد الباسورد</label>
                      <input
                        id="auth-confirm"
                        type={showPass ? 'text' : 'password'}
                        autoComplete="new-password"
                        dir="ltr"
                        placeholder="••••••••"
                        value={confirm}
                        onChange={(e) => setConfirm(e.target.value)}
                        className={`${inputCls} text-left font-english`}
                      />
                    </div>
                  )}

                  {error && (
                    <p role="alert" className="text-xs font-black px-3 py-2.5 rounded-xl border-2 border-[#001428] bg-[#FFB0BA] text-[#001428]">
                      ⚠️ {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className={`crumpled-paper-btn w-full py-3 font-black text-sm cursor-pointer ${crumpling ? 'is-crumpling' : ''}`}
                  >
                    <span className="crumple-label relative z-10">
                      {mode === 'login' ? 'دخول ⚡' : 'إنشاء الحساب 🔥'}
                    </span>
                  </button>
                </form>

                <p className={`text-center text-xs font-bold mt-5 ${isDark ? 'text-[#FFF7E6]/70' : 'text-slate-600'}`}>
                  {mode === 'login' ? 'معندكش حساب؟ ' : 'عندك حساب بالفعل؟ '}
                  <button
                    type="button"
                    onClick={() => switchMode(mode === 'login' ? 'register' : 'login')}
                    className="font-black text-[#0077B6] dark:text-[#FFD166] underline underline-offset-4 cursor-pointer"
                  >
                    {mode === 'login' ? 'اعمل حساب جديد' : 'سجّل دخول'}
                  </button>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
