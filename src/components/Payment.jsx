import { useTheme } from '../context/ThemeContext';

export default function Payment() {
  const { isDark } = useTheme();

  const methods = [
    {
      id: 'cod',
      title: 'الدفع عند الاستلام (كاش)',
      desc: 'تدفع للمندوب كاش لما يوصلك وتفتح الشحنة وتعاين خامتك وتتأكد من مقاسك بنفسك.',
      badge: 'الأكثر أماناً وموصى به',
      badgeClassDark: 'bg-[#A5D6A7]/10 text-[#A5D6A7] border-[#A5D6A7]/30',
      badgeClassLight: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-[#A5D6A7]">
          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M6 12h.01M18 12h.01"></path>
        </svg>
      ),
      recommended: true,
    },
    {
      id: 'instapay',
      title: 'انستاباي (InstaPay)',
      desc: 'تحويل بنكي لحظي من أي تطبيق بنكي أو محفظة ذكية بكل سرعة وأمان.',
      badge: 'تحويل فوري',
      badgeClassDark: 'bg-[#00B4D8]/10 text-[#90E0EF] border-[#00B4D8]/30',
      badgeClassLight: 'bg-sky-50 text-sky-700 border-sky-200',
      icon: (
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0077B6] to-[#00B4D8] text-white font-english font-black flex items-center justify-center text-xs shadow-md shadow-[#00B4D8]/20">
          iP
        </div>
      ),
      recommended: false,
    },
    {
      id: 'vodafone',
      title: 'فودافون كاش والمحافظ',
      desc: 'تحويل مباشر وسهل على محفظة فودافون كاش عند تأكيد أو استلام الأوردر.',
      badge: 'سهل ومتاح',
      badgeClassDark: 'bg-[#FF4D9D]/10 text-[#FFB0BA] border-[#FF4D9D]/30',
      badgeClassLight: 'bg-red-50 text-red-700 border-red-200',
      icon: (
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF4D9D] to-[#E60000] text-white font-english font-bold flex items-center justify-center text-[10px] shadow-md shadow-[#FF4D9D]/20">
          Cash
        </div>
      ),
      recommended: false,
    },
  ];

  return (
    <section
      id="payment"
      className={`py-20 px-4 border-t transition-colors duration-300 relative ${
        isDark
          ? 'bg-[#001428]/40 border-white/10'
          : 'bg-transparent border-[#D4CEB7]/60'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span
            className="genz-sticker text-xs px-4 py-1.5 rounded-full mb-4 text-[#001428] bg-[#FFD166] font-english uppercase tracking-wider"
          >
            💸 EASY CHECKOUT // PAY YOUR WAY
          </span>
          <h2
            className={`text-2xl sm:text-4xl md:text-5xl font-black mb-3 transition-colors ${
              isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
            }`}
          >
            ادفع بالطريقة اللي تريحك ⚡
          </h2>
          <p
            className={`text-sm sm:text-base font-bold ${
              isDark ? 'text-[#F4D6A6]' : 'text-slate-600'
            }`}
          >
            كاش مع المندوب بعد المعاينة، أو انستاباي وفودافون كاش في ثواني.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {methods.map((method) => (
            <div key={method.id} className="crumpled-card-container pt-3 h-full">
              <div className="paper-tape" />
              <div
                className={`rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between relative overflow-hidden h-full ${
                  isDark
                    ? method.recommended
                      ? 'paper-card-dark ring-1 ring-[#00B4D8]/60'
                      : 'paper-card-dark'
                    : method.recommended
                      ? 'paper-card-light ring-2 ring-[#00B4D8]/50'
                      : 'paper-card-light'
                }`}
              >
                <div className="paper-crease-overlay rounded-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border shadow-xs ${
                        isDark
                          ? 'bg-[#001428] border-[#003366]'
                          : 'bg-white border-[#C5A888]/40'
                      }`}
                    >
                      {method.icon}
                    </div>
                    <span
                      className={`text-[11px] font-bold px-3 py-1 rounded-full border shadow-2xs ${
                        isDark ? method.badgeClassDark : method.badgeClassLight
                      }`}
                    >
                      {method.badge}
                    </span>
                  </div>

                  <h3
                    className={`font-black text-base mb-2 ${
                      isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
                    }`}
                  >
                    {method.title}
                  </h3>
                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-[#FFF7E6]/75' : 'text-slate-600'
                    }`}
                  >
                    {method.desc}
                  </p>
                </div>

                {method.recommended && (
                  <div
                    className={`mt-5 pt-3.5 border-t flex items-center gap-1.5 text-xs font-bold relative z-10 ${
                      isDark
                        ? 'border-[#003366] text-[#00B4D8]'
                        : 'border-[#C5A888]/30 text-[#0077B6]'
                    }`}
                  >
                    <span>✓</span>
                    <span>الخيار الأكثر طلباً وراحة للعملاء</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Crumpled Paper Tip Box */}
        <div className="crumpled-card-container pt-3 mt-10">
          <div className="paper-tape" />
          <div
            className={`rounded-3xl p-5 sm:p-6 flex items-center gap-4 relative overflow-hidden ${
              isDark ? 'paper-card-dark' : 'paper-card-light'
            }`}
          >
            <div className="paper-crease-overlay rounded-3xl" />
            <div
              className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 text-xl border shadow-xs relative z-10 ${
                isDark
                  ? 'bg-[#001428] text-[#FFD166] border-[#003366]'
                  : 'bg-white text-[#0077B6] border-[#C5A888]/40'
              }`}
            >
              💡
            </div>
            <p
              className={`text-xs sm:text-sm leading-relaxed relative z-10 ${
                isDark ? 'text-[#FFF7E6]/85' : 'text-slate-600'
              }`}
            >
              <strong className={isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'}>
                معلومة تهمك:
              </strong>{' '}
              بنطلب بيانات العنوان ورقم الهاتف فقط لتجهيز شحن الأوردر، ولا نطلب أي بيانات بنكية مسبقة على الموقع. الدفع يتم مع المندوب بعد المعاينة الكاملة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
