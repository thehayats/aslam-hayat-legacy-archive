import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Professional Profile — Aslam Hayat',
  description:
    'Professional background of Aslam Hayat. This section is being compiled and verified by the family.',
  canonical: '/professional',
});

export default function ProfessionalPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            Professional Profile
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-2xl mx-auto">
            Aslam Hayat&apos;s education and career — being compiled by the family.
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <section className="mb-12">
          <SectionHeader title="Education" goldDivider />
          <div className="bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <p className="font-lora text-base text-gray-700 leading-relaxed mb-4">
              Aslam Hayat attended <strong>Muslim Model High School</strong> in Lahore, Pakistan.
            </p>
            <p className="font-lora text-base text-gray-700 leading-relaxed">
              He later pursued professional qualifications through the{' '}
              <strong>Chartered Institute of Management Accountants (CIMA)</strong>, United Kingdom.
            </p>
          </div>
        </section>

        <section className="mb-12">
          <SectionHeader title="Career" goldDivider />
          <div className="bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <p className="font-lora text-base text-gray-500 italic leading-relaxed">
              This section is being reviewed by the family. Verified details about Aslam
              Hayat&apos;s professional service and career will be added soon.
            </p>
          </div>
        </section>

        <div className="bg-green rounded-lg p-6 text-center">
          <p className="font-lora text-base text-cream-dark leading-relaxed mb-4">
            If you knew Aslam Hayat professionally and would like to contribute verified
            information to this section, the family would be grateful to hear from you.
          </p>
          <Link href="/contact" className="btn-gold inline-block">
            Share What You Know
          </Link>
        </div>

      </div>
    </div>
  );
}
