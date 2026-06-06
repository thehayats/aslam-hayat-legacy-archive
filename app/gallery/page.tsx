import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import PhotoGrid from '@/components/ui/PhotoGrid';
import { buildMetadata } from '@/components/seo/MetaTags';
import galleryData from '@/content/gallery/gallery.json';
import type { GalleryData } from '@/lib/articles';

export const metadata: Metadata = buildMetadata({
  title: 'Photo Gallery — Aslam Hayat | Family, Professional & Personal Photographs',
  description:
    'A collection of photographs from the life of Aslam Hayat — Chartered Accountant, PCAA Director, Urdu writer, father and grandfather — in Pakistan and Canada.',
  canonical: '/gallery',
});

export default function GalleryPage() {
  const data = galleryData as unknown as GalleryData;
  const { categories, photos } = data;
  const featuredPhotos = photos.filter((p) => p.featured);
  const totalByCategory = categories.map((cat) => ({
    ...cat,
    count: photos.filter((p) => p.category === cat.id).length,
  }));

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            Photo Gallery
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-xl mx-auto">
            Moments from a life richly lived — family gatherings, public service, personal joys,
            and the quiet dignity of a man who gave his best to all who knew him.
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          <div className="bg-parchment border border-cream-dark rounded-lg p-4 text-center">
            <p className="font-playfair text-3xl text-green font-bold">{photos.length}</p>
            <p className="font-lora text-xs text-gray-500 mt-1">Total Photos</p>
          </div>
          <div className="bg-parchment border border-cream-dark rounded-lg p-4 text-center">
            <p className="font-playfair text-3xl text-green font-bold">{categories.length}</p>
            <p className="font-lora text-xs text-gray-500 mt-1">Categories</p>
          </div>
          <div className="bg-parchment border border-cream-dark rounded-lg p-4 text-center">
            <p className="font-playfair text-3xl text-green font-bold">{featuredPhotos.length}</p>
            <p className="font-lora text-xs text-gray-500 mt-1">Featured Photos</p>
          </div>
          <div className="bg-parchment border border-cream-dark rounded-lg p-4 text-center">
            <p className="font-playfair text-3xl text-green font-bold">2</p>
            <p className="font-lora text-xs text-gray-500 mt-1">Countries</p>
          </div>
        </div>

        {/* Note about placeholders */}
        <div className="bg-parchment border border-gold border-opacity-30 rounded-lg p-4 mb-10 flex items-start gap-3">
          <svg
            className="w-5 h-5 text-gold flex-shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <p className="font-lora text-sm text-green">
              <strong>Note for the family:</strong> The coloured placeholder tiles below represent
              positions for actual photographs. To add real photos, place image files in{' '}
              <code className="text-xs bg-cream-dark px-1 py-0.5 rounded">
                public/images/gallery/
              </code>{' '}
              and update the{' '}
              <code className="text-xs bg-cream-dark px-1 py-0.5 rounded">src</code> values in{' '}
              <code className="text-xs bg-cream-dark px-1 py-0.5 rounded">
                content/gallery/gallery.json
              </code>
              . See the README in the gallery folder for full instructions.
            </p>
          </div>
        </div>

        {/* Featured Photos Section */}
        {featuredPhotos.length > 0 && (
          <section className="mb-14">
            <SectionHeader
              title="Featured Photographs"
              subtitle="Selected highlights from the collection — key moments in a remarkable life."
              goldDivider
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {featuredPhotos.map((photo) => {
                const cat = categories.find((c) => c.id === photo.category);
                return (
                  <div
                    key={photo.id}
                    className="bg-parchment border border-cream-dark rounded-lg overflow-hidden card-hover"
                  >
                    <div
                      className="w-full aspect-video flex items-center justify-center relative"
                      style={{
                        backgroundColor:
                          {
                            family: '#2d5c42',
                            pakistan: '#1a3a2a',
                            canada: '#0f2318',
                            professional: '#a8893a',
                            documents: '#c9a84c',
                            community: '#4a7c5f',
                            'final-years': '#1a3a2a',
                          }[photo.category] ?? '#1a3a2a',
                      }}
                    >
                      <span className="font-playfair text-5xl text-cream-dark opacity-20 font-bold">
                        {photo.caption.trim().charAt(0).toUpperCase()}
                      </span>
                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                        <span className="text-green-dark text-xs">★</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <p className="font-lora text-sm text-green font-medium leading-snug mb-1">
                        {photo.caption}
                      </p>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-lora text-xs text-gray-500">{photo.date}</span>
                        {cat && (
                          <span className="font-lora text-xs text-gold-dark border border-gold border-opacity-40 px-2 py-0.5 rounded">
                            {cat.label}
                          </span>
                        )}
                      </div>
                      {photo.location && (
                        <p className="font-lora text-xs text-gray-400 mt-1">{photo.location}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Category summary */}
        <section className="mb-12">
          <SectionHeader
            title="Browse by Category"
            subtitle="The collection spans seven areas of his life — from professional records to family moments."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {totalByCategory
              .filter((cat) => cat.count > 0)
              .map((cat) => (
                <div
                  key={cat.id}
                  className="bg-cream-light border border-cream-dark rounded-lg p-4"
                >
                  <p className="font-playfair text-xl text-green font-bold">{cat.count}</p>
                  <p className="font-lora text-sm text-green font-medium">{cat.label}</p>
                  <p className="font-lora text-xs text-gray-500 mt-0.5 leading-snug">
                    {cat.description}
                  </p>
                </div>
              ))}
          </div>
        </section>

        {/* Full grid with filters */}
        <section>
          <SectionHeader
            title="Full Collection"
            subtitle="All photographs — use the filters to browse by category."
            goldDivider
          />
          <PhotoGrid photos={photos} categories={categories} />
        </section>
      </div>
    </div>
  );
}
