import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';
import ContactForm from './ContactForm';

export const metadata: Metadata = buildMetadata({
  title: 'Submit a Memory — Aslam Hayat | Share Stories, Photos & Recollections',
  description:
    'Did you know Aslam Hayat — as a PCAA colleague, community member, reader, or friend? Share your memories, photographs, and stories. Every contribution enriches the archive.',
  canonical: '/contact',
});

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            Submit a Memory
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-xl mx-auto">
            Every memory matters. Help us preserve the complete picture of a remarkable life.
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Invitation text */}
          <div>
            <SectionHeader
              title="Your Memories Are Welcome"
              subtitle="This archive grows with every contribution from those who knew Aslam Hayat."
            />

            <div className="prose-archive space-y-4 mb-8">
              <p>
                If you were fortunate enough to know Aslam Hayat — as a student, a colleague, a
                reader, a neighbour, a friend, or a member of his wider community — we warmly
                invite you to share your memories here.
              </p>
              <p>
                We are looking for anything that helps complete the picture:
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {[
                'A story or anecdote from a specific occasion',
                'A letter or message he sent you',
                'A photograph you have permission to share',
                'Something he said that stayed with you',
                'A reflection on how his writing influenced you',
                'Memories of family gatherings or community events',
                'Copies of printed articles not yet in the archive',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold flex items-center justify-center mt-0.5">
                    <span className="text-green-dark text-xs">✓</span>
                  </span>
                  <span className="font-lora text-sm text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="bg-parchment border border-cream-dark rounded-lg p-5">
              <h3 className="font-playfair text-lg text-green font-bold mb-3">
                Direct Contact
              </h3>
              <p className="font-lora text-sm text-gray-600 leading-relaxed mb-3">
                You may also reach the family directly at:
              </p>
              <a
                href="mailto:archive@aslamhayat.com"
                className="font-lora text-base text-gold-dark hover:text-gold transition-colors"
              >
                archive@aslamhayat.com
              </a>
              <p className="font-lora text-xs text-gray-500 mt-3 leading-relaxed">
                All submissions are reviewed personally by the family before being added to the
                archive. We aim to respond to every message within two weeks.
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <div className="bg-cream-light border border-cream-dark rounded-lg p-6 md:p-8">
              <h2 className="font-playfair text-2xl text-green font-bold mb-6">
                Share Your Memory
              </h2>

              <ContactForm />

              <p className="font-lora text-xs text-gray-500 mt-4 leading-relaxed">
                <strong>Note:</strong> This form does not submit to a server automatically — it is
                designed for manual review. Your submission will be received by the family via
                email. Photos can be sent directly to archive@aslamhayat.com.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
