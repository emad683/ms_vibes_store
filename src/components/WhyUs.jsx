import { useTheme } from '../context/ThemeContext';

const features = [
  {
    icon: '🔍',
    title: 'عاين وقيس قبل ما تدفع',
    desc: 'المندوب هيستناك تفحص خامة القطن والتطريز وتقيس المقاس براحتك قبل ما تدفع أي فلوس.',
    accent: '#00B4D8',
    glow: 'rgba(0, 180, 216, 0.15)',
  },
  {
    icon: '🧵',
    title: 'خامة قطن ميلتون 340gsm',
    desc: 'قماش شتوي ثقيل مبطن وناعم، يديك الدفء المطلوب وميغيرش لونه أو ينكمش مع الغسيل.',
    accent: '#FFD166',
    glow: 'rgba(255, 209, 102, 0.15)',
  },
  {
    icon: '👕',
    title: 'قصة أوفرسايز مريحة وعصرية',
    desc: 'تفصيل مدروس يمنحك حرية الحركة والمظهر الأنيق بدون أي شد أو ضيق.',
    accent: '#A5D6A7',
    glow: 'rgba(165, 214, 167, 0.15)',
  },
  {
    icon: '🚚',
    title: 'توصيل سريع لكل المحافظات',
    desc: 'شحن موثوق وسريع يوصلك خلال 2 إلى 3 أيام عمل لباب بيتك في أي مكان في مصر.',
    accent: '#7D3CFF',
    glow: 'rgba(125, 60, 255, 0.15)',
  },
  {
    icon: '⚡',
    title: 'رد فوري على واتساب',
    desc: 'مش هتحتار ولا هتستنى كتير، فريقنا متواجد للرد على أسئلتك ومساعدتك في اختيار أنسب مقاس.',
    accent: '#FF4D9D',
    glow: 'rgba(255, 77, 157, 0.15)',
  },
  {
    icon: '✨',
    title: 'ألوان هادية وتقفيل نظيف',
    desc: 'درجات سماوي وبيج وأوف وايت راقية مع خياطة متينة وتشطيب يضاهي البراندات العالمية.',
    accent: '#90E0EF',
    glow: 'rgba(144, 224, 239, 0.15)',
  },
];

export default function WhyUs() {
  const { isDark } = useTheme();

  return (
    <section id="features" className="py-20 px-4 max-w-6xl mx-auto relative">
      <div className="text-center max-w-xl mx-auto mb-14">
        <span
          className="genz-sticker text-xs px-4 py-1.5 rounded-full mb-4 text-[#001428] bg-[#A5D6A7] font-english uppercase tracking-wider"
        >
          💯 NO CAP // WHY M&S VIBES
        </span>
        <h2
          className={`text-2xl sm:text-4xl md:text-5xl font-black mb-3 transition-colors ${
            isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
          }`}
        >
          ليه الكل بيختار M&S VIBES؟ 🔥
        </h2>
        <p
          className={`text-sm sm:text-base font-bold leading-relaxed ${
            isDark ? 'text-[#F4D6A6]' : 'text-slate-600'
          }`}
        >
          عشان بنقدملك المعادلة الصعبة: خامة تقيلة وفِت مظبوط، ومعاينة كاملة قبل ما تدفع جنيه.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {features.map((f, i) => (
          <div key={i} className="crumpled-card-container pt-3 h-full">
            <div className="paper-tape" />
            <div
              className={`rounded-3xl p-6 sm:p-7 transition-all duration-300 flex flex-col items-start gap-4 group relative overflow-hidden h-full ${
                isDark ? 'paper-card-dark' : 'paper-card-light'
              }`}
            >
              <div className="paper-crease-overlay rounded-3xl" />

              <div className="w-full flex items-center justify-between relative z-10">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl border-2 transition-all duration-300 group-hover:scale-110 ${
                    isDark ? 'bg-[#001428] border-[#00B4D8]' : 'bg-white border-[#001428] shadow-[3px_3px_0px_#001428]'
                  }`}
                >
                  <span>{f.icon}</span>
                </div>
                <span
                  className={`font-english font-black text-xs px-2.5 py-1 rounded-lg border-2 ${
                    isDark
                      ? 'bg-[#001428] text-[#FFD166] border-[#003366]'
                      : 'bg-[#FFD166] text-[#001428] border-[#001428]'
                  }`}
                >
                  #0{i + 1}
                </span>
              </div>
              <h3
                className={`font-black text-base transition-colors relative z-10 ${
                  isDark
                    ? 'text-[#FFF7E6] group-hover:text-[#00B4D8]'
                    : 'text-[#001428] group-hover:text-[#0077B6]'
                }`}
              >
                {f.title}
              </h3>
              <p
                className={`text-xs sm:text-sm font-medium leading-relaxed relative z-10 ${
                  isDark ? 'text-[#FFF7E6]/75' : 'text-slate-600'
                }`}
              >
                {f.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Crumpled Paper Assurance Banner */}
      <div className="crumpled-card-container pt-3 mt-12">
        <div className="paper-tape" />
        <div
          className={`rounded-3xl p-7 sm:p-10 text-center relative overflow-hidden transition-all ${
            isDark ? 'paper-card-dark' : 'paper-card-light'
          }`}
        >
          <div className="paper-crease-overlay rounded-3xl" />
          <div className="relative z-10">
            <div className="genz-sticker inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#FFD166] text-[#001428] text-xs font-black mb-4">
              <span>🛡️ ZERO RISK GUARANTEE // ضمان 100%</span>
            </div>
            <h4
              className={`text-xl sm:text-2xl font-black mb-2 ${
                isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
              }`}
            >
              زيرو ريسك.. حقك مضمون 100% ✌️
            </h4>
            <p
              className={`text-xs sm:text-sm font-bold max-w-xl mx-auto leading-relaxed ${
                isDark ? 'text-[#F4D6A6]/90' : 'text-slate-600'
              }`}
            >
              لو فتحت الشحنة مع المندوب ومحبتش الخامة أو المقاس مظبطش معاك، تقدر ترفض الاستلام فوراً ومن غير أي إحراج!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
