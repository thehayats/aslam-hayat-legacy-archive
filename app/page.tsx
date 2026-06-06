import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import timelineData from '@/content/timeline/timeline.json';
import type { TimelineEntry } from '@/lib/articles';

export const metadata: Metadata = {
  title: 'The Aslam Hayat Legacy Archive',
  description:
    'A digital archive preserving the life, writings, and legacy of Aslam Hayat (1933–2026) — Chartered Accountant, civil aviation executive, Urdu writer, and beloved family elder.',
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
          <p className="arabic-text text-green text-2xl md:text-3xl mb-6 font-urdu">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <div className="gold-divider mb-8" />
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-green font-bold leading-tight mb-6">
            The Aslam Hayat
            <span className="block text-gold mt-1">Legacy Archive</span>
          </h1>
          <p className="font-lora text-lg md:text-xl text-gray-600 italic leading-relaxed max-w-2xl mx-auto mb-4">
            Chartered Accountant &middot; Civil Aviation Executive &middot; Writer &middot; Family Elder
          </p>
          <div className="gold-divider mb-8" />
          <p className="font-lora text-base md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto mb-10">
            Aslam Hayat (23 March 1933 – 2026) was a Pakistani-Canadian chartered accountant,
            civil aviation executive, writer, and student of Islamic spirituality. Over more than
            twenty-five years he authored more than 650 articles in Vancouver&apos;s Pakistani
            community newspaper. This archive is maintained by his family to preserve his life,
            writings, and legacy for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/about" className="btn-primary">Read His Biography</Link>
            <Link href="/articles" className="btn-gold">Browse the Articles</Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ─────────────────────────────────────────────── */}
      <section className="bg-green border-b border-green-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { stat: '1933', label: 'Born in Lahore, Pakistan' },
              { stat: '650+', label: 'Published Articles' },
              { stat: '25 yrs', label: 'Newspaper Column, Vancouver' },
              { stat: '93', label: 'Years of a Life Well Lived' },
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
                subtitle="A life that spanned pre-Partition India, modern Pakistan, and the Pakistani-Canadian community."
              />
              <p className="font-lora text-base text-gray-700 leading-relaxed mb-4">
                Born in Lahore in 1933, with family roots in Subhan Pur, Kapurthala, Punjab, Aslam
                Hayat witnessed the Partition of India in 1947 — an experience that shaped his
                writing and historical outlook throughout his life. He later travelled to London
                to qualify as a Chartered Accountant and returned to serve in Pakistan&apos;s civil
                aviation sector, rising to director-level responsibilities at the Pakistan Civil
                Aviation Authority.
              </p>
              <p className="font-lora text-base text-gray-700 leading-relaxed mb-6">
                After his retirement he settled in Vancouver, British Columbia, where he became a
                respected voice in the Pakistani-Canadian community. For more than twenty-five years
                he maintained a regular column in <em>The Miracle</em> newspaper, authoring over
                650 articles on history, current affairs, community life, and the experiences of
                the South Asian diaspora.
              </p>
              <Link href="/about" className="btn-primary">Read Full Biography</Link>
            </div>

            <div className="bg-parchment border border-cream-dark rounded-lg p-8 ornament-border">
              <h3 className="font-playfair text-xl text-green font-bold mb-5">At a Glance</h3>
              <dl className="space-y-3">
                {[
                  { label: 'Born', value: '23 March 1933, Lahore, Pakistan' },
                  { label: 'Family Origins', value: 'Subhan Pur, Kapurthala, Punjab' },
                  { label: 'Education', value: 'Chartered Accountant, London, UK' },
                  { label: 'Career', value: 'Director-level, Pakistan Civil Aviation Authority' },
                  { label: 'Writing', value: '650+ articles, The Miracle (Vancouver)' },
                  { label: 'Faith', value: 'Islam; student of Sufism and Ibn Arabi' },
                  { label: 'Settled', value: 'Vancouver, British Columbia, Canada' },
                  { label: 'Passed Away', value: '2026, aged 93, Vancouver' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex gap-3">
                    <dt className="font-lora text-sm font-medium text-green w-32 flex-shrink-0">{label}</dt>
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
              subtitle="From pre-Partition Punjab to Vancouver — the key moments of a life that spanned a century."
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
              subtitle="Family photographs, documents, and memories — to be added as the archive grows."
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
              { color: '#0f2318', label: 'Pakistan' },
              { color: '#1a3a2a', label: 'Community' },
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
            — Hadith of the Prophet Muhammad ﷺ &nbsp;&middot;&nbsp;{' '}
            <em>A principle Aslam Hayat lived and wrote by, and passed on to his family</em>
          </cite>
        </div>
      </section>

      {/* ── Family Tribute ───────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-parchment border-y border-cream-dark">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-2xl md:text-3xl text-green font-bold mb-2">
              In Their Own Words
            </h2>
            <p className="font-lora text-sm text-gray-500 italic">A tribute from his family</p>
            <div className="gold-divider mt-4" />
          </div>

          <div className="bg-green rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 pt-8 pb-4 text-center border-b border-green-dark">
              <p className="arabic-text text-gold text-2xl font-urdu leading-loose">
                إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
              </p>
            </div>
            <div className="px-6 md:px-10 py-8">
              <p className="font-lora text-base md:text-lg text-gold-light text-center font-semibold leading-relaxed mb-5">
                My beloved grandfather will be remembered as a pillar of our family, life&apos;s
                biggest blessing and influence, from childhood into adulthood.
              </p>
              <p className="font-lora text-sm md:text-base text-cream-light leading-relaxed text-center italic mb-5 opacity-90">
                He instilled values of love, kindness, and strong faith among his family
                members and wider community.
              </p>
              <p className="font-lora text-sm text-cream-dark leading-relaxed opacity-80">
                A lover of literature and poetry &mdash; English, Urdu and Persian. He leaves us with
                the hoards of books that he surrounded himself with 24/7, tasbīhs (prayer beads)
                that constantly intertwined in his fingers&hellip; He leaves us with an inexplicable
                void, yet immense gratitude to have known him.
              </p>
              <div className="gold-divider my-5" />
              <p className="font-lora text-base text-gold-light text-center font-semibold">
                May God rest your soul, our beautiful grandfather &nbsp;&#x1F339;
              </p>
            </div>
            <div className="bg-green-dark px-6 py-4 flex items-center justify-between">
              <div>
                <cite className="font-playfair text-sm text-gold not-italic font-bold">Rida Hayat</cite>
                <p className="font-lora text-xs text-cream-dark opacity-70">Granddaughter</p>
              </div>
              <Link href="/tributes" className="btn-gold text-xs py-2 px-4">
                Read Full Tribute
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Submit Memory CTA ─────────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            title="Share a Memory"
            subtitle="Do you have a story, photograph, or memory of Aslam Hayat? The family warmly invites you to contribute."
            centered
          />
          <p className="font-lora text-base text-gray-600 leading-relaxed mb-8">
            Whether you knew him through his writing in <em>The Miracle</em>, through the Pakistani-Canadian
            community, through his years in public service in Pakistan, or simply as a beloved member
            of the family — every memory matters and every contribution enriches this archive.
          </p>
          <Link href="/contact" className="btn-primary text-lg">Submit Your Memory</Link>
        </div>
      </section>
    </>
  );
}
