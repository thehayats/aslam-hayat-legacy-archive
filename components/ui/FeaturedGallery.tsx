'use client';

import { useState } from 'react';
import GalleryViewer from './GalleryViewer';
import type { GalleryPhoto, GalleryCategory } from '@/lib/articles';

// The six most iconic photographs — shown larger at the top
const LEGACY_IDS = [
  'ph-real-003',  // professional portrait
  'ph-real-004',  // at the Kaaba, Mecca
  'ph-real-002',  // home portrait, final years
  'ph-real-027',  // 85th birthday — full family
  'ph-real-031',  // three generations
  'ph-real-036',  // book signing, Vancouver
];

// Face-aware object-position per image filename stem
const FACE_POSITION: Record<string, string> = {
  'aslam-hayat-professional-portrait':        'center 12%',
  'aslam-hayat-mecca-1':                      'center 18%',
  'aslam-hayat-mecca-2':                      'center 18%',
  'aslam-hayat-mecca-family':                 'center 22%',
  'aslam-hayat-with-grandchild':              'center 18%',
  'aslam-hayat-home-portrait':                'center 12%',
  'aslam-hayat-hero-formal-event':            'center 18%',
  'aslam-hayat-home-green-sweater':           'center 10%',
  'aslam-hayat-home-armchair':                'center 18%',
  'aslam-hayat-saniya-wedding-lahore-2015':   'center 15%',
  'aslam-hayat-zeeshan-imtiaz-lahore-2015':   'center 22%',
  'aslam-hayat-data-sahib-shrine-lahore-2015':'center 20%',
  'aslam-hayat-salma-dubai-2015':             'center 20%',
  'aslam-hayat-zaira-wedding-2021':           'center 18%',
  'aslam-hayat-85th-birthday-vancouver':      'center 32%',
  'aslam-hayat-85th-birthday-dinner':         'center 18%',
  'aslam-hayat-85th-birthday-cake':           'center 22%',
  'aslam-hayat-three-generations':            'center 14%',
  'aslam-hayat-family-gathering-vancouver':   'center 28%',
  'aslam-hayat-birthday-at-home':             'center 28%',
  'aslam-hayat-birthday-home-celebration':    'center 22%',
  'aslam-hayat-book-signing-vancouver':       'center 14%',
  'aslam-hayat-london-with-daughter-2017':    'center 18%',
  'aslam-hayat-home-with-grandchild':         'center 16%',
  'aslam-hayat-vancouver-with-zeeshan':       'center 28%',
  'aslam-hayat-nyc-times-square-2009':        'center 22%',
  'aslam-hayat-miracle-award-surrey':         'center 12%',
  'aslam-hayat-surrey-community-event':       'center 18%',
  'aslam-hayat-miracle-15th-anniversary':     'center 20%',
  'aslam-hayat-surrey-formal-2018':           'center 30%',
};

function getPosition(src: string): string {
  const stem = src.split('/').pop()?.replace(/\.(jpg|jpeg|png|webp)$/i, '') ?? '';
  return FACE_POSITION[stem] ?? 'center 20%';
}

function shortenLocation(loc: string): string {
  if (!loc || loc === 'To be confirmed by family') return '';
  return loc
    .replace(', British Columbia, Canada', ', Canada')
    .replace(', British Columbia', ', Canada')
    .replace(', United Kingdom', ', UK')
    .replace(', United Arab Emirates', ', UAE')
    .replace('In flight — Vancouver to London', 'In flight');
}

function conciseMeta(photo: GalleryPhoto): string {
  const parts = [
    photo.date && photo.date !== 'To be confirmed by family' ? photo.date : null,
    photo.location ? shortenLocation(photo.location) : null,
  ].filter(Boolean);
  return parts.join(' · ');
}

interface PhotoCardProps {
  photo: GalleryPhoto;
  onClick: () => void;
  variant: 'legacy' | 'standard';
}

