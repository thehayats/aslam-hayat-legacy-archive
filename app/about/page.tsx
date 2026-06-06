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
      {/* Hero Banner */}
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="arabic-text text-gold text-2xl md:text-3xl mb-4 font-urdu">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-cream-light font-bold mb-3">
            Aslam Hayat
          </h1>
          <p className="font-lora text-lg text-cream-dark italic mb-2">
            23 March 1933 &ndash; 2026
          </p>
          <p className="font-lora text-base text-cream-dark opacity-80">
            Lahore, Pakistan &nbsp;·&nbsp; Vancouver, British Columbia, Canada
          </p>
          <p className="font-lora text-sm text-cream-dark opacity-70 mt-1">
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
              <h2 className="font-playfair text-xl text-green font-bold mb-5">At a Glance</h2>
              <dl className="space-y-4">
                {[
                  { label: 'Born', value: '23 March 1933' },
                  { label: 'Birthplace', value: 'Lahore, Pakistan' },
                  { label: 'Family Origins', value: 'Subhan Pur, Kapurthala, Punjab' },
                  { label: 'Education', value: 'Muslim Model High School, Lahore; Chartered Accountant, London' },
                  { label: 'Career', value: 'Pakistan Civil Aviation Authority — director-level' },
                  { label: 'Writing', value: '650+ articles, The Miracle, Vancouver' },
                  { label: 'Faith', value: 'Islam; student of Sufism and Ibn Arabi' },
                  { label: 'Arrived Canada', value: '1989' },
                  { label: 'Resided', value: 'Vancouver, BC, Canada' },
                  { label: 'Passed Away', value: 'May 30, 2026, Vancouver, BC, Canada' },
                ].map(({ label, value }) => (
                  <div key={label} className="border-b border-cream-dark pb-3 last:border-0">
                    <dt className="font-lora text-xs font-medium text-green uppercase tracking-wide mb-0.5">
                      {label}
                    </dt>
                    <dd className="font-lora text-sm text-gray-700">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 space-y-2">
                <Link href="/timeline" className="block text-center btn-primary text-sm py-2">
                  View Life Timeline
                </Link>
                <Link href="/contact" className="block text-center btn-gold text-sm py-2">
                  Submit a Memory
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Biography */}
          <main className="lg:col-span-2 order-1 lg:order-2">

            <section className="mb-10">
              <SectionHeader title="Biography" goldDivider />
              <div className="prose-archive">
                <p>
                  Aslam Hayat (23 March 1933 – 2026) was a Pakistani-Canadian chartered accountant,
                  civil aviation executive, writer, historian, and student of Islamic spirituality
                  whose life spanned some of the most significant events of the twentieth century.
                </p>
                <p>
                  Born in Lahore, with family roots in Subhan Pur, Kapurthala, Punjab, he witnessed
                  the Partition of India in 1947 — an experience that shaped his writing and
                  historical outlook throughout his life. In the late 1950s and early 1960s he
                  travelled to London, England, to pursue advanced accountancy studies and qualify as
                  a Chartered Accountant. Upon returning to Pakistan, he entered public service and
                  built a distinguished career in civil aviation, ultimately rising to director-level
                  responsibilities at the Pakistan Civil Aviation Authority.
                </p>
                <p>
                  After his retirement he settled in Vancouver, British Columbia, where he became a
                  respected voice in the Pakistani-Canadian community. For more than twenty-five years
                  he maintained a regular column in <em>The Miracle</em> newspaper, authoring over
                  650 articles on history, current affairs, community life, and the experiences of
                  the South Asian diaspora.
                </p>
                <p>
                  He was a devoted Muslim and a deep student of Islamic spirituality — particularly
                  the Sufi tradition and the works of Ibn Arabi. A beloved father, grandfather,
                  and great-grandfather, he passed away in Vancouver in 2026 at the age of 93.
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
                  history and culture would remain a source of deep personal significance throughout
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
                  Aslam Hayat received his early education at <strong>Muslim Model High School</strong>{' '}
                  in Lahore, Pakistan.
                </p>
                <p>
                  In the late 1950s and early 1960s, he travelled to London, England, where he
                  pursued advanced accountancy studies and qualified as a{' '}
                  <strong>Chartered Accountant</strong> — a significant personal and professional
                  achievement that provided the foundation for his subsequent public-service career.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            <section className="mb-10">
              <SectionHeader title="Professional Career" goldDivider />
              <div className="prose-archive">
                <p>
                  Upon returning to Pakistan, Aslam Hayat entered public service and built a
                  distinguished career in civil aviation. Over the course of several decades, he
                  served in increasingly senior leadership positions and ultimately rose to
                  director-level responsibilities within the{' '}
                  <strong>Pakistan Civil Aviation Authority (PCAA)</strong>. His professional career
                  was marked by dedication, integrity, and a commitment to public service.
                </p>
                <p className="text-sm italic text-gray-500 bg-parchment border border-cream-dark rounded p-4">
                  Further details about his career — including specific roles and dates — will be
                  added as the family archive is reviewed.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            <section className="mb-10">
              <SectionHeader title="Writer &amp; Community Voice" goldDivider />
              <div className="prose-archive">
                <p>
                  After settling in Vancouver, Aslam Hayat became one of the most prolific voices
                  in the Pakistani-Canadian community. For more than twenty-five years he maintained
                  a regular column in <em>The Miracle</em>, Vancouver&apos;s Pakistani community
                  newspaper.
                </p>
                <p>
                  During that period he authored more than <strong>650 articles</strong> covering
                  history, current affairs, community issues, personal reflections, and the
                  experiences of the South Asian diaspora in Canada.
                </p>
                <p>
                  He was also active on Facebook in his later years, sharing thoughts, memories,
                  and reflections with family, friends, and his wider community.
                </p>
                <p className="text-sm italic text-gray-500 bg-parchment border border-cream-dark rounded p-4">
                  Original Urdu articles and English translations will be added to this archive
                  as they are reviewed and approved by the family.
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
                  <strong>Ibn Arabi</strong>, the renowned Andalusian philosopher and mystic, whose
                  works he studied extensively.
                </p>
                <p>
                  His faith was not separate from his intellectual life — it was its foundation.
                  It informed his writing, his sense of history, and the way he understood the
                  human condition. He brought the same seriousness to spiritual study that he
                  brought to his professional work, and he sought to pass that love of learning
                  and depth of faith on to his children, grandchildren, and great-grandchildren.
                </p>
                <p>
                  He taught those closest to him to read the Quran in Arabic, to make their prayers
                  with care and intention, and to understand that faith is expressed above all in
                  how one treats others — in honesty, in patience, and in generosity of spirit.
                </p>
              </div>
            </section>

            <div className="bg-parchment border border-cream-dark rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <p className="font-playfair text-base text-green font-bold mb-1">Faith, Theology &amp; Spiritual Worldview</p>
                <p className="font-lora text-sm text-gray-600">
                  The Quran, Sunnah, Sufism, and his lifelong pursuit of spiritual understanding.
                </p>
              </div>
              <Link href="/faith-theology-and-spirituality" className="btn-gold text-sm flex-shrink-0">
                Read More
              </Link>
            </div>
            <div className="bg-parchment border border-cream-dark rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <p className="font-playfair text-base text-green font-bold mb-1">Scholarship &amp; Intellectual Influences</p>
                <p className="font-lora text-sm text-gray-600">
                  The scholars, mystics, and thinkers who shaped his intellectual world.
                </p>
              </div>
              <Link href="/scholarship-and-spirituality" className="btn-gold text-sm flex-shrink-0">
                Read More
              </Link>
            </div>
            <div className="bg-parchment border border-cream-dark rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <p className="font-playfair text-base text-green font-bold mb-1">Technology &amp; Lifelong Learning</p>
                <p className="font-lora text-sm text-gray-600">
                  His lifelong enthusiasm for technology — from the first colour television to AI.
                </p>
              </div>
              <Link href="/technology-and-lifelong-learning" className="btn-gold text-sm flex-shrink-0">
                Read More
              </Link>
            </div>
            <div className="bg-parchment border border-cream-dark rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <p className="font-playfair text-base text-green font-bold mb-1">Politics, Economics &amp; World Affairs</p>
                <p className="font-lora text-sm text-gray-600">
                  His lifelong engagement with Pakistan, international news, and public affairs.
                </p>
              </div>
              <Link href="/politics-economics-and-world-affairs" className="btn-gold text-sm flex-shrink-0">
                Read More
              </Link>
            </div>
            <div className="bg-parchment border border-cream-dark rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
              <div>
                <p className="font-playfair text-base text-green font-bold mb-1">Travels, Pilgrimage &amp; Exploration</p>
                <p className="font-lora text-sm text-gray-600">
                  The voyages, pilgrimages, and international journeys of a lifetime.
                </p>
              </div>
              <Link href="/travels-pilgrimage-and-exploration" className="btn-gold text-sm flex-shrink-0">
                Read More
              </Link>
            </div>

            <hr className="section-divider" />

            <section className="mb-10">
              <SectionHeader title="Family &amp; Legacy" goldDivider />
              <div className="prose-archive">
                <p>
                  At the heart of everything was his family. Aslam Hayat was a devoted father,
                  grandfather, and great-grandfather — a family elder deeply loved by all who
                  knew him. He gave generously of his time, his wisdom, and his presence.
                </p>
                <p>
                  He had a uniquely close and profound relationship with his grandson{' '}
                  <strong>Zeeshan Hayat</strong>. To Zeeshan, he was far more than a grandfather:
                  he was a father figure, mentor, teacher, spiritual guide, protector, and closest
                  lifelong companion. When Zeeshan lost his mother at a young age, it was Aslam
                  Hayat who stepped forward — helping to raise him, guiding him, and providing
                  the love and stability a child needs. He taught Zeeshan to read the Quran, and
                  instilled in him the values of education, faith, patience, humility, and service.
                </p>
                <p>
                  He encouraged all those around him to seek knowledge, to practice their faith
                  sincerely, and to live with humility and service to others — a principle he
                  modelled every day of his life.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            <section className="mb-10">
              <SectionHeader title="Life in Canada" goldDivider />
              <div className="prose-archive">
                <p>
                  Aslam Hayat arrived in Canada in 1989 and settled in Vancouver, British Columbia,
                  where he would remain for the rest of his life. In Vancouver he found a community,
                  continued his writing, deepened his spiritual life, and remained the anchor of
                  his family until the very end.
                </p>
                <p>
                  He passed away on <strong>May 30, 2026</strong>, in Vancouver, aged 93.
                </p>
                <p>
                  إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
                </p>
                <p className="text-sm italic text-gray-600">
                  &ldquo;Indeed, we belong to Allah, and indeed to Him we shall return.&rdquo;
                </p>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
