import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Living Legacy — Aslam Hayat Archive',
  description:
    'Reflections, khutbahs, bayans, and writings by family members inspired by the teachings, wisdom, and spiritual influence of Aslam Hayat.',
  canonical: '/living-legacy',
  ogType: 'article',
});

const categories = [
  {
    title: 'Khutbahs & Bayans',
    description: 'Friday khutbahs and Islamic lectures delivered and inspired by his teachings.',
    icon: '🕌',
  },
  {
    title: 'Reflections',
    description: 'Personal reflections on lessons learned and wisdom passed down.',
    icon: '✦',
  },
  {
    title: 'Lessons from Nanaji',
    description: 'Specific lessons, sayings, and teachings remembered by the family.',
    icon: '📖',
  },
  {
    title: 'Family Writings',
    description: 'Essays, notes, and writings by family members who carry his influence forward.',
    icon: '✍',
  },
];

const entries = [
  {
    slug: 'patience-during-trials',
    title: 'Patience During Trials and Trusting Allah',
    type: 'Khutbah / Bayan',
    author: 'Zeeshan Hayat',
    category: 'Khutbahs & Bayans',
    description:
      'Delivered during Jumu\'ah prayers. Explores sabr, gratitude, and trusting Allah through hardship — themes Aslam Hayat emphasised throughout his life.',
  },
];

export default function LivingLegacyPage() {
  return (
    <div className="min-h-screen">

      <div className="bg-parchment border-b border-cream-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
          <p className="font-lora text-xs text-gray-400 uppercase tracking-widest mb-1">Family Reflections</p>
          <h1 className="font-playfair text-2xl md:text-3xl text-green font-bold">Living Legacy</h1>
          <p className="font-lora text-sm text-gray-500 mt-1.5">
            Original writings by family members, inspired by the teachings and spiritual example
            of Aslam Hayat. These are not his own writings.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* Categories */}
        <section>
          <SectionHeader title="Categories" goldDivider />
          <div className="grid sm:grid-cols-2 gap-4">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-parchment border border-cream-dark rounded-lg p-5 hover:border-gold-dark transition-colors"
              >
                <p className="font-playfair text-base text-green font-bold mb-2">{cat.title}</p>
                <p className="font-lora text-sm text-gray-600 leading-relaxed">{cat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Entries */}
        <section>
          <SectionHeader title="Khutbahs & Bayans" goldDivider />
          <div className="space-y-5">
            {entries.map((entry) => (
              <div
                key={entry.slug}
                className="bg-parchment border border-cream-dark rounded-xl p-6 hover:border-gold-dark transition-colors"
              >
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-block bg-green text-gold font-lora text-xs px-3 py-1 rounded">
                    {entry.type}
                  </span>
                  <span className="font-lora text-xs text-gray-400">{entry.category}</span>
                </div>
                <h2 className="font-playfair text-xl text-green font-bold mb-2 leading-snug">
                  {entry.title}
                </h2>
                <p className="font-lora text-sm text-gray-600 leading-relaxed mb-4">
                  {entry.description}
                </p>
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <p className="font-lora text-sm text-gray-500 italic">
                    By {entry.author}
                  </p>
                  <Link
                    href={`/living-legacy/${entry.slug}`}
                    className="btn-gold text-sm"
                  >
                    Read
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>


    </div>
  );
}