function PhotoCard({ photo, onClick, variant }: PhotoCardProps) {
  const hasImage = photo.src && !photo.src.includes('placeholder');
  const position = getPosition(photo.src ?? '');
  const meta = conciseMeta(photo);

  return (
    <button
      className="group relative w-full overflow-hidden rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gold text-left"
      style={{ background: '#0f2318' }}
      onClick={onClick}
      aria-label={`Open: ${photo.caption}`}
    >
      {/* Image — 85% of visual weight */}
      <div className={`relative w-full overflow-hidden ${variant === 'legacy' ? 'aspect-[3/4]' : 'aspect-[4/5]'}`}>
        {hasImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={photo.src}
            alt={photo.alt ?? photo.caption}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: position,
              transition: 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)',
              filter: 'brightness(1.04) contrast(1.07) saturate(1.04)',
            }}
            className="group-hover:scale-[1.04]"
          />
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: '#1a3a2a' }}
          >
            <span className="font-playfair text-6xl font-bold" style={{ color: 'rgba(245,240,232,0.15)' }}>
              {photo.caption.charAt(0)}
            </span>
          </div>
        )}

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-300"
          style={{ background: 'rgba(0,0,0,0)' }}
          onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,0,0,0.28)'; }}
          onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.background = 'rgba(0,0,0,0)'; }}
        >
          <span
            className="font-lora text-sm transition-all duration-300 opacity-0 group-hover:opacity-100"
            style={{
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.55)',
              borderRadius: '4px',
              padding: '6px 16px',
              backdropFilter: 'blur(4px)',
              background: 'rgba(0,0,0,0.2)',
            }}
          >
            View Photograph
          </span>
        </div>

        {/* Featured star badge */}
        <div
          className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full flex items-center justify-center shadow-sm"
          style={{ background: 'rgba(201,162,77,0.9)' }}
        >
          <span className="text-xs" style={{ color: '#0f2318', lineHeight: 1 }}>★</span>
        </div>
      </div>

      {/* Caption — compact 15% */}
      <div className="px-3 py-2.5">
        <p
          className="font-lora leading-snug line-clamp-1"
          style={{ fontSize: '0.72rem', color: 'rgba(245,240,232,0.88)', fontWeight: 500 }}
        >
          {photo.caption}
        </p>
        {meta && (
          <p
            className="font-lora line-clamp-1 mt-0.5"
            style={{ fontSize: '0.65rem', color: 'rgba(245,240,232,0.38)', lineHeight: '1.2' }}
          >
            {meta}
          </p>
        )}
      </div>
    </button>
  );
}

interface FeaturedGalleryProps {
  photos: GalleryPhoto[];
  categories: GalleryCategory[];
}

export default function FeaturedGallery({ photos }: FeaturedGalleryProps) {
  const [viewerIndex, setViewerIndex] = useState<number | null>(null);

  const legacyPhotos = LEGACY_IDS
    .map((id) => photos.find((p) => p.id === id))
    .filter((p): p is GalleryPhoto => p != null);

  const legacyIdSet = new Set(LEGACY_IDS);
  const remainingFeatured = photos.filter((p) => !legacyIdSet.has(p.id));

  const openPhoto = (photo: GalleryPhoto) => {
    const idx = photos.indexOf(photo);
    setViewerIndex(idx >= 0 ? idx : 0);
  };

  return (
    <>
      {/* ── Featured Legacy Collection ────────────────────────── */}
      {legacyPhotos.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div>
              <h3 className="font-playfair text-xl text-green font-bold">
                Featured Legacy Collection
              </h3>
              <p className="font-lora text-sm text-gray-500 mt-0.5 italic">
                Iconic moments from a remarkable life
              </p>
            </div>
            <div className="flex-1 h-px" style={{ background: 'rgba(201,162,77,0.25)' }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
            {legacyPhotos.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                variant="legacy"
                onClick={() => openPhoto(photo)}
              />
            ))}
          </div>
        </div>
      )}

      {/* ── Remaining Featured ────────────────────────────────── */}
      {remainingFeatured.length > 0 && (
        <div>
          <div className="flex items-center gap-4 mb-5">
            <h3 className="font-playfair text-lg text-green font-bold whitespace-nowrap">
              Selected Photographs
            </h3>
            <div className="flex-1 h-px" style={{ background: 'rgba(201,162,77,0.18)' }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {remainingFeatured.map((photo) => (
              <PhotoCard
                key={photo.id}
                photo={photo}
                variant="standard"
                onClick={() => openPhoto(photo)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Fullscreen viewer */}
      {viewerIndex !== null && (
        <GalleryViewer
          photos={photos}
          initialIndex={viewerIndex}
          onClose={() => setViewerIndex(null)}
        />
      )}
    </>
  );
}
