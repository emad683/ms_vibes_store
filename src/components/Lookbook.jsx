import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

// Pure clothing and outfit images with M&S Vibes Chest Logo
import hoodieSkyFlatlay from '../assets/hoodie-sky-flatlay.jpg';
import hoodieSkyModel from '../assets/hoodie-sky-model.jpg';
import hoodieCamelModel from '../assets/hoodie-camel-model.jpg';
import hoodieOliveModel from '../assets/hoodie-olive-model.jpg';
import hoodieCreamFlatlay from '../assets/hoodie-cream-flatlay.jpg';
import hoodieDustyFlatlay from '../assets/hoodie-dusty-flatlay.jpg';
import moodBoardCyan from '../assets/mood-board-cyan.jpg';
import outfitCollageCyan from '../assets/outfit-collage-cyan.jpg';
import img1 from '../assets/27999424-c909-4e17-b39f-8c1bb58fc557.jpg';
import img2 from '../assets/2a5863f0-971b-40ff-b2e5-31ba557f3b80.jpg';
import img3 from '../assets/2ce9fbef-fa22-41b5-8002-9db9fa369036.jpg';
import img6 from '../assets/77991165-e37e-4f9e-8716-52b60b353e2f.jpg';

const lookbookItems = [
  {
    id: 1,
    title: 'هودي أوفرسايز سماوي مع بنطلون كريمي',
    tag: 'ستايل الشارع',
    category: 'urban',
    img: hoodieSkyModel,
    desc: 'إطلالة كاجوال شبابية مريحة باللون الأزرق السماوي وبنطلون رياضي أوف وايت مع لوجو الصدر.',
  },
  {
    id: 2,
    title: 'هودي بيج كامل مع بنطلون أوف وايت',
    tag: 'بيج كامل',
    category: 'urban',
    img: hoodieCamelModel,
    desc: 'درجة الكامل تان الدافية من نفس باليت الكوليكشن مع لوجو M&S Vibes المطرّز.',
  },
  {
    id: 3,
    title: 'هودي زيتي شتوي — Olive Street Fit',
    tag: 'زيتي رايق',
    category: 'urban',
    img: hoodieOliveModel,
    desc: 'اللون الزيتي الشتوي مع بنطلون أوف وايت ولوجو M&S باللون الكريمي على الصدر.',
  },
  {
    id: 4,
    title: 'هودي قطن 340gsm سماوي هادي',
    tag: 'سماوي هادي',
    category: 'cyan',
    img: hoodieSkyFlatlay,
    desc: 'تصوير نقي ومباشر لهودي الشتاء بلون سماوي هادي وبطانة ميلتون دافية.',
  },
  {
    id: 5,
    title: 'هودي أوف وايت كريمي — Clean Cream',
    tag: 'أوف وايت',
    category: 'cyan',
    img: hoodieCreamFlatlay,
    desc: 'اللون الأوف وايت الأساسي في دولابك الشتوي مع تطريز اللوجو الكحلي.',
  },
  {
    id: 6,
    title: 'هودي أزرق داستي — Dusty Blue',
    tag: 'داستي بلو',
    category: 'cyan',
    img: hoodieDustyFlatlay,
    desc: 'درجة الداستي بلو الشتوية الهادية المستوحاة من تنسيقات الكوليكشن.',
  },
  {
    id: 7,
    title: 'تنسيق متكامل سماوي وكريمي هادي',
    tag: 'سماوي وكريمي',
    category: 'outfits',
    img: moodBoardCyan,
    desc: 'هودي سماوي مع بنطلون واسع أوف وايت وسنيكرز رمادي فاتح وحقيبة كروس.',
  },
  {
    id: 8,
    title: 'تنسيقات شتوية بألوان متناسقة',
    tag: 'أطقم شتوية',
    category: 'outfits',
    img: outfitCollageCyan,
    desc: 'أربع إطلالات متنوعة تمزج درجات السماوي الهادي والبيج والكاكي لشتاء مريح.',
  },
  {
    id: 9,
    title: 'تنسيق أنيق: بليزر جملي مع أزرق داستي',
    tag: 'تنسيقات راقية',
    category: 'outfits',
    img: img3,
    desc: 'مزيج شتوي بين ألوان البيج والأخضر الزيتي والسويت شيرت السماوي بلوجو البراند.',
  },
  {
    id: 10,
    title: 'معطف بني شوكولاتة مع سويتر داستي بلو',
    tag: 'ألوان شتوية',
    category: 'outfits',
    img: img6,
    desc: 'تناغم دافئ بين المعطف الصوفي البني والهاي كول الأزرق الهادي.',
  },
  {
    id: 11,
    title: 'تنسيقات الخريف والشتاء — زيتي وكريمي',
    tag: 'زيتي وكريمي',
    category: 'outfits',
    img: img2,
    desc: 'بالطو زيتي أنيق مع سويتر تريكو كريمي وبنطلون بيج راقي.',
  },
  {
    id: 12,
    title: 'أربع لوكات شتوية كاجوال للشباب',
    tag: 'ستايل يومي',
    category: 'outfits',
    img: img1,
    desc: 'تنسيقات هوديز وبنطلونات مريحة تناسب الاستخدام اليومي والجامعة والخروج.',
  },
];

