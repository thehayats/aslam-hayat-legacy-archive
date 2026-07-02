import type { Metadata } from 'next';
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
      <div className="bg-parchment border-b border-cream-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
          <h1 className="font-playfair text-2xl md:text-3xl text-green font-bold">Professional Profile</h1>
          <p className="font-lora text-sm text-gray-500 mt-1.5">Chartered Accountant · Civil Aviation Executive · Community Writer</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">

        {/* Education */}
        <section>
          <SectionHeader title="Education" goldDivider />
          <div className="space-y-6">

            <div className="bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
              <div className="border-l-2 border-gold/50 pl-5">
                <h3 className="font-playfair text-lg text-green font-bold mb-1">
                  Muslim Model High School
                </h3>
                <p className="font-lora text-xs text-gray-400 uppercase tracking-wide mb-3">
                  Lahore, Pakistan
                </p>
                <p className="font-lora text-base text-gray-700 leading-relaxed">
                  Aslam Hayat received his early education at Muslim Model High School in Lahore.
                </p>
              </div>
            </div>

            <div className="bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
              <div className="border-l-2 border-gold/50 pl-5">
                <h3 className="font-playfair text-lg text-green font-bold mb-1">
                  Chartered Accountant
                </h3>
                <p className="font-lora text-xs text-gray-400 uppercase tracking-wide mb-3">
                  London, England &mdash; late 1950s / early 1960s
                </p>
                <p className="font-lora text-base text-gray-700 leading-relaxed">
                  In the late 1950s and early 1960s, Aslam Hayat travelled to London and qualified
                  as a Chartered Accountant — a qualification he then applied in public service on
                  his return to Pakistan.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Career */}
        <section>
          <SectionHeader title="Career in Civil Aviation" goldDivider />
          <div className="bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <div className="border-l-2 border-gold/50 pl-5">
              <h3 className="font-playfair text-lg text-green font-bold mb-1">
                Pakistan Civil Aviation Authority
              </h3>
              <p className="font-lora text-xs text-gray-400 uppercase tracking-wide mb-3">
                Pakistan
              </p>
              <p className="font-lora text-base text-gray-700 leading-relaxed">
                Upon returning to Pakistan, Aslam Hayat entered public service. He served in the{' '}
                <strong>Pakistan Civil Aviation Authority (PCAA)</strong> for several decades,
                rising to director-level responsibilities.
              </p>
            </div>
          </div>
        </section>

        {/* Writing */}
        <section>
          <SectionHeader title="Writing" goldDivider />
          <div className="bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <div className="border-l-2 border-gold/50 pl-5">
              <h3 className="font-playfair text-lg text-green font-bold mb-1">
                Columnist, <em>The Miracle</em>
              </h3>
              <p className="font-lora text-xs text-gray-400 uppercase tracking-wide mb-3">
                Vancouver, British Columbia — 25+ years
              </p>
              <p className="font-lora text-base text-gray-700 leading-relaxed">
                After settling in Vancouver, Aslam Hayat maintained a regular column in{' '}
                <em>The Miracle</em>, the Pakistani community newspaper. Over more than twenty-five
                years he authored over <strong>650 articles</strong> on history, current affairs,
                Islamic thought, and the experiences of the South Asian diaspora in Canada.
              </p>
            </div>
          </div>
        </section>


      </div>
    </div>
  );
}
