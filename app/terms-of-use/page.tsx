import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Terms of Use — The Aslam Hayat Legacy Archive',
  description: 'Terms of use for the Aslam Hayat Legacy Archive.',
  canonical: '/terms-of-use',
});

function AllowedItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green flex items-center justify-center mt-0.5">
        <span className="text-gold text-xs font-bold">✓</span>
      </span>
      <span className="font-lora text-sm text-gray-700 leading-relaxed">{text}</span>
    </li>
  );
}

function RestrictedItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-parchment border border-cream-dark flex items-center justify-center mt-0.5">
        <span className="text-gray-500 text-xs font-bold">✕</span>
      </span>
      <span className="font-lora text-sm text-gray-700 leading-relaxed">{text}</span>
    </li>
  );
}

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen">

      {/* Header */}
      <div className="bg-green py-14 md:py-18">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl text-cream-light font-bold mb-3">
            Terms of Use
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
              By accessing this website, visitors agree to use the archive solely for personal,
              educational, genealogical, historical, and research purposes.
            </p>
            <p>
              This archive is a family-maintained tribute to Aslam Hayat (1933–2026) and is not a
              commercial service. All content is provided in the spirit of preserving family history
              and cultural heritage for future generations.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-green font-bold mb-4">Visitors May</h2>
            <ul className="space-y-3">
              <AllowedItem text="View and read content for personal or educational purposes" />
              <AllowedItem text="Read and engage with published articles and writings" />
              <AllowedItem text="Browse and view photographs within the archive" />
              <AllowedItem text="Submit memories, tributes, and contributions to the archive" />
              <AllowedItem text="Share links to individual pages on this website" />
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-green font-bold mb-4">Visitors May Not</h2>
            <ul className="space-y-3">
              <RestrictedItem text="Republish, reproduce, or redistribute content without prior written permission" />
              <RestrictedItem text="Copy articles or written works for commercial or public use" />
              <RestrictedItem text="Redistribute, download, or repost family photographs" />
              <RestrictedItem text="Modify or alter archive content and present it as original" />
              <RestrictedItem text="Present archive materials as their own work" />
              <RestrictedItem text="Use archive content in a manner disrespectful to the family or the subject" />
            </ul>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-green font-bold mb-3">Permission Requests</h2>
            <p>
              For publication, academic use, media enquiries, or reproduction permissions, written
              requests are welcome. The Hayat family will consider each request individually. Please
              see the{' '}
              <Link href="/copyright-and-permissions" className="text-gold-dark hover:text-gold transition-colors">
                Copyright &amp; Permissions
              </Link>{' '}
              page for further details.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-green font-bold mb-3">Amendments</h2>
            <p>
              The Hayat family reserves the right to update, modify, or remove content at any time,
              and to amend these terms as necessary. Continued use of the archive following any
              update constitutes acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="font-playfair text-xl text-green font-bold mb-3">Disclaimer</h2>
            <p>
              The information contained within this archive is provided for historical and
              educational purposes. Every effort has been made to ensure the accuracy of biographical
              and historical content. The family welcomes corrections and additional information from
              those with relevant knowledge.
            </p>
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
