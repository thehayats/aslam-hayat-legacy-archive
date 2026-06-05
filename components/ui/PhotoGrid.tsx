'use client';

import { useState } from 'react';
import type { GalleryItem } from '@/lib/articles';
import { getCategoryLabel, formatDate } from '@/lib/utils';

interface PhotoGridProps {
  items: GalleryItem[];
  showFilters?: boolean;
}

const categoryColors: Record<string, string> = {
  family: 'bg-green-light',
  professional: 'bg-gold-dark',
  events: 'bg-green',
  personal: 'bg-parchment',
};

const placeholderColors: Record<string, string> = {
  family: '#2d5c42',
  professional: '#a8893a',
  events: '#1a3a2a',
  personal: '#c9a84c',
};

export default function PhotoGrid({ items, showFilters = true }: PhotoGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['all', ...Array.from(new Set(items.map((i) => i.category)))];

  const filtered =
    activeCategory === 'all' ? items : items.filter((i) => i.category === activeCategory);

  return (
    <div>
      {/* Filters */}
      {showFilters && (
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-lora font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-green text-cream-light shadow-md'
                  : 'bg-cream-dark text-green hover:bg-cream border border-cream-dark'
              }`}
            >
              {cat === 'all' ? 'All Photos' : getCategoryLabel(cat)}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filtered.map((item) => (
          <button
            key={item.id}
            className="group relative aspect-square rounded-lg overflow-hidden shadow-sm card-hover focus:outline-none focus:ring-2 focus:ring-gold"
            onClick={() => setLightboxItem(item)}
            aria-label={`View: ${item.caption}`}
          >
            {/* Placeholder colored block (no real images yet) */}
            <div
              className="w-full h-full flex items-end"
              style={{ backgroundColor: placeholderColors[item.category] ?? '#1a3a2a' }}
            >
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-green-dark bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-cream-light opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>

              {/* Category badge */}
              <div className="relative w-full p-2">
                <span className="text-xs font-lora text-cream-light bg-black bg-opacity-40 px-2 py-0.5 rounded">
                  {getCategoryLabel(item.category)}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Simple Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxItem(null)}
        >
          <div
            className="bg-cream rounded-lg max-w-lg w-full overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Placeholder image area */}
            <div
              className="w-full aspect-video"
              style={{ backgroundColor: placeholderColors[lightboxItem.category] ?? '#1a3a2a' }}
            />
            <div className="p-5">
              <p className="font-lora text-green text-base leading-relaxed">
                {lightboxItem.caption}
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="font-lora text-xs text-gray-500">
                  {formatDate(lightboxItem.date, 'yyyy')}
                </span>
                <span
                  className={`text-xs font-lora px-2 py-0.5 rounded-full text-cream-light ${categoryColors[lightboxItem.category] ?? 'bg-green'}`}
                >
                  {getCategoryLabel(lightboxItem.category)}
                </span>
              </div>
            </div>
            <div className="px-5 pb-4">
              <button
                onClick={() => setLightboxItem(null)}
                className="w-full py-2 text-sm font-lora text-green border border-green rounded hover:bg-green hover:text-cream-light transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
