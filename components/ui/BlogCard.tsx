import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import type { BlogPost } from '@/lib/articles';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { slug, frontmatter, readingTime } = post;

  return (
    <article className="bg-cream-light border border-cream-dark rounded-lg overflow-hidden card-hover shadow-sm">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-green via-gold to-green" />

      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-3">
          <time className="font-lora text-xs text-gray-500">
            {formatDate(frontmatter.date)}
          </time>
          <span className="text-gray-300">·</span>
          <span className="font-lora text-xs text-gray-500">
            {readingTime} min read
          </span>
        </div>

        {/* Title */}
        <h3 className="font-playfair text-xl md:text-2xl text-green font-bold mb-3 leading-snug">
          {frontmatter.title}
        </h3>

        {/* Excerpt */}
        <p className="font-lora text-sm md:text-base text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {frontmatter.excerpt}
        </p>

        {/* Tags */}
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {frontmatter.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs font-lora bg-parchment text-green border border-cream-dark px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Author & Read Link */}
        <div className="flex items-center justify-between pt-3 border-t border-cream-dark">
          <span className="font-lora text-xs text-gray-500 italic">
            {frontmatter.author}
          </span>
          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center gap-1 text-sm font-lora font-medium text-gold-dark hover:text-gold transition-colors duration-200"
          >
            Read Post
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
