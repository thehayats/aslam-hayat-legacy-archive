import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import type { Article } from '@/lib/articles';

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const { slug, type, frontmatter } = article;
  const href = `/articles/${type}/${slug}`;
  const isUrdu = type === 'urdu';

  return (
    <article className="bg-cream-light border border-cream-dark rounded-lg overflow-hidden card-hover shadow-sm">
      {/* Card Header with language badge */}
      <div className="bg-green px-5 py-3 flex items-center justify-between">
        <span className="font-lora text-xs text-cream-dark opacity-70">
          {formatDate(frontmatter.date, 'MMM d, yyyy')}
        </span>
        <span
          className={`text-xs font-lora font-medium px-2.5 py-0.5 rounded-full ${
            isUrdu
              ? 'bg-gold text-green-dark'
              : 'bg-green-light text-cream-light border border-gold-dark'
          }`}
        >
          {isUrdu ? 'اردو' : 'English'}
        </span>
      </div>

      {/* Card Body */}
      <div className="p-5">
        {isUrdu ? (
          /* Urdu title */
          <h3 className="font-urdu text-xl text-green mb-3 text-right leading-loose">
            {frontmatter.title}
          </h3>
        ) : (
          <h3 className="font-playfair text-xl text-green mb-3 leading-snug">
            {frontmatter.title}
          </h3>
        )}

        {/* Show English title for Urdu articles */}
        {isUrdu && frontmatter.titleEn && (
          <p className="font-lora text-sm text-gray-500 italic mb-3">
            {frontmatter.titleEn}
          </p>
        )}

        {/* Excerpt */}
        <p
          className={`text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3 ${
            isUrdu ? 'font-urdu text-right text-base' : 'font-lora'
          }`}
        >
          {frontmatter.excerpt}
        </p>

        {/* Tags */}
        {frontmatter.tags && frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {frontmatter.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs font-lora bg-parchment text-green border border-cream-dark px-2 py-0.5 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Read Link */}
        <Link
          href={href}
          className={`inline-flex items-center gap-1 text-sm font-lora font-medium text-gold-dark hover:text-gold transition-colors duration-200 ${
            isUrdu ? 'flex-row-reverse' : ''
          }`}
        >
          {isUrdu ? 'پڑھیں' : 'Read Article'}
          <svg
            className={`w-4 h-4 ${isUrdu ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
