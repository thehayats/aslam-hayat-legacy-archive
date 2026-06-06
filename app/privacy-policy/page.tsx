import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy — The Aslam Hayat Legacy Archive',
  description: 'Privacy policy for the Aslam Hayat Legacy Archive.',
  canonical: '/privacy-policy',
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen">

      {/* Header */}
      <div className="bg-green py-14 md:py-18">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl text-cream-light font-bold mb-3">
            Privacy Policy
          </h1>
          <p className="font-lora text-sm text-cream-dark opacity-70">
            Last updated: June 2026
          </p>
          <div className="gold-divider mt-5" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="prose-archive space-y-8">

          <section>
            <p className="text-lg">
              The Aslam Hayat Legacy Archive respects the privacy of its visitors.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-green font-bold mb-3">Information We Collect</h2>
            <p>
              Information submitted through contact forms, tribute submissions, or memory
              contributions may be stored for the purpose of maintaining and expanding this archive.
              This may include your name, contact details, and the content of your submission.
            </p>
            <p>
              We do not use tracking cookies, advertising networks, or third-party analytics tools
              that collect personal data.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-green font-bold mb-3">How We Use Information</h2>
            <p>
              Information you submit is used solely to review and incorporate contributions into the
              archive, and to respond to your message. We do not sell, rent, or distribute personal
              information to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-green font-bold mb-3">Publication of Submissions</h2>
            <p>
              Any information voluntarily submitted to the archive — including memories, tributes,
              photographs, or other materials — may be reviewed by the archive administrators before
              publication. Nothing is published without review.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-green font-bold mb-3">Your Rights</h2>
            <p>
              Visitors may request the removal of personal submissions by contacting the archive
              administrator. We will honour all reasonable requests for correction or removal of
              submitted personal information.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-green font-bold mb-3">Contact</h2>
            <p>
              For privacy-related enquiries, please contact:
            </p>
            <div className="bg-parchment border border-cream-dark rounded-lg p-5 mt-3">
              <p className="font-playfair text-green font-bold mb-1">Zeeshan Hayat</p>
              <p className="font-lora text-sm text-gray-600 mb-1">Archive Administrator</p>
              <p className="font-lora text-sm text-gray-600 mb-3">The Aslam Hayat Legacy Archive</p>
              <a href="mailto:archive@aslamhayat.com" className="font-lora text-sm text-gold-dark hover:text-gold transition-colors">
                archive@aslamhayat.com
              </a>
            </div>
          </section>

        </div>

        {/* Back link */}
        <div className="mt-12 pt-6 border-t border-cream-dark flex gap-4">
          <Link href="/" className="btn-gold text-sm">Return Home</Link>
          <Link href="/copyright-and-permissions" className="font-lora text-sm text-gold-dark hover:text-gold transition-colors flex items-center gap-1">
            Copyright &amp; Permissions →
          </Link>
        </div>
      </div>

    </div>
  );
}
