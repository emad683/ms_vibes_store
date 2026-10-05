import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { products, COLOR_PALETTE } from '../data/productsData';

export function ProductCard({ product, isDark, onSelect }) {
  const { addToCart } = useCart();
  const [crumpling, setCrumpling] = useState(false);
  const [added, setAdded] = useState(false);
  const [selectedColorId, setSelectedColorId] = useState(product.defaultColor || 'sky');

  const activeColorObj = COLOR_PALETTE.find((c) => c.id === selectedColorId) || COLOR_PALETTE[0];

  // Determine displayed image based on selected color swatch
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

  const goToDetails = () => {
    if (onSelect) {
      onSelect(product.id);
    } else {
      window.location.hash = `#/product/${product.id}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="crumpled-card-container pt-3">
      {/* Scotch tape on top */}
      <div className="paper-tape"></div>

      <div
        className={`rounded-3xl overflow-hidden transition-all duration-300 flex flex-col group relative ${
          isDark ? 'paper-card-dark' : 'paper-card-light'
        }`}
      >
        {/* Paper crease / wrinkle overlay */}
        <div className="paper-crease-overlay rounded-3xl"></div>

        {/* Zine / Spec Sheet Top Header */}
        <div
          className={`px-4 pt-3 pb-2 flex items-center justify-between text-[10px] font-english font-black border-b-2 border-dashed tracking-wider ${
            isDark
              ? 'text-[#90E0EF] border-[#003366]'
              : 'text-[#001428] border-[#001428]/20'
          }`}
        >
          <span className="flex items-center gap-1.5">
            <span
              className="inline-block w-2.5 h-2.5 rounded-full border border-[#001428]"
              style={{ backgroundColor: activeColorObj.hex }}
            ></span>
            ARCHIVE // 0{product.id}
          </span>
          <span className="px-1.5 py-0.5 rounded font-mono text-[9px] bg-[#001428] text-[#FFD166]">
            M&S LOGO EMBROIDERED
          </span>
        </div>

        {/* Clothing Image Container - Clickable to open full details */}
        <div className="p-3 cursor-pointer" onClick={goToDetails}>
          <div
            className={`relative aspect-4/5 overflow-hidden rounded-2xl border-2 ${
              isDark
                ? 'bg-[#001428] border-[#00B4D8]/60'
                : 'bg-white border-[#001428]'
            }`}
          >
            <img
              src={displayImg}
              alt={`${product.nameAr} - ${activeColorObj.name}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
            />

            {/* Sticker Tag badge */}
            <div className="absolute top-3 right-3">
              <span
                className={`text-[10px] font-english font-black px-2.5 py-1 rounded-full border-2 shadow-[2px_2px_0px_#001428] ${product.tagColor}`}
              >
                {product.tag}
              </span>
            </div>

            {/* Discount sticker */}
            <span
              className="absolute top-3 left-3 text-xs font-black px-2.5 py-1 rounded-full border-2 border-[#001428] shadow-[2px_2px_0px_#001428] bg-[#FF4D9D] text-white font-english -rotate-6"
            >
              -{discount}%
            </span>

            {/* Hover Indicator: View Full Details */}
            <div className="absolute inset-0 bg-[#001428]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-3">
              <span className="px-3 py-1.5 rounded-xl bg-[#FFD166] text-[#001428] font-black text-xs border-2 border-[#001428] shadow-[2px_2px_0px_#001428]">
                اضغط للتفاصيل والصور 🔍
              </span>
            </div>

            {/* Remaining stock chip */}
            {product.remaining <= 35 && (
              <div
                className="absolute bottom-2.5 inset-x-3 text-[11px] font-black py-1 px-3 rounded-xl text-center border-2 bg-[#001428] text-[#FFD166] border-[#FFD166] flex items-center justify-center gap-1.5"
              >
                <span>⚡</span>
                <span>فاضل {product.remaining} قطعة بس بالسعر ده!</span>
              </div>
            )}
          </div>
        </div>

        {/* Card Body on the Crumpled Paper */}
        <div className="p-4 pt-1 flex flex-col flex-1 gap-2.5 relative z-10">
          <div className="cursor-pointer" onClick={goToDetails}>
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

          {/* Interactive Color Swatches extracted from the pieces */}
          <div className="flex items-center justify-between gap-2 py-1">
            <span
              className={`text-[11px] font-black ${
                isDark ? 'text-[#90E0EF]' : 'text-[#001428]'
              }`}
            >
              اللون: <span className="text-[#00B4D8]">{activeColorObj.name}</span>
            </span>
            <div className="flex items-center gap-1.5" role="group" aria-label="اختر لون القطعة">
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

          {/* Price Row */}
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
            <span
              className="text-[10px] font-black px-2 py-0.5 rounded-md border-2 border-[#001428] mr-auto text-[#001428] bg-[#A5D6A7]"
            >
              وفر {product.oldPrice - product.price} ج.م
            </span>
          </div>

          {/* Crumpled Paper Add-to-Cart Button & Quick Details */}
          <div className="flex items-center gap-2 mt-1">
            <button
              type="button"
              onClick={handleAddToCart}
              className={`crumpled-paper-btn flex-1 py-2.5 px-3 font-black text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer select-none ${
                crumpling ? 'is-crumpling' : ''
              } ${added ? 'is-added' : ''}`}
            >
              {/* Folded dog-ear corner indicator on the paper button */}
              <span
                aria-hidden="true"
                className="absolute top-0 left-0 w-3 h-3 bg-[#001428]/15 border-b border-r border-[#001428]/40 rounded-br-md pointer-events-none"
              />
              <span className="crumple-label relative z-10 flex items-center justify-center gap-2">
                {added ? (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#1B4332]">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>تمت الإضافة ✓</span>
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    <span>إضافة إلى العربة</span>
                  </>
                )}
              </span>
            </button>

            <button
              type="button"
              onClick={goToDetails}
              title="عرض التفاصيل والصور الكبيرة"
              className="py-2.5 px-3 rounded-xl font-black text-xs border-2 cursor-pointer bg-[#FFD166] text-[#001428] border-[#001428] shadow-[2px_2px_0px_#001428] hover:-translate-y-0.5 transition-transform"
            >
              تفاصيل 🔍
            </button>
          </div>

          <div
            className={`flex items-center justify-between text-[10px] font-mono pt-1 border-t border-dashed ${
              isDark ? 'text-[#F4D6A6]/70 border-white/10' : 'text-slate-600 border-[#001428]/20'
            }`}
          >
            <span>✓ قايس قبل الدفع</span>
            <span className="tracking-tighter font-english">|||| ||| || ||||</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Products({ onSelectProduct }) {
  const { isDark } = useTheme();

  return (
    <section id="products" className="py-20 px-4 max-w-6xl mx-auto relative">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-14">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span
            className="genz-sticker text-xs px-4 py-1.5 rounded-full text-[#001428] bg-[#90E0EF] font-english uppercase tracking-wider"
          >
            ✦ THE ARCHIVE // 6 SIGNATURE COLORS
          </span>
        </div>
        <h2
          className={`text-2xl sm:text-4xl md:text-5xl font-black mb-3 transition-colors ${
            isDark ? 'text-[#FFF7E6]' : 'text-[#001428]'
          }`}
        >
          اختار الـ Fit واللون بتاعك 🔥
        </h2>
        <p
          className={`text-sm sm:text-base font-bold leading-relaxed ${
            isDark ? 'text-[#F4D6A6]' : 'text-slate-600'
          }`}
        >
          اضغط على أي كارت لعرض تفاصيله الكاملة وصوره بحجم كبير، أو اختر اللون وأضفه للعربة فوراً!
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isDark={isDark}
            onSelect={onSelectProduct}
          />
        ))}
      </div>
    </section>
  );
}
