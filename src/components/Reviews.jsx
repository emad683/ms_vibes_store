import { useTheme } from '../context/ThemeContext';

const reviews = [
  {
    name: 'أحمد محمود',
    city: 'المعادي، القاهرة',
    stars: 5,
    text: 'الأوفرسايز تحفة وخامته تقيلة ومحملة بجد! المندوب استناني لحد ما قست المقاس ولقيته مضبوط جداً، شكراً ليكم.',
    product: 'هودي أوفرسايز سماوي هادي',
    time: 'منذ يومين',
  },
  {
    name: 'سارة طارق',
    city: 'سموحة، الإسكندرية',
    stars: 5,
    text: 'اللون السماوي في الحقيقة هادي وشيك جداً زي الصور بالظبط. وصل في يومين وكنت مبسوطة بالمعاملة السريعة على واتساب.',
    product: 'تنسيق هودي وبنطلون شتوي',
    time: 'منذ 4 أيام',
  },
  {
    name: 'كريم عادل',
    city: 'الدقي، الجيزة',
    stars: 5,
    text: 'أول مرة اشتري من براند محلي وتكون التقفيل بالنظافة دي، الخياطة والتطريز ممتازين ويستاهلوا كل قرش.',
    product: 'هودي أوفرسايز موديل ستريت',
    time: 'منذ أسبوع',
  },
  {
    name: 'مريم سامي',
    city: 'طنطا، الغربية',
    stars: 5,
    text: 'كنت محتارة في المقاس بس ساعدوني في الشات وطلع مضبوط ومرتاح. فكرة المعاينة قبل الدفع مريحة جداً ومطمنة.',
    product: 'طقم أربع إطلالات شتوية',
    time: 'منذ أسبوع',
  },
];

export default function Reviews() {
  const { isDark } = useTheme();

  return (
    <section id="reviews" className="py-20 px-4 max-w-6xl mx-auto relative">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-14">
        <div className="text-center sm:text-right">
          <span
            className="genz-sticker text-xs px-4 py-1.5 rounded-full mb-4 text-[#001428] bg-[#FFB0BA] font-english uppercase tracking-wider"
          >
            💬 REAL FEEDBACK // THE FAM
          </span>
          <h2
            className={`text-2xl sm:text-4xl md:text-5xl font-black mb-2 transition-colors ${
              isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
            }`}
          >
            كلام الناس اللي جربت الـ Vibe ⭐
          </h2>
          <p
            className={`text-sm sm:text-base font-bold ${
              isDark ? 'text-[#F4D6A6]' : 'text-slate-600'
            }`}
          >
            ريفيوهات حقيقية من عملاء استلموا وعاينوا الأوردر بنفسهم مع المندوب.
          </p>
        </div>

        {/* Crumpled Paper Overall Rating Card */}
        <div className="crumpled-card-container pt-3 shrink-0">
          <div className="paper-tape" />
          <div
            className={`rounded-3xl p-5 sm:p-6 text-center flex items-center gap-5 relative overflow-hidden ${
              isDark ? 'paper-card-dark' : 'paper-card-light'
            }`}
          >
            <div className="paper-crease-overlay rounded-3xl" />
            <div className="relative z-10">
              <span
                className="text-3xl sm:text-4xl font-black font-english block leading-none text-[#00B4D8]"
              >
                4.9
              </span>
              <div className="flex text-[#FFD166] text-sm mt-1.5 justify-center tracking-tight">
                {'★'.repeat(5)}
              </div>
            </div>
            <div
              className={`text-right pr-4 border-r relative z-10 ${
                isDark ? 'border-[#003366]' : 'border-[#C5A888]/40'
              }`}
            >
              <span
                className={`text-xs font-black block ${
                  isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
                }`}
              >
                تقييم استثنائي
              </span>
              <span
                className={`text-[11px] ${
                  isDark ? 'text-[#F4D6A6]/80' : 'text-slate-600'
                }`}
              >
                بناءً على أكثر من 200 طلب
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((rev, idx) => (
          <div key={idx} className="crumpled-card-container pt-3 h-full">
            <div className="paper-tape" />
            <div
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden h-full ${
                isDark ? 'paper-card-dark' : 'paper-card-light'
              }`}
            >
              <div className="paper-crease-overlay rounded-3xl" />

              <div className="relative z-10">
                {/* Stars & Verified badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#FFD166] text-sm tracking-tight">
                    {'★'.repeat(rev.stars)}
                  </div>
                  <span
                    className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                      isDark
                        ? 'text-[#A5D6A7] bg-[#A5D6A7]/10 border-[#A5D6A7]/30'
                        : 'text-[#2E7D32] bg-[#A5D6A7]/25 border-[#2E7D32]/30'
                    }`}
                  >
                    ✓ مشتري موثق
                  </span>
                </div>

                {/* Review Text */}
                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                    isDark ? 'text-[#FFF7E6]/85' : 'text-slate-700'
                  }`}
                >
                  "{rev.text}"
                </p>
              </div>

              {/* Author & Product */}
              <div
                className={`pt-4 border-t relative z-10 ${
                  isDark ? 'border-[#003366]' : 'border-[#C5A888]/30'
                }`}
              >
                <div className="flex justify-between items-baseline mb-1">
                  <h4
                    className={`font-black text-xs sm:text-sm ${
                      isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
                    }`}
                  >
                    {rev.name}
                  </h4>
                  <span
                    className={`text-[10px] font-medium ${
                      isDark ? 'text-[#FFF7E6]/40' : 'text-slate-500'
                    }`}
                  >
                    {rev.time}
                  </span>
                </div>
                <p
                  className={`text-[11px] mb-2 ${
                    isDark ? 'text-[#F4D6A6]/70' : 'text-slate-500'
                  }`}
                >
                  {rev.city}
                </p>
                <span
                  className={`text-[10px] font-bold px-2.5 py-1 rounded-lg inline-block border ${
                    isDark
                      ? 'text-[#90E0EF] bg-[#001428] border-[#003366]'
                      : 'text-[#0077B6] bg-white border-[#C5A888]/40'
                  }`}
                >
                  {rev.product}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
