'use client';

import { useState } from 'react';
import GalleryViewer from './GalleryViewer';
import type { GalleryPhoto, GalleryCategory } from '@/lib/articles';

const LEGACY_IDS = ['ph-real-003','ph-real-004','ph-real-002','ph-real-027','ph-real-031','ph-new-002','ph-new-013','ph-new-015','ph-new-026'];

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
  'aslam-hayat-family-celebration-4':          'brightness(1.09) contrast(1.08) saturate(1.04)',
  'aslam-hayat-with-children-formal-event':    'brightness(1.06) contrast(1.07) saturate(1.04)',
  'aslam-hayat-suriya-young-portrait':         'brightness(1.30) contrast(1.35) grayscale(1)',
  'aslam-hayat-sindhi-topi-portrait':          'brightness(1.08) contrast(1.10) saturate(1.03)',
  'aslam-hayat-with-nina-nauman-amina':        'brightness(1.15) contrast(1.12) saturate(1.06)',
  'aslam-hayat-young-pakistan-bw':             'brightness(1.30) contrast(1.35) grayscale(1)',
  'aslam-hayat-with-son-imran-england':        'brightness(1.25) contrast(1.30) grayscale(1)',
  'aslam-hayat-kamran-shaiza-eid':             'brightness(1.06) contrast(1.07) saturate(1.04)',
  'aslam-hayat-with-naimait-khan':             'brightness(1.08) contrast(1.08) saturate(1.04)',
  'aslam-hayat-yvr-arrival':                   'brightness(1.06) contrast(1.07) saturate(1.04)',
  'aslam-hayat-birthday-cake-home-2':          'brightness(1.10) contrast(1.08) saturate(1.04)',
  'aslam-hayat-eid-hayat-family':              'brightness(1.06) contrast(1.07) saturate(1.05)',
  'aslam-hayat-eid-family-group-2':            'brightness(1.06) contrast(1.07) saturate(1.05)',
  'aslam-hayat-eid-prayers-friend':            'brightness(1.06) contrast(1.07) saturate(1.05)',
  'aslam-hayat-with-aleem':                    'brightness(1.08) contrast(1.08) saturate(1.04)',
  'aslam-hayat-pirzada-miracle-award':         'brightness(1.10) contrast(1.09) saturate(1.04)',
  'aslam-hayat-miracle-award-ceremony':        'brightness(1.10) contrast(1.09) saturate(1.04)',
  'aslam-hayat-miracle-award-solo':            'brightness(1.12) contrast(1.10) saturate(1.04)',
  'aslam-hayat-miracle-award-pirzada-group':   'brightness(1.10) contrast(1.09) saturate(1.04)',
  'aslam-hayat-tim-hortons-cafe':              'brightness(1.06) contrast(1.07) saturate(1.04)',
  'aslam-hayat-birthday-home-sons':            'brightness(1.15) contrast(1.10) saturate(1.04)',
  'aslam-hayat-with-brother-imtiaz-pakistan':  'brightness(1.35) contrast(1.40) grayscale(1)',
  'aslam-hayat-wedding-ceremony-sweets':       'brightness(1.06) contrast(1.07) saturate(1.04)',
  'aslam-hayat-family-portrait-2002':          'brightness(1.15) contrast(1.12) saturate(1.05)',
  'aslam-hayat-birthday-kamran-sofa':          'brightness(1.06) contrast(1.07) saturate(1.04)',
  'aslam-hayat-kaaba-night-mecca':             'brightness(1.05) contrast(1.08) saturate(1.05)',
  'aslam-hayat-madinah-wheelchair':            'brightness(1.06) contrast(1.07) saturate(1.04)',
  'aslam-hayat-suriya-family-1':               'brightness(1.12) contrast(1.13) saturate(1.06)',
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
  'aslam-hayat-family-celebration-4':           'center 20%',
  'aslam-hayat-with-children-formal-event':    'center 20%',
  'aslam-hayat-suriya-young-portrait':         'center 18%',
  'aslam-hayat-sindhi-topi-portrait':          'center 14%',
  'aslam-hayat-with-nina-nauman-amina':        'center 20%',
  'aslam-hayat-young-pakistan-bw':             '45% 30%',
  'aslam-hayat-with-son-imran-england':        'center 28%',
  'aslam-hayat-kamran-shaiza-eid':             'center 18%',
  'aslam-hayat-with-naimait-khan':             'center 22%',
  'aslam-hayat-yvr-arrival':                   'center 20%',
  'aslam-hayat-birthday-cake-home-2':          'center 16%',
  'aslam-hayat-eid-hayat-family':              'center 22%',
  'aslam-hayat-eid-family-group-2':            'center 20%',
  'aslam-hayat-eid-prayers-friend':            'center 22%',
  'aslam-hayat-with-aleem':                    'center 24%',
  'aslam-hayat-pirzada-miracle-award':         'center 20%',
  'aslam-hayat-miracle-award-ceremony':        'center 22%',
  'aslam-hayat-miracle-award-solo':            'center 14%',
  'aslam-hayat-miracle-award-pirzada-group':   'center 18%',
  'aslam-hayat-tim-hortons-cafe':              'center 16%',
  'aslam-hayat-birthday-home-sons':            'center 26%',
  'aslam-hayat-with-brother-imtiaz-pakistan':  'center 30%',
  'aslam-hayat-wedding-ceremony-sweets':       'center 26%',
  'aslam-hayat-family-portrait-2002':          'center 22%',
  'aslam-hayat-birthday-kamran-sofa':          'center 24%',
  'aslam-hayat-kaaba-night-mecca':             'center 16%',
  'aslam-hayat-madinah-wheelchair':            'center 18%',
  'aslam-hayat-suriya-family-1':               'center 16%',
};
const DEFAULT_POS = 'center 20%';

