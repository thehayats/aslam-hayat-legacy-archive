import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';
import { getAllArticles } from '@/lib/mdx';
import ArticlesFilterClient from './ArticlesFilterClient';

export const metadata: Metadata = buildMetadata({
  title: 'Articles — Aslam Hayat | Urdu Essays & English Translations',
  description:
    "Browse all of Aslam Hayat's Urdu essays and English translations — writings on philosophy, faith, society, time, and the Pakistani experience.",
  canonical: '/articles',
});

export default function ArticlesPage() {
  const urduArticles = getAllArticles('urdu');
  const englishArticles = getAllArticles('english');

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="border-b border-cream-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
          <h1 className="font-playfair text-2xl text-green font-bold">Articles</h1>
          <p className="font-lora text-sm text-gray-500 mt-1">Original Urdu writings and their English translations, preserved as he published them.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <SectionHeader
          title="All Writings"
          subtitle="Filter by language or browse all articles chronologically."
        />

        <ArticlesFilterClient
          urduArticles={urduArticles}
          englishArticles={englishArticles}
        />

        {/* Cross-links */}
        <div className="grid sm:grid-cols-2 gap-4 mt-12">
          <div className="bg-parchment border border-cream-dark rounded-lg p-5 flex flex-col justify-between gap-4">
            <div>
              <p className="font-playfair text-base text-green font-bold mb-1">Faith, Theology &amp; Spirituality</p>
              <p className="font-lora text-sm text-gray-600">
                The Quran, Sunnah, Sufism, and the faith that informed every word he wrote.
              </p>
            </div>
            <Link href="/faith-theology-and-spirituality" className="btn-gold text-sm text-center">
              Explore
            </Link>
          </div>
          <div className="bg-parchment border border-cream-dark rounded-lg p-5 flex flex-col justify-between gap-4">
            <div>
              <p className="font-playfair text-base text-green font-bold mb-1">Scholarship &amp; Intellectual Influences</p>
              <p className="font-lora text-sm text-gray-600">
                The scholars, mystics, and thinkers whose ideas shaped his writing over 25 years.
              </p>
            </div>
            <Link href="/scholarship-and-spirituality" className="btn-gold text-sm text-center">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
