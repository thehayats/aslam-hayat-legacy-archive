import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import PhotoGrid from '@/components/ui/PhotoGrid';
import { buildMetadata } from '@/components/seo/MetaTags';
import galleryData from '@/content/gallery/gallery.json';
import type { GalleryItem } from '@/lib/articles';

export const metadata: Metadata = buildMetadata({
  title: 'Photo Gallery',
  description: 'A collection of photographs from the life of Aslam Hayat — family, professional, and personal moments.',
  canonical: '/gallery',
});

export default function GalleryPage() {
  const items = galleryData as GalleryItem[];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            Photo Gallery
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-xl mx-auto">
            Moments from a life richly lived — family, professional occasions, personal memories,
            and public life.
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <SectionHeader
            title={`${items.length} Photographs`}
            subtitle="Placeholder colour blocks represent future photographs. Actual images to be added by the family."
          />
        </div>

        {/* Note about placeholders */}
        <div className="bg-parchment border border-gold border-opacity-30 rounded-lg p-4 mb-8 flex items-start gap-3">
          <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="font-lora text-sm text-green">
              <strong>Note for the family:</strong> The coloured blocks below represent placeholder
              positions for actual photographs. Replace the{' '}
              <code className="text-xs bg-cream-dark px-1 py-0.5 rounded">src</code> values in{' '}
              <code className="text-xs bg-cream-dark px-1 py-0.5 rounded">
                content/gallery/gallery.json
              </code>{' '}
              with real image paths once photos have been digitised and placed in{' '}
              <code className="text-xs bg-cream-dark px-1 py-0.5 rounded">public/images/</code>.
            </p>
          </div>
        </div>

        <PhotoGrid items={items} showFilters />
      </div>
    </div>
  );
}
