import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import ArticleCard from '@/components/ui/ArticleCard';
import { getAllArticles } from '@/lib/mdx';
import timelineData from '@/content/timeline/timeline.json';
import type { TimelineEntry } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'The Aslam Hayat Legacy Archive',
  description:
    'A digital museum and family biography site honoring the life, writings, and legacy of Aslam Hayat — scholar, writer, and beloved father.',
};

export default function HomePage() {
  const urduArticles = getAllArticles('urdu').slice(0, 2);
  const englishArticles = getAllArticles('english').slice(0, 1);
  const featuredArticles = [...urduArticles, ...englishArticles].slice(0, 3);
  const timelineEntries = (timelineData as TimelineEntry[]).slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-parchment border-b border-cream-dark overflow-hidden">
        {/* Subtle decorative background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 50%, #1a3a2a 1px, transparent 1px), radial-gradient(circle at 80% 50%, #c9a84c 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          {/* Bismillah */}
          <p className="arabic-text text-green text-2xl md:text-3xl mb-6 font-urdu">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>

          <div className="gold-divider mb-8" />

          {/* Main title */}
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-green font-bold leading-tight mb-6">
            The Aslam Hayat
            <span className="block text-gold mt-1">Legacy Archive</span>
          </h1>

          {/* Subtitle */}
          <p className="font-lora text-lg md:text-xl text-gray-600 italic leading-relaxed max-w-2xl mx-auto mb-4">
            Scholar · Writer · Father · Friend
          </p>

          <div className="gold-divider mb-8" />

          {/* Intro paragraph */}
          <p className="font-lora text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
            This archive preserves the life, writings, and enduring legacy of{' '}
            <strong className="text-green">Aslam Hayat</strong> — a man whose pen shaped
            minds, whose faith shaped his family, and whose gentle wisdom touched all who knew him.
            Here, his Urdu essays, reflections, and the photographs of a life well-lived find a
            permanent home.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-primary">
              Read His Biography
            </Link>
            <Link href="/articles" className="btn-gold">
              Browse the Articles
            </Link>
          </div>
        </div>
      </section>

      {/* ── About Preview ────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <SectionHeader
                title="About Aslam Hayat"
                subtitle="A life shaped by scholarship, devotion, and an unwavering commitment to the written word."
              />
              <p className="font-lora text-base text-gray-700 leading-relaxed mb-4">
                Born in Lahore in 1945 into a family with deep roots in Islamic scholarship, Aslam
                Hayat grew up surrounded by books, poetry, and the living tradition of Urdu
                literature. From his earliest years he showed an exceptional sensitivity to
                language — not merely as a tool of communication, but as a vehicle for truth,
                beauty, and the expression of the human condition.
              </p>
              <p className="font-lora text-base text-gray-700 leading-relaxed mb-6">
                Over a career spanning five decades, he wrote hundreds of essays, contributed to
                major literary journals, and influenced a generation of younger writers and
                thinkers. Yet for those who knew him personally, his greatest achievement was not
                literary — it was the quality of character he brought to every relationship.
              </p>
              <Link href="/about" className="btn-primary">
                Read Full Biography
              </Link>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-parchment border border-cream-dark rounded-lg p-8 ornament-border">
              <h3 className="font-playfair text-xl text-green font-bold mb-5">
                At a Glance
              </h3>
              <dl className="space-y-3">
                {[
                  { label: 'Born', value: '1945, Lahore, Pakistan' },
                  { label: 'Occupation', value: 'Writer, Scholar, Educator' },
                  { label: 'Language', value: 'Urdu (primary), English' },
                  { label: 'Speciality', value: 'Urdu Prose & Islamic Thought' },
                  { label: 'Family', value: 'Married with children' },
                  { label: 'Legacy', value: 'Hundreds of published essays' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-3">
                    <dt className="font-lora text-sm font-medium text-green w-28 flex-shrink-0">
                      {label}
                    </dt>
                    <dd className="font-lora text-sm text-gray-700">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured Articles ─────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-parchment border-y border-cream-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <SectionHeader
              title="Featured Articles"
              subtitle="Selected writings from the archive — in Urdu and in English translation."
              goldDivider
            />
            <Link
              href="/articles"
              className="font-lora text-sm font-medium text-gold-dark hover:text-gold transition-colors flex-shrink-0 flex items-center gap-1"
            >
              View All Articles
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article) => (
              <ArticleCard key={`${article.type}-${article.slug}`} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline Preview ──────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <SectionHeader
              title="Life Timeline"
              subtitle="A chronology of the key moments and milestones that shaped his journey."
            />
            <Link
              href="/timeline"
              className="font-lora text-sm font-medium text-gold-dark hover:text-gold transition-colors flex-shrink-0 flex items-center gap-1"
            >
              Full Timeline
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Simple preview timeline */}
          <div className="space-y-4">
            {timelineEntries.map((entry) => (
              <div
                key={entry.year}
                className="flex gap-5 bg-parchment border border-cream-dark rounded-lg p-5 card-hover"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green flex items-center justify-center shadow-md">
                  <span className="font-playfair text-sm text-gold-light font-bold text-center leading-none">
                    {entry.year}
                  </span>
                </div>
                <div>
                  <h4 className="font-playfair text-lg text-green font-bold mb-1">
                    {entry.title}
                  </h4>
                  <p className="font-lora text-sm text-gray-600 leading-relaxed line-clamp-2">
                    {entry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Preview ───────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-parchment border-y border-cream-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <SectionHeader
              title="Photo Gallery"
              subtitle="Moments from a life richly lived."
            />
            <Link
              href="/gallery"
              className="font-lora text-sm font-medium text-gold-dark hover:text-gold transition-colors flex-shrink-0 flex items-center gap-1"
            >
              View Full Gallery
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* 4 placeholder image tiles */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { color: '#1a3a2a', label: 'Family' },
              { color: '#a8893a', label: 'Professional' },
              { color: '#2d5c42', label: 'Events' },
              { color: '#c9a84c', label: 'Personal' },
            ].map(({ color, label }) => (
              <Link
                key={label}
                href="/gallery"
                className="group relative aspect-square rounded-lg overflow-hidden card-hover"
              >
                <div
                  className="w-full h-full"
                  style={{ backgroundColor: color }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-end p-3">
                  <span className="font-lora text-xs text-cream-light opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pull Quote ────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-gold text-5xl font-playfair mb-4 opacity-60">&ldquo;</div>
          <blockquote className="font-playfair text-xl md:text-2xl lg:text-3xl text-cream-light italic leading-relaxed mb-6">
            A person arrives in this world empty-handed, yet departs leaving behind an infinite
            chain of memories and influences that ripple outward through all those they have
            touched.
          </blockquote>
          <div className="gold-divider mb-4" />
          <cite className="font-lora text-sm text-cream-dark not-italic">
            — Aslam Hayat, <em>The Journey of Life</em> (2020)
          </cite>
        </div>
      </section>

      {/* ── Submit Memory CTA ─────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            title="Share a Memory"
            subtitle="Do you have a story, photograph, or memory of Aslam Hayat that deserves to be preserved? We warmly invite you to contribute."
            centered
          />
          <p className="font-lora text-base text-gray-600 leading-relaxed mb-8">
            Every memory matters — whether it is a brief encounter, a letter he wrote, a moment
            in a classroom, or a reflection on his character. This archive grows richer with
            each contribution, and we are grateful for all who choose to share.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Submit Your Memory
          </Link>
        </div>
      </section>
    </>
  );
}
