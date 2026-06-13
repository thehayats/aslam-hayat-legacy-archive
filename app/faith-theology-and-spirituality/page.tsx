import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Faith, Theology & Spiritual Worldview — Aslam Hayat',
  description:
    'Among the many dimensions of Aslam Hayat\'s life, perhaps none was more important than his lifelong pursuit of spiritual understanding — the Quran, Sunnah, Sufism, and the search for divine knowledge.',
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

function PullQuote({ text, wide = false }: { text: string; wide?: boolean }) {
  return (
    <div className={`my-8 ${wide ? 'max-w-3xl mx-auto' : ''}`}>
      <div className="border-l-4 border-gold pl-6 py-1">
        <p className="font-playfair text-lg md:text-xl text-green italic leading-relaxed">
          &ldquo;{text}&rdquo;
        </p>
      </div>
    </div>
  );
}

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
            A lifelong pursuit of the Quran, the Sunnah, Islamic spirituality,
            and the deeper questions of human existence
          </p>
          <div className="gold-divider mt-8" />
        </div>
      </div>

      {/* ── Intro ── */}
      <section className="bg-parchment border-b border-cream-dark py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-lora text-lg md:text-xl text-gray-700 leading-relaxed text-center mb-6">
            Among the many dimensions of Aslam Hayat&apos;s life, perhaps none was more important
            to him than his lifelong pursuit of spiritual understanding. While he devoted his
            professional career to public service and accountancy, much of his personal life was
            devoted to the study of Islam, spirituality, philosophy, history, and the deeper
            questions of human existence.
          </p>
          <p className="font-lora text-base text-gray-600 leading-relaxed text-center">
            Family members often described him as a lifelong student. He believed that learning
            was a form of worship and that the search for wisdom should continue throughout
            one&apos;s entire life.
          </p>
        </div>
      </section>

      {/* ── Main content ── */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* 1. A Lifelong Student */}
        <section>
          <SectionHeader title="A Lifelong Student of Islamic Knowledge" goldDivider />
          <div className="prose-archive">
            <p>
              For decades, Aslam Hayat immersed himself in the study of Islamic scholarship.
              His personal library grew into a vast collection of books covering theology,
              spirituality, Quranic interpretation, prophetic traditions, history, philosophy,
              and comparative religion.
            </p>
            <p>
              Over the course of his life, he read thousands of books and devoted countless hours
              to study and reflection. He was particularly interested in understanding not only
              the outward teachings of Islam but also their deeper spiritual meanings.
            </p>
          </div>
        </section>

        {/* 2. The Quran */}
        <section>
          <SectionHeader title="The Quran: A Lifetime of Reflection" goldDivider />
          <div className="prose-archive">
            <p>
              The Quran occupied a central place in Aslam Hayat&apos;s intellectual and
              spiritual life. He did not approach the Quran merely as a text to be recited.
              He approached it as a lifelong source of contemplation, guidance, and discovery.
            </p>
            <p>
              Throughout his life he repeatedly studied the Quran in Arabic, alongside
              translations and commentaries. He often examined verses individually, reflecting
              upon their language, historical context, spiritual significance, and practical
              application.
            </p>
          </div>
          <div className="prose-archive">
            <p>
              For him, the Quran was not simply a book of religious instruction. It was a guide
              to understanding the human condition, ethics, history, spirituality, and
              humanity&apos;s relationship with the Creator.
            </p>
            <p>
              He frequently explored how Quranic teachings related to both contemporary life
              and broader questions concerning knowledge, science, and existence.
            </p>
          </div>
        </section>

        {/* 3. Sunnah */}
        <section>
          <SectionHeader title="Love of the Sunnah and the Life of the Prophet ﷺ" goldDivider />
          <div className="prose-archive">
            <p>
              Alongside the Quran, Aslam Hayat maintained a deep attachment to the life and
              teachings of the Prophet Muhammad ﷺ. He studied many of the major works of
              Seerah (Prophetic biography) and collections of Hadith, including the most
              widely respected classical compilations.
            </p>
            <p>
              He viewed the Prophet Muhammad ﷺ not only as a religious figure but as the
              highest example of character, wisdom, compassion, justice, and spiritual excellence.
            </p>
            <p>
              When confronted with life&apos;s challenges, he often searched for guidance
              through the Quran, Hadith, and the writings of Islamic scholars rather than
              relying solely upon contemporary opinions.
            </p>
          </div>
        </section>

        {/* 4. Sufism */}
        <section>
          <SectionHeader title="The Influence of Sufism" goldDivider />
          <div className="prose-archive mb-6">
            <p>
              One of the defining features of Aslam Hayat&apos;s spiritual life was his deep
              interest in the Islamic tradition of Tasawwuf (Sufism). For many years he studied
              the writings of some of the most influential spiritual teachers in Islamic history.
            </p>
            <p>
              Through these scholars he explored themes such as purification of the heart,
              remembrance of Allah, self-discipline, sincerity, divine love, trust in God,
              and spiritual awareness.
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
          <SectionHeader title="The Divine Names and Attributes" goldDivider />
          <div className="prose-archive">
            <p>
              Among the subjects that fascinated Aslam Hayat most deeply was the study of the
              Names and Attributes of Allah. He believed that the Divine Names were not merely
              theological concepts but living realities capable of transforming human character
              and consciousness.
            </p>
            <p>
              Influenced by classical Sufi teachings, he often reflected upon how remembrance
              of Allah through His Names could strengthen faith, cultivate patience, increase
              gratitude, and deepen awareness of the Divine Presence.
            </p>
          </div>
        </section>

        {/* 6. Ibn Arabi */}
        <section>
          <SectionHeader title="Ibn Arabi and Spiritual Philosophy" goldDivider />
          <div className="bg-green rounded-lg p-7 md:p-10 mb-6">
            <div className="max-w-2xl mx-auto">
              <p className="font-lora text-base md:text-lg text-cream-light leading-relaxed mb-4">
                Among the scholars he studied, Muhyiddin Ibn Arabi held a particularly
                significant place. Aslam Hayat spent many years reading and reflecting upon
                Ibn Arabi&apos;s writings concerning existence, consciousness, divine reality,
                and humanity&apos;s relationship with God.
              </p>
              <p className="font-lora text-sm text-cream-dark leading-relaxed">
                While these ideas are often complex and interpreted differently by various
                scholars, he was fascinated by questions concerning spiritual perception, the
                nature of reality, the unseen world, dreams, consciousness, and
                humanity&apos;s journey toward divine knowledge.
              </p>
            </div>
          </div>
          <div className="prose-archive">
            <p>
              He viewed these subjects as areas for contemplation and reflection rather than
              simple answers.
            </p>
          </div>
        </section>

        {/* 7. Science */}
        <section>
          <SectionHeader title="Science, Knowledge and Faith" goldDivider />
          <div className="prose-archive">
            <p>
              Aslam Hayat also maintained a lifelong interest in science. He read extensively
              about physics, cosmology, astronomy, and modern scientific discoveries. Among the
              thinkers whose works he explored were <strong>Albert Einstein</strong> and{' '}
              <strong>Stephen Hawking</strong>.
            </p>
            <p>
              He was particularly interested in questions concerning time, space, the origins
              of the universe, and the relationship between scientific inquiry and spiritual
              understanding.
            </p>
            <p>
              He often reflected on how scientific discoveries appeared to reveal aspects of
              creation that the Quran had encouraged believers to contemplate centuries earlier.
            </p>
          </div>
        </section>

        {/* 8. Comparative Religion */}
        <section>
          <SectionHeader title="Comparative Religion and Universal Wisdom" goldDivider />
          <div className="prose-archive mb-6">
            <p>
              Although firmly rooted in Islam, Aslam Hayat maintained a broad intellectual
              curiosity. He read works by thinkers from various religious and philosophical
              traditions.
            </p>
            <p>
              He believed that sincere dialogue and respectful study could help deepen
              understanding while strengthening one&apos;s own faith. His goal was never to
              replace Islamic teachings but to better understand humanity&apos;s shared search
              for truth, meaning, and wisdom.
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

        {/* 9. Featured quote — A Life Dedicated to Learning */}
        <section>
          <SectionHeader title="A Life Dedicated to Learning" goldDivider />
          <div className="prose-archive mb-8">
            <p>
              Whether studying the Quran, the Sunnah, Islamic spirituality, history, philosophy,
              or science, he approached knowledge with humility and curiosity.
            </p>
            <p>
              He believed that faith and learning were lifelong journeys and that every sincere
              search for truth ultimately pointed back to the Creator.
            </p>
            <p>
              Those who knew him often remember not only what he knew, but how deeply he loved
              learning itself. His spiritual legacy continues through the books he studied, the
              articles he wrote, the conversations he shared, and the generations he inspired
              to seek knowledge with both intellect and heart.
            </p>
          </div>

        </section>

      </div>

      {/* Cross-links to new sections */}
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
              <p className="font-playfair text-base text-green font-bold mb-1">Technology &amp; Lifelong Learning</p>
              <p className="font-lora text-sm text-gray-600">
                His curiosity about technology — an expression of the same drive to understand the world.
              </p>
            </div>
            <Link href="/technology-and-lifelong-learning" className="btn-gold text-sm text-center">Explore</Link>
          </div>
        </div>
      </div>


    </div>
  );
}
