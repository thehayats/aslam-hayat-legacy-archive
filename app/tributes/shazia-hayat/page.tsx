import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'A Tribute from Shazia Hayat — Aslam Hayat Archive',
  description:
    'For 36 years, he was a father figure, mentor, and source of strength. A tribute from Shazia Hayat to her beloved father-in-law, Aslam Hayat.',
  canonical: '/tributes/shazia-hayat',
  ogType: 'article',
});

export default function ShaziaHayatTributePage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="bg-green py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/tributes"
            className="inline-flex items-center gap-2 font-lora text-sm text-cream-dark hover:text-gold-light transition-colors mb-8"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Tributes
          </Link>

          <p className="font-lora text-xs text-cream-dark italic mb-3 opacity-60 tracking-widest uppercase">
            Tribute
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4 leading-tight">
            For Dada
          </h1>
          <div className="gold-divider mb-6" />
          <p className="font-lora text-lg text-cream-dark italic leading-relaxed">
            Written by Shazia Hayat &mdash; Daughter-in-Law
          </p>
        </div>
      </div>

      {/* Photographs */}
      <section className="bg-parchment border-b border-cream-dark py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-6">
            <figure className="relative overflow-hidden rounded-xl border border-cream-dark shadow-sm">
              <Image
                src="/images/tributes/shazia-hayat-portrait.jpeg"
                alt="Aslam Hayat and Shazia Hayat"
                width={600}
                height={750}
                className="w-full h-full object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-green/80 px-4 py-2">
                <p className="font-lora text-xs text-cream-dark text-center">
                  Aslam Hayat &amp; Shazia Hayat
                </p>
              </figcaption>
            </figure>
            <figure className="relative overflow-hidden rounded-xl border border-cream-dark shadow-sm">
              <Image
                src="/images/tributes/shazia-hayat-theater.jpeg"
                alt="Shazia Hayat and Aslam Hayat at the theater"
                width={600}
                height={750}
                className="w-full h-full object-cover"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-green/80 px-4 py-2">
                <p className="font-lora text-xs text-cream-dark text-center">
                  A special outing together
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Tribute text */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <article className="space-y-6">
          <p className="font-lora text-lg text-gray-700 leading-relaxed">
            With a heavy heart, I say goodbye to my beloved father-in-law, a man who was much more
            than a relative to me. For 36 years, I had the honour of sharing a home and life with
            him and during those years he became a father figure, a mentor and a source of strength
            and knowledge for our own family.
          </p>
          <p className="font-lora text-lg text-gray-700 leading-relaxed">
            He was a modern Muslim man, whose faith showed through his character. He treated
            everyone with kindness, dignity, and respect. His wisdom was gentle, his advice was
            thoughtful, and his heart was full of compassion.
          </p>
          <p className="font-lora text-lg text-gray-700 leading-relaxed">
            There are people who leave memories and people who leave lasting impacts on your soul.
            He was one of those rare people. His presence made our home blessed, his words brought
            comfort in difficult times. Through every stage of life, he stood as a pillar of
            support, and taught values of honesty, patience, humility and faith.
          </p>
          <p className="font-lora text-lg text-gray-700 leading-relaxed">
            It is difficult to manage life without him. The chair where he sat, the conversations
            we had on politics, Islam and countless moments of guidance will always remain in my
            heart. I am grateful to Allah for blessing me with 36 precious years in his company.
            Those years were a gift that I will cherish for the rest of my life. Today, we mourn
            his loss and at the same time celebrate his life. You will always be remembered, always
            be loved, and never be forgotten.
          </p>

          {/* Closing dua */}
          <blockquote className="border-l-4 border-gold pl-6 py-2 my-8">
            <p className="font-playfair text-xl text-green italic leading-relaxed">
              May Allah grant him Jannat-ul-Firdous.
            </p>
          </blockquote>

          {/* Signature */}
          <div className="pt-4 border-t border-cream-dark">
            <p className="font-playfair text-xl text-green font-bold">Shazia Hayat</p>
            <p className="font-lora text-sm text-gray-500 mt-1">Daughter-in-Law</p>
          </div>
        </article>

        {/* Download original */}
        <div className="mt-12 bg-parchment border border-cream-dark rounded-xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="font-playfair text-base text-green font-bold mb-1">Original Tribute</p>
            <p className="font-lora text-sm text-gray-600">
              Download the original tribute written by Shazia Hayat.
            </p>
          </div>
          <a
            href="/tributes/shazia-hayat.pdf"
            download
            className="btn-gold text-sm whitespace-nowrap"
          >
            Download PDF
          </a>
        </div>

        {/* Back navigation */}
        <div className="mt-10 pt-6 border-t border-cream-dark">
          <Link
            href="/tributes"
            className="inline-flex items-center gap-2 font-lora text-sm text-green-light hover:text-green transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Tributes
          </Link>
        </div>
      </div>

    </div>
  );
}
