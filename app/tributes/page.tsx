import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Family Tributes — Aslam Hayat | In Their Own Words',
  description:
    'Tributes and remembrances from the family and loved ones of Aslam Hayat (1933–2026) — in their own words.',
  canonical: '/tributes',
  ogType: 'article',
});

export default function TributesPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="arabic-text text-gold text-2xl md:text-3xl mb-4 font-urdu">
            إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
          </p>
          <p className="font-lora text-sm text-cream-dark italic mb-6 opacity-80">
            &ldquo;Indeed, to Allah we belong and to Allah we shall return.&rdquo; — Quran 2:156
          </p>
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            Family Tributes
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-2xl mx-auto">
            In their own words — remembrances from those who loved him most
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      {/* Intro */}
      <section className="bg-parchment border-b border-cream-dark py-10 md:py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-lora text-base md:text-lg text-gray-700 leading-relaxed">
            Aslam Hayat&apos;s family have shared their memories, love, and farewells in their own
            words. These tributes are preserved here as part of his living legacy — so that his
            grandchildren and great-grandchildren may one day read how deeply he was loved.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">

        {/* ── Rida Hayat — Featured Tribute ── */}
        <section>
          <div className="bg-green rounded-2xl overflow-hidden shadow-xl">

            {/* Tribute header */}
            <div className="px-8 pt-10 pb-6 text-center border-b border-green-dark">
              <p className="arabic-text text-gold text-3xl md:text-4xl mb-3 font-urdu leading-loose">
                إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ
              </p>
              <p className="font-lora text-sm text-cream-dark italic opacity-80">
                &ldquo;Indeed, to Allah we belong and to Allah we shall return&rdquo;
              </p>
            </div>

            {/* Tribute body */}
            <div className="px-8 md:px-12 py-10">
              <div className="max-w-2xl mx-auto space-y-6 font-lora text-cream-light leading-relaxed">

                <p className="text-lg md:text-xl text-center font-semibold text-gold-light">
                  My beloved grandfather will be remembered as a pillar of our family, life&apos;s
                  biggest blessing and influence, from childhood into adulthood.
                </p>

                <div className="gold-divider" />

                <p className="text-base md:text-lg text-center text-cream-dark italic">
                  He instilled values of love, kindness, and strong faith among his family
                  members and wider community.
                </p>

                <div className="gold-divider" />

                <p className="text-base leading-relaxed text-cream-light">
                  A lover of literature and poetry &mdash; English, Urdu and Persian. He leaves us
                  with the hoards of books that he surrounded himself with 24/7, tasbihs
                  (prayer beads) that constantly intertwined in his fingers. He leaves us with
                  stories of partition, of growing up in the walled city of Lahore, of his travels
                  abroad, and all of life&apos;s endeavours over his 93 years. He leaves us mundane
                  yet sweet memories of him humming ghazals, of his voice reciting Qur&apos;an in
                  the early hours of the morning, of enjoying afternoon tea. He leaves us with
                  lessons, guidance and life advice that we cherish. He leaves us with seeds of
                  iman (faith), planted with love and care. He leaves us with an inexplicable
                  void, yet immense gratitude to have known him.
                </p>

                <div className="gold-divider" />

                <p className="text-lg md:text-xl text-center font-semibold text-gold-light">
                  May God rest your soul, our beautiful grandfather &nbsp;&#x1F339;
                </p>

              </div>
            </div>

            {/* Photos from the tribute */}
            <div className="grid grid-cols-2 gap-1 border-t border-green-dark">
              <img
                src="/images/gallery/aslam-hayat-home-green-sweater.jpg"
                alt="Aslam Hayat at home in Vancouver, wearing a green sweater"
                className="w-full object-cover aspect-[4/5]"
              />
              <img
                src="/images/gallery/aslam-hayat-home-armchair.jpg"
                alt="Aslam Hayat relaxed at home in Vancouver, wearing white shalwar kameez"
                className="w-full object-cover aspect-[4/5]"
              />
            </div>

            {/* Attribution */}
            <div className="bg-green-dark px-8 py-5 text-center">
              <cite className="font-playfair text-base text-gold not-italic font-bold">
                Rida Hayat
              </cite>
              <p className="font-lora text-xs text-cream-dark mt-1 opacity-70">
                Granddaughter of Aslam Hayat
              </p>
            </div>
          </div>
        </section>

        {/* ── Zeeshan Hayat — Tribute ── */}
        <section>
          <div className="bg-green rounded-2xl overflow-hidden shadow-xl">

            {/* Header */}
            <div className="px-8 pt-10 pb-6 text-center border-b border-green-dark">
              <p className="font-lora text-xs text-cream-dark italic opacity-60 mb-2">
                May 30, 2026
              </p>
              <h2 className="font-playfair text-2xl md:text-3xl text-cream-light font-bold">
                Until We Meet Again, Nanaji
              </h2>
            </div>

            {/* Excerpt */}
            <div className="px-8 md:px-12 py-10">
              <div className="max-w-2xl mx-auto space-y-5 font-lora text-cream-light leading-relaxed">

                <p className="text-sm text-cream-dark italic text-center opacity-75">
                  Bismillahir Rahmanir Rahim. Assalamu Alaikum wa Rahmatullahi wa Barakatuh.
                </p>

                <div className="gold-divider" />

                <p className="text-base md:text-lg leading-relaxed">
                  Today, I want to speak about my grandfather, Aslam Hayat. Although calling him
                  my grandfather never feels completely accurate, because he was so much more than
                  that to me.
                </p>

                <div className="text-center space-y-1 py-1">
                  <p className="font-playfair text-base text-gold-light font-semibold">
                    He was my father. He was my mentor. He was my teacher.
                  </p>
                  <p className="font-playfair text-base text-gold-light font-semibold">
                    He was my spiritual guide. He was my protector. He was my best friend.
                  </p>
                </div>

                <p className="text-base leading-relaxed">
                  Allah blessed me with many things in this life, but one of the greatest blessings
                  Allah ever gave me was the gift of being raised by Aslam Hayat.
                </p>

                <div className="gold-divider" />

                <p className="text-base text-cream-dark italic leading-relaxed">
                  If I have shown patience, I learned it from him. If I have shown perseverance,
                  I learned it from him. If I have shown compassion, I learned it from him&hellip;
                </p>

                <div className="text-center pt-2">
                  <Link href="/tributes/zeeshan-hayat" className="btn-gold">
                    Read Full Tribute
                  </Link>
                </div>

              </div>
            </div>

            {/* Attribution */}
            <div className="bg-green-dark px-8 py-5 text-center">
              <cite className="font-playfair text-base text-gold not-italic font-bold">
                Zeeshan Hayat
              </cite>
              <p className="font-lora text-xs text-cream-dark mt-1 opacity-70">
                Grandchild of Aslam Hayat
              </p>
            </div>

          </div>
        </section>

        {/* ── Shazia Hayat — Tribute ── */}
        <section>
          <div className="bg-green rounded-2xl overflow-hidden shadow-xl">

            {/* Header */}
            <div className="px-8 pt-10 pb-6 text-center border-b border-green-dark">
              <h2 className="font-playfair text-2xl md:text-3xl text-cream-light font-bold">
                For Dada
              </h2>
              <p className="font-lora text-sm text-cream-dark italic mt-2 opacity-75">
                From a daughter-in-law who shared 36 years by his side
              </p>
            </div>

            {/* Excerpt */}
            <div className="px-8 md:px-12 py-10">
              <div className="max-w-2xl mx-auto space-y-5 font-lora text-cream-light leading-relaxed">

                <p className="text-base md:text-lg leading-relaxed">
                  With a heavy heart, I say goodbye to my beloved father-in-law, a man who was
                  much more than a relative to me. For 36 years, I had the honour of sharing a
                  home and life with him and during those years he became a father figure, a
                  mentor and a source of strength and knowledge for our own family.
                </p>

                <div className="gold-divider" />

                <p className="text-base text-cream-dark italic leading-relaxed text-center">
                  There are people who leave memories and people who leave lasting impacts on
                  your soul. He was one of those rare people.
                </p>

                <div className="gold-divider" />

                <p className="text-base leading-relaxed">
                  His presence made our home blessed, his words brought comfort in difficult
                  times. Through every stage of life, he stood as a pillar of support, and
                  taught values of honesty, patience, humility and faith.
                </p>

                <div className="text-center pt-2">
                  <Link href="/tributes/shazia-hayat" className="btn-gold">
                    Read Full Tribute
                  </Link>
                </div>

              </div>
            </div>

            {/* Photos */}
            <div className="grid grid-cols-2 gap-1 border-t border-green-dark">
              <img
                src="/images/tributes/shazia-hayat-portrait.jpeg"
                alt="Aslam Hayat and Shazia Hayat"
                className="w-full object-cover aspect-[4/5]"
              />
              <img
                src="/images/tributes/shazia-hayat-theater.jpeg"
                alt="Shazia Hayat and Aslam Hayat at the theater"
                className="w-full object-cover aspect-[4/5]"
              />
            </div>

            {/* Attribution */}
            <div className="bg-green-dark px-8 py-5 text-center">
              <cite className="font-playfair text-base text-gold not-italic font-bold">
                Shazia Hayat
              </cite>
              <p className="font-lora text-xs text-cream-dark mt-1 opacity-70">
                Daughter-in-Law of Aslam Hayat
              </p>
            </div>

          </div>
        </section>

        {/* ── Invite more tributes ── */}
        <section>
          <div className="bg-parchment border border-cream-dark rounded-xl p-8 md:p-10 text-center">
            <p className="font-playfair text-xl text-green font-bold mb-3">
              Share Your Remembrance
            </p>
            <p className="font-lora text-base text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto">
              Did you know Aslam Hayat — as a family member, community friend, reader of his writing,
              or colleague? The family warmly invites you to share your own tribute or memory.
              All contributions are reviewed before being added to the archive.
            </p>
            <Link href="/contact" className="btn-primary">
              Submit a Tribute or Memory
            </Link>
          </div>
        </section>

      </div>

      {/* Footer CTA */}
      <section className="bg-green border-t border-green-dark py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-lora text-base text-cream-dark leading-relaxed mb-6">
            Aslam Hayat&apos;s life is preserved in his own words across 650 articles — and in
            the memories of everyone who knew him.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/personal" className="btn-gold">His Personal Story</Link>
            <Link href="/articles" className="btn-gold">Read His Articles</Link>
            <Link href="/gallery" className="btn-gold">Photo Gallery</Link>
          </div>
        </div>
      </section>

    </div>
  );
}
