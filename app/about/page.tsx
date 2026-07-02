import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'About Aslam Hayat — Biography',
  description:
    'Aslam Hayat (23 March 1933 – 2026) — chartered accountant, civil aviation executive, Urdu writer, and student of Islamic spirituality. A life spanning pre-Partition Punjab to Vancouver.',
  canonical: '/about',
  ogType: 'article',
});

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="arabic-text text-gold text-2xl md:text-3xl mb-4 font-urdu">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-cream-light font-bold mb-3">
            Aslam Hayat
          </h1>
          <p className="font-lora text-lg text-cream-dark italic mb-2">
            23 March 1933 &ndash; 30 May 2026
          </p>
          <p className="font-lora text-sm text-cream-dark opacity-70">
            Lahore, Pakistan &nbsp;&middot;&nbsp; Vancouver, British Columbia, Canada
          </p>
          <p className="font-lora text-xs text-cream-dark opacity-60 mt-1 tracking-wide uppercase">
            Chartered Accountant &middot; Civil Aviation Executive &middot; Writer &middot; Family Elder
          </p>
          <p className="arabic-text text-gold-light text-xl mt-4 mb-2 font-urdu">
            رحمۃ اللہ علیہ
          </p>
          <div className="gold-divider mt-4" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* Sidebar */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-parchment border border-cream-dark rounded-lg p-6 sticky top-24">
              <h2 className="font-playfair text-lg text-green font-bold mb-5">At a Glance</h2>
              <dl className="space-y-4">
                {[
                  { label: 'Born', value: '23 March 1933' },
                  { label: 'Birthplace', value: 'Lahore, Pakistan' },
                  { label: 'Family origins', value: 'Subhan Pur, Kapurthala, Punjab' },
                  { label: 'Education', value: 'Muslim Model High School, Lahore; Chartered Accountant, London' },
                  { label: 'Career', value: 'Pakistan Civil Aviation Authority — director-level' },
                  { label: 'Writing', value: '650+ articles, The Miracle, Vancouver' },
                  { label: 'Faith', value: 'Islam; student of Sufism and Ibn Arabi' },
                  { label: 'Arrived Canada', value: '1989' },
                  { label: 'Resided', value: 'Vancouver, BC' },
                  { label: 'Died', value: '30 May 2026, Vancouver, aged 93' },
                ].map(({ label, value }) => (
                  <div key={label} className="border-b border-cream-dark pb-3 last:border-0 last:pb-0">
                    <dt className="font-lora text-xs font-medium text-green uppercase tracking-wide mb-0.5">
                      {label}
                    </dt>
                    <dd className="font-lora text-sm text-gray-700">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 space-y-2">
                <Link href="/timeline" className="block text-center btn-primary text-sm py-2.5">
                  View Life Timeline
                </Link>
                <Link href="/contact" className="block text-center btn-gold text-sm py-2.5">
                  Submit a Memory
                </Link>
              </div>
            </div>
          </aside>

          {/* Main biography */}
          <main className="lg:col-span-2 order-1 lg:order-2">

            <section className="mb-10">
              <SectionHeader title="Biography" goldDivider />
              <div className="prose-archive">
                <p>
                  Aslam Hayat (23 March 1933 – 2026) was a Pakistani-Canadian chartered accountant,
                  civil aviation executive, writer, historian, and student of Islamic spirituality.
                </p>
                <p>
                  Born in Lahore, with family roots in Subhan Pur, Kapurthala, Punjab, he witnessed
                  the Partition of India in 1947 — an experience that shaped his writing and
                  historical outlook throughout his life. In the late 1950s and early 1960s he
                  travelled to London to qualify as a Chartered Accountant. On returning to
                  Pakistan, he entered public service and rose to director-level responsibilities
                  at the Pakistan Civil Aviation Authority.
                </p>
                <p>
                  After retiring he settled in Vancouver, British Columbia, where he became a
                  respected voice in the Pakistani-Canadian community. For more than twenty-five
                  years he maintained a regular column in <em>The Miracle</em> newspaper, authoring
                  over 650 articles on history, current affairs, community life, and the experiences
                  of the South Asian diaspora.
                </p>
                <p>
                  He was a devoted Muslim and a serious student of Islamic spirituality —
                  particularly the Sufi tradition and the works of Ibn Arabi. A devoted father,
                  grandfather, and great-grandfather, he passed away on 30 May 2026 in Vancouver,
                  aged 93.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            <section className="mb-10">
              <SectionHeader title="Early Life &amp; Family Origins" goldDivider />
              <div className="prose-archive">
                <p>
                  Aslam Hayat was born on 23 March 1933 in Lahore, in what was then British India.
                  His family&apos;s roots lay in Subhan Pur, Kapurthala, Punjab — a region whose
                  history and culture remained a source of deep personal significance throughout
                  his life.
                </p>
                <p>
                  The Partition of India in 1947, which he witnessed as a teenager in Lahore, was
                  among the formative experiences of his life. The upheaval of Partition — the
                  displacement, loss, and transformation it brought — shaped his perspective as a
                  historian and writer, and he returned to its themes many times across his more
                  than 650 published articles.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            <section className="mb-10">
              <SectionHeader title="Education" goldDivider />
              <div className="prose-archive">
                <p>
                  He received his early education at <strong>Muslim Model High School</strong>{' '}
                  in Lahore. In the late 1950s and early 1960s he travelled to London, where he
                  qualified as a <strong>Chartered Accountant</strong>.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            <section className="mb-10">
              <SectionHeader title="Professional Career" goldDivider />
              <div className="prose-archive">
                <p>
                  Upon returning to Pakistan, Aslam Hayat entered public service at the{' '}
                  <strong>Pakistan Civil Aviation Authority (PCAA)</strong>. Over several decades
                  he served in increasingly senior roles, rising to director-level responsibilities.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            <section className="mb-10">
              <SectionHeader title="Writing" goldDivider />
              <div className="prose-archive">
                <p>
                  After settling in Vancouver, Aslam Hayat became one of the most prolific voices
                  in the Pakistani-Canadian community. For more than twenty-five years he maintained
                  a regular column in <em>The Miracle</em>, Vancouver&apos;s Pakistani community
                  newspaper — authoring more than <strong>650 articles</strong> covering history,
                  current affairs, Islamic thought, and the experiences of the South Asian diaspora.
                </p>
                <p>
                  He was also active on Facebook in his later years, sharing thoughts and
                  reflections with family, friends, and his wider community.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            <section className="mb-10">
              <SectionHeader title="Faith &amp; Spirituality" goldDivider />
              <div className="prose-archive">
                <p>
                  Aslam Hayat was a devoted Muslim who lived his faith deeply and consistently.
                  Beyond practice, he was a serious student of Islamic spirituality — particularly
                  the Sufi tradition and the writings of{' '}
                  <strong>Ibn Arabi</strong>, the Andalusian philosopher and mystic, whose works
                  he studied extensively.
                </p>
                <p>
                  His faith informed his writing, his sense of history, and the way he understood
                  the human condition. He brought the same seriousness to spiritual study that he
                  brought to his professional work, and sought to pass that depth of faith on to
                  his children, grandchildren, and great-grandchildren.
                </p>
                <p>
                  He taught those closest to him to read the Quran in Arabic, to make their prayers
                  with care and intention, and to understand that faith is expressed above all in
                  how one treats others — in honesty, in patience, and in generosity of spirit.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            <section className="mb-10">
              <SectionHeader title="Family" goldDivider />
              <div className="prose-archive">
                <p>
                  At the heart of everything was his family. Aslam Hayat was a devoted father,
                  grandfather, and great-grandfather.
                </p>
                <p>
                  He had a uniquely close relationship with his grandson{' '}
                  <strong>Zeeshan Hayat</strong>. To Zeeshan, he was far more than a grandfather:
                  a father figure, mentor, teacher, spiritual guide, and closest lifelong companion.
                  When Zeeshan lost his mother at a young age, it was Aslam Hayat who stepped
                  forward — raising him, guiding him, and instilling in him the values of
                  education, faith, patience, and service.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            <section className="mb-10">
              <SectionHeader title="Life in Canada" goldDivider />
              <div className="prose-archive">
                <p>
                  Aslam Hayat arrived in Canada in 1989 and settled in Vancouver, British Columbia.
                  He passed away on <strong>30 May 2026</strong> in Vancouver, aged 93.
                </p>
                <p className="text-lg text-center text-green font-playfair italic">
                  إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
                </p>
                <p className="text-sm italic text-gray-500 text-center">
                  &ldquo;Indeed, we belong to Allah, and indeed to Him we shall return.&rdquo;
                </p>
              </div>
            </section>

          </main>
        </div>

        {/* Cross-links — at the end, after full biography */}
        <div className="mt-6 pt-10 border-t border-cream-dark">
          <p className="font-playfair text-base text-green font-bold mb-5">Explore Further</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { title: 'Faith, Theology & Spirituality', href: '/faith-theology-and-spirituality', desc: 'The Quran, Sunnah, Sufism, and his lifelong pursuit of spiritual understanding.' },
              { title: 'Scholarship & Intellectual Influences', href: '/scholarship-and-spirituality', desc: 'The scholars, mystics, and thinkers who shaped his intellectual world.' },
              { title: 'Technology & Lifelong Learning', href: '/technology-and-lifelong-learning', desc: 'From the first colour television to artificial intelligence.' },
              { title: 'Politics, Economics & World Affairs', href: '/politics-economics-and-world-affairs', desc: 'His lifelong engagement with Pakistan, international news, and public affairs.' },
              { title: 'Travels, Pilgrimage & Exploration', href: '/travels-pilgrimage-and-exploration', desc: 'The voyages, pilgrimages, and international journeys of a lifetime.' },
              { title: 'Family Tributes', href: '/tributes', desc: 'Remembrances from those who loved him most — in their own words.' },
            ].map(({ title, href, desc }) => (
              <div key={href} className="bg-parchment border border-cream-dark rounded-lg p-5 flex flex-col justify-between gap-4">
                <div>
                  <p className="font-playfair text-sm text-green font-bold mb-1 leading-snug">{title}</p>
                  <p className="font-lora text-xs text-gray-500 leading-relaxed">{desc}</p>
                </div>
                <Link href={href} className="btn-gold text-sm text-center">Explore</Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
