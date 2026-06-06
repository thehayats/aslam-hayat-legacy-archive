import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Facebook Archive — Aslam Hayat',
  description:
    'Aslam Hayat was active on Facebook, sharing thoughts, memories, and writings. Selected posts will be reviewed and archived here with family approval.',
  canonical: '/facebook-archive',
});

export default function FacebookArchivePage() {
  return (
    <div className="min-h-screen">
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            Facebook Archive
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-2xl mx-auto">
            Writings and reflections shared by Aslam Hayat on Facebook
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <section className="mb-12">
          <SectionHeader title="About This Archive" goldDivider />
          <div className="bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <p className="font-lora text-base text-gray-700 leading-relaxed mb-4">
              Aslam Hayat was active on Facebook, where he shared his thoughts, memories, and
              writings with family, friends, and his wider community.
            </p>
            <p className="font-lora text-base text-gray-700 leading-relaxed">
              Selected posts will be reviewed by the family and archived here with their approval.
              This section will grow as the family reviews his digital writings.
            </p>
          </div>
        </section>

        <section>
          <SectionHeader title="Posts" goldDivider />
          <div className="bg-parchment border border-cream-dark rounded-lg p-8 text-center">
            <p className="font-lora text-base text-gray-500 italic leading-relaxed">
              Facebook posts are being reviewed and will be added here with family approval.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
