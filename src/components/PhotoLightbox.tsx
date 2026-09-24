import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { getAssetUrl } from '../utils/assetHelper';

interface PhotoLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  imageAlt: string;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
}) => {
  // Prevent body scrolling when open and handle Escape key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const webpUrl = imageSrc.endsWith('.webp')
    ? imageSrc
    : imageSrc.replace(/\.(png|jpe?g)$/i, '.webp');
  const fallbackUrl = imageSrc.endsWith('.webp')
    ? imageSrc.replace(/\.webp$/i, '.png')
    : imageSrc;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="photo-lightbox-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-[#faf8f5]/85 dark:bg-[#0c0a09]/85 backdrop-blur-md cursor-zoom-out select-none"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="3D Portrait Lightbox"
        >
          {/* Minimal Floating Close Button */}
          <button
            id="lightbox-close-button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-stone-900/10 hover:bg-stone-900/20 dark:bg-white/10 dark:hover:bg-white/20 text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white border border-stone-200/60 dark:border-stone-800/80 backdrop-blur-md transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95 flex items-center justify-center"
            aria-label="Close portrait preview"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Floating 3D Portrait (No rectangular box, no card, no solid dark background) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center max-w-full max-h-full pointer-events-none"
          >
            <picture className="contents">
              <source
                srcSet={getAssetUrl(webpUrl)}
                type="image/webp"
              />
              <img
                src={getAssetUrl(fallbackUrl)}
                alt={imageAlt}
                width={1122}
                height={1402}
                decoding="async"
                className="max-h-[82vh] sm:max-h-[86vh] w-auto max-w-[88vw] sm:max-w-[78vw] md:max-w-[70vw] lg:max-w-[60vw] object-contain select-none drop-shadow-[0_22px_45px_rgba(28,25,23,0.14)] dark:drop-shadow-[0_28px_55px_rgba(0,0,0,0.65)] pointer-events-auto cursor-zoom-out"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
              />
            </picture>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

