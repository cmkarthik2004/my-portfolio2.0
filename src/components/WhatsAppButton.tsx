import React, { useState } from 'react';

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  // International phone format without spaces or symbols for wa.me URL
  const phone = '917899443730';
  const defaultMessage = 'Hi Karthik, I visited your portfolio and would like to discuss a project.';
  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      id="floating-whatsapp-container"
      className="fixed bottom-[18px] right-[18px] sm:bottom-6 sm:right-6 z-40 flex items-center print:hidden select-none"
      aria-label="Direct WhatsApp Contact"
    >
      <div className="relative flex items-center group">
        {/* Desktop Tooltip - Appears smoothly on hover or focus */}
        <div
          id="whatsapp-tooltip"
          role="tooltip"
          className={`pointer-events-none absolute right-full mr-3 whitespace-nowrap px-3 py-1.5 rounded-lg bg-stone-900/95 dark:bg-stone-800/95 text-stone-100 text-xs font-semibold tracking-wide shadow-lg border border-stone-700/60 dark:border-stone-600/50 transition-all duration-200 hidden sm:flex items-center gap-1.5 ${
            isHovered
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-1 group-focus-within:opacity-100 group-focus-within:translate-x-0'
          }`}
          aria-hidden={!isHovered}
        >
          <span>Chat on WhatsApp</span>
          {/* Subtle directional tail */}
          <div
            className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 rotate-45 bg-stone-900/95 dark:bg-stone-800/95 border-t border-r border-stone-700/60 dark:border-stone-600/50"
            aria-hidden="true"
          />
        </div>

        {/* Circular Floating Action Button */}
        <a
          id="floating-whatsapp-btn"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          className="relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-lg shadow-[#25D366]/25 hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-200 hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-stone-900 cursor-pointer"
          aria-label="Chat with C M Karthik on WhatsApp"
        >
          {/* Official WhatsApp Speech Bubble + Phone Glyph SVG */}
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 fill-white shrink-0 drop-shadow-xs"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>
    </aside>
  );
};
