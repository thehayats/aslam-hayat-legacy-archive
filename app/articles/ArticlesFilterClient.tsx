'use client';

import { useState } from 'react';
import ArticleCard from '@/components/ui/ArticleCard';
import type { Article } from '@/lib/articles';

interface ArticlesFilterClientProps {
  urduArticles: Article[];
  englishArticles: Article[];
}

export default function ArticlesFilterClient({
  urduArticles,
  englishArticles,
}: ArticlesFilterClientProps) {
  const [filter, setFilter] = useState<'all' | 'urdu' | 'english'>('all');

  const allArticles = [...urduArticles, ...englishArticles].sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );

  const displayed =
    filter === 'all' ? allArticles : filter === 'urdu' ? urduArticles : englishArticles;

  return (
    <div>
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {(
          [
            { key: 'all', label: `All (${allArticles.length})` },
            { key: 'urdu', label: `Urdu (${urduArticles.length})` },
            { key: 'english', label: `English (${englishArticles.length})` },
          ] as const
        ).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-5 py-2 rounded-full text-sm font-lora font-medium transition-all duration-200 ${
              filter === key
                ? 'bg-green text-cream-light shadow-md'
                : 'bg-cream-dark text-green hover:bg-cream border border-cream-dark'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      {displayed.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((article) => (
            <ArticleCard key={`${article.type}-${article.slug}`} article={article} />
          ))}
        </div>
      ) : (
        <p className="font-lora text-gray-500 text-center py-12">No articles found.</p>
      )}
    </div>
  );
}