export default function Lookbook() {
  const { isDark } = useTheme();
  const [filter, setFilter] = useState('all');

  const filteredItems = filter === 'all'
    ? lookbookItems
    : lookbookItems.filter(item => item.category === filter);

  return (
    <section
      id="lookbook"
      className={`py-20 px-4 border-y transition-colors duration-300 relative ${
        isDark
          ? 'bg-[#001428]/40 border-white/10'
          : 'bg-transparent border-[#D4CEB7]/60'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span
            className="genz-sticker text-xs px-4 py-1.5 rounded-full mb-4 text-[#001428] bg-[#FFD166] font-english uppercase tracking-wider"
          >
            📸 OUTFIT INSPO // VIBE CHECK
          </span>
          <h2
            className={`text-2xl sm:text-4xl md:text-5xl font-black mb-3 transition-colors ${
              isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
            }`}
          >
            نسّق اللوك ع طريقتك ✦
          </h2>
          <p
            className={`text-sm sm:text-base font-bold ${
              isDark ? 'text-[#F4D6A6]' : 'text-slate-600'
            }`}
          >
            أفكار وتنسيقات جاهزة باللون السماوي الهادي مع البيج والأوف وايت عشان تلبس وتنزل ع طول.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {[
              { id: 'all', label: '✦ كل اللوكات' },
              { id: 'cyan', label: '🩵 سماوي رايق' },
              { id: 'urban', label: '🔥 ستريت فِت' },
              { id: 'outfits', label: '👕 أطقم كاملة' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`genz-btn px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black cursor-pointer ${
                  filter === tab.id
                    ? 'bg-[#FFD166] text-[#001428]'
                    : isDark
                      ? 'bg-[#001c38] text-[#FFF7E6]'
                      : 'bg-white text-[#001428]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {filteredItems.map((item, idx) => (
            <div key={item.id} className="crumpled-card-container pt-3">
              <div className="paper-tape"></div>
              <div
                className={`rounded-3xl overflow-hidden transition-all duration-300 group flex flex-col relative ${
                  isDark ? 'paper-card-dark' : 'paper-card-light'
                }`}
              >
                <div className="paper-crease-overlay rounded-3xl"></div>

                {/* Polaroid Mounted photo container */}
                <div className="p-3">
                  <div
                    className={`relative aspect-4/5 overflow-hidden rounded-2xl border-2 ${
                      isDark ? 'bg-[#001428] border-[#00B4D8]/60' : 'bg-white border-[#001428]'
                    }`}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <span
                      className="absolute top-2.5 right-2.5 z-10 text-[10px] font-black px-2.5 py-1 rounded-full border-2 border-[#001428] shadow-[2px_2px_0px_#001428] bg-[#90E0EF] text-[#001428]"
                    >
                      {item.tag}
                    </span>
                    <span
                      className="absolute bottom-2 left-2.5 z-10 text-[10px] font-mono font-black px-2 py-0.5 rounded bg-[#001428]/90 text-[#FFD166] border border-[#FFD166]/40"
                    >
                      SHOT #{idx + 1}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-1 flex flex-col flex-1 relative z-10">
                  <h3
                    className={`font-black text-sm mb-1.5 transition-colors group-hover:text-[#00B4D8] ${
                      isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-xs font-medium leading-relaxed line-clamp-2 ${
                      isDark ? 'text-[#FFF7E6]/75' : 'text-slate-600'
                    }`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
