import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Scholarship & Spirituality — Aslam Hayat',
  description:
    'Aslam Hayat was a lifelong reader and student of Islamic scholarship, Sufism, comparative religion, and science. His intellectual life shaped everything he wrote.',
  canonical: '/scholarship-and-spirituality',
  ogType: 'article',
});

const sufiScholars = [
  { name: 'Shaykh Abdul Qadir al-Jilani', note: 'Founder of the Qadiriyya order; master of Islamic jurisprudence and spiritual teaching' },
  { name: 'Imam Abu Hamid al-Ghazali', note: 'Author of Ihya Ulum al-Din; philosopher of the spiritual sciences' },
  { name: 'Jalaluddin Rumi', note: 'Persian poet and Sufi mystic; author of the Masnavi' },
  { name: 'Ali Hujwiri (Data Ganj Bakhsh)', note: 'Author of Kashf al-Mahjub; patron saint of Lahore' },
  { name: 'Lal Shahbaz Qalandar', note: 'Sufi saint of Sindh; revered across South Asia' },
  { name: 'Baba Farid', note: 'Punjabi Sufi saint; among the earliest poets in the Punjabi language' },
  { name: 'Shaykh Zakariya Kandhlawi', note: 'Scholar and spiritual teacher of the Deobandi tradition' },
  { name: 'Fakhr al-Din al-Razi', note: 'Theologian and philosopher; author of major Quranic commentary' },
  { name: 'Muhyiddin Ibn Arabi', note: 'Andalusian philosopher and mystic; among the most studied of all Sufi thinkers' },
];

const comparativeThought = [
  { name: 'His Holiness the Dalai Lama', note: 'Teachings on compassion, mindfulness, and the ethics of human kindness' },
  { name: 'Karen Armstrong', note: 'Historian of religion and author on Islam, Christianity, Judaism, and compassion' },
  { name: 'Neil Douglas-Klotz', note: 'Scholar of Semitic spirituality and the Aramaic roots of sacred texts' },
  { name: 'Kabir Helminski', note: 'Translator of Rumi and writer on Sufi wisdom for contemporary readers' },
  { name: 'Deepak Chopra', note: 'Author on consciousness, spirituality, and the integration of science and faith' },
];

const scientificThinkers = [
  { name: 'Albert Einstein', note: 'Reflections on the nature of reality, time, space, and the relationship between science and spirituality' },
  { name: 'Stephen Hawking', note: 'Writings on cosmology, the origins of the universe, and the limits of human knowledge' },
];

const writingTopics = [
  'History and civilisation',
  'Islamic scholarship',
  'Spiritual development',
  'Ethics and morality',
  'Contemporary social issues',
  'Science and religion',
  'The experience of immigration',
  'Interfaith understanding',
  'Personal reflections and life lessons',
];

