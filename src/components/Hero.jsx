import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

function pad(n) {
  return String(n).padStart(2, '0');
}

function getTimeLeft() {
  const target = new Date();
  target.setDate(target.getDate() + 3);
  target.setHours(0, 0, 0, 0);
  const diff = target - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

const TOTAL = 500;
const SOLD = 127;

export default function Hero() {
  const { isDark } = useTheme();
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const pct = Math.round((SOLD / TOTAL) * 100);

  return (
    <section
      aria-label="مقدمة الموقع"
      className="relative pt-32 pb-20 px-4 overflow-hidden transition-colors duration-300"
    >
      {/* Lightweight Ambient Radial Lighting (Zero GPU blur cost) */}
      <div
        className="absolute -top-10 right-1/4 w-[500px] h-[400px] pointer-events-none -z-10"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(0, 180, 216, 0.22) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(186, 230, 253, 0.55) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute top-20 left-1/4 w-[450px] h-[350px] pointer-events-none -z-10"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(125, 60, 255, 0.16) 0%, transparent 70%)'
            : 'radial-gradient(circle, rgba(224, 231, 255, 0.65) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
        {/* Gen Z Sticker Badge */}
        <div
          className={`genz-sticker px-4 py-1.5 rounded-full text-xs mb-6 ${
            isDark
              ? 'bg-[#FFD166] text-[#001428]'
              : 'bg-[#FFD166] text-[#001428]'
          }`}
        >
          <span>✦</span>
          <span className="font-english tracking-wider text-[11px] uppercase font-black">WINTER DROP '25 // 001</span>
          <span>•</span>
          <span className="font-black">ليمتد إيديشن 500 قطعة بس 🔥</span>
        </div>

        {/* Main Headline */}
        <h1
          className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.18] mb-5 transition-colors ${
            isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
          }`}
        >
          الـ Vibe اللي بتدور عليه..
          <br />
          <span className="bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#90E0EF] bg-clip-text text-transparent">
            أوفرسايز مظبوط وخامة تقيلة ✦
          </span>
        </h1>

        {/* Gen Z Streetwear Subtitle */}
        <p
          className={`text-base sm:text-xl max-w-2xl leading-relaxed mb-10 transition-colors font-bold ${
            isDark ? 'text-[#F4D6A6]' : 'text-slate-700'
          }`}
        >
          قطن ميلتون 340gsm تقيل يكمّل اللوك بتاعك.. والـ Deal الأهم؟{' '}
          <span
            className={`inline-block px-2 py-0.5 rounded-lg font-black ${
              isDark ? 'bg-[#00B4D8]/20 text-[#90E0EF]' : 'bg-[#FFD166]/60 text-[#001428]'
            }`}
          >
            افتح الشحنة وقايس مع المندوب
          </span>{' '}
          قبل ما تدفع أي جنيه! ✌️
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          <a
            href="#products"
            className="genz-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#90E0EF] text-[#001428] font-black px-9 py-4 rounded-2xl text-base cursor-pointer"
          >
            <span>شوف الـ Drop كله 🔥</span>
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://wa.me/201000000000"
            target="_blank"
            rel="noopener noreferrer"
            className={`genz-btn w-full sm:w-auto inline-flex items-center justify-center gap-2.5 font-black px-8 py-4 rounded-2xl text-base cursor-pointer ${
              isDark
                ? 'bg-[#001c38] text-[#FFF7E6]'
                : 'bg-white text-[#001428]'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]"></span>
            <span>ابعتلنا واتساب ع السريع 💬</span>
          </a>
        </div>

        {/* Crumpled Paper Countdown Card */}
        <div className="crumpled-card-container pt-3 max-w-lg w-full mb-8">
          <div className="paper-tape" />
          <div
            className={`rounded-3xl p-5 sm:p-6 transition-all relative overflow-hidden ${
              isDark ? 'paper-card-dark' : 'paper-card-light'
            }`}
          >
            <div className="paper-crease-overlay rounded-3xl" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`text-xs font-black flex items-center gap-1.5 ${
                    isDark ? 'text-[#90E0EF]' : 'text-[#001428]'
                  }`}
                >
                  <span>⏳</span>
                  <span>خصم الـ Drop والشحن بينتهي خلال:</span>
                </span>
                <span className="text-[11px] font-black font-english text-[#001428] bg-[#FFD166] px-2.5 py-0.5 rounded-full border border-[#001428]">
                  LIVE NOW ✦
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2.5 text-center mb-5">
                {[
                  { val: time.days, label: 'يوم' },
                  { val: time.hours, label: 'ساعة' },
                  { val: time.minutes, label: 'دقيقة' },
                  { val: time.seconds, label: 'ثانية' },
                ].map(({ val, label }) => (
                  <div
                    key={label}
                    className={`rounded-2xl py-3 px-1 border-2 transition-all ${
                      isDark
                        ? 'bg-[#001428] border-[#00B4D8]/60'
                        : 'bg-white border-[#001428]'
                    }`}
                  >
                    <span
                      className={`block text-2xl sm:text-3xl font-black font-english leading-none mb-1 ${
                        isDark ? 'text-[#FFD166]' : 'text-[#0077B6]'
                      }`}
                    >
                      {pad(val)}
                    </span>
                    <span
                      className={`text-[11px] font-black ${
                        isDark ? 'text-[#FFF7E6]/70' : 'text-[#001428]'
                      }`}
                    >
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Stock Progress */}
              <div>
                <div className="flex justify-between items-center text-xs mb-2 font-black">
                  <span className={isDark ? 'text-[#FFF7E6]/90' : 'text-[#001428]'}>
                    القطع اللي فاضلة من الـ Drop:
                  </span>
                  <span
                    className={`px-3 py-0.5 rounded-full border-2 text-xs font-english font-black ${
                      isDark
                        ? 'text-[#FFD166] bg-[#001428] border-[#FFD166]/60'
                        : 'text-[#001428] bg-[#FFD166] border-[#001428]'
                    }`}
                  >
                    {TOTAL - SOLD} / {TOTAL} LEFT
                  </span>
                </div>
                <div
                  className={`h-3 w-full rounded-full overflow-hidden p-0.5 border-2 ${
                    isDark
                      ? 'bg-[#001428] border-[#00B4D8]/50'
                      : 'bg-white border-[#001428]'
                  }`}
                >
                  <div
                    className="h-full rounded-full transition-all duration-700 bg-gradient-to-l from-[#FFD166] via-[#00B4D8] to-[#0077B6]"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Crumpled Paper Trust Chips */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-2xl mt-6 pt-8 border-t-2 border-dashed ${
            isDark ? 'border-white/15' : 'border-[#001428]/25'
          }`}
        >
          {[
            { icon: '🔍', text: 'قايس وعاين قبل الدفع' },
            { icon: '🔥', text: '340GSM ميلتون تقيل' },
            { icon: '⚡', text: 'شحن سريع لباب البيت' },
          ].map((chip, idx) => (
            <div key={idx} className="crumpled-card-container pt-2">
              <div className="paper-tape !w-14 !h-4 !-top-1.5" />
              <div
                className={`relative overflow-hidden flex items-center justify-center gap-2 text-xs font-black py-3.5 px-4 rounded-2xl transition-all ${
                  isDark ? 'paper-card-dark text-[#FFF7E6]' : 'paper-card-light text-[#001428]'
                }`}
              >
                <div className="paper-crease-overlay rounded-2xl" />
                <span className="text-lg relative z-10">{chip.icon}</span>
                <span className="relative z-10">{chip.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
