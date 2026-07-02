import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Technology & Lifelong Learning — Aslam Hayat',
  description:
    'Aslam Hayat embraced every new technology from the first colour television to artificial intelligence — always learning independently, always the first in the family to own the newest device.',
  canonical: '/technology-and-lifelong-learning',
  ogType: 'article',
});

const devices = [
  { label: 'First colour television', era: 'Early decades' },
  { label: 'Personal computer', era: 'Early computing era' },
  { label: 'Laptop computer', era: 'Portable computing' },
  { label: 'Mobile phone', era: 'Early mobile era' },
  { label: 'Smartphone', era: 'Digital age' },
  { label: 'Tablet computer', era: 'Post-2010' },
  { label: 'Smartwatch', era: 'Final years' },
];

const eras = [
  { label: 'Radio', period: 'Born into' },
  { label: 'Black-and-white television', period: 'Youth' },
  { label: 'Commercial aviation', period: 'Career era' },
  { label: 'Personal computers', period: 'Vancouver years' },
  { label: 'The internet', period: 'Vancouver years' },
  { label: 'Smartphones', period: 'Later life' },
  { label: 'Artificial intelligence', period: 'Final years' },
];

export default function TechnologyPage() {
  return (
    <div className="min-h-screen">

      <div className="bg-parchment border-b border-cream-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
          <h1 className="font-playfair text-2xl md:text-3xl text-green font-bold">
            Technology &amp; Lifelong Learning
          </h1>
          <p className="font-lora text-sm text-gray-500 mt-1.5">
            Born in 1933 — curious about artificial intelligence in his nineties.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        <section>
          <SectionHeader title="Always the First in the Family" goldDivider />
          <div className="prose-archive mb-8">
            <p>
              Aslam Hayat was born in 1933 — before television, before computers, before the
              internet. He died in 2026, having followed the development of artificial intelligence
              with active curiosity. In between, he owned every significant device before almost
              anyone else in the family did.
            </p>
            <p>
              Family members often joked that he always seemed to own the newest device before
              anyone else. There was something characteristically him about it — a combination of
              genuine curiosity and the pleasure of understanding how things worked. Whether it was
              the first colour television, an early personal computer, a laptop, a mobile phone, a
              smartphone, a tablet, or a smartwatch, he wanted to understand how it worked and how
              it could improve everyday life.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {devices.map(({ label, era }) => (
              <div
                key={label}
                className="bg-parchment border border-cream-dark rounded-lg p-5 hover:border-gold-dark transition-colors"
              >
                <p className="font-playfair text-sm text-green font-bold mb-1">{label}</p>
                <p className="font-lora text-xs text-gray-500">{era}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader title="Learning Independently" goldDivider />
          <div className="bg-green rounded-lg p-8 md:p-10 mb-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-playfair text-3xl text-gold opacity-60 mb-3">&ldquo;</p>
              <blockquote className="font-lora text-lg md:text-xl text-cream-light leading-relaxed italic mb-4">
                Whenever he acquired a new device, he would often purchase instructional books and
                manuals and spend hours teaching himself how to use it. He believed that learning
                should never stop, regardless of age.
              </blockquote>
              <div className="gold-divider" />
            </div>
          </div>
          <div className="prose-archive">
            <p>
              What made his interest in technology unique was that he rarely relied on others to
              teach him. He preferred to learn independently — consistent with the broader
              intellectual discipline that characterised his life. For Aslam Hayat, picking up a
              new device was no different from picking up a new book. Both were invitations to
              understand something new about the world.
            </p>
          </div>
        </section>

        <section>
          <SectionHeader title="Artificial Intelligence" goldDivider />
          <div className="bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <div className="prose-archive">
              <p>
                Even into his nineties, Aslam Hayat continued to follow developments in technology.
                During the final years of his life, he became increasingly interested in artificial
                intelligence and frequently discussed how AI might transform communication, education,
                business, and society.
              </p>
              <p>
                He witnessed the early stages of the AI revolution and often reflected on how
                dramatically the world had changed during his lifetime. He engaged with questions
                about AI seriously — what it could do, what it could not do, and what its arrival
                meant for human beings.
              </p>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader title="A Lifetime of Technological Change" goldDivider />
          <div className="prose-archive mb-8">
            <p>
              Born in 1933, he lived through radio, black-and-white television, commercial aviation,
              personal computers, the internet, smartphones, and artificial intelligence — each
              embraced as it arrived.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {eras.map(({ label, period }) => (
              <div
                key={label}
                className="flex items-start gap-3 bg-parchment border border-cream-dark rounded-lg p-4"
              >
                <span className="text-gold font-playfair text-lg leading-none mt-0.5 flex-shrink-0">·</span>
                <div>
                  <p className="font-lora text-sm text-gray-700 leading-relaxed font-medium">{label}</p>
                  <p className="font-lora text-xs text-gray-500 mt-0.5">{period}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

    </div>
  );
}