export default function ScholarshipPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="arabic-text text-gold text-2xl md:text-3xl mb-4 font-urdu">
            اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ
          </p>
          <p className="font-lora text-sm text-cream-dark italic mb-6 opacity-80">
            &ldquo;Read in the name of your Lord who created.&rdquo; — Quran 96:1
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            Scholarship &amp; Spirituality
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-2xl mx-auto">
            A lifelong pursuit of wisdom — across Islamic tradition, world thought, and the sciences
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      {/* Intro */}
      <section className="bg-parchment border-b border-cream-dark py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-archive text-center max-w-3xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Aslam Hayat built his professional career in accountancy and civil aviation. He spent his
              personal life building a library. By the time he passed away, he had accumulated thousands
              of books spanning Islamic theology, Sufi philosophy, world history, comparative religion,
              cosmology, and political thought.
            </p>
            <p className="text-base leading-relaxed text-gray-600 mt-4">
              The books he surrounded himself with were not decoration. He read them. He marked them.
              He returned to them. They fed directly into 650 published articles and a way of seeing
              the world that everyone who knew him recognised.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* ── 1. Islamic Scholarship & Sufism ── */}
        <section>
          <SectionHeader
            title="Islamic Scholarship &amp; Sufism"
            subtitle="The scholars, saints, and mystics whose writings shaped his spiritual life"
            goldDivider
          />
          <div className="prose-archive mb-8">
            <p>
              One of the central pillars of Aslam Hayat&apos;s intellectual life was the study of
              Islamic spirituality, particularly the rich traditions of Sufism. For decades he read
              and reflected upon the works of some of the most influential scholars, saints,
              philosophers, and mystics in Islamic history.
            </p>
            <p>
              Through these scholars he explored themes such as spiritual purification, self-knowledge,
              divine love, humility, patience, trust in God, ethical conduct, and the inner dimensions
              of faith.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {sufiScholars.map(({ name, note }) => (
              <div
                key={name}
                className="bg-parchment border border-cream-dark rounded-lg p-5 hover:border-gold-dark transition-colors"
              >
                <h3 className="font-playfair text-base text-green font-bold mb-2">{name}</h3>
                <p className="font-lora text-xs text-gray-600 leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 2. Ibn Arabi and Spiritual Philosophy ── */}
        <section>
          <SectionHeader
            title="Ibn Arabi &amp; Spiritual Philosophy"
            subtitle="The thinker who occupied the most central place in his studies"
            goldDivider
          />
          <div className="bg-green rounded-lg p-8 md:p-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-playfair text-3xl text-gold opacity-60 mb-3">&ldquo;</p>
              <blockquote className="font-lora text-lg md:text-xl text-cream-light leading-relaxed italic mb-6">
                Among the scholars he studied, Ibn Arabi occupied a particularly important place.
                Aslam Hayat spent many years reading and contemplating Ibn Arabi&apos;s writings
                concerning the nature of existence, divine reality, human consciousness, and
                spiritual transformation.
              </blockquote>
              <div className="gold-divider mb-4" />
              <p className="font-lora text-sm text-cream-dark">
                <strong className="text-gold">Muhyiddin Ibn Arabi</strong> (1165–1240) —
                Andalusian philosopher and mystic; among the most widely studied Sufi thinkers
                in Islamic intellectual history.
              </p>
            </div>
          </div>
          <div className="prose-archive mt-8">
            <p>
              Ibn Arabi&apos;s vast body of work — including the <em>Futuhat al-Makkiyya</em> (The
              Meccan Revelations) and the <em>Fusus al-Hikam</em> (The Bezels of Wisdom) — addresses
              the deepest questions of existence, divine attributes, the human soul, and the nature
              of knowledge. For Aslam Hayat, studying these texts was not merely an academic exercise
              but a sustained spiritual practice spanning many years.
            </p>
          </div>
        </section>

        {/* ── 3. Comparative Religion & World Thought ── */}
        <section>
          <SectionHeader
            title="Comparative Religion &amp; World Thought"
            subtitle="A mind open to wisdom across traditions"
            goldDivider
          />
          <div className="prose-archive mb-8">
            <p>
              Although deeply rooted in Islamic tradition, Aslam Hayat never limited himself to a
              single intellectual framework. He believed that meaningful understanding often emerged
              through dialogue between traditions and disciplines. As a result, he regularly explored
              works written by thinkers from diverse religious, philosophical, and scientific
              backgrounds.
            </p>
            <p>
              These writers introduced perspectives on spirituality, comparative religion, compassion,
              consciousness, and the shared ethical values that connect humanity across cultures.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {comparativeThought.map(({ name, note }) => (
              <div
                key={name}
                className="bg-parchment border border-cream-dark rounded-lg p-5 hover:border-gold-dark transition-colors"
              >
                <h3 className="font-playfair text-base text-green font-bold mb-2">{name}</h3>
                <p className="font-lora text-xs text-gray-600 leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Science, Cosmology & Human Knowledge ── */}
        <section>
          <SectionHeader
            title="Science, Cosmology &amp; Human Knowledge"
            subtitle="The questions that connect scientific discovery to spiritual understanding"
            goldDivider
          />
          <div className="prose-archive mb-8">
            <p>
              Aslam Hayat was equally fascinated by scientific inquiry and humanity&apos;s search
              to understand the universe. He was particularly interested in questions concerning the
              origins of the universe, time, consciousness, human knowledge, and the relationship
              between scientific discovery and spiritual understanding.
            </p>
            <p>
              Rather than viewing science and spirituality as opposing forces, he often regarded them
              as complementary efforts to understand reality from different perspectives.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {scientificThinkers.map(({ name, note }) => (
              <div
                key={name}
                className="bg-parchment border border-cream-dark rounded-lg p-6 hover:border-gold-dark transition-colors"
              >
                <h3 className="font-playfair text-lg text-green font-bold mb-2">{name}</h3>
                <p className="font-lora text-sm text-gray-600 leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Writing and Intellectual Legacy ── */}
        <section>
          <SectionHeader
            title="Writing &amp; Intellectual Legacy"
            subtitle="How a lifetime of reading shaped 650 published articles"
            goldDivider
          />
          <div className="prose-archive mb-8">
            <p>
              The influence of these scholars and thinkers found direct expression in his own writing.
              Over a period spanning more than twenty-five years, Aslam Hayat published over{' '}
              <strong>650 articles</strong> in Vancouver&apos;s Pakistani community newspaper,{' '}
              <em>The Miracle</em>. His writings frequently explored:
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {writingTopics.map((topic) => (
              <div
                key={topic}
                className="flex items-start gap-3 bg-parchment border border-cream-dark rounded-lg p-4"
              >
                <span className="text-gold font-playfair text-lg leading-none mt-0.5">·</span>
                <span className="font-lora text-sm text-gray-700 leading-relaxed">{topic}</span>
              </div>
            ))}
          </div>
          <div className="prose-archive">
            <p>
              His articles sought to educate, encourage reflection, and preserve knowledge for future
              generations. The breadth of his reading is reflected directly in the range of his
              writing — few columnists in the Pakistani-Canadian community brought the same depth of
              historical, spiritual, and philosophical perspective to every subject they addressed.
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link href="/articles" className="btn-primary text-center">
              Browse His Articles
            </Link>
            <Link href="/faith-theology-and-spirituality" className="btn-gold text-center">
              Faith &amp; Theology
            </Link>
            <Link href="/about" className="btn-gold text-center">
              Biography
            </Link>
          </div>
        </section>

        {/* ── 6. Lifelong Pursuit of Wisdom ── */}
        <section>
          <SectionHeader
            title="A Lifelong Pursuit of Wisdom"
            goldDivider
          />
          <div className="prose-archive">
            <p>
              Those who knew him remembered above all his curiosity, his humility, and his
              eagerness to learn — qualities he modelled until the very end of his life.
            </p>
          </div>
        </section>

      </div>

    </div>
  );
}
