'use client';

import { useEffect, useCallback, useState, useRef } from 'react';
import type { GalleryPhoto } from '@/lib/articles';

function shortenLocation(loc: string): string {
  return loc
    .replace(', British Columbia, Canada', ', Canada')
    .replace(', British Columbia', ', Canada')
    .replace(', United Kingdom', ', UK')
    .replace(', United Arab Emirates', ', UAE')
    .replace('In flight — Vancouver to London', 'In flight');
}

interface GalleryViewerProps {
  photos: GalleryPhoto[];
  initialIndex: number;
  onClose: () => void;
}

export default function GalleryViewer({ photos, initialIndex, onClose }: GalleryViewerProps) {
  const [index, setIndex] = useState(initialIndex);
  const [zoomed, setZoomed] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const photo = photos[index];

  const prev = useCallback(() => {
    setZoomed(false);
    setIndex((i) => (i > 0 ? i - 1 : photos.length - 1));
  }, [photos.length]);

  const next = useCallback(() => {
    setZoomed(false);
    setIndex((i) => (i < photos.length - 1 ? i + 1 : 0));
  }, [photos.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, prev, next]);

  useEffect(() => {
    const orig = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = orig; };
  }, []);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) dx < 0 ? next() : prev();
    touchStartX.current = null;
  };

  const hasImage = photo.src && !photo.src.includes('placeholder');
  const metaParts = [
    photo.date && photo.date !== 'To be confirmed by family' ? photo.date : null,
    photo.location && photo.location !== 'To be confirmed by family' ? shortenLocation(photo.location) : null,
  ].filter(Boolean);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption}
      className="fixed inset-0 z-[200] flex flex-col"
      style={{ background: 'rgba(4,8,6,0.97)', backdropFilter: 'blur(2px)' }}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Top bar */}
      <div
        className="flex items-center justify-between px-5 py-3 flex-shrink-0"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div className="flex items-center gap-3">
          <span className="font-lora text-xs tabular-nums" style={{ color: 'rgba(255,255,255,0.35)' }}>
            {index + 1} / {photos.length}
          </span>
          {photo.featured && (
            <span className="font-lora text-xs" style={{ color: '#c9a24d' }}>★ Featured</span>
          )}
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-200 hover:bg-white/10"
          style={{ color: 'rgba(255,255,255,0.55)' }}
          aria-label="Close viewer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Image */}
      <div className="flex-1 relative flex items-center justify-center min-h-0 overflow-hidden px-14 sm:px-16">
        {photos.length > 1 && (
          <button
            onClick={prev}
            className="absolute left-2 sm:left-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/15 focus:outline-none"
            style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.75)', fontSize: '22px' }}
            aria-label="Previous"
          >‹</button>
        )}

        <div
          style={{ cursor: zoomed ? 'zoom-out' : 'zoom-in', maxWidth: '100%', maxHeight: '100%' }}
          onClick={() => setZoomed((z) => !z)}
        >
          {hasImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={photo.src}
              src={photo.src}
              alt={photo.alt ?? photo.caption}
              style={{
                maxWidth: '100%',
                maxHeight: 'calc(100vh - 160px)',
                objectFit: 'contain',
                display: 'block',
                transition: 'transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
                transform: zoomed ? 'scale(2.2)' : 'scale(1)',
                transformOrigin: 'center center',
                filter: 'brightness(1.03) contrast(1.05)',
                cursor: 'inherit',
              }}
            />
          ) : (
            <div
              className="flex items-center justify-center rounded-lg"
              style={{ width: '180px', height: '180px', background: 'rgba(26,58,42,0.5)' }}
            >
              <span className="font-playfair text-4xl font-bold" style={{ color: 'rgba(245,240,232,0.15)' }}>
                {photo.caption.charAt(0)}
              </span>
            </div>
          )}
        </div>

        {photos.length > 1 && (
          <button
            onClick={next}
            className="absolute right-2 sm:right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:bg-white/15 focus:outline-none"
            style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.75)', fontSize: '22px' }}
            aria-label="Next"
          >›</button>
        )}
      </div>

      {/* Caption */}
      <div
        className="flex-shrink-0 text-center px-6 py-4"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <p className="font-lora text-sm leading-snug mb-1" style={{ color: 'rgba(255,255,255,0.88)' }}>
          {photo.caption}
        </p>
        {metaParts.length > 0 && (
          <p className="font-lora text-xs" style={{ color: 'rgba(255,255,255,0.38)' }}>
            {metaParts.join(' · ')}
          </p>
        )}
        {photo.description && (
          <p
            className="font-lora text-xs mt-2 max-w-xl mx-auto leading-relaxed line-clamp-2"
            style={{ color: 'rgba(255,255,255,0.42)' }}
          >
            {photo.description}
          </p>
        )}
        {!zoomed && (
          <p className="font-lora text-xs mt-2" style={{ color: 'rgba(255,255,255,0.20)' }}>
            Click image to zoom · ← → to navigate · Esc to close
          </p>
        )}
      </div>
    </div>
  );
}
