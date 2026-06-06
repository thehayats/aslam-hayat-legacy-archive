'use client';

import { useState } from 'react';
import GalleryViewer from './GalleryViewer';
import type { GalleryCategory, GalleryPhoto } from '@/lib/articles';

interface PhotoGridProps {
  photos: GalleryPhoto[];
  categories: GalleryCategory[];
}

const PLACEHOLDER_COLORS: Record<string, string> = {
  family: '#2d5c42',
  pakistan: '#1a3a2a',
  canada: '#0f2318',
  professional: '#a8893a',
  documents: '#c9a84c',
  community: '#4a7c5f',
  'final-years': '#1a3a2a',
  faith: '#1a3a2a',
};

interface PhotoCardProps {
  photo: GalleryPhoto;
  categoryLabel: string;
  onOpen: () => void;
}

function PhotoCard({ photo, categoryLabel, onOpen }: PhotoCardProps) {
  const [imgError, setImgError] = useState(false);
  const hasImage = !imgError && photo.src && !photo.src.includes('placeholder');

  return (
    <button
      className="group relative aspect-square rounded-lg overflow-hidden shadow-sm focus:outline-none focus:ring-2 focus:ring-gold"
      style={{ background: PLACEHOLDER_COLORS[photo.category] ?? '#1a3a2a' }}
      onClick={onOpen}
      aria-label={`View: ${photo.caption}`}
    >
      {hasImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photo.src}
          alt={photo.alt ?? photo.caption}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          style={{ filter: 'brightness(1.03) contrast(1.06)' }}
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center">
          <span className="font-playfair text-4xl text-cream-dark opacity-20 font-bold select-none">
            {(photo.caption ?? '').trim().charAt(0).toUpperCase()}
          </span>
        </div>
      )}

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-green-dark bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-3">
        <p className="font-lora text-xs text-cream-light opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2 text-left leading-snug">
          {photo.caption}
        </p>
        <span
          className="font-lora text-xs text-cream-dark opacity-0 group-hover:opacity-70 transition-opacity duration-300 mt-0.5 text-left"
        >
          Click to view fullscreen
        </span>
      </div>

      {/* Featured badge */}
      {photo.featured && (
        <div
          className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center shadow"
          style={{ background: 'rgba(201,162,77,0.9)' }}
        >
          <span className="text-xs" style={{ color: '#0f2318' }}>★</span>
        </div>
      )}

      {/* Category label */}
      <div className="absolute bottom-2 left-2">
        <span className="text-xs font-lora text-cream-light bg-black bg-opacity-45 px-2 py-0.5 rounded">
          {categoryLabel}
        </span>
      </div>
    </button>
  );
}

export default function PhotoGrid({ photos, categories }: PhotoGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const getCategoryLabel = (id: string) =>
    categories.find((c) => c.id === id)?.label ?? id;

  const filtered =
    activeCategory === 'all' ? photos : photos.filter((p) => p.category === activeCategory);

  const activeCats = Array.from(new Set(photos.map((p) => p.category)));

  return (
    <div>
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-7">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-1.5 rounded-full text-sm font-lora font-medium transition-all duration-200 ${
            activeCategory === 'all'
              ? 'bg-green text-cream-light shadow-md'
              : 'bg-cream-dark text-green hover:bg-cream border border-cream-dark'
          }`}
        >
          All ({photos.length})
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3">
        {filtered.map((photo, idx) => (
          <PhotoCard
            key={photo.id}
            photo={photo}
            categoryLabel={getCategoryLabel(photo.category)}
            onOpen={() => setLightboxIndex(idx)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="font-lora text-gray-500 text-base">No photos in this category yet.</p>
        </div>
      )}

      {/* Fullscreen viewer */}
      {lightboxIndex !== null && (
        <GalleryViewer
          photos={filtered}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
