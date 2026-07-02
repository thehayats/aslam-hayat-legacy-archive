import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Politics, Economics & World Affairs — Aslam Hayat',
  description:
    'Aslam Hayat maintained a lifelong interest in public affairs, politics, economics, and international events — reading The Economist, BBC, and The Atlantic while following Pakistan closely.',
  canonical: '/politics-economics-and-world-affairs',
  ogType: 'article',
});

const publications = [
  { name: 'BBC News', note: 'International news and current affairs — a constant source throughout his life' },
  { name: 'The Economist', note: 'Global economics, politics, and analysis — followed for decades' },
  { name: 'The Atlantic', note: 'Long-form journalism, ideas, and American political culture' },
  { name: 'The New Yorker', note: 'Cultural commentary, reportage, and international affairs' },
];

const topics = [
  'Pakistan — politics, economy, and national development',
  'The Middle East and the Muslim world',
  'British and European affairs',
  'North American politics and society',
  'International economics and trade',
  'Leadership and governance',
  'The changing global order',
  'The future of modern societies',
];

export default function PoliticsPage() {
  return (
    <div className="min-h-screen">

      <div className="bg-parchment border-b border-cream-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
          <h1 className="font-playfair text-2xl md:text-3xl text-green font-bold">
            Politics, Economics &amp; World Affairs
          </h1>
          <p className="font-lora text-sm text-gray-500 mt-1.5">
            An eyewitness to Partition — and a close reader of the world it created.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        <section>
          <SectionHeader title="Pakistan — His Homeland" goldDivider />
          <div className="prose-archive mb-8">
            <p>
              Pakistani news was always on in his home. <em>The Economist</em> and the BBC were
              staples of his reading from his London years onward. He was a teenager in Lahore
              when British India was partitioned in 1947 — an experience that gave him a
              perspective on South Asian politics that no newspaper could fully reproduce.
            </p>
            <p>
              He remained deeply invested in the future of Pakistan and followed political
              developments there closely. Whether there was an election, a constitutional
              crisis, an economic debate, or an important national event, he wanted to understand
              what was happening and how it would affect the country&apos;s future.
            </p>
            <p>
              His interest was not passive. He formed considered views, followed developments with
              care, and was never reluctant to share his perspective in family conversations.
            </p>
          </div>
          <div className="bg-green rounded-lg p-8 md:p-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-playfair text-3xl text-gold opacity-60 mb-3">&ldquo;</p>
              <blockquote className="font-lora text-lg md:text-xl text-cream-light leading-relaxed italic mb-4">
                Having lived through Partition, the formation of Pakistan, and many decades
                of the nation&apos;s development, he possessed a long-term perspective that few
                people could match.
              </blockquote>
              <div className="gold-divider" />
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="An Eyewitness to History" goldDivider />
          <div className="prose-archive bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <p>
              He carried memories that no journalism could reproduce — the texture of Lahore before
              Partition, the upheaval of the months that followed, and the long process of building
              a new nation from an extraordinary rupture. When he commented on Pakistani politics, he
              did so with that living memory in the background.
            </p>
          </div>
        </section>

        <section>
          <SectionHeader title="International Publications" goldDivider />
          <div className="prose-archive mb-8">
            <p>
              His attention extended far beyond Pakistan. He was a devoted reader of international
              publications and regularly followed global events through some of the world&apos;s most
              respected journalism — a habit formed during his years studying in London.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {publications.map(({ name, note }) => (
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

        <section>
          <SectionHeader title="Conversations on World Affairs" goldDivider />
          <div className="prose-archive mb-8">
            <p>
              He enjoyed discussing economics, international relations, leadership, governance, and
              the major challenges facing modern societies. Those conversations became an important
              part of family life. He approached public affairs with curiosity, historical awareness,
              and a genuine desire to understand the forces shaping the world.
            </p>
            <p>
              He was never a passive observer. He formed views, argued positions, and remained open
              to reconsideration when presented with new evidence or a perspective he had not
              considered.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {topics.map((topic) => (
              <div
                key={topic}
                className="flex items-start gap-3 bg-parchment border border-cream-dark rounded-lg p-4"
              >
                <span className="text-gold font-playfair text-lg leading-none mt-0.5 flex-shrink-0">·</span>
                <span className="font-lora text-sm text-gray-700 leading-relaxed">{topic}</span>
              </div>
            ))}
          </div>
        </section>

      </div>

    </div>
  );
}
