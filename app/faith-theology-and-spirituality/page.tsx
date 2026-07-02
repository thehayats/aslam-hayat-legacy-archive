import type { Metadata } from 'next';
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

      <div className="bg-parchment border-b border-cream-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 text-center">
          <p className="arabic-text text-gold text-2xl font-urdu mb-3 leading-loose">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <h1 className="font-playfair text-2xl md:text-3xl text-green font-bold">
            Faith, Theology &amp; Spiritual Worldview
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        <section>
          <SectionHeader title="A Personal Library" goldDivider />
          <div className="prose-archive">
            <p>
              When Aslam Hayat passed away in May 2026, his home was full of books — on Quranic
              exegesis, Islamic philosophy, Sufi metaphysics, comparative religion, and the
              sciences. He had been reading them until very close to the end. For decades, he
              had built a personal library spanning theology, Sufi philosophy, prophetic traditions,
              history, and comparative religion. Those who knew him recall finding him reading at
              almost any hour — annotating texts, returning to the same books across years,
              keeping handwritten notes.
            </p>
          </div>
        </section>

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

        <section>
          <SectionHeader title="Sufism" goldDivider />
          <div className="prose-archive mb-6">
            <p>
              He spent many years reading the works of the major scholars and saints in the Islamic
              tradition of Tasawwuf — covering the purification of the heart, remembrance of Allah
              (dhikr), spiritual awareness, and the inner dimensions of practice.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
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

        <section>
          <SectionHeader title="Ibn Arabi" goldDivider />
          <div className="bg-green rounded-lg p-7 md:p-10">
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

    </div>
  );
}
