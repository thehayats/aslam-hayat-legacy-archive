import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import timelineData from '@/content/timeline/timeline.json';
import type { TimelineEntry } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'The Aslam Hayat Legacy Archive',
  description:
    'A digital archive preserving the life, writings, memories, and family legacy of Aslam Hayat — beloved family elder, writer, and community member.',
};

export default function HomePage() {
  const timelineEntries = (timelineData as TimelineEntry[]).slice(0, 3);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative bg-parchment border-b border-cream-dark overflow-hidden">
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

          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-green font-bold leading-tight mb-6">
            The Aslam Hayat
            <span className="block text-gold mt-1">Legacy Archive</span>
          </h1>

          <p className="font-lora text-lg md:text-xl text-gray-600 italic leading-relaxed max-w-2xl mx-auto mb-4">
            Preserving the life, writings, memories, and family legacy of Aslam Hayat
          </p>

          <div className="gold-divider mb-8" />

          <p className="font-lora text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
            Aslam Hayat was a beloved family elder, writer, and community member who lived a life
            rooted in faith, knowledge, family, and service. This archive has been created by his
            family to preserve his memories, writings, photographs, and legacy for future generations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-primary">
              Read His Biography
            </Link>
            <Link href="/gallery" className="btn-gold">
              View the Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── Key Facts Bar ─────────────────────────────────────────── */}
      <section className="bg-green border-b border-green-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { stat: '1933', label: 'Born in Lahore, Pakistan' },
              { stat: '1989', label: 'Arrived in Canada' },
              { stat: 'Vancouver', label: 'Home in Canada' },
              { stat: '2026', label: 'Passed Away' },
            ].map(({ stat, label }) => (
              <div key={label} className="px-2 py-2">
                <p className="font-playfair text-2xl md:text-3xl text-gold font-bold">{stat}</p>
                <p className="font-lora text-xs md:text-sm text-cream-dark mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Preview ────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader
                title="About Aslam Hayat"
                subtitle="A life rooted in faith, family, and service."
              />
              <p className="font-lora text-base text-gray-700 leading-relaxed mb-4">
                Aslam Hayat was born on March 23, 1933, in Lahore, Pakistan. He was a devoted
                Muslim, a loving father and grandfather, a writer in Urdu, and a respected presence
                in his community. He arrived in Canada in 1989 and settled in Vancouver, British
                Columbia, where he remained a beloved family elder until his passing on May 30, 2026.
              </p>
              <p className="font-lora text-base text-gray-700 leading-relaxed mb-6">
                To his grandson Zeeshan Hayat, he was far more than a grandfather — he was a father
                figure, a mentor, a teacher of faith, and a lifelong companion. He helped raise
                Zeeshan, taught him to read the Quran in Arabic, and instilled in him the values of
                education, faith, patience, humility, and service.
              </p>
              <Link href="/about" className="btn-primary">
                Read Full Biography
              </Link>
            </div>

            {/* Quick Facts Card */}
            <div className="bg-parchment border border-cream-dark rounded-lg p-8 ornament-border">
              <h3 className="font-playfair text-xl text-green font-bold mb-5">At a Glance</h3>
              <dl className="space-y-3">
                {[
                  { label: 'Born', value: 'March 23, 1933' },
                  { label: 'Birthplace', value: 'Lahore, Pakistan' },
                  { label: 'Faith', value: 'Islam' },
                  { label: 'Arrived Canada', value: '1989' },
                  { label: 'Resided', value: 'Vancouver, BC, Canada' },
                  { label: 'Passed Away', value: 'May 30, 2026, Vancouver, BC' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-3">
                    <dt className="font-lora text-sm font-medium text-green w-32 flex-shrink-0">
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

      {/* ── Timeline Preview ──────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-parchment border-y border-cream-dark">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <SectionHeader
              title="Life Timeline"
              subtitle="Key moments from his life — from Lahore to Vancouver."
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

          <div className="space-y-4">
            {timelineEntries.map((entry) => (
              <div
                key={`${entry.year}-${entry.title}`}
                className="flex gap-5 bg-cream border border-cream-dark rounded-lg p-5 card-hover"
              >
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-green flex items-center justify-center shadow-md">
                  <span className="font-playfair text-sm text-gold-light font-bold text-center leading-none px-1">
                    {entry.year}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-playfair text-lg text-green font-bold mb-1">
                    {entry.icon && <span className="mr-2">{entry.icon}</span>}
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
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <SectionHeader
              title="Photo Gallery"
              subtitle="Family photographs, memories, and documents — to be added as the archive grows."
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

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { color: '#1a3a2a', label: 'Family' },
              { color: '#2d5c42', label: 'Vancouver Years' },
              { color: '#a8893a', label: 'Writings & Documents' },
              { color: '#0f2318', label: 'Community' },
              { color: '#1a3a2a', label: 'Memories' },
            ].map(({ color, label }) => (
              <Link
                key={label}
                href="/gallery"
                className="group relative aspect-square rounded-lg overflow-hidden card-hover"
              >
                <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: color }}>
                  <span className="font-lora text-xs text-cream-dark opacity-60 group-hover:opacity-100 transition-opacity text-center px-2">
                    {label}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="font-lora text-sm text-gray-500 italic text-center mt-6">
            Family-approved photographs will be added soon.
          </p>
        </div>
      </section>

      {/* ── Pull Quote ────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-gold text-5xl font-playfair mb-4 opacity-60">&ldquo;</div>
          <blockquote
            className="font-urdu text-2xl md:text-3xl text-cream-light leading-loose mb-4"
            dir="rtl"
            lang="ur"
          >
            علم حاصل کرو، گہوارے سے قبر تک
          </blockquote>
          <p className="font-lora text-base md:text-lg text-cream-dark italic leading-relaxed mb-6">
            &ldquo;Seek knowledge from the cradle to the grave.&rdquo;
          </p>
          <div className="gold-divider mb-4" />
          <cite className="font-lora text-sm text-cream-dark not-italic">
            — Hadith of the Prophet Muhammad ﷺ &nbsp;·&nbsp;{' '}
            <em>A saying Aslam Hayat passed on to his family</em>
          </cite>
        </div>
      </section>

      {/* ── Submit Memory CTA ─────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            title="Share a Memory"
            subtitle="Do you have a story, photograph, or memory of Aslam Hayat? The family warmly invites you to contribute to this archive."
            centered
          />
          <p className="font-lora text-base text-gray-600 leading-relaxed mb-8">
            Every memory matters — a photograph, a letter, a story, or simply the way he made you
            feel welcome. This archive grows richer with each contribution, and the family is
            grateful to all who choose to share.
          </p>
          <Link href="/contact" className="btn-primary text-lg">
            Submit Your Memory
          </Link>
        </div>
      </section>
    </>
  );
}
