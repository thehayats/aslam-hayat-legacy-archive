import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getArticleBySlug, getArticleSlugs } from '@/lib/mdx';
import { buildMetadata } from '@/components/seo/MetaTags';
import { formatDate } from '@/lib/utils';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getArticleSlugs('english');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleBySlug('english', params.slug);
  if (!article) return {};
  return buildMetadata({
    title: article.frontmatter.title,
    description: article.frontmatter.excerpt,
    canonical: `/articles/english/${params.slug}`,
    ogType: 'article',
  });
}

export default function EnglishArticlePage({ params }: PageProps) {
  const article = getArticleBySlug('english', params.slug);
  if (!article) notFound();

  // Try to load the corresponding Urdu original
  const urduOriginal = article.frontmatter.originalSlug
    ? getArticleBySlug('urdu', article.frontmatter.originalSlug)
    : null;

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-green py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-4">
            <Link
              href="/articles/english"
              className="inline-flex items-center gap-2 font-lora text-sm text-cream-dark hover:text-gold-light transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              English Translations
            </Link>
            <time className="font-lora text-xs text-cream-dark opacity-70">
              {formatDate(article.frontmatter.date)}
            </time>
          </div>

          <h1 className="font-playfair text-3xl md:text-4xl text-cream-light font-bold leading-tight mb-3">
            {article.frontmatter.title}
          </h1>

          {article.frontmatter.author && (
            <p className="font-lora text-sm text-cream-dark italic">
              by {article.frontmatter.author}
            </p>
          )}

          {/* Tags */}
          {article.frontmatter.tags && (
            <div className="flex flex-wrap gap-2 mt-4">
              {article.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-lora text-xs bg-green-light text-cream border border-gold-dark px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Original Urdu link */}
        {urduOriginal && (
          <div className="bg-parchment border border-gold border-opacity-40 rounded-lg p-4 mb-8 flex items-center justify-between">
            <div>
              <p className="font-lora text-sm text-green">Read the original Urdu:</p>
              <p className="font-urdu text-lg text-green mt-0.5" dir="rtl">
                {urduOriginal.frontmatter.title}
              </p>
            </div>
            <Link
              href={`/articles/urdu/${article.frontmatter.originalSlug}`}
              className="font-lora text-sm font-medium text-gold-dark hover:text-gold transition-colors flex items-center gap-1 flex-shrink-0 ml-4"
            >
              اردو میں پڑھیں
              <svg
                className="w-4 h-4 rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}

        {/* English Article Content */}
        <article className="prose-archive">
          <MDXRemote source={article.content} />
        </article>

        {/* Footer navigation */}
        <div className="mt-12 pt-6 border-t border-cream-dark flex flex-col sm:flex-row gap-4 justify-between">
          <Link
            href="/articles/english"
            className="inline-flex items-center gap-2 font-lora text-sm text-green-light hover:text-green transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to English Translations
          </Link>

          {article.frontmatter.originalSlug && (
            <Link
              href={`/articles/urdu/${article.frontmatter.originalSlug}`}
              className="inline-flex items-center gap-2 font-lora text-sm text-gold-dark hover:text-gold transition-colors"
            >
              Original Urdu Article
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
