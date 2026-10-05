import { useTheme } from '../context/ThemeContext';

export default function Ticker() {
  const { isDark } = useTheme();

  const items = [
    '✦ WINTER DROP 01 // 500 PCS ONLY',
    '🔥 NO RISK: افتح الشحنة وقايس مع المندوب قبل الدفع',
    '⚡ HEAVYWEIGHT 340GSM EGYPTIAN COTTON',
    '👕 OVERSIZED STREETWEAR FIT',
    '🚀 شحن سريع خلال 48-72 ساعة لكل مصر',
    '💯 CASH ON DELIVERY // INSTAPAY // VODAFONE CASH',
  ];

  return (
    <div
      className={`overflow-hidden border-y-2 py-3 select-none transition-colors duration-300 relative ${
        isDark
          ? 'bg-[#FFD166] border-[#001428] text-[#001428]'
          : 'bg-[#001428] border-[#001428] text-[#FFF7E6]'
      }`}
      aria-hidden="true"
    >
      <div className="ticker-track text-xs sm:text-sm font-black tracking-wider">
        {items.map((item, idx) => (
          <span key={idx} className="mx-6 inline-flex items-center gap-3">
            <span>{item}</span>
            <span className="text-[#00B4D8]">✦</span>
          </span>
        ))}
        {items.map((item, idx) => (
          <span key={`dup-${idx}`} className="mx-6 inline-flex items-center gap-3">
            <span>{item}</span>
            <span className="text-[#00B4D8]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
