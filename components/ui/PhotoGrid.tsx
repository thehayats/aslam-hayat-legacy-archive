'use client';

import { useState } from 'react';
import GalleryViewer from './GalleryViewer';
import type { GalleryCategory, GalleryPhoto } from '@/lib/articles';

// --- shared helpers (duplicated from FeaturedGallery for self-containment) ---

const IMG_FILTER: Record<string, string> = {
  'aslam-hayat-professional-portrait':        'brightness(1.04) contrast(1.07) saturate(1.04)',
  'aslam-hayat-mecca-1':                      'brightness(1.05) contrast(1.06) saturate(1.05)',
  'aslam-hayat-mecca-2':                      'brightness(1.05) contrast(1.06) saturate(1.05)',
  'aslam-hayat-mecca-family':                 'brightness(1.07) contrast(1.08) saturate(1.05)',
  'aslam-hayat-nyc-times-square-2009':        'brightness(1.05) contrast(1.07) saturate(1.06)',
  'aslam-hayat-salma-dubai-2015':             'brightness(1.05) contrast(1.06) saturate(1.05)',
  'aslam-hayat-zaira-wedding-2021':           'brightness(1.06) contrast(1.07) saturate(1.04)',
  'aslam-hayat-miracle-award-surrey':         'brightness(1.08) contrast(1.08) saturate(1.04)',
  'aslam-hayat-home-portrait':                'brightness(1.07) contrast(1.09) saturate(1.04)',
  'aslam-hayat-home-green-sweater':           'brightness(1.07) contrast(1.09) saturate(1.04)',
  'aslam-hayat-home-armchair':                'brightness(1.08) contrast(1.09) saturate(1.04)',
  'aslam-hayat-hero-formal-event':            'brightness(1.08) contrast(1.08) saturate(1.04)',
  'aslam-hayat-book-signing-vancouver':       'brightness(1.09) contrast(1.08) saturate(1.04)',
  'aslam-hayat-home-with-grandchild':         'brightness(1.09) contrast(1.09) saturate(1.04)',
  'aslam-hayat-three-generations':            'brightness(1.12) contrast(1.09) saturate(1.04)',
  'aslam-hayat-london-with-daughter-2017':    'brightness(1.07) contrast(1.08) saturate(1.05)',
  'aslam-hayat-85th-birthday-vancouver':      'brightness(1.15) contrast(1.10) saturate(1.05)',
  'aslam-hayat-85th-birthday-dinner':         'brightness(1.15) contrast(1.10) saturate(1.05)',
  'aslam-hayat-85th-birthday-cake':           'brightness(1.15) contrast(1.10) saturate(1.05)',
  'aslam-hayat-85th-birthday-table':          'brightness(1.13) contrast(1.09) saturate(1.05)',
  'aslam-hayat-birthday-at-home':             'brightness(1.11) contrast(1.09) saturate(1.04)',
  'aslam-hayat-birthday-cake-cutting':        'brightness(1.11) contrast(1.09) saturate(1.04)',
  'aslam-hayat-birthday-home-celebration':    'brightness(1.11) contrast(1.09) saturate(1.04)',
  'aslam-hayat-family-gathering-vancouver':   'brightness(1.11) contrast(1.09) saturate(1.04)',
  'aslam-hayat-vancouver-with-zeeshan':       'brightness(1.11) contrast(1.09) saturate(1.05)',
  'aslam-hayat-surrey-formal-2018':           'brightness(1.20) contrast(1.14) saturate(1.06)',
  'aslam-hayat-mecca-2019':                   'brightness(1.05) contrast(1.06) saturate(1.05)',
  'aslam-hayat-madinah-2019':                 'brightness(1.06) contrast(1.07) saturate(1.05)',
  'aslam-hayat-jeddah-2019-1':                'brightness(1.05) contrast(1.06) saturate(1.05)',
  'aslam-hayat-jeddah-2019-2':                'brightness(1.05) contrast(1.06) saturate(1.05)',
  'aslam-hayat-jeddah-2019-3':                'brightness(1.05) contrast(1.06) saturate(1.05)',
  'aslam-hayat-jeddah-2019-4':                'brightness(1.05) contrast(1.06) saturate(1.05)',
  'aslam-hayat-with-kamran-zeeshan-home':     'brightness(1.08) contrast(1.08) saturate(1.04)',
  'aslam-hayat-saniya-wedding-2015-ceremony': 'brightness(1.06) contrast(1.07) saturate(1.04)',
  'aslam-hayat-91st-birthday':                'brightness(1.09) contrast(1.08) saturate(1.04)',
  'aslam-hayat-91st-birthday-2':              'brightness(1.09) contrast(1.08) saturate(1.04)',
  'aslam-hayat-91st-birthday-3':              'brightness(1.09) contrast(1.08) saturate(1.04)',
  'aslam-hayat-family-home-gathering':        'brightness(1.08) contrast(1.08) saturate(1.04)',
  'aslam-hayat-mecca-2015-1':                 'brightness(1.05) contrast(1.06) saturate(1.05)',
  'aslam-hayat-mecca-2015-2':                 'brightness(1.05) contrast(1.06) saturate(1.05)',
  'aslam-hayat-madinah-2015':                 'brightness(1.06) contrast(1.07) saturate(1.05)',
  'aslam-hayat-with-aliya-kamran-shazia':     'brightness(1.08) contrast(1.08) saturate(1.04)',
  'aslam-hayat-with-nina-elahi-family':       'brightness(1.08) contrast(1.08) saturate(1.04)',
  'aslam-hayat-with-amara-portrait':          'brightness(1.09) contrast(1.08) saturate(1.04)',
  'aslam-hayat-with-amara-home':              'brightness(1.09) contrast(1.08) saturate(1.04)',
  'aslam-hayat-yvr-departing-london':         'brightness(1.07) contrast(1.07) saturate(1.04)',
  'aslam-hayat-with-azan-amara':              'brightness(1.09) contrast(1.08) saturate(1.04)',
  'aslam-hayat-family-home-2':                'brightness(1.08) contrast(1.08) saturate(1.04)',
  'aslam-hayat-family-celebration-1':         'brightness(1.09) contrast(1.08) saturate(1.04)',
  'aslam-hayat-family-celebration-2':         'brightness(1.09) contrast(1.08) saturate(1.04)',
  'aslam-hayat-family-celebration-3':         'brightness(1.09) contrast(1.08) saturate(1.04)',
  'aslam-hayat-family-celebration-4':         'brightness(1.09) contrast(1.08) saturate(1.04)',
};
const DEFAULT_FILTER = 'brightness(1.06) contrast(1.07) saturate(1.04)';

