import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'About Aslam Hayat',
  description:
    'The biography of Aslam Hayat — scholar, writer, and beloved father. His life, education, career, family, and lasting legacy.',
  canonical: '/about',
  ogType: 'article',
});

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="arabic-text text-gold text-2xl mb-4">رحمۃ اللہ علیہ</p>
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            Aslam Hayat
          </h1>
          <p className="font-lora text-lg text-cream-dark italic">
            1945 – 2020 &nbsp;·&nbsp; Lahore, Pakistan
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Sidebar — Quick Facts */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="bg-parchment border border-cream-dark rounded-lg p-6 sticky top-24">
              <h2 className="font-playfair text-xl text-green font-bold mb-5">
                Quick Facts
              </h2>
              <dl className="space-y-4">
                {[
                  { label: 'Born', value: '1945, Lahore, Punjab, Pakistan' },
                  { label: 'Passed Away', value: '2020, Lahore' },
                  { label: 'Education', value: 'University of the Punjab, Lahore' },
                  { label: 'Occupation', value: 'Writer, Columnist, Educator' },
                  { label: 'Languages', value: 'Urdu, Arabic, English' },
                  { label: 'Genre', value: 'Essay, Literary Criticism, Spiritual Reflection' },
                  { label: 'Spouse', value: 'Nasreen Akhtar' },
                  { label: 'Children', value: 'Several, including Hayat family members' },
                  { label: 'Religion', value: 'Islam (Sunni)' },
                  { label: 'Known for', value: 'Urdu prose, Islamic thought, community service' },
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
                <Link href="/articles" className="block text-center btn-gold text-sm py-2">
                  Browse His Writings
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Biography */}
          <main className="lg:col-span-2 order-1 lg:order-2">
            {/* Early Life */}
            <section className="mb-10">
              <SectionHeader title="Early Life" goldDivider />
              <div className="prose-archive">
                <p>
                  Aslam Hayat was born in 1945 in Lahore, the cultural heart of what would soon
                  become the new nation of Pakistan. His family were not wealthy, but they were
                  deeply educated — his father was a schoolteacher with a love of classical Urdu
                  poetry, and his mother could recite the Quran with exceptional beauty and
                  precision. In such a home, the love of language was not taught so much as
                  absorbed.
                </p>
                <p>
                  The Lahore of Aslam Hayat&apos;s childhood was a city still finding its footing
                  after Partition. It was a city of libraries and bookshops, of tea houses where
                  poets argued about metre, of mosques where the Friday sermon was still considered
                  a literary occasion as much as a religious one. The young Aslam moved through
                  this world with wide-open eyes, collecting impressions that would colour his
                  writing for the rest of his life.
                </p>
                <p>
                  He was, by all accounts, a quiet child — watchful rather than gregarious, more
                  comfortable with a book than in a crowd. But those who took the time to engage
                  him in conversation discovered a mind that moved quickly and deeply, capable of
                  connecting a passage of Ghalib to a current news event, or of finding in a
                  classical story the exact illumination a present dilemma required.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            {/* Education */}
            <section className="mb-10">
              <SectionHeader title="Education" goldDivider />
              <div className="prose-archive">
                <p>
                  Aslam Hayat received his primary and secondary education at government schools
                  in Lahore, distinguishing himself in Urdu language and Islamic studies. His
                  teachers recalled him as a student who not only performed well in examinations
                  but who asked questions that revealed genuine intellectual curiosity — questions
                  about the meanings beneath the meanings of the texts he was given to study.
                </p>
                <p>
                  He won the district-level Urdu essay competition twice during his secondary
                  years, and his school gazette published several of his short pieces, which
                  were already showing the distinctive voice — precise, warm, deeply grounded
                  in Islamic tradition — that would mark his mature work.
                </p>
                <p>
                  At the University of the Punjab, where he studied Urdu Literature and Islamic
                  Studies, he found his intellectual community. He became a central figure in the
                  university&apos;s literary circle, helping to organise <em>mushairas</em>{' '}
                  (poetry gatherings) and editing the student literary journal. It was here, too,
                  that he encountered the great classical traditions of Urdu poetry — Mir, Ghalib,
                  Iqbal — in a systematic way, and it was Iqbal&apos;s vision of the spiritually
                  revived, intellectually engaged Muslim that would animate his own work for
                  decades to come.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            {/* Career */}
            <section className="mb-10">
              <SectionHeader title="Career" goldDivider />
              <div className="prose-archive">
                <p>
                  After graduating with honours in 1968, Aslam Hayat published his first formal
                  essay in a respected Lahore literary journal. The response was immediate and
                  warm — readers recognised a new voice, one that combined the classical elegance
                  of traditional Urdu prose with a clear-eyed engagement with the contemporary
                  world.
                </p>
                <p>
                  Through the 1970s he established himself as a columnist and essayist,
                  contributing regularly to several major newspapers and literary journals. His
                  range was broad: he wrote about literature and language, about Islamic
                  philosophy and its contemporary relevance, about the lives of ordinary Pakistanis
                  and the pressures and joys they navigated. He was never a polemicist — his was
                  always a voice of measured reflection, of patient engagement with complexity.
                </p>
                <p>
                  By the 1980s he had become a recognised name in Pakistani literary circles,
                  receiving his first major award in 1980 for contributions to Urdu prose. He
                  served in senior editorial and educational roles through the 1980s and 1990s,
                  using his positions to champion younger writers and to advocate for the place
                  of Urdu in a country where the educated elite was increasingly drifting
                  toward English.
                </p>
                <p>
                  His second major essay collection, published in 2005, was widely reviewed and
                  praised for its mature synthesis of classical learning and contemporary
                  sensitivity. Several of its essays are now taught in Pakistani universities.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            {/* Family */}
            <section className="mb-10">
              <SectionHeader title="Family" goldDivider />
              <div className="prose-archive">
                <p>
                  In 1975 Aslam Hayat married Nasreen Akhtar, and the partnership that followed
                  was the bedrock of his life. Their home in Lahore became known to a wide circle
                  of friends, students, and colleagues as a place of genuine hospitality —
                  a place where the conversation was always worth having and where the tea never
                  ran out.
                </p>
                <p>
                  He was a father who read aloud to his children each evening — poetry, stories,
                  Quranic exegesis — and who considered the transmission of a love of language
                  to the next generation one of his most important duties. His children remember
                  him as a man of remarkable consistency: the father they saw at home was
                  recognisably the same as the writer they read in print — thoughtful, patient,
                  never harsh, always willing to listen.
                </p>
                <p>
                  In later years, his grandchildren became a source of particular joy. He would
                  tell them stories from Pakistani history, recite poems from memory, and — they
                  remember with great fondness — slip them sweets when their grandmother was not
                  watching.
                </p>
              </div>
            </section>

            <hr className="section-divider" />

            {/* Legacy */}
            <section className="mb-10">
              <SectionHeader title="Legacy" goldDivider />
              <div className="prose-archive">
                <p>
                  Aslam Hayat left behind a body of work that constitutes an invaluable record
                  of a particular kind of Pakistani intellectual life — one rooted in the classical
                  Urdu literary tradition, shaped by Islamic learning, and engaged with the
                  complexities of a rapidly changing society.
                </p>
                <p>
                  His essays on the Urdu language — its history, its beauty, its contemporary
                  predicament — are among the finest written defences of the language in the
                  post-Partition period. His spiritual reflections, particularly those written
                  in his later years, have been described by readers as genuinely consoling —
                  the work of a man who had thought deeply about suffering, loss, and hope and
                  who had arrived at a place of hard-won equanimity.
                </p>
                <p>
                  But perhaps his most lasting legacy is the people he influenced. The students
                  he mentored, the younger writers he encouraged, the readers who wrote to tell
                  him what his words had meant to them — these are the true measure of a life
                  given to language in service of truth.
                </p>
                <blockquote className="border-l-4 border-gold pl-5 italic text-green bg-parchment py-3 pr-4 rounded-r">
                  &ldquo;He taught me that writing is not about showing off your learning. It is
                  about giving away what you know — as a gift, without reservation.&rdquo;
                  <cite className="block not-italic text-sm mt-2 text-gray-600">
                    — A former student
                  </cite>
                </blockquote>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
