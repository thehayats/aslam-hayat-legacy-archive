import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Faith, Theology & Spiritual Worldview — Aslam Hayat',
  description:
    'Aslam Hayat was a devoted Muslim and a serious student of Islamic spirituality — the Quran, the Sunnah, Sufism, Ibn Arabi, and the intersection of faith and science.',
  canonical: '/faith-theology-and-spirituality',
  ogType: 'article',
});

const sufiScholars = [
  'Shaykh Abdul Qadir al-Jilani',
  'Imam Abu Hamid al-Ghazali',
  'Jalaluddin Rumi',
  'Ali Hujwiri (Data Ganj Bakhsh)',
  'Lal Shahbaz Qalandar',
  'Baba Farid',
  'Shaykh Zakariya Kandhlawi',
  'Fakhr al-Din al-Razi',
  'Muhyiddin Ibn Arabi',
];

const comparativeThinkers = [
  'The Dalai Lama',
  'Karen Armstrong',
  'Deepak Chopra',
  'Neil Douglas-Klotz',
  'Kabir Helminski',
];

export default function FaithPage() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <div className="bg-green py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="arabic-text text-gold text-3xl md:text-4xl mb-3 font-urdu leading-loose">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <p className="font-lora text-sm text-cream-dark italic mb-8 opacity-80">
            In the name of Allah, the Most Gracious, the Most Merciful
          </p>
          <div className="gold-divider mb-8" />
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-5 leading-tight">
            Faith, Theology &amp;<br className="hidden sm:block" /> Spiritual Worldview
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-2xl mx-auto leading-relaxed">
            The Quran, the Sunnah, Islamic spirituality,
            and the deeper questions of human existence
          </p>
          <div className="gold-divider mt-8" />
        </div>
      </div>

      {/* ── Intro ── */}
      <section className="bg-parchment border-b border-cream-dark py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-lora text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-6">
            When Aslam Hayat passed away in May 2026, his home was full of books — on Quranic
            exegesis, Islamic philosophy, Sufi metaphysics, comparative religion, and the
            sciences. He had been reading them until very close to the end.
          </p>
          <p className="font-lora text-base text-gray-600 leading-relaxed text-center">
            For him, faith was not separate from learning. It was the reason for it. The Quranic
            command to read — <em>iqra</em> — was the instruction he spent his life following.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* 1. Library */}
        <section>
          <SectionHeader title="A Personal Library" goldDivider />
          <div className="prose-archive">
            <p>
              For decades, Aslam Hayat built a personal library spanning theology, Quranic
              interpretation, Sufi philosophy, prophetic traditions, history, and comparative
              religion. Those who knew him recall finding him reading at almost any hour —
              annotating texts, returning to the same books across years, keeping handwritten notes.
            </p>
          </div>
        </section>

        {/* 2. The Quran */}
        <section>
          <SectionHeader title="The Quran" goldDivider />
          <div className="prose-archive">
            <p>
              He studied the Quran repeatedly in Arabic, alongside translations and tafsīr
              (exegetical commentary). He was particularly attentive to language — how individual
              words carried precise meanings, how a verse&apos;s historical context shaped its
              interpretation. His newspaper columns returned often to Quranic themes, particularly
              on questions of justice, knowledge, and the relationship between faith and reason.
            </p>
          </div>
        </section>

        {/* 3. Sunnah */}
        <section>
          <SectionHeader title="The Sunnah" goldDivider />
          <div className="prose-archive">
            <p>
              He studied the major works of Seerah (Prophetic biography) and the classical Hadith
              collections. When confronted with difficult questions, he looked first to the primary
              sources — the Quran and the traditions of the Prophet ﷺ — rather than relying
              on contemporary opinion alone.
            </p>
          </div>
        </section>

        {/* 4. Sufism */}
        <section>
          <SectionHeader title="Sufism" goldDivider />
          <div className="prose-archive mb-6">
            <p>
              He spent many years reading the works of the major scholars and saints in the Islamic
              tradition of Tasawwuf — covering the purification of the heart, remembrance of Allah
              (dhikr), spiritual awareness, and the inner dimensions of practice.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
            {sufiScholars.map((name) => (
              <div
                key={name}
                className="bg-parchment border border-cream-dark rounded-lg px-4 py-3 hover:border-gold-dark transition-colors"
              >
                <p className="font-playfair text-sm text-green font-bold leading-snug">{name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Divine Names */}
        <section>
          <SectionHeader title="The Divine Names" goldDivider />
          <div className="prose-archive">
            <p>
              The study of the Names and Attributes of Allah held particular interest for him.
              Drawing on classical Sufi teaching, he understood the remembrance of Allah through
              His Names — dhikr — as a practice that strengthened patience, cultivated gratitude,
              and deepened awareness of the Divine Presence in ordinary life.
            </p>
          </div>
        </section>

        {/* 6. Ibn Arabi */}
        <section>
          <SectionHeader title="Ibn Arabi" goldDivider />
          <div className="bg-green rounded-lg p-7 md:p-10 mb-6">
            <div className="max-w-2xl mx-auto">
              <p className="font-lora text-base md:text-lg text-cream-light leading-relaxed mb-4">
                Among the scholars he studied, Muhyiddin Ibn Arabi held a particularly
                significant place. Aslam Hayat spent many years reading and reflecting upon
                Ibn Arabi&apos;s writings concerning the nature of existence, divine reality,
                human consciousness, and spiritual transformation.
              </p>
              <p className="font-lora text-sm text-cream-dark leading-relaxed">
                <strong className="text-gold">Muhyiddin Ibn Arabi</strong> (1165–1240) —
                Andalusian philosopher and mystic. His principal works include the{' '}
                <em>Futuhat al-Makkiyya</em> (The Meccan Revelations) and the{' '}
                <em>Fusus al-Hikam</em> (The Bezels of Wisdom).
              </p>
            </div>
          </div>
        </section>

        {/* 7. Science */}
        <section>
          <SectionHeader title="Science and Faith" goldDivider />
          <div className="prose-archive">
            <p>
              He read extensively in physics, cosmology, and astronomy — including the works
              of <strong>Albert Einstein</strong> and <strong>Stephen Hawking</strong>. He was
              particularly interested in the origins of the universe, the nature of time and
              space, and how scientific inquiry bore on questions the Quran had raised
              centuries earlier.
            </p>
          </div>
        </section>

        {/* 8. Comparative Religion */}
        <section>
          <SectionHeader title="Comparative Religion" goldDivider />
          <div className="prose-archive mb-6">
            <p>
              Firmly rooted in Islamic tradition, he nonetheless read works by thinkers from other
              religious and philosophical backgrounds — particularly those addressing spirituality,
              compassion, and the nature of consciousness.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {comparativeThinkers.map((name) => (
              <div
                key={name}
                className="bg-parchment border border-cream-dark rounded-lg px-4 py-3 hover:border-gold-dark transition-colors"
              >
                <p className="font-playfair text-sm text-green font-bold leading-snug">{name}</p>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Cross-links */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-parchment border border-cream-dark rounded-lg p-5 flex flex-col justify-between gap-4">
            <div>
              <p className="font-playfair text-base text-green font-bold mb-1">Travels, Pilgrimage &amp; Exploration</p>
              <p className="font-lora text-sm text-gray-600">
                The pilgrimages to Makkah and Madinah and the journeys that deepened his faith.
              </p>
            </div>
            <Link href="/travels-pilgrimage-and-exploration" className="btn-gold text-sm text-center">Explore</Link>
          </div>
          <div className="bg-parchment border border-cream-dark rounded-lg p-5 flex flex-col justify-between gap-4">
            <div>
              <p className="font-playfair text-base text-green font-bold mb-1">Scholarship &amp; Intellectual Influences</p>
              <p className="font-lora text-sm text-gray-600">
                The scholars, saints, and thinkers he read — and how they shaped 650 published articles.
              </p>
            </div>
            <Link href="/scholarship-and-spirituality" className="btn-gold text-sm text-center">Explore</Link>
          </div>
        </div>
      </div>

    </div>
  );
}
