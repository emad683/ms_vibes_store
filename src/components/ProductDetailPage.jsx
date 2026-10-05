import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { products, COLOR_PALETTE } from '../data/productsData';

const SIZES = [
  { id: 'M', label: 'M (أوفرسايز)', fit: 'يناسب وزن 55 - 70 كجم', chest: '62 سم', length: '72 سم', sleeve: '64 سم' },
  { id: 'L', label: 'L (أوفرسايز)', fit: 'يناسب وزن 70 - 85 كجم', chest: '66 سم', length: '75 سم', sleeve: '66 سم' },
  { id: 'XL', label: 'XL (أوفرسايز)', fit: 'يناسب وزن 85 - 100 كجم', chest: '70 سم', length: '78 سم', sleeve: '68 سم' },
  { id: 'XXL', label: 'XXL (أوفرسايز)', fit: 'يناسب وزن 100 - 118 كجم', chest: '74 سم', length: '81 سم', sleeve: '70 سم' },
];

export default function ProductDetailPage({ productId, onBack }) {
  const { isDark } = useTheme();
  const { addToCart } = useCart();

  // Find product by id (fallback to first product)
  const product = products.find((p) => p.id === Number(productId)) || products[0];

  const [selectedColorId, setSelectedColorId] = useState(product.defaultColor || 'sky');
  const [selectedSize, setSelectedSize] = useState('L');
  const [showSizeTable, setShowSizeTable] = useState(false);
  const [crumpling, setCrumpling] = useState(false);
  const [added, setAdded] = useState(false);
  const [activeTab, setActiveTab] = useState('specs'); // 'specs' | 'features' | 'care'

  // Scroll to top when product page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [product.id]);

  const activeColorObj = COLOR_PALETTE.find((c) => c.id === selectedColorId) || COLOR_PALETTE[0];

  // Determine current image based on color and product view type
  let displayImg = product.img;
  if (product.viewType === 'flatlay') {
    displayImg = activeColorObj.flatlay;
  } else if (product.viewType === 'model') {
    displayImg = activeColorObj.model;
  } else if (product.viewType === 'outfit' && product.outfitImages) {
    displayImg = product.outfitImages[selectedColorId] || product.img;
  }

  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

  const handleAddToCart = () => {
    if (crumpling) return;
    setCrumpling(true);
    addToCart(product, activeColorObj, displayImg);

    // Swap label while paper is crumpled in the middle of animation
    setTimeout(() => {
      setAdded(true);
    }, 450);

    setTimeout(() => {
      setCrumpling(false);
    }, 900);

    setTimeout(() => {
      setAdded(false);
    }, 2400);
  };

  const handleWhatsAppOrder = () => {
    const message = encodeURIComponent(
      `مرحباً M&S VIBES 👋\nأود طلب هذا الموديل:\n• المنتج: ${product.nameAr}\n• المقاس: ${selectedSize}\n• اللون المختار: ${activeColorObj.name}\n• السعر: ${product.price} ج.م (توفير ${product.oldPrice - product.price} ج.م)\n\nبرجاء تأكيد الطلب ومعاينة القطعة مع المندوب قبل الدفع 🚚`
    );
    window.open(`https://wa.me/201000000000?text=${message}`, '_blank');
  };

  const otherProducts = products.filter((p) => p.id !== product.id);

  return (
    <div className="pt-24 pb-20 px-4 max-w-6xl mx-auto relative z-10">
      {/* Top Navigation Bar / Breadcrumb */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => {
            if (onBack) onBack();
            else window.location.hash = '#products';
          }}
          className={`genz-sticker text-xs sm:text-sm px-4 py-2 rounded-full cursor-pointer transition-transform hover:-translate-x-1 ${
            isDark ? 'bg-[#001c38] text-[#FFF7E6]' : 'bg-white text-[#001428]'
          }`}
        >
          <span className="text-base font-bold">→</span>
          <span>رجوع لكل المنتجات</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="genz-sticker text-[10px] px-3 py-1 rounded-full bg-[#90E0EF] text-[#001428] font-english uppercase tracking-wider">
            ARCHIVE // 0{product.id}
          </span>
          <span className="genz-sticker text-[10px] px-3 py-1 rounded-full bg-[#FFD166] text-[#001428] font-english uppercase tracking-wider">
            {product.category || 'Streetwear'}
          </span>
        </div>
      </div>

      {/* Main Product Showcase (Large Image + In-depth Details) */}
      <div className="crumpled-card-container mb-16 pt-3">
        <div className="paper-tape"></div>

        <div
          className={`rounded-3xl overflow-hidden relative ${
            isDark ? 'paper-card-dark' : 'paper-card-light'
          }`}
        >
          <div className="paper-crease-overlay rounded-3xl"></div>

          <div className="relative z-10 p-4 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Big High-Resolution Product Showcase */}
              <div className="lg:col-span-6 space-y-4">
                <div
                  className={`relative aspect-4/5 w-full rounded-2xl overflow-hidden border-2 shadow-[6px_6px_0px_#001428] ${
                    isDark ? 'bg-[#001428] border-[#00B4D8]' : 'bg-white border-[#001428]'
                  }`}
                >
                  <img
                    src={displayImg}
                    alt={`${product.nameAr} - ${activeColorObj.name}`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  />

                  {/* Top-Right Tag Badge */}
                  <div className="absolute top-3.5 right-3.5">
                    <span
                      className={`text-xs font-english font-black px-3 py-1.5 rounded-full border-2 shadow-[2px_2px_0px_#001428] ${product.tagColor}`}
                    >
                      {product.tag}
                    </span>
                  </div>

                  {/* Top-Left Discount Sticker */}
                  <span className="absolute top-3.5 left-3.5 text-sm font-black px-3 py-1 rounded-full border-2 border-[#001428] shadow-[2px_2px_0px_#001428] bg-[#FF4D9D] text-white font-english -rotate-6">
                    -{discount}%
                  </span>

                  {/* Embroidered Chest Logo Banner */}
                  <div className="absolute bottom-3 inset-x-3 text-[11px] sm:text-xs font-black py-1.5 px-3 rounded-xl text-center border-2 bg-[#001428] text-[#FFD166] border-[#FFD166] flex items-center justify-center gap-2 shadow-md">
                    <span>✦</span>
                    <span>لوجو M&S VIBES مطرّز على الصدر من اليمين بخيوط يابانية فاخرة</span>
                    <span>✦</span>
                  </div>
                </div>

                {/* Color Variants Quick Switcher / Gallery Thumbnails */}
                <div>
                  <span
                    className={`block text-xs font-black mb-2 ${
                      isDark ? 'text-[#90E0EF]' : 'text-[#001428]'
                    }`}
                  >
                    عرض اللون المختار: <strong className="text-[#00B4D8]">{activeColorObj.name}</strong> (اضغط للتبديل السريع)
                  </span>

                  <div className="grid grid-cols-6 gap-2">
                    {COLOR_PALETTE.map((c) => {
                      const isSelected = c.id === selectedColorId;
                      let thumbImg = c.flatlay;
                      if (product.viewType === 'model') thumbImg = c.model;
                      if (product.viewType === 'outfit' && product.outfitImages && product.outfitImages[c.id]) {
                        thumbImg = product.outfitImages[c.id];
                      }

                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setSelectedColorId(c.id)}
                          title={c.name}
                          className={`relative aspect-square rounded-xl overflow-hidden border-2 cursor-pointer transition-all ${
                            isSelected
                              ? 'border-[#00B4D8] ring-3 ring-[#FFD166] scale-105 shadow-[2px_2px_0px_#001428]'
                              : isDark
                                ? 'border-[#003366] hover:border-[#90E0EF]/60 opacity-80 hover:opacity-100'
                                : 'border-[#001428]/30 hover:border-[#001428] opacity-80 hover:opacity-100'
                          }`}
                        >
                          <img
                            src={thumbImg}
                            alt={c.name}
                            className="w-full h-full object-cover object-top"
                          />
                          <span
                            className="absolute bottom-1 right-1 w-3 h-3 rounded-full border border-white shadow-xs"
                            style={{ backgroundColor: c.hex }}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Specifications, Size Selection & Action Buttons */}
              <div className="lg:col-span-6 space-y-5">
                {/* Title & Ratings */}
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-amber-400 text-sm">★★★★★</span>
                    <span
                      className={`text-xs font-bold font-english ${
                        isDark ? 'text-[#90E0EF]' : 'text-slate-600'
                      }`}
                    >
                      {product.rating || '4.9'} ({product.reviewsCount || 120} تقييم حقيقي)
                    </span>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/40">
                      ✓ قطن أصلي معتمد
                    </span>
                  </div>

                  <h1
                    className={`text-2xl sm:text-3xl md:text-4xl font-black leading-tight ${
                      isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
                    }`}
                  >
                    {product.nameAr}
                  </h1>
                  <p
                    className={`text-xs sm:text-sm font-english font-bold mt-1 ${
                      isDark ? 'text-[#90E0EF]' : 'text-slate-600'
                    }`}
                  >
                    {product.titleEn || 'Contemporary Egyptian Streetwear // 340gsm Fleece'}
                  </p>
                </div>

                {/* Price & Scarcity Box */}
                <div
                  className={`p-4 rounded-2xl border-2 flex flex-wrap items-center justify-between gap-3 ${
                    isDark
                      ? 'bg-[#001428]/80 border-[#00B4D8]/50'
                      : 'bg-white border-[#001428]'
                  }`}
                >
                  <div className="flex items-baseline gap-3">
                    <span
                      className={`text-3xl font-black font-english ${
                        isDark ? 'text-[#FFD166]' : 'text-[#001428]'
                      }`}
                    >
                      {product.price}{' '}
                      <span className="text-sm font-sans font-black">ج.م</span>
                    </span>
                    <span
                      className={`line-through text-sm font-english font-bold ${
                        isDark ? 'text-[#FFF7E6]/40' : 'text-slate-400'
                      }`}
                    >
                      {product.oldPrice} ج.م
                    </span>
                    <span className="text-xs font-black px-2.5 py-0.5 rounded-md border-2 border-[#001428] bg-[#A5D6A7] text-[#001428]">
                      وفرت {product.oldPrice - product.price} ج.م
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-black text-amber-500 dark:text-[#FFD166]">
                    <span>⚡</span>
                    <span>فاضل {product.remaining} قطعة فقط بالمخزن!</span>
                  </div>
                </div>

                {/* Color Selector */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      className={`text-xs font-black ${
                        isDark ? 'text-[#90E0EF]' : 'text-[#001428]'
                      }`}
                    >
                      اختر اللون: <strong className="text-[#00B4D8]">{activeColorObj.name}</strong>
                    </label>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {COLOR_PALETTE.map((c) => {
                      const isSelected = c.id === selectedColorId;
                      return (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setSelectedColorId(c.id)}
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border-2 cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-[#001428] text-[#FFD166] border-[#00B4D8] shadow-[2px_2px_0px_#00B4D8] -translate-y-0.5'
                              : isDark
                                ? 'bg-[#001428]/60 text-[#FFF7E6] border-[#003366] hover:border-[#90E0EF]'
                                : 'bg-white text-[#001428] border-[#001428]/30 hover:border-[#001428]'
                          }`}
                        >
                          <span
                            className="w-3.5 h-3.5 rounded-full border border-black/40 shrink-0"
                            style={{ backgroundColor: c.hex }}
                          />
                          <span className="text-xs font-bold">{c.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Size Selector & Size Table Toggle */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      className={`text-xs font-black ${
                        isDark ? 'text-[#90E0EF]' : 'text-[#001428]'
                      }`}
                    >
                      اختر المقاس: <strong className="text-[#FFD166]">{selectedSize} (قصة أوفرسايز مظبوطة)</strong>
                    </label>
                    <button
                      type="button"
                      onClick={() => setShowSizeTable(!showSizeTable)}
                      className="text-xs font-black text-[#0077B6] dark:text-[#90E0EF] underline underline-offset-4 cursor-pointer"
                    >
                      {showSizeTable ? 'إخفاء جدول المقاسات ✕' : '📏 جدول المقاسات بالسنتيمتر'}
                    </button>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {SIZES.map((sz) => {
                      const isSelected = sz.id === selectedSize;
                      return (
                        <button
                          key={sz.id}
                          type="button"
                          onClick={() => setSelectedSize(sz.id)}
                          className={`py-3 px-2 rounded-xl border-2 text-center cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-[#FFD166] text-[#001428] border-[#001428] shadow-[3px_3px_0px_#001428] -translate-y-0.5'
                              : isDark
                                ? 'bg-[#001428] text-[#FFF7E6] border-[#003366] hover:border-[#90E0EF]'
                                : 'bg-white text-[#001428] border-[#001428]/40 hover:border-[#001428]'
                          }`}
                        >
                          <span className="block text-base font-black font-english">{sz.id}</span>
                          <span className="block text-[10px] font-bold opacity-80 mt-0.5">أوفرسايز</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Size Fit Hint */}
                  <p
                    className={`text-[11px] font-bold mt-2 ${
                      isDark ? 'text-[#F4D6A6]' : 'text-slate-600'
                    }`}
                  >
                    💡 نصيحة المقاس: {SIZES.find((s) => s.id === selectedSize)?.fit}. قصتنا أوفرسايز ستريت وير مظبوطة ومش محتاج تاخد مقاس أكبر من مقاسك العادي!
                  </p>

                  {/* Detailed Measurements Table Modal/Drawer */}
                  {showSizeTable && (
                    <div
                      className={`mt-3 p-3.5 rounded-2xl border-2 overflow-x-auto ${
                        isDark ? 'bg-[#001428] border-[#00B4D8]' : 'bg-white border-[#001428]'
                      }`}
                    >
                      <table className="w-full text-xs text-center border-collapse">
                        <thead>
                          <tr className="border-b-2 border-dashed border-[#001428]/30 dark:border-white/20">
                            <th className="py-2 px-2 font-black">المقاس</th>
                            <th className="py-2 px-2 font-black">عرض الصدر</th>
                            <th className="py-2 px-2 font-black">الطول الكلي</th>
                            <th className="py-2 px-2 font-black">طول الكم</th>
                            <th className="py-2 px-2 font-black">الوزن التقريبي</th>
                          </tr>
                        </thead>
                        <tbody>
                          {SIZES.map((sz) => (
                            <tr
                              key={sz.id}
                              className={`border-b border-dashed border-[#001428]/10 dark:border-white/10 ${
                                sz.id === selectedSize ? 'bg-[#FFD166]/20 font-black' : ''
                              }`}
                            >
                              <td className="py-2 px-2 font-english font-black">{sz.id}</td>
                              <td className="py-2 px-2 font-english">{sz.chest}</td>
                              <td className="py-2 px-2 font-english">{sz.length}</td>
                              <td className="py-2 px-2 font-english">{sz.sleeve}</td>
                              <td className="py-2 px-2">{sz.fit}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                {/* Primary Action Buttons (Add to Cart + Instant WhatsApp Order) */}
                <div className="space-y-2.5 pt-2">
                  {/* Crumpled Paper Add-to-Cart Button */}
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className={`crumpled-paper-btn w-full py-3.5 px-4 font-black text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer select-none ${
                      crumpling ? 'is-crumpling' : ''
                    } ${added ? 'is-added' : ''}`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute top-0 left-0 w-3.5 h-3.5 bg-[#001428]/15 border-b border-r border-[#001428]/40 rounded-br-md pointer-events-none"
                    />
                    <span className="crumple-label relative z-10 flex items-center justify-center gap-2">
                      {added ? (
                        <>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-[#1B4332]">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>تمت إضافة {product.nameAr.split('—')[0]} للعربة ✓</span>
                        </>
                      ) : (
                        <>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <circle cx="9" cy="21" r="1" />
                            <circle cx="20" cy="21" r="1" />
                            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                          </svg>
                          <span>إضافة إلى العربة — ({activeColorObj.name} / مقاس {selectedSize})</span>
                        </>
                      )}
                    </span>
                  </button>

                  {/* Direct WhatsApp Order Button */}
                  <button
                    type="button"
                    onClick={handleWhatsAppOrder}
                    className="w-full py-3 px-4 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer bg-[#25D366] hover:bg-[#20ba59] text-[#001428] border-2 border-[#001428] shadow-[4px_4px_0px_#001428] transition-transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>طلب فوري عبر واتساب (معاينة قبل الدفع)</span>
                  </button>
                </div>

                {/* Guarantees Box */}
                <div
                  className={`p-3.5 rounded-2xl border-2 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center text-xs font-bold ${
                    isDark ? 'bg-[#001428] border-white/10' : 'bg-[#FFF7E6] border-[#001428]/30'
                  }`}
                >
                  <div className="flex items-center justify-center gap-1.5">
                    <span>🔍</span>
                    <span>معاينة وقياس قبل الدفع</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <span>🚚</span>
                    <span>توصيل سريع 48 ساعة</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <span>🔄</span>
                    <span>استبدال واسترجاع فوري</span>
                  </div>
                </div>

                {/* In-depth Tabs (Specs / Features / Care) */}
                <div className="pt-2">
                  <div className="flex border-b-2 border-dashed border-[#001428]/20 dark:border-white/20 gap-2 mb-3">
                    {[
                      { id: 'specs', label: '🧵 الخامات والمواصفات' },
                      { id: 'features', label: '✨ مميزات التصميم' },
                      { id: 'care', label: '🧺 العناية والغسيل' },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`pb-2 px-2 text-xs font-black cursor-pointer transition-colors relative ${
                          activeTab === tab.id
                            ? 'text-[#0077B6] dark:text-[#FFD166] border-b-2 border-current'
                            : 'text-slate-500 dark:text-slate-400 hover:text-current'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  <div className="text-xs leading-relaxed font-bold">
                    {activeTab === 'specs' && (
                      <div className="space-y-2">
                        <p>{product.description}</p>
                        <div className="p-2.5 rounded-xl bg-black/5 dark:bg-white/5 border border-dashed border-current/20">
                          <strong className="block text-[#00B4D8] mb-0.5">نوع القماش والوزن:</strong>
                          <span>{product.material}</span>
                        </div>
                      </div>
                    )}

                    {activeTab === 'features' && (
                      <ul className="space-y-1.5 list-disc list-inside">
                        {product.features?.map((f, i) => (
                          <li key={i} className="text-slate-700 dark:text-slate-300">
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}

                    {activeTab === 'care' && (
                      <ul className="space-y-1.5 list-disc list-inside">
                        {product.care?.map((c, i) => (
                          <li key={i} className="text-slate-700 dark:text-slate-300">
                            {c}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* When Scrolling Down: Show Other Products ("ولما اسكرول تحت تظهر باقي المنتجات") */}
      <section className="pt-8 border-t-2 border-dashed border-[#001428]/20 dark:border-white/20">
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="genz-sticker text-xs px-4 py-1.5 rounded-full text-[#001428] bg-[#FFD166] font-english uppercase tracking-wider">
              ✦ MORE FROM THE ARCHIVE
            </span>
          </div>
          <h2
            className={`text-2xl sm:text-4xl font-black mb-2 transition-colors ${
              isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
            }`}
          >
            باقي قطع الكوليكشن الشتوي 🔥
          </h2>
          <p
            className={`text-xs sm:text-sm font-bold ${
              isDark ? 'text-[#F4D6A6]' : 'text-slate-600'
            }`}
          >
            اضغط على أي قطعة لعرض تفاصيلها وصورها بدقة عالية واختيار مقاسك
          </p>
        </div>

        {/* Other Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {otherProducts.map((item) => (
            <OtherProductCard
              key={item.id}
              product={item}
              isDark={isDark}
              onSelect={() => {
                window.location.hash = `#/product/${item.id}`;
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function OtherProductCard({ product, isDark, onSelect }) {
  const { addToCart } = useCart();
  const [selectedColorId, setSelectedColorId] = useState(product.defaultColor || 'sky');
  const [crumpling, setCrumpling] = useState(false);
  const [added, setAdded] = useState(false);

  const activeColorObj = COLOR_PALETTE.find((c) => c.id === selectedColorId) || COLOR_PALETTE[0];

  let displayImg = product.img;
  if (product.viewType === 'flatlay') {
    displayImg = activeColorObj.flatlay;
  } else if (product.viewType === 'model') {
    displayImg = activeColorObj.model;
  } else if (product.viewType === 'outfit' && product.outfitImages) {
    displayImg = product.outfitImages[selectedColorId] || product.img;
  }

  const discount = Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (crumpling) return;
    setCrumpling(true);
    addToCart(product, activeColorObj, displayImg);

    setTimeout(() => {
      setAdded(true);
    }, 450);

    setTimeout(() => {
      setCrumpling(false);
    }, 900);

    setTimeout(() => {
      setAdded(false);
    }, 2400);
  };

  return (
    <div className="crumpled-card-container pt-3">
      <div className="paper-tape"></div>

      <div
        className={`rounded-3xl overflow-hidden transition-all duration-300 flex flex-col group relative ${
          isDark ? 'paper-card-dark' : 'paper-card-light'
        }`}
      >
        <div className="paper-crease-overlay rounded-3xl"></div>

        {/* Spec Sheet Header */}
        <div
          className={`px-4 pt-3 pb-2 flex items-center justify-between text-[10px] font-english font-black border-b-2 border-dashed tracking-wider ${
            isDark ? 'text-[#90E0EF] border-[#003366]' : 'text-[#001428] border-[#001428]/20'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full border border-[#001428]"
              style={{ backgroundColor: activeColorObj.hex }}
            />
            ARCHIVE // 0{product.id}
          </span>
          <span className="px-1.5 py-0.5 rounded font-mono text-[9px] bg-[#001428] text-[#FFD166]">
            M&S EMBROIDERED
          </span>
        </div>

        {/* Clickable Image to View Details */}
        <div className="p-3 cursor-pointer" onClick={onSelect}>
          <div
            className={`relative aspect-4/5 overflow-hidden rounded-2xl border-2 ${
              isDark ? 'bg-[#001428] border-[#00B4D8]/60' : 'bg-white border-[#001428]'
            }`}
          >
            <img
              src={displayImg}
              alt={`${product.nameAr} - ${activeColorObj.name}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
            />

            {/* Sticker Tag */}
            <div className="absolute top-3 right-3">
              <span
                className={`text-[10px] font-english font-black px-2.5 py-1 rounded-full border-2 shadow-[2px_2px_0px_#001428] ${product.tagColor}`}
              >
                {product.tag}
              </span>
            </div>

            {/* Discount */}
            <span className="absolute top-3 left-3 text-xs font-black px-2.5 py-1 rounded-full border-2 border-[#001428] shadow-[2px_2px_0px_#001428] bg-[#FF4D9D] text-white font-english -rotate-6">
              -{discount}%
            </span>

            {/* View Details Overlay Indicator on Hover */}
            <div className="absolute inset-0 bg-[#001428]/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
              <span className="px-3 py-1.5 rounded-xl bg-[#FFD166] text-[#001428] font-black text-xs border-2 border-[#001428] shadow-[2px_2px_0px_#001428]">
                عرض التفاصيل والصور 🔍
              </span>
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 pt-1 flex flex-col flex-1 gap-2.5 relative z-10">
          <div className="cursor-pointer" onClick={onSelect}>
            <h3
              className={`font-black text-xs sm:text-sm transition-colors line-clamp-1 ${
                isDark
                  ? 'text-[#FFF7E6] group-hover:text-[#00B4D8]'
                  : 'text-[#001428] group-hover:text-[#0077B6]'
              }`}
            >
              {product.nameAr}
            </h3>
          </div>

          {/* Color Swatches */}
          <div className="flex items-center justify-between gap-2 py-1">
            <span
              className={`text-[11px] font-black ${
                isDark ? 'text-[#90E0EF]' : 'text-[#001428]'
              }`}
            >
              اللون: <span className="text-[#00B4D8]">{activeColorObj.name}</span>
            </span>
            <div className="flex items-center gap-1.5">
              {COLOR_PALETTE.map((color) => {
                const isSelected = color.id === selectedColorId;
                return (
                  <button
                    key={color.id}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedColorId(color.id);
                    }}
                    title={color.name}
                    aria-label={color.name}
                    className={`w-5 h-5 rounded-full cursor-pointer transition-transform border-2 ${
                      isSelected
                        ? 'scale-125 border-[#00B4D8] ring-2 ring-[#FFD166]'
                        : isDark
                          ? 'border-white/40 hover:scale-110'
                          : 'border-[#001428] hover:scale-110'
                    }`}
                    style={{ backgroundColor: color.hex }}
                  />
                );
              })}
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-2 pt-0.5">
            <span
              className={`text-base sm:text-lg font-black font-english ${
                isDark ? 'text-[#FFD166]' : 'text-[#001428]'
              }`}
            >
              {product.price}{' '}
              <span className="text-[11px] font-black font-sans">ج.م</span>
            </span>
            <span
              className={`line-through text-xs font-english font-bold ${
                isDark ? 'text-[#FFF7E6]/40' : 'text-slate-400'
              }`}
            >
              {product.oldPrice} ج.م
            </span>
            <span className="text-[10px] font-black px-2 py-0.5 rounded-md border-2 border-[#001428] mr-auto text-[#001428] bg-[#A5D6A7]">
              وفر {product.oldPrice - product.price} ج.م
            </span>
          </div>

          {/* Add to Cart or View Details Buttons */}
          <div className="flex gap-2 mt-1">
            <button
              type="button"
              onClick={handleAddToCart}
              className={`crumpled-paper-btn flex-1 py-2.5 px-2 font-black text-xs flex items-center justify-center gap-1.5 cursor-pointer select-none ${
                crumpling ? 'is-crumpling' : ''
              } ${added ? 'is-added' : ''}`}
            >
              <span className="crumple-label relative z-10 flex items-center justify-center gap-1.5">
                {added ? (
                  <span>تمت الإضافة ✓</span>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    <span>أضف للعربة</span>
                  </>
                )}
              </span>
            </button>

            <button
              type="button"
              onClick={onSelect}
              title="عرض التفاصيل الكاملة والصور"
              className="px-3 py-2.5 rounded-xl font-black text-xs border-2 cursor-pointer bg-[#FFD166] text-[#001428] border-[#001428] shadow-[2px_2px_0px_#001428] hover:-translate-y-0.5 transition-transform"
            >
              تفاصيل 🔍
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
