import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Professional Profile — Aslam Hayat',
  description:
    'Aslam Hayat qualified as a Chartered Accountant in London and served at the Pakistan Civil Aviation Authority, rising to director-level responsibilities.',
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
            Chartered Accountant &middot; Civil Aviation Executive &middot; Community Writer
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Education */}
        <section className="mb-12">
          <SectionHeader title="Education" goldDivider />
          <div className="bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-gold rounded-full mt-1" style={{ alignSelf: 'stretch', maxHeight: '100%' }} />
                <div>
                  <h3 className="font-playfair text-lg text-green font-bold mb-1">
                    Muslim Model High School
                  </h3>
                  <p className="font-lora text-sm text-gray-500 mb-2">Lahore, Pakistan</p>
                  <p className="font-lora text-base text-gray-700 leading-relaxed">
                    Aslam Hayat received his early education at Muslim Model High School in Lahore —
                    an institution with a distinguished history in Pakistan&apos;s educational
                    landscape.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-2 bg-gold rounded-full mt-1" style={{ alignSelf: 'stretch', maxHeight: '100%' }} />
                <div>
                  <h3 className="font-playfair text-lg text-green font-bold mb-1">
                    Chartered Accountant
                  </h3>
                  <p className="font-lora text-sm text-gray-500 mb-2">London, United Kingdom</p>
                  <p className="font-lora text-base text-gray-700 leading-relaxed">
                    He travelled to London to pursue and attain professional qualification as a
                    Chartered Accountant — a significant personal achievement that provided the
                    foundation for a distinguished public-sector career.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career */}
        <section className="mb-12">
          <SectionHeader title="Career in Civil Aviation" goldDivider />
          <div className="bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 bg-gold rounded-full mt-1" style={{ alignSelf: 'stretch', maxHeight: '100%' }} />
              <div>
                <h3 className="font-playfair text-lg text-green font-bold mb-1">
                  Pakistan Civil Aviation Authority
                </h3>
                <p className="font-lora text-sm text-gray-500 mb-2">Pakistan</p>
                <p className="font-lora text-base text-gray-700 leading-relaxed mb-3">
                  Aslam Hayat served in Pakistan&apos;s civil aviation sector, rising to director-level
                  responsibilities at the <strong>Pakistan Civil Aviation Authority (PCAA)</strong>.
                  His career combined professional financial expertise with public service during
                  a formative period in Pakistan&apos;s aviation history.
                </p>
                <p className="font-lora text-sm italic text-gray-500 bg-cream border border-cream-dark rounded p-3">
                  Further details about his specific roles and service dates will be added as
                  the family archive is reviewed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Writing Career */}
        <section className="mb-12">
          <SectionHeader title="Writing Career" goldDivider />
          <div className="bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-2 bg-gold rounded-full mt-1" style={{ alignSelf: 'stretch', maxHeight: '100%' }} />
              <div>
                <h3 className="font-playfair text-lg text-green font-bold mb-1">
                  Columnist, <em>The Miracle</em>
                </h3>
                <p className="font-lora text-sm text-gray-500 mb-2">Vancouver, British Columbia, Canada &mdash; 25+ years</p>
                <p className="font-lora text-base text-gray-700 leading-relaxed">
                  After retiring and settling in Vancouver, Aslam Hayat became one of the most
                  prolific voices in the Pakistani-Canadian community. For more than twenty-five
                  years he maintained a regular column in <em>The Miracle</em>, Vancouver&apos;s
                  Pakistani community newspaper, authoring over{' '}
                  <strong>650 articles</strong> on history, current affairs, community life,
                  Islamic thought, and the experiences of the South Asian diaspora in Canada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
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