const FACE_POS: Record<string, string> = {
  'aslam-hayat-professional-portrait':         'center 12%',
  'aslam-hayat-mecca-1':                       'center 20%',
  'aslam-hayat-mecca-2':                       'center 20%',
  'aslam-hayat-mecca-family':                  'center 22%',
  'aslam-hayat-home-portrait':                 'center 12%',
  'aslam-hayat-hero-formal-event':             'center 18%',
  'aslam-hayat-home-green-sweater':            'center 10%',
  'aslam-hayat-home-armchair':                 'center 16%',
  'aslam-hayat-home-with-grandchild':          'center 16%',
  'aslam-hayat-three-generations':             'center 12%',
  'aslam-hayat-85th-birthday-vancouver':       'center 32%',
  'aslam-hayat-85th-birthday-dinner':          'center 18%',
  'aslam-hayat-85th-birthday-cake':            'center 22%',
  'aslam-hayat-85th-birthday-table':           'center 30%',
  'aslam-hayat-family-gathering-vancouver':    'center 28%',
  'aslam-hayat-birthday-at-home':              'center 28%',
  'aslam-hayat-birthday-cake-cutting':         'center 26%',
  'aslam-hayat-birthday-home-celebration':     'center 24%',
  'aslam-hayat-book-signing-vancouver':        'center 14%',
  'aslam-hayat-saniya-wedding-lahore-2015':    'center 15%',
  'aslam-hayat-zeeshan-imtiaz-lahore-2015':    'center 22%',
  'aslam-hayat-data-sahib-shrine-lahore-2015': 'center 20%',
  'aslam-hayat-salma-dubai-2015':              'center 20%',
  'aslam-hayat-zaira-wedding-2021':            'center 18%',
  'aslam-hayat-london-with-daughter-2017':     'center 18%',
  'aslam-hayat-nyc-times-square-2009':         'center 22%',
  'aslam-hayat-miracle-award-surrey':          'center 12%',
  'aslam-hayat-surrey-community-event':        'center 18%',
  'aslam-hayat-surrey-formal-2018':            'center 35%',
  'aslam-hayat-vancouver-with-zeeshan':        'center 28%',
  'aslam-hayat-miracle-15th-anniversary':      'center 22%',
  'aslam-hayat-mecca-2019':                    'center 22%',
  'aslam-hayat-madinah-2019':                  'center 20%',
  'aslam-hayat-jeddah-2019-1':                 'center 20%',
  'aslam-hayat-jeddah-2019-2':                 'center 20%',
  'aslam-hayat-jeddah-2019-3':                 'center 20%',
  'aslam-hayat-jeddah-2019-4':                 'center 20%',
  'aslam-hayat-with-kamran-zeeshan-home':      'center 22%',
  'aslam-hayat-saniya-wedding-2015-ceremony':  'center 20%',
  'aslam-hayat-91st-birthday':                 'center 18%',
  'aslam-hayat-91st-birthday-2':               'center 22%',
  'aslam-hayat-91st-birthday-3':               'center 18%',
  'aslam-hayat-family-home-gathering':         'center 20%',
  'aslam-hayat-mecca-2015-1':                  'center 20%',
  'aslam-hayat-mecca-2015-2':                  'center 20%',
  'aslam-hayat-madinah-2015':                  'center 20%',
  'aslam-hayat-with-aliya-kamran-shazia':      'center 20%',
  'aslam-hayat-with-nina-elahi-family':        'center 18%',
  'aslam-hayat-with-amara-portrait':           'center 16%',
  'aslam-hayat-with-amara-home':               'center 20%',
  'aslam-hayat-yvr-departing-london':          'center 22%',
  'aslam-hayat-with-azan-amara':               'center 24%',
  'aslam-hayat-family-home-2':                 'center 20%',
  'aslam-hayat-family-celebration-1':          'center 22%',
  'aslam-hayat-family-celebration-2':          'center 20%',
  'aslam-hayat-family-celebration-3':          'center 20%',
  'aslam-hayat-family-celebration-4':          'center 20%',
};
const DEFAULT_POS = 'center 20%';

