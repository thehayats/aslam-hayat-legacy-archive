import type { Metadata } from 'next';
import Link from 'next/link';
import ArticleCard from '@/components/ui/ArticleCard';
import { buildMetadata } from '@/components/seo/MetaTags';
import { getAllArticles } from '@/lib/mdx';

export const metadata: Metadata = buildMetadata({
  title: 'English Translations',
  description: "English translations of Aslam Hayat's Urdu articles and essays.",
  canonical: '/articles/english',
});

export default function EnglishArticlesPage() {
  const articles = getAllArticles('english');

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            English Translations
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-xl mx-auto">
            His Urdu writings rendered into English — for those who cannot read the original but
            deserve to encounter the thought.
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Back link */}
        <Link
          href="/articles"
          className="inline-flex items-center gap-2 font-lora text-sm text-green-light hover:text-green mb-8 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          All Articles
        </Link>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
}
