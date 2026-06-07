import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Until We Meet Again, Nanaji — Zeeshan Hayat | Tributes to Aslam Hayat',
  description:
    'A tribute to Aslam Hayat from his grandchild Zeeshan Hayat — delivered May 30, 2026.',
  canonical: '/tributes/zeeshan-hayat',
  ogType: 'article',
});

function QuranBlock({
  arabic,
  english,
  reference,
}: {
  arabic: string;
  english: string;
  reference: string;
}) {
  return (
    <div
      className="my-8 rounded-xl"
      style={{ background: 'rgba(0,0,0,0.22)', border: '1px solid rgba(201,162,77,0.30)' }}
    >
      <div className="px-6 py-7 text-center">
        <p
          dir="rtl"
          lang="ar"
          className="font-urdu text-center leading-loose mb-4"
          style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#c9a24d', lineHeight: '2.2' }}
        >
          {arabic}
        </p>
        <p className="font-lora text-sm md:text-base text-cream-light italic leading-relaxed mb-2">
          &ldquo;{english}&rdquo;
        </p>
        <p className="font-lora text-xs" style={{ color: 'rgba(201,162,77,0.60)' }}>
          — {reference}
        </p>
      </div>
    </div>
  );
}

function HadithBlock({ text, source }: { text: string; source: string }) {
  return (
    <div
      className="my-7 rounded-xl px-6 py-5"
      style={{
        background: 'rgba(0,0,0,0.15)',
        borderLeft: '3px solid rgba(201,162,77,0.50)',
      }}
    >
      <p className="font-lora text-sm md:text-base text-cream-light italic leading-relaxed mb-2">
        &ldquo;{text}&rdquo;
      </p>
      <p className="font-lora text-xs" style={{ color: 'rgba(201,162,77,0.60)' }}>
        — {source}
      </p>
    </div>
  );
}

