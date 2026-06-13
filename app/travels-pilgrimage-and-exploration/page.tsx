import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Travels, Pilgrimage & Exploration — Aslam Hayat',
  description:
    'From a weeks-long sea voyage to London past the Strait of Gibraltar, to pilgrimages in Makkah and Madinah, to Istanbul in 2008 — the journeys of Aslam Hayat across continents and decades.',
  canonical: '/travels-pilgrimage-and-exploration',
  ogType: 'article',
});

const destinations = [
  { name: 'United Kingdom', note: 'London — studies, family visits, and decades of connection' },
  { name: 'Saudi Arabia', note: 'Makkah and Madinah — multiple pilgrimages over the years' },
  { name: 'Turkey', note: 'Istanbul, 2008 — Blue Mosque, Topkapi Palace, Ottoman history' },
  { name: 'Egypt', note: 'Ancient civilisation and Islamic heritage' },
  { name: 'Cyprus', note: 'Mediterranean travels' },
  { name: 'France', note: 'European exploration' },
  { name: 'Pakistan', note: 'Lahore — return visits to the city of his birth' },
  { name: 'United Arab Emirates', note: 'Family visits, including Dubai' },
];

const istanbulSites = [
  { name: 'The Blue Mosque', note: 'Sultanahmet Camii — a masterpiece of Ottoman architecture and a living place of worship' },
  { name: 'Topkapi Palace', note: 'Heart of the Ottoman Empire for four centuries — treasury, courts, and sacred relics' },
  { name: 'Topkapi Museum', note: 'The museum collections — a window into Ottoman civilisation and Islamic heritage' },
];

