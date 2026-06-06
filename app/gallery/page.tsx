import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import PhotoGrid from '@/components/ui/PhotoGrid';
import FeaturedGallery from '@/components/ui/FeaturedGallery';
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
  const featuredPhotos = photos.filter((p) => p.featured && p.src && !p.src.includes('placeholder'));
  const totalByCategory = categories.map((cat) => ({
    ...cat,
    count: photos.filter((p) => p.category === cat.id).length,
  }));

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-green py-14 md:py-18">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            Photo Gallery
          </h1>
          <p className="font-lora text-base text-cream-dark italic max-w-xl mx-auto opacity-80">
            Moments from a life richly lived — family gatherings, public service, personal joys,
            and the quiet dignity of a man who gave his best to all who knew him.
          </p>
          <div className="gold-divider mt-5" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {[
            { value: photos.filter((p) => !p.src.includes('placeholder')).length, label: 'Photographs' },
            { value: categories.length, label: 'Categories' },
            { value: featuredPhotos.length, label: 'Featured' },
            { value: '4+', label: 'Countries' },
          ].map(({ value, label }) => (
            <div key={label} className="bg-parchment border border-cream-dark rounded-lg p-4 text-center">
              <p className="font-playfair text-3xl text-green font-bold">{value}</p>
              <p className="font-lora text-xs text-gray-500 mt-1">{label}</p>
            </div>
          ))}
        </div>

        {/* Featured Photographs — premium two-tier layout */}
        {featuredPhotos.length > 0 && (
          <section className="mb-14">
            <FeaturedGallery photos={featuredPhotos} categories={categories} />
          </section>
        )}

        {/* Category summary */}
        <section className="mb-10">
          <SectionHeader
            title="Browse by Category"
            subtitle="The collection spans eight areas of his life — from professional records to family moments."
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

        {/* Full collection with filters */}
        <section>
          <SectionHeader
            title="Full Collection"
            subtitle="All photographs — use the filters to browse by category. Click any image to view fullscreen."
            goldDivider
          />
          <PhotoGrid photos={photos} categories={categories} />
        </section>
      </div>
    </div>
  );
}