export default function ZeeshanHayatTributePage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-lora text-xs text-cream-dark italic mb-3 opacity-60 tracking-wide uppercase">
            A tribute from his family
          </p>
          <h1 className="font-playfair text-3xl md:text-4xl text-cream-light font-bold mb-4">
            Until We Meet Again, Nanaji
          </h1>
          <p className="font-lora text-sm text-gold-light mb-1">
            Zeeshan Hayat &nbsp;&middot;&nbsp; Grandchild
          </p>
          <p className="font-lora text-xs text-cream-dark opacity-60">May 30, 2026</p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      {/* Back link */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
        <Link
          href="/tributes"
          className="font-lora text-sm text-gold-dark hover:text-gold transition-colors flex items-center gap-1 w-fit"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          All Tributes
        </Link>
      </div>

      {/* Main tribute card */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        <div className="bg-green rounded-2xl overflow-hidden shadow-xl">

          {/* Opening — Bismillah & Salaam */}
          <div className="px-8 pt-10 pb-8 text-center border-b border-green-dark">
            <p className="font-lora text-base text-cream-light leading-relaxed mb-1">
              Bismillahir Rahmanir Rahim.
            </p>
            <p className="font-lora text-base text-cream-light leading-relaxed mb-7">
              Assalamu Alaikum wa Rahmatullahi wa Barakatuh.
            </p>
            <div
              className="inline-block text-left"
              style={{ borderLeft: '2px solid rgba(201,162,77,0.40)', paddingLeft: '18px' }}
            >
              <p className="font-lora text-xs text-cream-dark italic mb-2 opacity-70">
                Recitation dedication:
              </p>
              <ul className="font-lora text-sm text-cream-light space-y-1">
                <li>Surah Al-Fatiha</li>
                <li>
                  Surah Al-Ikhlas{' '}
                  <span className="text-cream-dark italic text-xs">&nbsp;· three times</span>
                </li>
                <li>Surah Al-Falaq</li>
                <li>Surah An-Nas</li>
              </ul>
              <p className="font-lora text-xs text-cream-dark italic mt-3 opacity-60">
                Dedicated to the soul of Aslam Hayat
              </p>
            </div>
          </div>

          {/* Tribute body */}
          <div className="px-8 md:px-12 py-10 space-y-4 font-lora text-cream-light leading-relaxed">

            <p className="text-base md:text-lg leading-relaxed">
              Today, I want to speak about my grandfather, Aslam Hayat. Although calling him my
              grandfather never feels completely accurate, because he was so much more than that
              to me.
            </p>

            {/* He was… */}
            <div className="text-center space-y-1.5 py-5">
              {[
                'He was my father.',
                'He was my mentor.',
                'He was my teacher.',
                'He was my spiritual guide.',
                'He was my protector.',
                'He was my best friend.',
              ].map((line) => (
                <p key={line} className="font-playfair text-lg text-gold-light font-semibold">
                  {line}
                </p>
              ))}
            </div>

            <p className="text-base leading-relaxed">
              Allah blessed me with many things in this life, but one of the greatest blessings
              Allah ever gave me was the gift of being raised by Aslam Hayat.
            </p>

            <p className="text-base leading-relaxed">
              When I think of my childhood, I only have beautiful memories.
            </p>

            <p className="text-base leading-relaxed">
              I remember him teaching me how to ride a bike.
            </p>

            <p className="text-base leading-relaxed">
              I remember him helping me with my homework. He would buy books on the subjects I
              was studying so he could learn them himself and then teach me.
            </p>

            <p className="text-base leading-relaxed">
              I remember sitting beside him for countless hours while he patiently explained
              things to me.
            </p>

            <p className="text-base leading-relaxed">
              I remember him believing in me long before I believed in myself.
            </p>

            <p className="text-base leading-relaxed">He showed me how to dream.</p>

            <p className="text-base leading-relaxed">
              When I was discouraged, he lifted me back up.
            </p>

            <p className="text-base leading-relaxed">When I succeeded, he celebrated with me.</p>

            <p className="text-base leading-relaxed">
              When I failed, he comforted me and reminded me to keep moving forward and to never
              give up.
            </p>

            <div className="gold-divider my-2" />

            <p className="text-base leading-relaxed">
              As a child, I had endless questions. I wanted to know everything. I would sit beside
              him and ask him about the Prophets, about our beloved Prophet Muhammad ﷺ, about
              history, about the world, and about life itself.
            </p>

            <p className="text-base leading-relaxed">
              No matter how many questions I asked, he always answered them.
            </p>

            <p className="text-base leading-relaxed">
              He was the greatest wealth of knowledge.
            </p>

            <p className="text-base leading-relaxed">
              And more importantly, he shared that knowledge with love.
            </p>

            <div className="gold-divider my-2" />

            <p className="text-base leading-relaxed">
              One of the things I will miss most is simply the way he spoke to people.
            </p>

            <p className="text-base leading-relaxed">
              Anyone who knew Nanaji knows exactly what I mean.
            </p>

            <p className="text-base leading-relaxed">He had a warmth about him.</p>
            <p className="text-base leading-relaxed">A gentleness.</p>
            <p className="text-base leading-relaxed">A wisdom.</p>

            <p className="text-base leading-relaxed">
              After speaking with him, you always felt better than before.
            </p>

            <p className="text-base leading-relaxed">That was one of his greatest gifts.</p>

            <div className="gold-divider my-2" />

            <p className="text-base leading-relaxed">
              Nanaji himself lived an extraordinary life. Born in Lahore in 1933, he witnessed
              some of the most important events of the last century. He survived Partition, pursued
              higher education in London, became a Chartered Accountant, and rose to senior
              leadership within the Pakistan Civil Aviation Authority, where he served his country
              with distinction for over 30 years.
            </p>

            <p className="text-base leading-relaxed">
              He was also a writer, a student of history, and someone deeply committed to
              preserving knowledge for future generations.
            </p>

            <p className="text-base leading-relaxed">
              Yet despite all of those accomplishments, what I will remember most is not his
              career or titles.
            </p>

            <p className="text-base leading-relaxed">I will remember his kindness.</p>
            <p className="text-base leading-relaxed">His wisdom.</p>
            <p className="text-base leading-relaxed">
              And the way he made every member of his family feel.
            </p>

            <div className="gold-divider my-2" />

            <p className="text-base leading-relaxed">
              When I immigrated to Canada with my Grandparents, Nanaji left behind the life he
              had built in Pakistan and started over so that future generations could have
              opportunities.
            </p>

            <p className="text-base leading-relaxed">He never complained.</p>
            <p className="text-base leading-relaxed">He never focused on status.</p>
            <p className="text-base leading-relaxed">He focused on his family.</p>

            <p className="text-base leading-relaxed">
              He taught me that dignity does not come from your title.
            </p>
            <p className="text-base leading-relaxed">Dignity comes from your character.</p>

            <p className="text-base leading-relaxed">
              Every good quality people find in me was nurtured by him.
            </p>

            <p className="text-base leading-relaxed">
              If I have shown patience, I learned it from him.
            </p>
            <p className="text-base leading-relaxed">
              If I have shown perseverance, I learned it from him.
            </p>
            <p className="text-base leading-relaxed">
              If I have shown compassion, I learned it from him.
            </p>

            <p className="text-base leading-relaxed">
              If I have achieved any success in this life, the credit belongs first to Allah and
              then to the man who spent his life building me into the person I became.
            </p>

            <div className="gold-divider my-2" />

            <p className="text-base leading-relaxed">
              One of the greatest gifts Nanaji gave me was my faith.
            </p>

            <p className="text-base leading-relaxed">
              From a very early age, he taught me to love Allah.
            </p>
            <p className="text-base leading-relaxed">He taught me to trust Allah.</p>
            <p className="text-base leading-relaxed">
              He taught me to turn to Allah during difficult times.
            </p>
            <p className="text-base leading-relaxed">
              He taught me how to read the Quran in Arabic.
            </p>

            <p className="text-base leading-relaxed">It took years of patience.</p>
            <p className="text-base leading-relaxed">Letter by letter.</p>
            <p className="text-base leading-relaxed">Word by word.</p>
            <p className="text-base leading-relaxed">Verse by verse.</p>
            <p className="text-base leading-relaxed">He never gave up on me.</p>

            <p className="text-base leading-relaxed">
              More importantly, he taught me a lesson that has carried me through my entire life.
            </p>

            <div
              className="my-6 rounded-xl text-center py-5 px-6"
              style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(201,162,77,0.22)' }}
            >
              <p className="font-playfair text-xl md:text-2xl text-gold-light italic">
                &ldquo;Allah is with you.&rdquo;
              </p>
            </div>

            <p className="text-base leading-relaxed">
              Even today, when life becomes difficult, I can still hear his voice.
            </p>

            <p className="text-base leading-relaxed">
              Those words carried me through challenges, disappointments, fears, and losses. And
              they are carrying me through his loss today.
            </p>

            <p className="text-base leading-relaxed">Allah says in the Quran:</p>

            <QuranBlock
              arabic="فَإِنَّ مَعَ الْعُسْرِ يُسْرًا"
              english="Indeed, with hardship comes ease."
              reference="Surah Ash-Sharh 94:5"
            />

            <p className="text-base leading-relaxed">Today, I hold tightly to that promise.</p>

            <p className="text-base leading-relaxed">Allah also teaches us:</p>

            <QuranBlock
              arabic="رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا"
              english="My Lord, have mercy upon them as they brought me up when I was small."
              reference="Surah Al-Isra 17:24"
            />

            <p className="text-base leading-relaxed">
              Whenever I recite this verse, I think of Nanaji.
            </p>

            <div className="gold-divider my-2" />

            <p className="text-base leading-relaxed">
              For more than four decades, Nanaji was part of nearly every day of my life. Even
              during the years we were apart, we spoke constantly.
            </p>

            <p className="text-base leading-relaxed">
              My life has been shaped by his presence from the very beginning.
            </p>

            <p className="text-base leading-relaxed">
              There is a space in my heart now that can never be filled by anyone else.
            </p>

            <p className="text-base leading-relaxed">
              But as Muslims, we know that death is not the end.
            </p>

            <p className="text-base leading-relaxed">Allah says:</p>

            <QuranBlock
              arabic="إِنَّا لِلَّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ"
              english="Indeed we belong to Allah, and indeed to Him we will return."
              reference="Surah Al-Baqarah 2:156"
            />

            <p className="text-base leading-relaxed">
              Today, Nanaji has returned to the One who created him.
            </p>

            <p className="text-base leading-relaxed">
              And while my heart is broken, it is also filled with hope.
            </p>

            <p className="text-base leading-relaxed">Hope in Allah&apos;s mercy.</p>
            <p className="text-base leading-relaxed">Hope in Allah&apos;s promises.</p>
            <p className="text-base leading-relaxed">
              Hope that one day, by Allah&apos;s mercy, I will see my Nanaji again.
            </p>

            <div className="gold-divider my-2" />

            <p className="text-base leading-relaxed">
              I ask Allah to reunite us in Jannatul Firdaus.
            </p>
            <p className="text-base leading-relaxed">
              I ask Allah to place him among the righteous.
            </p>
            <p className="text-base leading-relaxed">
              I ask Allah to expand his grave with light and tranquility.
            </p>
            <p className="text-base leading-relaxed">
              I ask Allah to reward him for every sacrifice he made, every prayer he taught, every
              lesson he shared, and every act of kindness he performed.
            </p>

            <p className="text-base leading-relaxed">The Prophet Muhammad ﷺ said:</p>

            <HadithBlock
              text="When a person dies, his deeds come to an end except for three: ongoing charity, beneficial knowledge, or a righteous child who prays for him."
              source="Prophet Muhammad ﷺ"
            />

            <p className="text-base leading-relaxed">I believe Nanaji leaves behind all three.</p>

            <p className="text-base leading-relaxed">The Prophet ﷺ also said:</p>

            <HadithBlock
              text="The best of people are those who are most beneficial to others."
              source="Prophet Muhammad ﷺ"
            />

            <p className="text-base leading-relaxed">That describes Nanaji perfectly.</p>

            <p className="text-base leading-relaxed">
              He spent his entire life benefiting others.
            </p>
            <p className="text-base leading-relaxed">His family.</p>
            <p className="text-base leading-relaxed">His friends.</p>
            <p className="text-base leading-relaxed">His community.</p>

            <div className="gold-divider my-2" />

            <p className="text-base leading-relaxed">
              At this point, Nanaji would probably want us to stop crying for a moment and smile.
            </p>

            <p className="text-base leading-relaxed">
              So I have to share a couple of things that everyone in the family knows.
            </p>

            <p className="text-base leading-relaxed">
              Nanaji&apos;s doors were always open — especially the bathroom door.
            </p>

            <p className="text-base leading-relaxed">
              Anyone who lived with him probably walked in by accident at least once.
            </p>

            <p className="text-base leading-relaxed">
              And everyone knew that if Nanaji asked for a glass of water, it meant we were not
              leaving yet.
            </p>

            <p className="text-base leading-relaxed">
              Because first came the glass of water. Then one last trip to the washroom before
              leaving the house.
            </p>

            <div className="gold-divider my-2" />

            <p className="text-base leading-relaxed">
              I also want to say something to my family.
            </p>

            <p className="text-base leading-relaxed">
              To Aliya Baji, Shazia Baji, Nina Baji, Kamran Bhai, Salma — all of his children,
              grandchildren, great-grandchildren, and everyone who loved him: Thank you.
            </p>

            <p className="text-base leading-relaxed">
              I know every one of you did your best for him.
            </p>

            <p className="text-base leading-relaxed">
              I witnessed the love, sacrifices, care, and devotion that surrounded him.
            </p>

            <p className="text-base leading-relaxed">
              He was blessed with a family that loved him.
            </p>
            <p className="text-base leading-relaxed">And we were blessed to have him.</p>

            <div className="gold-divider my-2" />

            <p className="text-base leading-relaxed">
              Today, as I think about my own children, I realize even more clearly what Nanaji
              gave me.
            </p>

            <p className="text-base leading-relaxed">
              I have told my son Azan that I hope to have the same relationship with him that I
              had with my Nanaji.
            </p>

            <p className="text-base leading-relaxed">
              I pray that my daughters experience the same love, gentleness, wisdom, and guidance
              that Nanaji showed his children and his wife.
            </p>

            <p className="text-base leading-relaxed">
              If I can become even a fraction of the man he was, I will consider my life a success.
            </p>

            <div className="gold-divider my-2" />

            <p className="text-base leading-relaxed">
              Nanaji, if I could speak to you one more time, I would simply say thank you.
            </p>

            <div className="space-y-2 py-2">
              <p className="text-base leading-relaxed">Thank you for raising me.</p>
              <p className="text-base leading-relaxed">Thank you for believing in me.</p>
              <p className="text-base leading-relaxed">Thank you for teaching me.</p>
              <p className="text-base leading-relaxed">Thank you for loving me.</p>
              <p className="text-base leading-relaxed">
                Thank you for showing me what faith looks like.
              </p>
              <p className="text-base leading-relaxed">
                Thank you for showing me what sacrifice looks like.
              </p>
              <p className="text-base leading-relaxed">
                Thank you for showing me what a good man looks like.
              </p>
            </div>

            <p className="text-base leading-relaxed">
              I will carry your lessons with me for the rest of my life.
            </p>
            <p className="text-base leading-relaxed">I will never forget you.</p>
            <p className="text-base leading-relaxed">I will love you for the rest of my life.</p>

            <p className="text-base leading-relaxed">
              Our relationship was inseparable, but one day we all must return to our Creator.
            </p>

            <p className="text-base leading-relaxed">
              Looking back now, I believe Allah prepared both Nanaji and me for this moment.
            </p>

            <p className="text-base leading-relaxed">
              During the years we were apart in this dunya, our bond only grew stronger.
            </p>

            <p className="text-base leading-relaxed">
              And now that he has returned to Allah, I will keep him even closer in my heart.
            </p>

            <p className="text-base leading-relaxed">He will always be with me.</p>

            <p className="text-base leading-relaxed">
              You always told me that Allah is with me.
            </p>

            <p className="text-base leading-relaxed">
              Today, I hold onto those words more than ever.
            </p>

            <p className="text-base leading-relaxed">
              And by Allah&apos;s mercy, I know that one day we will meet again.
            </p>

            <div className="gold-divider my-4" />

            {/* Closing Du'a */}
            <div
              className="rounded-xl text-center px-6 py-7"
              style={{ background: 'rgba(0,0,0,0.20)', border: '1px solid rgba(201,162,77,0.22)' }}
            >
              <p className="font-lora text-base text-cream-light leading-relaxed mb-4">
                May Allah forgive you, have mercy on you, elevate your rank, fill your grave with
                light, and grant you Jannatul Firdaus.
              </p>
              <p className="font-playfair text-2xl text-gold-light font-semibold">Ameen.</p>
            </div>

            <div className="gold-divider my-4" />

            <p className="text-base text-center leading-relaxed text-cream-dark italic">
              Assalamu Alaikum wa Rahmatullahi wa Barakatuh.
            </p>

          </div>

          {/* Attribution */}
          <div className="bg-green-dark px-8 py-5 text-center">
            <cite className="font-playfair text-base text-gold not-italic font-bold">
              Zeeshan Hayat
            </cite>
            <p className="font-lora text-xs text-cream-dark mt-1 opacity-70">
              Grandchild of Aslam Hayat &nbsp;&middot;&nbsp; May 30, 2026
            </p>
          </div>

        </div>

        {/* Bottom nav */}
        <div className="mt-8 text-center">
          <Link
            href="/tributes"
            className="font-lora text-sm text-gold-dark hover:text-gold transition-colors"
          >
            ← All Tributes
          </Link>
        </div>
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
