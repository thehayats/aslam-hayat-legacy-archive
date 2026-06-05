import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getBlogPostBySlug, getBlogSlugs } from '@/lib/mdx';
import { buildMetadata } from '@/components/seo/MetaTags';
import { formatDate } from '@/lib/utils';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return buildMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    canonical: `/blog/${params.slug}`,
    ogType: 'article',
  });
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-green py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-lora text-sm text-cream-dark hover:text-gold-light transition-colors mb-6"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Posts
          </Link>

          <h1 className="font-playfair text-3xl md:text-4xl text-cream-light font-bold leading-tight mb-4">
            {post.frontmatter.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4">
            <span className="font-lora text-sm text-cream-dark italic">
              {post.frontmatter.author}
            </span>
            <span className="text-cream-dark opacity-30">·</span>
            <time className="font-lora text-xs text-cream-dark opacity-70">
              {formatDate(post.frontmatter.date)}
            </time>
            <span className="text-cream-dark opacity-30">·</span>
            <span className="font-lora text-xs text-cream-dark opacity-70">
              {post.readingTime} min read
            </span>
          </div>

          {/* Tags */}
          {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {post.frontmatter.tags.map((tag) => (
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

      {/* Article content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="prose-archive">
          <MDXRemote source={post.content} />
        </article>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-cream-dark">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-lora text-sm text-green-light hover:text-green transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