// Exact aspect ratios from measured pixel dimensions — prevents layout shift in masonry
const ASPECT_RATIO: Record<string, string> = {
  'aslam-hayat-85th-birthday-cake':              '900 / 1202',
  'aslam-hayat-85th-birthday-dinner':            '900 / 1125',
  'aslam-hayat-85th-birthday-table':             '1200 / 991',
  'aslam-hayat-85th-birthday-vancouver':         '1200 / 810',
  'aslam-hayat-attiya-grave-lahore-2015':        '4 / 3',
  'aslam-hayat-birthday-at-home':                '1200 / 782',
  'aslam-hayat-birthday-cake-cutting':           '1200 / 744',
  'aslam-hayat-birthday-home-celebration':       '1200 / 771',
  'aslam-hayat-book-signing-vancouver':          '900 / 1227',
  'aslam-hayat-casual':                          '4 / 3',
  'aslam-hayat-data-sahib-shrine-lahore-2015':   '4 / 3',
  'aslam-hayat-family-2017':                     '4 / 3',
  'aslam-hayat-family-celebration':              '4 / 3',
  'aslam-hayat-family-gathering-vancouver':      '1200 / 877',
  'aslam-hayat-formal-event':                    '1066 / 1600',
  'aslam-hayat-formal-lahore-2015':              '3 / 4',
  'aslam-hayat-hero-formal-event':               '1279 / 1920',
  'aslam-hayat-home-armchair':                   '1140 / 1200',
  'aslam-hayat-home-green-sweater':              '1035 / 1200',
  'aslam-hayat-home-portrait':                   '4 / 3',
  'aslam-hayat-home-with-grandchild':            '900 / 1260',
  'aslam-hayat-lahore-2015':                     '4 / 3',
  'aslam-hayat-london-flight-2017':              '4 / 3',
  'aslam-hayat-london-with-daughter-2017':       '1200 / 975',
  'aslam-hayat-mecca-1':                         '4 / 3',
  'aslam-hayat-mecca-2':                         '4 / 3',
  'aslam-hayat-mecca-family':                    '3 / 4',
  'aslam-hayat-miracle-15th-anniversary':        '1200 / 808',
  'aslam-hayat-miracle-award-surrey':            '750 / 1200',
  'aslam-hayat-nyc-times-square-2009':           '4 / 3',
  'aslam-hayat-professional-portrait':           '933 / 1200',
  'aslam-hayat-restaurant':                      '4 / 3',
  'aslam-hayat-salma-dubai-2015':                '4 / 3',
  'aslam-hayat-saniya-wedding-lahore-2015':      '4 / 3',
  'aslam-hayat-surrey-community-event':          '3 / 4',
  'aslam-hayat-surrey-formal-2018':              '560 / 523',
  'aslam-hayat-three-generations':               '900 / 1485',
  'aslam-hayat-vancouver-with-zeeshan':          '1200 / 940',
  'aslam-hayat-vancouver':                       '4 / 3',
  'aslam-hayat-with-grandchild':                 '4 / 3',
  'aslam-hayat-zaira-wedding-2021':              '3 / 4',
  'aslam-hayat-zeeshan-imtiaz-lahore-2015':      '4 / 3',
  'aslam-hayat-mecca-2019':                      '1200 / 900',
  'aslam-hayat-madinah-2019':                    '900 / 1200',
  'aslam-hayat-jeddah-2019-1':                   '900 / 1200',
  'aslam-hayat-jeddah-2019-2':                   '900 / 1200',
  'aslam-hayat-jeddah-2019-3':                   '900 / 1200',
  'aslam-hayat-jeddah-2019-4':                   '900 / 1200',
  'aslam-hayat-with-kamran-zeeshan-home':        '4 / 3',
  'aslam-hayat-saniya-wedding-2015-ceremony':    '4 / 3',
  'aslam-hayat-91st-birthday':                   '900 / 1599',
  'aslam-hayat-91st-birthday-2':                 '4 / 3',
  'aslam-hayat-91st-birthday-3':                 '3 / 4',
  'aslam-hayat-family-home-gathering':           '3 / 4',
  'aslam-hayat-mecca-2015-1':                    '3 / 4',
  'aslam-hayat-mecca-2015-2':                    '3 / 4',
  'aslam-hayat-madinah-2015':                    '3 / 4',
  'aslam-hayat-with-aliya-kamran-shazia':        '1200 / 675',
  'aslam-hayat-with-nina-elahi-family':          '900 / 1601',
  'aslam-hayat-with-amara-portrait':             '3 / 4',
  'aslam-hayat-with-amara-home':                 '3 / 4',
  'aslam-hayat-yvr-departing-london':            '4 / 3',
  'aslam-hayat-with-azan-amara':                 '4 / 3',
  'aslam-hayat-family-home-2':                   '3 / 4',
  'aslam-hayat-family-celebration-1':            '4 / 3',
  'aslam-hayat-family-celebration-2':            '3 / 4',
  'aslam-hayat-family-celebration-3':            '3 / 4',
  'aslam-hayat-family-celebration-4':            '3 / 4',
};

