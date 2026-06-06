import type { Metadata } from 'next';
import Link from 'next/link';
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

      {/* Hero */}
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            Politics, Economics &amp; World Affairs
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-2xl mx-auto">
            A lifelong student of public affairs — from Partition to the global age
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      {/* Intro */}
      <section className="bg-parchment border-b border-cream-dark py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-archive text-center max-w-3xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Aslam Hayat maintained a lifelong interest in public affairs, politics, economics,
              and international events. Although he spent much of his life outside Pakistan after
              immigrating to Canada, his connection to his homeland never diminished — and his
              curiosity about the wider world only deepened with time.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* ── 1. Pakistan — His Homeland ── */}
        <section>
          <SectionHeader
            title="Pakistan — His Homeland"
            subtitle="A connection that immigration never weakened"
            goldDivider
          />
          <div className="prose-archive mb-8">
            <p>
              He remained deeply invested in the future of Pakistan and followed political
              developments there closely. Family members often recall that Pakistani news channels
              were a constant presence in his home. Whether there was an election, a constitutional
              crisis, an economic debate, or an important national event, he wanted to understand
              what was happening and how it would affect the country&apos;s future.
            </p>
            <p>
              His interest was not passive. He formed considered views, followed developments with
              care, and was never reluctant to share his perspective in family conversations. He
              cared about Pakistan the way one cares about a place that shaped you — with a mixture
              of love, memory, hope, and honest assessment.
            </p>
          </div>
          <div className="bg-green rounded-lg p-8 md:p-10">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-playfair text-3xl text-gold opacity-60 mb-3">&ldquo;</p>
              <blockquote className="font-lora text-lg md:text-xl text-cream-light leading-relaxed italic mb-4">
                His interest in politics was rooted in both personal experience and historical
                memory. Having lived through Partition, the formation of Pakistan, and many decades
                of the nation&apos;s development, he possessed a long-term perspective that few
                people could match.
              </blockquote>
              <div className="gold-divider" />
            </div>
          </div>
        </section>

        {/* ── 2. An Eyewitness to History ── */}
        <section>
          <SectionHeader
            title="An Eyewitness to History"
            subtitle="From the Partition of 1947 to the formation of a new nation"
            goldDivider
          />
          <div className="prose-archive bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <p>
              His interest in Pakistan&apos;s politics was rooted in something deeper than newspaper
              habit. He had witnessed history firsthand. He was a teenager in Lahore when British
              India was partitioned in 1947 — one of the most consequential and traumatic events of
              the twentieth century, one that created Pakistan itself and displaced millions of people.
            </p>
            <p>
              This made his perspective on Pakistani political life fundamentally different from that
              of someone who had only read about the country&apos;s founding. He had been there. He
              carried memories that no journalism could reproduce — the texture of the city before
              Partition, the upheaval of the months that followed, and the long process of building
              a new nation from an extraordinary rupture.
            </p>
            <p>
              When he commented on Pakistani politics, he did so with that living memory always in
              the background. He understood what the country had come from. He cared about what it
              was becoming.
            </p>
          </div>
        </section>

        {/* ── 3. International Publications ── */}
        <section>
          <SectionHeader
            title="International Publications"
            subtitle="A reading habit formed in London and maintained for the rest of his life"
            goldDivider
          />
          <div className="prose-archive mb-8">
            <p>
              His attention extended far beyond Pakistan. He was a devoted reader of international
              publications and regularly followed global events through some of the world&apos;s most
              respected journalism. His exposure to international journalism began during his years
              studying in London, where he developed a habit of following world affairs that remained
              with him for the rest of his life.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
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
          <div className="border-l-4 border-gold pl-6 py-3 bg-parchment rounded-r-lg pr-6">
            <p className="font-lora text-base md:text-lg text-green italic leading-relaxed">
              &ldquo;His broad reading habits allowed him to compare perspectives from different
              countries and different schools of thought.&rdquo;
            </p>
          </div>
        </section>

        {/* ── 4. Conversations on World Affairs ── */}
        <section>
          <SectionHeader
            title="Conversations on World Affairs"
            subtitle="How his interest in public affairs shaped family life"
            goldDivider
          />
          <div className="prose-archive mb-8">
            <p>
              He enjoyed discussing economics, international relations, leadership, governance, and
              the major challenges facing modern societies. Those conversations became an important
              part of family life. Whether discussing Pakistan, the Middle East, Europe, North America,
              or the changing global economy, he approached public affairs with curiosity, historical
              awareness, and a genuine desire to understand the forces shaping the world.
            </p>
            <p>
              He was never a passive observer. He formed views, argued positions, and remained open
              to reconsideration when presented with new evidence or a perspective he had not
              considered. For his family, these conversations were both stimulating and instructive —
              a window into a mind that had spent decades studying the world.
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

        {/* ── 5. Patriot with Global Vision ── */}
        <section>
          <div className="bg-green rounded-lg p-8 md:p-12 text-center">
            <div className="text-gold text-5xl font-playfair mb-4 opacity-60">&ldquo;</div>
            <blockquote className="font-playfair text-2xl md:text-3xl text-cream-light font-bold leading-snug mb-4 max-w-3xl mx-auto">
              His patriotism for Pakistan remained strong throughout his life, but it was balanced
              by a broader interest in humanity, global affairs, and the interconnected nature of
              modern society.
            </blockquote>
            <div className="gold-divider mb-4" />
            <cite className="font-lora text-sm text-cream-dark not-italic">
              — The family of Aslam Hayat
            </cite>
          </div>
        </section>

        {/* Cross-links */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-parchment border border-cream-dark rounded-lg p-5 flex flex-col justify-between gap-4">
            <div>
              <p className="font-playfair text-base text-green font-bold mb-1">Technology &amp; Lifelong Learning</p>
              <p className="font-lora text-sm text-gray-600">
                His parallel fascination with technology — from the first colour television to AI.
              </p>
            </div>
            <Link href="/technology-and-lifelong-learning" className="btn-gold text-sm text-center">Explore</Link>
          </div>
          <div className="bg-parchment border border-cream-dark rounded-lg p-5 flex flex-col justify-between gap-4">
            <div>
              <p className="font-playfair text-base text-green font-bold mb-1">Travels, Pilgrimage &amp; Exploration</p>
              <p className="font-lora text-sm text-gray-600">
                The journeys that shaped his understanding of the world he followed so closely.
              </p>
            </div>
            <Link href="/travels-pilgrimage-and-exploration" className="btn-gold text-sm text-center">Explore</Link>
          </div>
        </div>

      </div>

      {/* Footer CTA */}
      <section className="bg-parchment border-t border-cream-dark py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-2xl text-green font-bold mb-3">Explore Further</h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/about" className="btn-primary">Read His Biography</Link>
            <Link href="/articles" className="btn-gold">Browse His Articles</Link>
            <Link href="/timeline" className="btn-gold">View Life Timeline</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
