import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'About Aslam Hayat — Biography',
  description:
    'Aslam Hayat (March 23, 1933 – May 30, 2026) was born in Lahore, Pakistan and settled in Vancouver, Canada. A beloved family elder, Urdu writer, and community member.',
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
            March 23, 1933 &ndash; May 30, 2026
          </p>
          <p className="font-lora text-base text-cream-dark opacity-80">
            Lahore, Pakistan &nbsp;·&nbsp; Vancouver, British Columbia, Canada
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
                  { label: 'Born', value: 'March 23, 1933' },
                  { label: 'Birthplace', value: 'Lahore, Pakistan' },
                  { label: 'Faith', value: 'Islam' },
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
                  Aslam Hayat was born on March 23, 1933, in Lahore, Pakistan. He was a devoted
                  Muslim, a beloved father and grandfather, a writer in Urdu, and a respected
                  member of his community.
                </p>
                <p>
                  He studied at Muslim Model High School in Lahore, and later pursued professional
                  qualifications through the Chartered Institute of Management Accountants (CIMA), UK.
                </p>
                <p>
                  Aslam Hayat arrived in Canada in 1989 and made his home in Vancouver, British
                  Columbia. He remained an important and loving presence in the lives of his family
                  and community until his passing on May 30, 2026.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            <section className="mb-10">
              <SectionHeader title="Education" goldDivider />
              <div className="prose-archive">
                <p>
                  Aslam Hayat attended Muslim Model High School in Lahore, Pakistan. He later
                  pursued professional qualifications through the Chartered Institute of Management
                  Accountants (CIMA), United Kingdom.
                </p>
                <p className="text-sm italic text-gray-500 bg-parchment border border-cream-dark rounded p-4">
                  Further details about his educational background will be added as the family
                  archive is reviewed.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            <section className="mb-10">
              <SectionHeader title="Professional Career" goldDivider />
              <div className="prose-archive">
                <p className="text-sm italic text-gray-500 bg-parchment border border-cream-dark rounded p-4">
                  This section is being reviewed by the family. Verified details about Aslam
                  Hayat&apos;s professional career will be added soon.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            <section className="mb-10">
              <SectionHeader title="Writer &amp; Community Voice" goldDivider />
              <div className="prose-archive">
                <p>
                  Aslam Hayat wrote in Urdu and contributed to local Pakistani community
                  publications. He was known in the Pakistani-Canadian community as a thoughtful
                  writer and community member.
                </p>
                <p>
                  He was also active on Facebook, where he shared his thoughts, memories, and
                  writings with family and friends.
                </p>
                <p className="text-sm italic text-gray-500 bg-parchment border border-cream-dark rounded p-4">
                  Original Urdu articles and English translations will be added to this archive
                  as they are reviewed and approved by the family.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            <section className="mb-10">
              <SectionHeader title="Family &amp; Faith" goldDivider />
              <div className="prose-archive">
                <p>
                  Aslam Hayat was a devoted Muslim who lived his faith every day. He was a loving
                  father, grandfather, and great-grandfather — a family elder who was deeply loved
                  by all who knew him.
                </p>
                <p>
                  He had a uniquely close relationship with his grandson Zeeshan Hayat. To Zeeshan,
                  he was far more than a grandfather: he was a father figure, mentor, teacher,
                  spiritual guide, and closest lifelong companion. He helped raise Zeeshan after
                  Zeeshan lost his mother at a young age. He taught Zeeshan to read the Quran in
                  Arabic, and instilled in him the values of education, faith, patience, humility,
                  and service.
                </p>
                <p>
                  He encouraged all those around him to seek knowledge, practice their faith
                  sincerely, and treat family and community with kindness and respect.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            <section className="mb-10">
              <SectionHeader title="Life in Canada" goldDivider />
              <div className="prose-archive">
                <p>
                  Aslam Hayat arrived in Canada in 1989 and settled in Vancouver, British
                  Columbia, where he became a beloved presence in his family and in the
                  Pakistani-Canadian community.
                </p>
                <p>
                  He remained active and deeply connected to his family throughout his years in
                  Vancouver. He passed away there on May 30, 2026.
                </p>
                <p className="text-sm italic text-gray-500 bg-parchment border border-cream-dark rounded p-4">
                  More details about his life in Canada will be added as the family archive
                  is reviewed.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            <section className="mb-10">
              <SectionHeader title="Legacy" goldDivider />
              <div className="prose-archive">
                <p>
                  Aslam Hayat leaves behind a family who carries the values he lived by — a love
                  of learning, a sincere practice of faith, patience, humility, and a commitment to
                  service. He leaves behind his writings, his memories, and the example of a life
                  well and generously lived.
                </p>
                <p>
                  This archive is maintained by his family to preserve his memory for future
                  generations.
                </p>
              </div>
            </section>

          </main>
        </div>
      </div>
    </div>
  );
}
