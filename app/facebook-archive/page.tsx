import type { Metadata } from 'next';
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
      <div className="border-b border-cream-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
          <h1 className="font-playfair text-2xl text-green font-bold">Facebook Archive</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <section>
          <div className="bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <p className="font-lora text-base text-gray-700 leading-relaxed mb-4">
              Aslam Hayat was active on Facebook, where he shared thoughts, memories, and
              writings with family, friends, and his wider community.
            </p>
            <p className="font-lora text-base text-gray-500 italic leading-relaxed">
              Selected posts are being reviewed by the family and will be added here with
              their approval.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
