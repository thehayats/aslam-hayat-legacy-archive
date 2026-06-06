import type { Metadata } from 'next';
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
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            Articles
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-xl mx-auto">
            Original Urdu writings and their English translations — a window into the mind of
            Aslam Hayat.
          </p>
          <div className="gold-divider mt-6" />
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
      </div>
    </div>
  );
}
