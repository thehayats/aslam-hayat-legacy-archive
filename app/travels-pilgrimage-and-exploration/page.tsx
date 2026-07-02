import type { Metadata } from 'next';
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

      <div className="bg-parchment border-b border-cream-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
          <h1 className="font-playfair text-2xl md:text-3xl text-green font-bold">
            Travels, Pilgrimage &amp; Exploration
          </h1>
          <p className="font-lora text-sm text-gray-500 mt-1.5">
            From a sea voyage past Gibraltar to Makkah, Madinah, and Istanbul.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        <section>
          <SectionHeader title="The Voyage to London by Sea" goldDivider />
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
              seeing the coast of Morocco near Tangier.
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

        <section>
          <SectionHeader title="Makkah &amp; Madinah — The Sacred Journeys" goldDivider />
          <div className="prose-archive mb-8">
            <p>
              He made multiple pilgrimages to Makkah and Madinah over the course of his life.
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

        <section>
          <SectionHeader title="Travels with Family" goldDivider />
          <div className="prose-archive bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <p>
              In later years, many of his most cherished journeys were shared with his grandson,
              Zeeshan Hayat, and other members of the family. Together they travelled to numerous
              countries and historic destinations, creating memories that spanned generations.
            </p>
            <p>
              He also travelled extensively throughout the United Kingdom to visit family members,
              including his children and grandchildren who lived there — maintaining close family
              connections across continents as the family spread from Lahore to London to Vancouver.
            </p>
          </div>
        </section>

        <section>
          <SectionHeader title="Turkey, 2008 — Istanbul" goldDivider />
          <div className="prose-archive mb-8">
            <p>
              One of his favourite international trips took place in 2008 when he travelled through
              Turkey. He was particularly fascinated by Istanbul&apos;s rich history and often spoke
              about visiting the Blue Mosque, Topkapi Palace, and the Topkapi Museum. The
              intersection of Islamic civilisation, Ottoman history, and world culture made a lasting
              impression on him.
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

        <section>
          <SectionHeader title="A World Explored" goldDivider />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      </div>

    </div>
  );
}
