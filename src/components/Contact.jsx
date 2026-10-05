import { useTheme } from '../context/ThemeContext';
import brandLogoCream from '../assets/brand-logo-cream.png';
import brandLogoNavy from '../assets/brand-logo-navy.png';

export default function Contact() {
  const { isDark } = useTheme();

  const contactLinks = [
    {
      name: 'واتساب مبيعات ودعم',
      value: '01000000000',
      action: 'مراسلة فورية',
      href: 'https://wa.me/201000000000',
      icon: '💬',
      badge: 'رد خلال دقيقتين',
    },
    {
      name: 'إنستجرام الرسمي',
      value: '@msvibes.eg',
      action: 'متابعة الكوليكشن',
      href: 'https://instagram.com/msvibes.eg',
      icon: '📸',
      badge: 'أحدث التنسيقات',
    },
    {
      name: 'صفحة فيسبوك',
      value: 'M&S VIBES Official',
      action: 'تواصل ومتابعة',
      href: 'https://facebook.com/msvibes',
      icon: '👥',
      badge: 'عروض مستمرة',
    },
  ];

  return (
    <footer
      id="contact"
      className={`border-t pt-16 pb-12 transition-colors duration-300 ${
        isDark ? 'bg-[#001428]/40 border-[#003366]' : 'bg-transparent border-[#D4CEB7]/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Pre-footer Final Crumpled Paper CTA Card */}
        <div className="crumpled-card-container pt-3 mb-16">
          <div className="paper-tape" />
          <div
            className={`rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden ${
              isDark ? 'paper-card-dark' : 'paper-card-light'
            }`}
          >
            <div className="paper-crease-overlay rounded-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <span
                className="genz-sticker text-xs font-black px-4 py-1.5 rounded-full mb-5 bg-[#FFD166] text-[#001428] font-english"
              >
                ✦ DON'T MISS THE DROP // شتاء 2025 ❄️
              </span>
              <h2
                className={`text-2xl sm:text-4xl font-black mb-3 leading-tight ${
                  isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
                }`}
              >
                جاهز تـ Upgrade دولابك الشتوي؟ 🔥
              </h2>
              <p
                className={`text-sm sm:text-base font-bold leading-relaxed mb-8 ${
                  isDark ? 'text-[#F4D6A6]' : 'text-slate-600'
                }`}
              >
                اطلب القطعة اللي عاجباك في ثواني، والمندوب هيجيلك لحد باب البيت تعاين وتقيس براحتك قبل ما تدفع!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="#products"
                  className="genz-btn w-full sm:w-auto font-black px-8 py-3.5 rounded-xl text-sm cursor-pointer bg-gradient-to-r from-[#0077B6] via-[#00B4D8] to-[#90E0EF] text-[#001428]"
                >
                  اختار الـ Fit بتاعك دلوقتي 🔥
                </a>
                <a
                  href="https://wa.me/201000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`genz-btn w-full sm:w-auto font-black px-7 py-3.5 rounded-xl text-sm cursor-pointer ${
                    isDark
                      ? 'bg-[#001428] text-[#FFF7E6]'
                      : 'bg-white text-[#001428]'
                  }`}
                >
                  كلمنا واتساب ع السريع 💬
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Methods (Crumpled Paper Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {contactLinks.map((item, idx) => (
            <div key={idx} className="crumpled-card-container pt-3">
              <div className="paper-tape" />
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`rounded-3xl p-5 flex items-center justify-between transition-all group relative overflow-hidden ${
                  isDark ? 'paper-card-dark' : 'paper-card-light'
                }`}
              >
                <div className="paper-crease-overlay rounded-3xl" />

                <div className="flex items-center gap-3.5 relative z-10">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4
                      className={`font-bold text-sm transition-colors ${
                        isDark
                          ? 'text-[#FFF7E6] group-hover:text-[#00B4D8]'
                          : 'text-[#001428] group-hover:text-[#0077B6]'
                      }`}
                    >
                      {item.name}
                    </h4>
                    <p
                      className={`text-xs font-english ${
                        isDark ? 'text-[#FFF7E6]/65' : 'text-slate-600'
                      }`}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
                <span
                  className={`text-[11px] font-semibold px-2.5 py-1 rounded-lg border relative z-10 ${
                    isDark
                      ? 'text-[#90E0EF] bg-[#001428] border-[#003366]'
                      : 'text-[#0077B6] bg-white border-[#C5A888]/40'
                  }`}
                >
                  {item.action}
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Location & Shipping info (Crumpled Paper Card) */}
        <div className="crumpled-card-container pt-3 mb-12">
          <div className="paper-tape" />
          <div
            className={`rounded-3xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-right relative overflow-hidden ${
              isDark ? 'paper-card-dark' : 'paper-card-light'
            }`}
          >
            <div className="paper-crease-overlay rounded-3xl" />

            <div className="flex items-center gap-3 relative z-10">
              <span className="text-xl">📍</span>
              <div>
                <p
                  className={`text-xs font-bold ${
                    isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
                  }`}
                >
                  مقر البراند ومخزن الشحن
                </p>
                <p
                  className={`text-xs ${
                    isDark ? 'text-[#FFF7E6]/75' : 'text-slate-600'
                  }`}
                >
                  القاهرة (وسط البلد / المعادي) — متاح شحن سريع لجميع محافظات مصر
                </p>
              </div>
            </div>
            <div
              className={`flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-xl border relative z-10 ${
                isDark
                  ? 'text-[#A5D6A7] bg-[#001428] border-[#A5D6A7]/30'
                  : 'text-[#2E7D32] bg-white border-[#2E7D32]/30'
              }`}
            >
              <span>🛡️</span>
              <span>معاينة مجانية مع المندوب</span>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div
          className={`pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs ${
            isDark
              ? 'border-[#003366] text-[#FFF7E6]/60'
              : 'border-slate-100 text-slate-500'
          }`}
        >
          <div className="flex items-center gap-3">
            <img
              src={isDark ? brandLogoCream : brandLogoNavy}
              alt="M&S Vibes"
              className="h-8 w-auto object-contain"
            />
            <span>— جميع الحقوق محفوظة © 2025</span>
          </div>
          <p className={isDark ? 'text-[#FFF7E6]/40' : 'text-slate-400'}>
            صنع بحب لجمهور الستريت وير المصري 🇪🇬
          </p>
        </div>
      </div>
    </footer>
  );
}
