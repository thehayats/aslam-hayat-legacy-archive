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
  const slugs = getArticleSlugs('urdu');
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = getArticleBySlug('urdu', params.slug);
  if (!article) return {};
  return buildMetadata({
    title: article.frontmatter.titleEn ?? article.frontmatter.title,
    description: article.frontmatter.excerpt,
    canonical: `/articles/urdu/${params.slug}`,
    ogType: 'article',
  });
}

export default function UrduArticlePage({ params }: PageProps) {
  const article = getArticleBySlug('urdu', params.slug);
  if (!article) notFound();

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-green py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-right" dir="rtl">
          <div className="flex items-center justify-between mb-4" dir="ltr">
            <Link
              href="/articles/urdu"
              className="inline-flex items-center gap-2 font-lora text-sm text-cream-dark hover:text-gold-light transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Urdu Articles
            </Link>
            <time className="font-lora text-xs text-cream-dark opacity-70">
              {formatDate(article.frontmatter.date)}
            </time>
          </div>

          <h1 className="font-urdu text-3xl md:text-4xl text-cream-light font-bold leading-loose mb-3">
            {article.frontmatter.title}
          </h1>

          {article.frontmatter.titleEn && (
            <p className="font-lora text-base text-cream-dark italic text-left" dir="ltr">
              {article.frontmatter.titleEn}
            </p>
          )}

          {/* Tags */}
          {article.frontmatter.tags && (
            <div className="flex flex-wrap gap-2 mt-4 justify-end">
              {article.frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-urdu text-xs bg-green-light text-cream border border-gold-dark px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Translation link */}
        {article.frontmatter.translationSlug && (
          <div className="bg-parchment border border-gold border-opacity-40 rounded-lg p-4 mb-8 flex items-center justify-between">
            <p className="font-lora text-sm text-green">
              English translation available
            </p>
            <Link
              href={`/articles/english/${article.frontmatter.translationSlug}`}
              className="font-lora text-sm font-medium text-gold-dark hover:text-gold transition-colors flex items-center gap-1"
            >
              Read English Translation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}

        {/* Urdu Article Content */}
        <article
          className="urdu-content text-[#1c1c1c]"
          dir="rtl"
          lang="ur"
        >
          <MDXRemote source={article.content} />
        </article>

        {/* Footer navigation */}
        <div className="mt-12 pt-6 border-t border-cream-dark flex flex-col sm:flex-row gap-4 justify-between">
          <Link
            href="/articles/urdu"
            className="inline-flex items-center gap-2 font-lora text-sm text-green-light hover:text-green transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Urdu Articles
          </Link>

          {article.frontmatter.translationSlug && (
            <Link
              href={`/articles/english/${article.frontmatter.translationSlug}`}
              className="inline-flex items-center gap-2 font-lora text-sm text-gold-dark hover:text-gold transition-colors"
            >
              English Translation
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