const PLACEHOLDER_COLORS: Record<string, string> = {
  family: '#2d5c42', pakistan: '#1a3a2a', canada: '#0f2318',
  professional: '#a8893a', documents: '#c9a84c', community: '#4a7c5f',
  'final-years': '#1a3a2a', faith: '#1a3a2a',
};

function getStem(src: string): string {
  return src.split('/').pop()?.replace(/\.(jpg|jpeg|png|webp)$/i, '') ?? '';
}
function getFilter(src: string): string { return IMG_FILTER[getStem(src)] ?? DEFAULT_FILTER; }
function getPosition(src: string): string { return FACE_POS[getStem(src)] ?? DEFAULT_POS; }
function getAspectRatio(src: string): string { return ASPECT_RATIO[getStem(src)] ?? '4 / 3'; }

function shortenLocation(loc: string): string {
  if (!loc || loc === 'To be confirmed by family') return '';
  return loc
    .replace(', British Columbia, Canada', ', Canada')
    .replace(', British Columbia', ', Canada')
    .replace(', United Kingdom', ', UK')
    .replace(', United Arab Emirates', ', UAE')
    .replace('In flight — Vancouver to London', 'In flight');
}

interface PhotoGridProps {
  photos: GalleryPhoto[];
  categories: GalleryCategory[];
}

