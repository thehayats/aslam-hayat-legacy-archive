import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/components/seo/MetaTags';
import { getAllArticles } from '@/lib/mdx';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = buildMetadata({
  title: 'Urdu Articles — مضامین',
  description: "Browse all of Aslam Hayat's original Urdu articles and essays.",
  canonical: '/articles/urdu',
});

export default function UrduArticlesPage() {
  const articles = getAllArticles('urdu');

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-urdu text-gold text-3xl mb-2">مضامین</p>
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            Urdu Articles
          </h1>
          <p className="font-lora text-lg text-cream-dark italic">
            Original writings in Urdu — the language of his thought.
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
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

        {/* Articles List */}
        <div className="space-y-5">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="bg-parchment border border-cream-dark rounded-lg p-5 md:p-6 card-hover"
              dir="rtl"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <time className="font-lora text-xs text-gray-500 flex-shrink-0 mt-1" dir="ltr">
                  {formatDate(article.frontmatter.date)}
                </time>
                <h2 className="font-urdu text-2xl text-green font-bold leading-loose text-right flex-1">
                  {article.frontmatter.title}
                </h2>
              </div>

              {/* English subtitle */}
              {article.frontmatter.titleEn && (
                <p className="font-lora text-sm text-gray-500 italic mb-3 text-left" dir="ltr">
                  {article.frontmatter.titleEn}
                </p>
              )}

              <p className="font-urdu text-base text-gray-600 leading-loose text-right mb-4 line-clamp-3">
                {article.frontmatter.excerpt}
              </p>

              {/* Tags */}
              {article.frontmatter.tags && article.frontmatter.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4 justify-end">
                  {article.frontmatter.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-urdu text-xs bg-cream-light text-green border border-cream-dark px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between pt-3 border-t border-cream-dark">
                {article.frontmatter.translationSlug && (
                  <Link
                    href={`/articles/english/${article.frontmatter.translationSlug}`}
                    className="font-lora text-xs text-gold-dark hover:text-gold transition-colors"
                    dir="ltr"
                  >
                    Read English Translation →
                  </Link>
                )}
                <Link
                  href={`/articles/urdu/${article.slug}`}
                  className="inline-flex items-center gap-1 font-urdu text-sm font-medium text-gold-dark hover:text-gold transition-colors"
                >
                  <svg
                    className="w-4 h-4 rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  پڑھیں
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