function stem(src: string): string {
  return src.split('/').pop()?.replace(/\.(jpg|jpeg|png|webp)$/i, '') ?? '';
}
function getFilter(src: string): string {
  return IMG_FILTER[stem(src)] ?? DEFAULT_FILTER;
}
function getPosition(src: string): string {
  return FACE_POS[stem(src)] ?? DEFAULT_POS;
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
  return [
    photo.date && photo.date !== 'To be confirmed by family' ? photo.date : null,
    photo.location ? shortenLocation(photo.location) : null,
  ].filter(Boolean).join(' · ');
}

interface PhotoCardProps {
  photo: GalleryPhoto;
  onClick: () => void;
  variant: 'legacy' | 'standard';
}

function PhotoCard({ photo, onClick, variant }: PhotoCardProps) {
  const hasImage = photo.src && !photo.src.includes('placeholder');
  const meta = conciseMeta(photo);

  return (
    <button
      className="group relative w-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-gold text-left"
      style={{
        background: '#0d1f15',
        borderRadius: '10px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.22)',
        transition: 'box-shadow 0.3s ease, transform 0.3s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(0,0,0,0.38)';
        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.22)';
        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
      }}
      onClick={onClick}
      aria-label={`Open: ${photo.caption}`}
    >
      {/* Image area */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: variant === 'legacy' ? '3/4' : '4/5',
          borderRadius: '10px 10px 0 0',
        }}
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
            className="group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" style={{ background: '#1a3a2a' }}>
            <span className="font-playfair text-5xl font-bold" style={{ color: 'rgba(245,240,232,0.12)' }}>
              {photo.caption.charAt(0)}
            </span>
          </div>
        )}
        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: 'rgba(0,0,0,0.28)' }}
        >
          <span
            className="font-lora text-sm"
            style={{
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.5)',
              borderRadius: '4px',
              padding: '5px 14px',
              backdropFilter: 'blur(4px)',
              background: 'rgba(0,0,0,0.18)',
            }}
          >
            View Photograph
          </span>
        </div>
        {/* Featured star */}
        {photo.featured && (
          <div
            className="absolute top-2.5 right-2.5 w-5 h-5 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(201,162,77,0.9)', boxShadow: '0 1px 4px rgba(0,0,0,0.3)' }}
          >
            <span style={{ fontSize: '10px', color: '#0f2318', lineHeight: 1 }}>★</span>
          </div>
        )}
      </div>
      {/* Caption */}
      <div className="px-3 py-2.5">
        <p
          className="font-lora line-clamp-1"
          style={{ fontSize: '0.7rem', color: 'rgba(245,240,232,0.85)', fontWeight: 500, lineHeight: 1.4 }}
        >
          {photo.caption}
        </p>
        {meta && (
          <p
            className="font-lora line-clamp-1 mt-0.5"
            style={{ fontSize: '0.63rem', color: 'rgba(245,240,232,0.35)', lineHeight: 1.2 }}
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

  const sectionRule = (
    <div className="flex-1 h-px" style={{ background: 'linear-gradient(to right, rgba(201,162,77,0.35), transparent)' }} />
  );

  return (
    <>
      {/* Legacy Collection */}
      {legacyPhotos.length > 0 && (
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-7">
            <div className="flex-shrink-0">
              <h3 className="font-playfair text-xl text-green font-bold">Featured Legacy Collection</h3>
              <p className="font-lora text-sm text-gray-500 mt-0.5 italic">Iconic moments from a remarkable life</p>
            </div>
            {sectionRule}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-5">
            {legacyPhotos.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} variant="legacy" onClick={() => openPhoto(photo)} />
            ))}
          </div>
        </div>
      )}

      {/* Remaining featured */}
      {remainingFeatured.length > 0 && (
        <div>
          <div className="flex items-center gap-4 mb-5">
            <h3 className="font-playfair text-lg text-green font-bold whitespace-nowrap">Selected Photographs</h3>
            {sectionRule}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {remainingFeatured.map((photo) => (
              <PhotoCard key={photo.id} photo={photo} variant="standard" onClick={() => openPhoto(photo)} />
            ))}
          </div>
        </div>
      )}

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
