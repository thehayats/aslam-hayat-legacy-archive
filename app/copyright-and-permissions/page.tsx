import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Copyright & Permissions — The Aslam Hayat Legacy Archive',
  description:
    'Copyright notice and permissions policy for the Aslam Hayat Legacy Archive. All content is the intellectual property of the Hayat family.',
  canonical: '/copyright-and-permissions',
});

const protectedContent = [
  'Articles and written works authored by Aslam Hayat',
  'Family photographs and visual materials',
  'Historical documents and archival materials',
  'Biographical material and editorial content',
  'Digital archives and digitised records',
  'Audio, video, and multimedia content',
  'Website design, layout, and presentation',
];

export default function CopyrightPage() {
  return (
    <div className="min-h-screen">

      {/* Header */}
      <div className="bg-green py-14 md:py-18">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl text-cream-light font-bold mb-3">
            Copyright &amp; Permissions
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

          {/* About the archive */}
          <section>
            <p className="text-lg">
              The Aslam Hayat Legacy Archive is a family-maintained historical archive dedicated to
              preserving the life, writings, memories, photographs, and legacy of Aslam Hayat
              (1933–2026).
            </p>
          </section>

          {/* Copyright notice */}
          <section>
            <h2 className="font-playfair text-xl text-green font-bold mb-3">Copyright Notice</h2>
            <p>
              Unless otherwise noted, all content appearing on this website is the intellectual
              property of the Hayat family and is protected by applicable copyright laws.
              This includes, but is not limited to:
            </p>
            <ul className="mt-4 space-y-2.5">
              {protectedContent.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="font-lora text-sm text-gray-700 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Restrictions */}
          <section>
            <div className="bg-green rounded-lg p-6 md:p-8">
              <h2 className="font-playfair text-lg text-cream-light font-bold mb-3">
                Reproduction &amp; Distribution
              </h2>
              <p className="font-lora text-sm text-cream-dark leading-relaxed">
                No material from this website may be reproduced, republished, distributed, copied,
                modified, stored, or transmitted in any form without prior written permission from
                the Hayat family.
              </p>
            </div>
          </section>

          {/* Academic & media note */}
          <section>
            <h2 className="font-playfair text-xl text-green font-bold mb-3">Academic &amp; Media Use</h2>
            <p>
              The family recognises the historical and cultural significance of this archive and
              welcomes enquiries from historians, journalists, researchers, and academics. Permission
              requests are considered individually and are often granted for non-commercial,
              educational, or journalistic use when the purpose is aligned with the preservation and
              respectful celebration of Aslam Hayat&apos;s legacy.
            </p>
            <p>
              Brief quotations for review, commentary, or scholarly citation may be permissible
              under fair use principles, provided appropriate attribution is given.
            </p>
          </section>

          {/* Request permission */}
          <section>
            <h2 className="font-playfair text-xl text-green font-bold mb-4">Request Permission</h2>
            <p className="mb-5">
              For publication requests, academic use, media enquiries, or reproduction permissions,
              please contact:
            </p>
            <div className="bg-parchment border border-cream-dark rounded-lg p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                <div>
                  <p className="font-playfair text-green text-lg font-bold mb-1">Zeeshan Hayat</p>
                  <p className="font-lora text-sm text-gray-600 mb-1">Archive Administrator</p>
                  <p className="font-lora text-sm text-gray-600 mb-4">The Aslam Hayat Legacy Archive</p>
                  <a
                    href="mailto:archive@aslamhayat.com"
                    className="font-lora text-base text-gold-dark hover:text-gold transition-colors"
                  >
                    archive@aslamhayat.com
                  </a>
                </div>
                <div className="flex-shrink-0">
                  <Link href="/contact" className="btn-gold text-sm">
                    Contact the Archive
                  </Link>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-cream-dark">
                <p className="font-lora text-xs text-gray-500 leading-relaxed">
                  Please include in your request: the specific content you wish to use, the
                  intended purpose and audience, and the publication or platform name. We aim to
                  respond to all enquiries within two weeks.
                </p>
              </div>
            </div>
          </section>

          {/* Purpose */}
          <section>
            <h2 className="font-playfair text-xl text-green font-bold mb-3">Purpose of This Archive</h2>
            <p>
              This archive exists to preserve family history and historical memory for future
              generations. It is maintained as an act of love and scholarship by the family of
              Aslam Hayat. All rights reserved.
            </p>
          </section>

          {/* Full copyright footer */}
          <div className="border border-gold/30 rounded-lg p-5 bg-parchment">
            <p className="font-lora text-sm text-gray-700 leading-relaxed text-center">
              © 2026 The Aslam Hayat Legacy Archive. All Rights Reserved.
              <br />
              <span className="text-xs text-gray-500 mt-2 block leading-relaxed">
                The contents of this archive, including writings, photographs, documents, and
                historical materials, are the property of the Hayat family. Reproduction or
                distribution without written permission is prohibited.
              </span>
            </p>
          </div>

        </div>

        {/* Navigation links */}
        <div className="mt-12 pt-6 border-t border-cream-dark flex flex-wrap gap-4">
          <Link href="/" className="btn-gold text-sm">Return Home</Link>
          <Link href="/terms-of-use" className="font-lora text-sm text-gold-dark hover:text-gold transition-colors flex items-center gap-1">
            Terms of Use →
          </Link>
          <Link href="/privacy-policy" className="font-lora text-sm text-gold-dark hover:text-gold transition-colors flex items-center gap-1">
            Privacy Policy →
          </Link>
        </div>
      </div>

    </div>
  );
}
