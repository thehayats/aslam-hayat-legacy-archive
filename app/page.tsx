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
      <section style={{ background: '#04180f' }}>

        {/* Full-width editorial split — no max-width container so image bleeds to viewport edge */}
        <div className="flex flex-col lg:flex-row" style={{ minHeight: '720px' }}>

          {/* ── Image panel — desktop left, 50% of viewport ── */}
          <div
            className="hidden lg:block relative flex-shrink-0"
            style={{ width: '50%' }}
          >
            <img
              src="/images/hero-portrait-v3.jpg"
              alt="Aslam Hayat"
              fetchPriority="high"
              decoding="async"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '55% top',
                filter: 'brightness(1.08) contrast(1.02)',
              }}
            />
            {/* Right-edge gradient — blends seamlessly into text area */}
            <div style={{
              position: 'absolute',
              top: 0, bottom: 0, right: 0,
              width: '260px',
              background: 'linear-gradient(to right, transparent, #04180f)',
              pointerEvents: 'none',
            }} />
            {/* Soft top vignette — dims upper background without touching face */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '130px',
              background: 'linear-gradient(to bottom, rgba(4,16,10,0.50) 0%, transparent 100%)',
              pointerEvents: 'none',
            }} />
            {/* Soft bottom vignette */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '130px',
              background: 'linear-gradient(to top, rgba(4,14,9,0.60) 0%, transparent 100%)',
              pointerEvents: 'none',
            }} />
          </div>

          {/* ── Mobile: full-width image stacked above text ── */}
          <div className="lg:hidden relative" style={{ height: '380px' }}>
            <img
              src="/images/hero-portrait-v3.jpg"
              alt="Aslam Hayat"
              fetchPriority="high"
              decoding="async"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: '55% top',
                filter: 'brightness(1.06)',
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0, left: 0, right: 0,
              height: '120px',
              background: 'linear-gradient(to top, #04180f 30%, transparent 100%)',
              pointerEvents: 'none',
            }} />
          </div>

          {/* ── Text column — right on desktop, below image on mobile ── */}
          <div
            className="flex-1 flex items-center justify-center"
            style={{
              background: 'linear-gradient(160deg, #061a10 0%, #081c12 60%, #04130c 100%)',
              padding: '56px 48px 64px 40px',
            }}
          >
            <div style={{ width: '100%', maxWidth: '480px' }}>

              {/* Arabic verse */}
              <p
                dir="rtl"
                style={{
                  fontFamily: '"Amiri", "Scheherazade New", serif',
                  fontSize: 'clamp(1.25rem, 2vw, 1.65rem)',
                  color: '#c9a24d',
                  lineHeight: '2.1',
                  marginBottom: '14px',
                  textAlign: 'center',
                }}
              >
                إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
              </p>

              <div className="gold-divider" style={{ marginBottom: '20px' }} />

              {/* Main heading */}
              <h1
                className="font-playfair font-bold leading-tight"
                style={{
                  fontSize: 'clamp(2rem, 3.2vw, 3rem)',
                  color: '#f5f0e8',
                  marginBottom: '14px',
                  textAlign: 'center',
                }}
              >
                The Aslam Hayat
                <span className="block" style={{ color: '#c9a24d', marginTop: '4px' }}>
                  Legacy Archive
                </span>
              </h1>

              {/* Role line */}
              <p
                className="font-lora italic"
                style={{
                  fontSize: '0.875rem',
                  color: '#7aaa90',
                  letterSpacing: '0.015em',
                  marginBottom: '18px',
                  textAlign: 'center',
                }}
              >
                Chartered Accountant &nbsp;&middot;&nbsp; Civil Aviation Executive
                <br />
                Writer &nbsp;&middot;&nbsp; Student of Islamic Spirituality
              </p>

              <div className="gold-divider" style={{ marginBottom: '18px' }} />

              {/* Biography paragraph */}
              <p
                className="font-lora leading-relaxed"
                style={{ fontSize: '0.9rem', color: '#5e9478', marginBottom: '32px', textAlign: 'center' }}
              >
                Aslam Hayat (1933–2026) was a Pakistani-Canadian chartered accountant, civil
                aviation executive, writer, and lifelong student of Islamic spirituality. Over more
                than twenty-five years he authored over 650 published articles exploring history,
                faith, literature, science, and public affairs.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/about" className="btn-primary">Read Biography</Link>
                <Link href="/articles" className="btn-gold">Browse Articles</Link>
              </div>

            </div>
          </div>

        </div>

        {/* ── Stats bar ── */}
        <div style={{ borderTop: '1px solid rgba(201,162,77,0.16)', background: 'rgba(0,0,0,0.32)' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { stat: '1933', label: 'Born in Lahore' },
                { stat: '650+', label: 'Published Articles' },
                { stat: '25 Years', label: 'The Miracle Newspaper' },
                { stat: '93', label: 'Years of Life' },
              ].map(({ stat, label }) => (
                <div key={label}>
                  <p className="font-playfair text-2xl md:text-3xl font-bold mb-1" style={{ color: '#c9a24d' }}>{stat}</p>
                  <p className="font-lora text-xs md:text-sm" style={{ color: '#6b9980' }}>{label}</p>
                </div>
              ))}
            </div>
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
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <SectionHeader
              title="Five Defining Images"
              subtitle="Professional · Spiritual · Writer · Scholar · Elder"
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4">
            {[
              {
                src: '/images/gallery/aslam-hayat-professional-portrait.jpg',
                caption: 'Aslam Hayat during his professional years',
                position: 'center 12%',
                filter: 'brightness(1.04) contrast(1.07) saturate(1.04)',
              },
              {
                src: '/images/gallery/aslam-hayat-mecca-1.jpg',
                caption: 'Pilgrimage to Makkah',
                position: 'center 20%',
                filter: 'brightness(1.05) contrast(1.06) saturate(1.05)',
              },
              {
                src: '/images/gallery/aslam-hayat-miracle-award-surrey.jpg',
                caption: 'Recognition for contributions to community journalism',
                position: 'center 12%',
                filter: 'brightness(1.08) contrast(1.08) saturate(1.04)',
              },
              {
                src: '/images/gallery/aslam-hayat-home-portrait.jpg',
                caption: 'At home in Vancouver',
                position: 'center 12%',
                filter: 'brightness(1.07) contrast(1.09) saturate(1.04)',
              },
              {
                src: '/images/gallery/aslam-hayat-hero-formal-event.jpg',
                caption: 'A life of dignity and service',
                position: 'center 18%',
                filter: 'brightness(1.08) contrast(1.08) saturate(1.04)',
              },
            ].map(({ src, caption, position, filter }) => (
              <Link
                key={src}
                href="/gallery"
                className="group flex flex-col"
              >
                <div
                  className="relative w-full overflow-hidden"
                  style={{ aspectRatio: '3/4', borderRadius: '6px' }}
                >
                  <img
                    src={src}
                    alt={caption}
                    loading="lazy"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: position,
                      filter,
                      transition: 'transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94)',
                    }}
                    className="group-hover:scale-[1.04]"
                  />
                </div>
                <p
                  className="font-lora mt-2 leading-snug"
                  style={{ fontSize: '0.68rem', color: 'rgba(30,55,40,0.65)', lineHeight: 1.4 }}
                >
                  {caption}
                </p>
              </Link>
            ))}
          </div>
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
          <Link href="/contact" className="btn-primary">Submit Your Memory</Link>
        </div>
      </section>
    </>
  );
}
