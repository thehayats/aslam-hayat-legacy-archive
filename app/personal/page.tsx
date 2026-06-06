import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Personal Profile — Aslam Hayat | Father, Family Elder & Teacher of Faith',
  description:
    'The personal story of Aslam Hayat — a devoted Muslim, loving father figure, teacher of faith, and the man who raised and guided Zeeshan Hayat throughout his life.',
  canonical: '/personal',
});

export default function PersonalPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            The Man, The Family Elder
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-xl mx-auto">
            Father · Grandfather · Teacher of Faith · Writer · Community Member
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Family Man */}
        <section className="mb-14">
          <SectionHeader title="Father &amp; Family Elder" goldDivider />
          <div className="prose-archive bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <p>
              At the heart of Aslam Hayat&apos;s life was his family. He was a devoted father,
              grandfather, and great-grandfather — a family elder who was deeply loved and
              respected by all those around him.
            </p>
            <p>
              He gave generously of his time, his wisdom, and his presence. His home was a
              place of warmth, learning, and faith. He encouraged those around him to value
              education, to live by strong moral principles, and to care for one another.
            </p>
            <p className="text-sm italic text-gray-500 bg-cream border border-cream-dark rounded p-4">
              Further memories and stories from family members will be added to this section
              as the archive grows.
            </p>
          </div>
        </section>

        {/* Zeeshan */}
        <section className="mb-14">
          <SectionHeader title="His Relationship with Zeeshan Hayat" goldDivider />
          <div className="prose-archive">
            <p>
              Aslam Hayat had a uniquely close and profound relationship with his grandson
              Zeeshan Hayat. To Zeeshan, he was far more than a grandfather.
            </p>
            <p>
              He was a father figure, mentor, teacher, spiritual guide, protector, and closest
              lifelong companion. When Zeeshan lost his mother at a young age, it was Aslam Hayat
              who stepped forward — helping to raise him, guiding him, and giving him the love
              and stability a child needs.
            </p>
            <p>
              He taught Zeeshan to read the Quran in Arabic. He instilled in him the values of
              education, faith, patience, humility, and service. He supported Zeeshan throughout
              his life and career, and remained his most trusted confidant until the very end.
            </p>
            <blockquote className="border-l-4 border-gold pl-5 italic text-green bg-parchment py-3 pr-4 rounded-r">
              &ldquo;To Zeeshan, he was much more than a grandfather: he was a father figure,
              mentor, teacher, spiritual guide, protector, and closest lifelong companion.&rdquo;
              <cite className="block not-italic text-sm mt-2 text-gray-600">
                — The family of Aslam Hayat
              </cite>
            </blockquote>
          </div>
        </section>

        {/* Teacher of Faith */}
        <section className="mb-14">
          <SectionHeader title="Teacher of Faith" goldDivider />
          <div className="prose-archive">
            <p>
              Aslam Hayat was a devoted Muslim who lived his faith sincerely and consistently.
              He taught those around him not through lectures but through example — through the
              way he prayed, the way he treated people, and the values he modelled every day.
            </p>
            <p>
              He taught his grandchildren and great-grandchildren to read the Quran in Arabic,
              to make their prayers with care and attention, and to understand that faith is
              expressed in how you treat others — in honesty, in patience, and in generosity.
            </p>
            <p>
              He encouraged everyone in his family to seek knowledge, to practice their faith
              with sincerity, and to live with humility and service to others.
            </p>
          </div>
        </section>

        {/* Writer */}
        <section className="mb-14">
          <SectionHeader title="Writer in Urdu" goldDivider />
          <div className="prose-archive">
            <p>
              Aslam Hayat expressed himself through the Urdu language — writing for local
              Pakistani community publications and sharing his thoughts on Facebook with family
              and friends.
            </p>
            <p>
              He was known in the Pakistani-Canadian community as a thoughtful writer and
              community voice.
            </p>
            <p className="text-sm italic text-gray-500 bg-parchment border border-cream-dark rounded p-4">
              Original articles and writings will be added to this archive as they are reviewed
              and approved by the family.
            </p>
          </div>
        </section>

        {/* Life in Canada */}
        <section className="mb-14">
          <SectionHeader title="Life in Canada" goldDivider />
          <div className="prose-archive">
            <p>
              Aslam Hayat arrived in Canada in 1989 and made his home in Vancouver, British
              Columbia. He remained a beloved presence in his family and in the
              Pakistani-Canadian community until his passing on May 30, 2026.
            </p>
            <p className="text-sm italic text-gray-500 bg-parchment border border-cream-dark rounded p-4">
              More details about his life in Vancouver will be added as the family archive
              is reviewed.
            </p>
          </div>
        </section>

        {/* Contribute */}
        <div className="bg-green rounded-lg p-6 text-center">
          <p className="font-lora text-base text-cream-dark leading-relaxed mb-4">
            Did you know Aslam Hayat? The family welcomes your memories, stories, and
            photographs to add to this archive.
          </p>
          <Link href="/contact" className="btn-gold inline-block">
            Share a Memory
          </Link>
        </div>

      </div>
    </div>
  );
}
