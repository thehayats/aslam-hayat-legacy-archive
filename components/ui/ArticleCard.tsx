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
    <article className="bg-cream-light border border-cream-dark rounded-lg overflow-hidden card-hover">
      {/* Card header */}
      <div className="bg-green px-5 py-3 flex items-center justify-between">
        <span className="font-lora text-xs text-cream-dark opacity-60">
          {formatDate(frontmatter.date, 'MMM d, yyyy')}
        </span>
        <span
          className={`text-xs font-lora font-medium px-2 py-0.5 rounded ${
            isUrdu
              ? 'bg-gold text-green-dark'
              : 'bg-green-light text-cream-light border border-gold/30'
          }`}
        >
          {isUrdu ? 'اردو' : 'English'}
        </span>
      </div>

      {/* Card body */}
      <div className="p-5">
        {isUrdu ? (
          <h3 className="font-urdu text-lg text-green mb-3 text-right leading-loose">
            {frontmatter.title}
          </h3>
        ) : (
          <h3 className="font-playfair text-lg text-green font-bold mb-3 leading-snug">
            {frontmatter.title}
          </h3>
        )}

        {isUrdu && frontmatter.titleEn && (
          <p className="font-lora text-sm text-gray-500 italic mb-3">
            {frontmatter.titleEn}
          </p>
        )}

        <p
          className={`text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3 ${
            isUrdu ? 'font-urdu text-right text-base' : 'font-lora'
          }`}
        >
          {frontmatter.excerpt}
        </p>

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

        <Link
          href={href}
          className={`inline-flex items-center gap-1 text-sm font-lora font-medium text-gold-dark hover:text-gold transition-colors ${
            isUrdu ? 'flex-row-reverse' : ''
          }`}
        >
          {isUrdu ? 'پڑھیں' : 'Read Article'}
          <svg
            className={`w-3.5 h-3.5 ${isUrdu ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
