'use client';

import { useState } from 'react';
import type { GalleryCategory, GalleryPhoto } from '@/lib/articles';

interface PhotoGridProps {
  photos: GalleryPhoto[];
  categories: GalleryCategory[];
}

const placeholderColors: Record<string, string> = {
  family: '#2d5c42',
  pakistan: '#1a3a2a',
  canada: '#0f2318',
  professional: '#a8893a',
  documents: '#c9a84c',
  community: '#4a7c5f',
  'final-years': '#1a3a2a',
};

function getPlaceholderColor(category: string): string {
  return placeholderColors[category] ?? '#1a3a2a';
}

function getInitial(caption: string): string {
  return caption.trim().charAt(0).toUpperCase();
}

interface PhotoCardProps {
  photo: GalleryPhoto;
  categoryLabel: string;
  onOpen: (photo: GalleryPhoto) => void;
}

function PhotoCard({ photo, categoryLabel, onOpen }: PhotoCardProps) {
  const [imgError, setImgError] = useState(false);
  const bgColor = getPlaceholderColor(photo.category);

  return (
    <button
      className="group relative aspect-square rounded-lg overflow-hidden shadow-sm card-hover focus:outline-none focus:ring-2 focus:ring-gold"
      onClick={() => onOpen(photo)}
      aria-label={`View photo: ${photo.caption}`}
    >
      {/* Image or placeholder */}
      {!imgError && photo.src && !photo.src.includes('placeholder') ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo.src}
          alt={photo.alt ?? photo.caption}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          className="w-full h-full flex flex-col items-center justify-center"
          style={{ backgroundColor: bgColor }}
        >
          <span className="font-playfair text-4xl text-cream-dark opacity-30 font-bold select-none">
            {getInitial(photo.caption)}
          </span>
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-green-dark bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex flex-col justify-end p-3">
        <p className="font-lora text-xs text-cream-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 text-left leading-snug">
          {photo.caption}
        </p>
      </div>

      {/* Featured star badge */}
      {photo.featured && (
        <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gold flex items-center justify-center shadow">
          <span className="text-green-dark text-xs">★</span>
        </div>
      )}

      {/* Category badge */}
      <div className="absolute bottom-2 left-2">
        <span className="text-xs font-lora text-cream-light bg-black bg-opacity-50 px-2 py-0.5 rounded">
          {categoryLabel}
        </span>
      </div>
    </button>
  );
}

interface LightboxProps {
  photo: GalleryPhoto;
  categoryLabel: string;
  onClose: () => void;
}

function Lightbox({ photo, categoryLabel, onClose }: LightboxProps) {
  const [imgError, setImgError] = useState(false);
  const bgColor = getPlaceholderColor(photo.category);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-85 z-50 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption}
    >
      <div
        className="bg-cream rounded-lg max-w-2xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-cream-dark">
          <span className="font-lora text-xs text-gold-dark uppercase tracking-wide">
            {categoryLabel}
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-cream-dark hover:bg-green hover:text-cream-light text-green flex items-center justify-center transition-colors duration-200 text-lg leading-none"
            aria-label="Close photo"
          >
            ×
          </button>
        </div>

        {/* Image or placeholder */}
        <div className="flex-shrink-0 w-full bg-black flex items-center justify-center" style={{ maxHeight: '65vh' }}>
          {!imgError && photo.src && !photo.src.includes('placeholder') ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={photo.src}
              alt={photo.alt ?? photo.caption}
              className="max-w-full max-h-full object-contain"
              style={{ maxHeight: '65vh' }}
              onError={() => setImgError(true)}
            />
          ) : (
            <div
              className="w-full flex flex-col items-center justify-center py-16"
              style={{ backgroundColor: bgColor }}
            >
              <span className="font-playfair text-6xl text-cream-dark opacity-20 font-bold select-none">
                {getInitial(photo.caption)}
              </span>
              <p className="font-lora text-xs text-cream-dark opacity-40 mt-2">
                Photo placeholder — image to be added
              </p>
            </div>
          )}
        </div>

        {/* Details */}
        <div className="p-5 overflow-y-auto">
          <p className="font-lora text-green text-base leading-relaxed font-medium mb-2">
            {photo.caption}
          </p>

          {photo.description && (
            <p className="font-lora text-sm text-gray-600 leading-relaxed mb-4">
              {photo.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-3 border-t border-cream-dark">
            {photo.date && (
              <span className="flex items-center gap-1.5 font-lora text-xs text-gray-500">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {photo.date}
              </span>
            )}
            {photo.location && (
              <span className="flex items-center gap-1.5 font-lora text-xs text-gray-500">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {photo.location}
              </span>
            )}
            {photo.featured && (
              <span className="flex items-center gap-1 font-lora text-xs text-gold-dark">
                <span>★</span> Featured
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PhotoGrid({ photos, categories }: PhotoGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const getCategoryLabel = (categoryId: string): string => {
    const cat = categories.find((c) => c.id === categoryId);
    return cat?.label ?? categoryId;
  };

  const filtered =
    activeCategory === 'all' ? photos : photos.filter((p) => p.category === activeCategory);

  const activeCats = Array.from(new Set(photos.map((p) => p.category)));

  return (
    <div>
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-1.5 rounded-full text-sm font-lora font-medium transition-all duration-200 ${
            activeCategory === 'all'
              ? 'bg-green text-cream-light shadow-md'
              : 'bg-cream-dark text-green hover:bg-cream border border-cream-dark'
          }`}
        >
          All Photos ({photos.length})
        </button>
        {categories
          .filter((cat) => activeCats.includes(cat.id))
          .map((cat) => {
            const count = photos.filter((p) => p.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-lora font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-green text-cream-light shadow-md'
                    : 'bg-cream-dark text-green hover:bg-cream border border-cream-dark'
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
      </div>

      {/* Photo grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((photo) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            categoryLabel={getCategoryLabel(photo.category)}
            onOpen={setLightboxPhoto}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="font-lora text-gray-500 text-base">
            No photos in this category yet.
          </p>
        </div>
      )}

      {/* Lightbox */}
      {lightboxPhoto && (
        <Lightbox
          photo={lightboxPhoto}
          categoryLabel={getCategoryLabel(lightboxPhoto.category)}
          onClose={() => setLightboxPhoto(null)}
        />
      )}
    </div>
  );
}