export default function PhotoGrid({ photos, categories }: PhotoGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'all' ? photos : photos.filter((p) => p.category === activeCategory);
  const activeCats = Array.from(new Set(photos.map((p) => p.category)));
  const getCategoryLabel = (id: string) => categories.find((c) => c.id === id)?.label ?? id;

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveCategory('all')}
          className={`px-4 py-1.5 rounded-full text-sm font-lora font-medium transition-all duration-200 ${
            activeCategory === 'all'
              ? 'bg-green text-cream-light shadow-md'
              : 'bg-cream-dark text-green hover:bg-cream border border-cream-dark'
          }`}
        >
          All ({photos.filter(p => !p.src.includes('placeholder')).length})
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

      {/* Masonry grid */}
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-x-4">
        {filtered.map((photo, idx) => {
          const hasImage = photo.src && !photo.src.includes('placeholder');
          const meta = [
            photo.date && photo.date !== 'To be confirmed by family' ? photo.date : null,
            photo.location ? shortenLocation(photo.location) : null,
          ].filter(Boolean).join(' · ');

          return (
            <div
              key={photo.id}
              className="break-inside-avoid mb-5 group cursor-pointer"
              onClick={() => setLightboxIndex(idx)}
            >
              {/* Image container with exact aspect ratio */}
              <div
                className="relative overflow-hidden rounded-lg shadow-sm"
                style={{
                  aspectRatio: getAspectRatio(photo.src),
                  transition: 'box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 20px rgba(0,0,0,0.25)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.boxShadow = ''; }}
              >
                {hasImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={photo.src}
                    alt={photo.alt ?? photo.caption}
                    loading="lazy"
                    decoding="async"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: getPosition(photo.src),
                      transition: 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)',
                      filter: getFilter(photo.src),
                    }}
                    className="group-hover:scale-[1.03]"
                  />
                ) : (
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{ background: PLACEHOLDER_COLORS[photo.category] ?? '#1a3a2a' }}
                  >
                    <span className="font-playfair text-3xl font-bold text-cream-dark opacity-20 select-none">
                      {(photo.caption ?? '').charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                {/* Subtle hover overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-15 transition-opacity duration-300" />
                {/* Featured badge */}
                {photo.featured && (
                  <div
                    className="absolute top-2 right-2 w-5 h-5 rounded-full flex items-center justify-center shadow-sm"
                    style={{ background: 'rgba(201,162,77,0.9)' }}
                  >
                    <span style={{ fontSize: '9px', color: '#0f2318', lineHeight: 1 }}>★</span>
                  </div>
                )}
              </div>

              {/* Caption — always visible below image */}
              <div className="mt-2 px-0.5">
                <p className="font-lora text-xs text-gray-800 leading-snug line-clamp-1 font-medium">
                  {photo.caption}
                </p>
                {meta && (
                  <p className="font-lora text-xs text-gray-400 mt-0.5 leading-none line-clamp-1">
                    {meta}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <p className="font-lora text-gray-500">No photos in this category yet.</p>
        </div>
      )}

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