export default function TravelsPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            Travels, Pilgrimage &amp; Exploration
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-2xl mx-auto">
            From a sea voyage past Gibraltar to the sacred cities of Makkah and Madinah
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      {/* Intro */}
      <section className="bg-parchment border-b border-cream-dark py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-archive text-center max-w-3xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Travel played an important role in Aslam Hayat&apos;s life and helped shape his
              understanding of the world. Wherever he travelled, he sought more than sightseeing.
              He wanted to understand the history, culture, people, food, and ideas that shaped
              each place. He approached travel as another form of education.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* ── 1. The Voyage to London ── */}
        <section>
          <SectionHeader
            title="The Voyage to London by Sea"
            subtitle="His first journey outside Pakistan — and one of his most vivid memories"
            goldDivider
          />
          <div className="bg-green rounded-lg p-8 md:p-10 mb-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-playfair text-3xl text-gold opacity-60 mb-3">&ldquo;</p>
              <blockquote className="font-lora text-lg md:text-xl text-cream-light leading-relaxed italic mb-4">
                One of the journeys he remembered most vividly was his first voyage outside Pakistan
                as a young man travelling to London to pursue professional studies. Unlike modern
                air travel, this journey was made by sea and lasted several weeks.
              </blockquote>
              <div className="gold-divider" />
            </div>
          </div>
          <div className="prose-archive">
            <p>
              Throughout his life he would often recall passing through the Strait of Gibraltar and
              seeing the coast of Morocco near Tangier. The experience left a lasting impression and
              represented the beginning of a lifetime of international travel and cultural exploration.
            </p>
            <p>
              For a young man from Lahore, that sea passage was transformative. To sail from the
              subcontinent to England, to pass through one of the world&apos;s most historic
              waterways, and to arrive in a city as vast and varied as London — these were
              experiences that opened the mind and could not be undone.
            </p>
            <p>
              His years in London exposed him to new cultures, new ideas, and a broader understanding
              of the world beyond South Asia. Those experiences helped shape the intellectual
              curiosity that would remain a defining characteristic throughout his life.
            </p>
          </div>
          <div className="bg-parchment border border-cream-dark rounded-lg p-6 mt-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-green flex items-center justify-center">
                <span className="text-gold text-xl">⚓</span>
              </div>
              <div>
                <p className="font-playfair text-base text-green font-bold mb-1">Strait of Gibraltar</p>
                <p className="font-lora text-sm text-gray-600 leading-relaxed">
                  The narrow passage between Europe and Africa — between the Atlantic and the
                  Mediterranean — that Aslam Hayat passed through as a young man on his way to London.
                  He spoke of seeing the Moroccan coast near Tangier, and the memory remained with him
                  throughout his life.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Makkah & Madinah ── */}
        <section>
          <SectionHeader
            title="Makkah &amp; Madinah — The Sacred Journeys"
            subtitle="Among the most treasured experiences of his life"
            goldDivider
          />
          <div className="prose-archive mb-8">
            <p>
              Among the most meaningful journeys of his life were multiple pilgrimages to the holy
              cities of Makkah and Madinah. These visits held profound spiritual significance and
              remained among the most treasured experiences of his life.
            </p>
            <p>
              For a man whose faith was inseparable from his intellectual life, reaching the sacred
              heart of Islam was not merely a religious obligation. It was a homecoming of the spirit
              — a direct encounter with the places he had spent decades studying, reflecting upon,
              and writing about.
            </p>
          </div>
          <div className="bg-green rounded-lg p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <p className="arabic-text text-gold text-2xl font-urdu mb-3">مَكَّةُ الْمُكَرَّمَة</p>
                <h3 className="font-playfair text-lg text-cream-light font-bold mb-2">Makkah al-Mukarramah</h3>
                <p className="font-lora text-sm text-cream-dark leading-relaxed">
                  The holiest city in Islam — home of the Masjid al-Haram and the Kaaba, the
                  direction of every Muslim&apos;s prayer. He made pilgrimage here more than once,
                  each visit a renewal of faith and intention.
                </p>
              </div>
              <div className="text-center">
                <p className="arabic-text text-gold text-2xl font-urdu mb-3">الْمَدِينَةُ الْمُنَوَّرَة</p>
                <h3 className="font-playfair text-lg text-cream-light font-bold mb-2">Al-Madinah al-Munawwarah</h3>
                <p className="font-lora text-sm text-cream-dark leading-relaxed">
                  The City of the Prophet ﷺ — where the Masjid an-Nabawi stands and where Islam
                  first took root as a community. A city of profound peace and spiritual depth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Travels with Family ── */}
        <section>
          <SectionHeader
            title="Travels with Family"
            subtitle="Journeys shared with Zeeshan Hayat and other family members across continents"
            goldDivider
          />
          <div className="prose-archive bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <p>
              In later years, many of his most cherished journeys were shared with his grandson,
              Zeeshan Hayat, and other members of the family. Together they travelled to numerous
              countries and historic destinations, creating memories that spanned generations.
            </p>
            <p>
              He also travelled extensively throughout the United Kingdom to visit family members,
              including his children and grandchildren who lived there. These visits allowed him to
              maintain close family connections across continents — weaving together the threads of
              a family that had spread from Lahore to London to Vancouver over the decades.
            </p>
            <p>
              For Aslam Hayat, those shared journeys were among the most meaningful of his life.
              Travel, for him, was not something done alone but something given — a gift of experience
              and memory passed from one generation to the next.
            </p>
          </div>
        </section>

        {/* ── 4. Turkey 2008 ── */}
        <section>
          <SectionHeader
            title="Turkey, 2008 — Istanbul"
            subtitle="One of his favourite international trips — a journey through Ottoman civilisation"
            goldDivider
          />
          <div className="prose-archive mb-8">
            <p>
              One of his favourite international trips took place in 2008 when he travelled through
              Turkey. He was particularly fascinated by Istanbul&apos;s rich history and often spoke
              about visiting the Blue Mosque, Topkapi Palace, and the Topkapi Museum. The
              intersection of Islamic civilisation, Ottoman history, and world culture made a lasting
              impression on him.
            </p>
            <p>
              Istanbul was, in many ways, a city made for a mind like his. At its crossroads — between
              Europe and Asia, between ancient and modern, between the secular and the sacred — it
              distilled exactly the kind of historical complexity he had spent his life reading about.
              He returned from Turkey with the kind of enthusiasm that only comes from a journey that
              confirms everything you had hoped to find.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {istanbulSites.map(({ name, note }) => (
              <div
                key={name}
                className="bg-parchment border border-cream-dark rounded-lg p-5 hover:border-gold-dark transition-colors"
              >
                <h3 className="font-playfair text-sm text-green font-bold mb-2">{name}</h3>
                <p className="font-lora text-xs text-gray-600 leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Other Destinations ── */}
        <section>
          <SectionHeader
            title="A World Explored"
            subtitle="The countries and places he visited across a lifetime of travel"
            goldDivider
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {destinations.map(({ name, note }) => (
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

        {/* Cross-links */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-parchment border border-cream-dark rounded-lg p-5 flex flex-col justify-between gap-4">
            <div>
              <p className="font-playfair text-base text-green font-bold mb-1">Faith, Theology &amp; Spirituality</p>
              <p className="font-lora text-sm text-gray-600">
                The faith that gave the pilgrimages their meaning — a lifelong spiritual journey.
              </p>
            </div>
            <Link href="/faith-theology-and-spirituality" className="btn-gold text-sm text-center">Explore</Link>
          </div>
          <div className="bg-parchment border border-cream-dark rounded-lg p-5 flex flex-col justify-between gap-4">
            <div>
              <p className="font-playfair text-base text-green font-bold mb-1">Politics, Economics &amp; World Affairs</p>
              <p className="font-lora text-sm text-gray-600">
                His engagement with the countries and events he encountered through a lifetime of reading.
              </p>
            </div>
            <Link href="/politics-economics-and-world-affairs" className="btn-gold text-sm text-center">Explore</Link>
          </div>
        </div>

      </div>

    </div>
  );
}
