import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import TimelineEntry from '@/components/ui/TimelineEntry';
import { buildMetadata } from '@/components/seo/MetaTags';
import timelineData from '@/content/timeline/timeline.json';
import type { TimelineEntry as TimelineEntryType } from '@/lib/articles';

export const metadata: Metadata = buildMetadata({
  title: 'Life Timeline — Aslam Hayat | From Pakistan to London to Canada',
  description:
    "A visual chronology of Aslam Hayat's life — birth in Pakistan, CA qualification in London, PCAA Director career, Urdu writing, and emigration to Canada.",
  canonical: '/timeline',
});

export default function TimelinePage() {
  const entries = timelineData as TimelineEntryType[];

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            Life Timeline
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-xl mx-auto">
            A chronological journey through the milestones, achievements, and defining moments
            of Aslam Hayat&apos;s life.
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <SectionHeader
          title="A Life in Full"
          subtitle="From Pakistan to London to Canada — each entry marks a chapter in a remarkable life."
          centered
        />

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { label: 'Personal', color: 'bg-green-light text-cream' },
            { label: 'Education', color: 'bg-gold text-green-dark' },
            { label: 'Career', color: 'bg-green text-cream' },
            { label: 'Family', color: 'bg-gold-dark text-cream' },
          ].map(({ label, color }) => (
            <span key={label} className={`text-xs font-lora px-3 py-1 rounded-full ${color}`}>
              {label}
            </span>
          ))}
        </div>

        {/* Timeline Container — desktop has a center line */}
        <div className="relative">
          {/* Vertical line — desktop only */}
          <div className="hidden md:block timeline-line" />

          {/* Entries */}
          {entries.map((entry, index) => (
            <TimelineEntry key={`${entry.year}-${entry.title}`} entry={entry} index={index} />
          ))}
        </div>

        {/* Cross-link */}
        <div className="bg-parchment border border-cream-dark rounded-lg p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10 mb-4">
          <div>
            <p className="font-playfair text-base text-green font-bold mb-1">Scholarship &amp; Spirituality</p>
            <p className="font-lora text-sm text-gray-600">
              Beyond the milestones — the scholars, mystics, and thinkers who shaped his intellectual life.
            </p>
          </div>
          <Link href="/scholarship-and-spirituality" className="btn-gold text-sm flex-shrink-0">
            Explore
          </Link>
        </div>

        {/* End marker */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center gap-3">
            <div className="h-px w-16 bg-gold opacity-50" />
            <span className="font-lora text-sm text-gray-500 italic">
              إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
            </span>
            <div className="h-px w-16 bg-gold opacity-50" />
          </div>
          <p className="font-lora text-sm text-gray-500 mt-2">
            Verily, to Allah we belong and to Him we shall return.
          </p>
        </div>
      </div>
    </div>
  );
}
