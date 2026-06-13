import type { Metadata } from 'next';
import Link from 'next/link';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Patience During Trials and Trusting Allah — Living Legacy',
  description:
    'A khutbah delivered by Zeeshan Hayat during Jumu\'ah prayers, inspired by the spiritual teachings and wisdom of his late grandfather, Aslam Hayat.',
  canonical: '/living-legacy/patience-during-trials',
  ogType: 'article',
});

function QuranBlock({
  surah,
  arabic,
  english,
}: {
  surah: string;
  arabic: string;
  english: string;
}) {
  return (
    <div
      className="my-8 rounded-xl"
      style={{ background: 'rgba(0,0,0,0.22)', border: '1px solid rgba(201,162,77,0.30)' }}
    >
      <div className="px-6 py-7 text-center">
        <p className="font-lora text-xs tracking-widest uppercase mb-4" style={{ color: 'rgba(201,162,77,0.60)' }}>
          {surah}
        </p>
        <p
          dir="rtl"
          lang="ar"
          className="font-urdu text-center leading-loose mb-5"
          style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', color: '#c9a24d', lineHeight: '2.4' }}
        >
          {arabic}
        </p>
        <p className="font-lora text-sm md:text-base text-cream-light italic leading-relaxed">
          &ldquo;{english}&rdquo;
        </p>
      </div>
    </div>
  );
}

function HadithBlock({ text, source }: { text: string; source: string }) {
  return (
    <div
      className="my-7 rounded-xl px-6 py-6"
      style={{
        background: 'rgba(0,0,0,0.15)',
        borderLeft: '3px solid rgba(201,162,77,0.50)',
      }}
    >
      <p className="font-lora text-xs tracking-widest uppercase mb-3" style={{ color: 'rgba(201,162,77,0.55)' }}>
        Hadith
      </p>
      <p className="font-lora text-sm md:text-base text-cream-light italic leading-relaxed mb-3">
        &ldquo;{text}&rdquo;
      </p>
      <p className="font-lora text-xs" style={{ color: 'rgba(201,162,77,0.60)' }}>
        — {source}
      </p>
    </div>
  );
}

function DuaBlock({ lines }: { lines: string[] }) {
  return (
    <div
      className="my-10 rounded-2xl px-7 py-8 text-center"
      style={{ background: 'rgba(0,0,0,0.28)', border: '1px solid rgba(201,162,77,0.35)' }}
    >
      <p
        className="font-lora text-xs tracking-widest uppercase mb-5"
        style={{ color: 'rgba(201,162,77,0.65)' }}
      >
        Du&apos;a
      </p>
      <div className="space-y-3">
        {lines.map((line, i) => (
          <p key={i} className="font-lora text-sm md:text-base text-cream-light leading-relaxed">
            {line}
          </p>
        ))}
      </div>
      <div className="mt-6">
        <p className="font-playfair text-2xl text-gold-light font-semibold">Ameen.</p>
      </div>
    </div>
  );
}

export default function PatienceDuringTrialsPage() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="arabic-text text-gold text-2xl mb-3 font-urdu leading-loose">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <p className="font-lora text-xs text-cream-dark italic mb-6 opacity-70">
            In the name of Allah, the Most Gracious, the Most Merciful
          </p>
          <div className="gold-divider mb-7" />
          <p className="font-lora text-xs text-cream-dark italic mb-3 opacity-60 tracking-widest uppercase">
            Khutbah &nbsp;&middot;&nbsp; Living Legacy
          </p>
          <h1 className="font-playfair text-3xl md:text-4xl text-cream-light font-bold mb-5 leading-tight">
            Patience During Trials<br className="hidden sm:block" /> and Trusting Allah
          </h1>
          <p className="font-lora text-sm text-gold-light mb-1">
            Zeeshan Hayat
          </p>
          <p className="font-lora text-xs text-cream-dark opacity-60">
            Delivered during Jumu&apos;ah prayers
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      {/* Back link */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2">
        <Link
          href="/living-legacy"
          className="font-lora text-sm text-gold-dark hover:text-gold transition-colors flex items-center gap-1 w-fit"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Living Legacy
        </Link>
      </div>

      {/* Main content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
        <div className="bg-green rounded-2xl overflow-hidden shadow-xl">

          {/* Intro note */}
          <div
            className="px-8 pt-9 pb-8 border-b"
            style={{ borderColor: 'rgba(255,255,255,0.08)' }}
          >
            <p className="font-lora text-xs text-cream-dark italic mb-2 opacity-60 tracking-wide uppercase">
              About this khutbah
            </p>
            <p className="font-lora text-sm text-cream-dark leading-relaxed">
              This khutbah was delivered by Zeeshan Hayat during Friday prayers and was inspired
              by the spiritual teachings, wisdom, and lifelong Islamic study of his late grandfather,
              Aslam Hayat. It reflects themes that Aslam Hayat emphasised throughout his life:
              patience, trust in Allah, gratitude, hardship, and turning toward Allah during trials.
            </p>
          </div>

          {/* Khutbah body */}
          <div className="px-8 md:px-12 py-10 space-y-5 font-lora text-cream-light leading-relaxed">

            {/* Opening */}
            <div className="text-center space-y-2 pb-4">
              <p className="text-base leading-relaxed">
                All praise belongs to Allah. We praise Him, we seek His help, and we ask His
                forgiveness. We seek refuge in Allah from the evil within ourselves and from the
                evil of our deeds. Whomsoever Allah guides, no one can misguide, and whomsoever
                Allah allows to go astray, no one can guide.
              </p>
              <p className="text-base leading-relaxed">
                We bear witness that there is no god worthy of worship except Allah alone, without
                partner, and we bear witness that Muhammad ﷺ is His servant and His messenger.
                May Allah send peace and blessings upon our beloved Prophet Muhammad ﷺ, upon his
                family, his companions, and all those who follow his way until the Day of Judgment.
              </p>
            </div>

            <div className="gold-divider my-1" />

            <p className="text-base leading-relaxed">
              Dear brothers and sisters, today I want to remind myself first and then all of you
              about patience during trials and trusting Allah when life becomes difficult.
            </p>

            <p className="text-base leading-relaxed">
              Every one of us will face tests in this dunya. Some are tested with health, some
              with wealth, some with family, some with grief, fear, stress, or uncertainty.
              Some tests are seen by people, and some are hidden in the heart where only Allah
              can see them.
            </p>

            <p className="text-base leading-relaxed">
              As believers, we must understand that hardship is not always a punishment. Sometimes
              hardship is purification. Sometimes it is protection. Sometimes it is a way for Allah
              to raise our rank and bring us closer to Him.
            </p>

            <QuranBlock
              surah="Surah Al-ʿAnkabut · 29:2"
              arabic="أَحَسِبَ النَّاسُ أَن يُتْرَكُوا أَن يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ"
              english="Do people think once they say, 'We believe,' that they will be left without being put to the test?"
            />

            <p className="text-base leading-relaxed">
              This ayah teaches us that iman is not only proven when life is easy. Iman is proven
              when life becomes difficult and we still turn back to Allah.
            </p>

            <p className="text-base leading-relaxed">
              The core of patience is this: when times are good, we say Alhamdulillah. When times
              are bad, we still say Alhamdulillah. In ease, we thank Allah for His blessings. In
              hardship, we thank Allah because He is still our Lord, He is still Merciful, and He
              knows what we do not know.
            </p>

            <HadithBlock
              text="Wonderful is the affair of the believer, for there is good for him in every matter. If something good happens to him, he is grateful, and that is good for him. If something harmful happens to him, he is patient, and that is good for him."
              source="Prophet Muhammad ﷺ · Sahih Muslim 2999"
            />

            <p className="text-base leading-relaxed">
              This hadith shows us that the believer never truly loses. In good times, the believer
              earns reward through gratitude. In difficult times, the believer earns reward through
              patience.
            </p>

            <div className="gold-divider my-1" />

            <p className="text-base leading-relaxed">
              Sometimes we go through pain and we do not understand why. We may ask, &ldquo;Why is
              this happening to me?&rdquo; But our knowledge is limited. Allah sees what we cannot see.
            </p>

            <QuranBlock
              surah="Surah Al-Baqarah · 2:216"
              arabic="وَعَسَىٰ أَن تَكْرَهُوا شَيْئًا وَهُوَ خَيْرٌ لَّكُمْ ۖ وَعَسَىٰ أَن تُحِبُّوا شَيْئًا وَهُوَ شَرٌّ لَّكُمْ ۗ وَاللَّهُ يَعْلَمُ وَأَنتُمْ لَا تَعْلَمُونَ"
              english="Perhaps you dislike something which is good for you, and perhaps you like something which is bad for you. Allah knows, and you do not know."
            />

            <p className="text-base leading-relaxed">
              This ayah brings peace to the heart. Sometimes a door closes because Allah is
              protecting us. Sometimes a delay happens because Allah is preparing something better.
              Sometimes a hardship comes, but through it Allah removes sins, increases our dua,
              softens our heart, and brings us closer to Him.
            </p>

            <p className="text-base leading-relaxed">
              We do not always understand Allah&apos;s wisdom, but the believer trusts that Allah&apos;s
              wisdom is greater than our understanding.
            </p>

            <QuranBlock
              surah="Surah Al-Baqarah · 2:286"
              arabic="لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا"
              english="Allah does not burden a soul beyond what it can bear."
            />

            <p className="text-base leading-relaxed">
              This means whatever Allah allows us to face, He knows we can carry it with His help.
              We may feel weak, but Allah is strong. We may feel overwhelmed, but Allah is near.
              We may feel alone, but Allah hears every dua and sees every tear.
            </p>

            <p className="text-base leading-relaxed">
              Patience does not mean hardship feels easy. Patience does not mean we do not cry.
              Patience means we do not turn away from Allah. Patience means the tongue does not
              say what displeases Allah, the heart does not object to Allah, and the body does not
              act in disobedience to Allah.
            </p>

            <div className="gold-divider my-1" />

            <p className="text-base leading-relaxed">
              Dear brothers and sisters, Allah tells us where to find strength.
            </p>

            <QuranBlock
              surah="Surah Al-Baqarah · 2:153"
              arabic="يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ"
              english="O believers, seek help through patience and prayer. Surely Allah is with those who are patient."
            />

            <p className="text-base leading-relaxed">
              When hardship comes, do not run away from Allah. Run toward Allah. Pray. Raise your
              hands. Cry to Allah. Say: Ya Allah, I am weak, but You are strong. Ya Allah, I do
              not understand, but You know. Ya Allah, give me patience and give me ease.
            </p>

            <p className="text-base leading-relaxed">
              Allah has also promised that difficulty does not last forever.
            </p>

            <QuranBlock
              surah="Surah Ash-Sharh · 94:5–6"
              arabic="فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا"
              english="So surely with hardship comes ease. Surely with hardship comes ease."
            />

            <p className="text-base leading-relaxed">
              Allah repeats this message because when the heart is hurting, we need to hear it
              again. Sometimes the ease comes quickly. Sometimes it comes after time. Sometimes
              Allah removes the hardship, and sometimes Allah strengthens the heart while the
              hardship remains. And sometimes the greatest ease is saved for the Hereafter.
            </p>

            <QuranBlock
              surah="Surah Az-Zumar · 39:10"
              arabic="إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُم بِغَيْرِ حِسَابٍ"
              english="Only those who endure patiently will be given their reward without limit."
            />

            <p className="text-base leading-relaxed">
              In this dunya, everything has a limit. Money has a limit. Health has a limit. Life
              has a limit. But the reward of patience with Allah has no limit.
            </p>

            <p className="text-base leading-relaxed">
              So do not think your patience is wasted. Do not think your tears are unseen. Allah
              sees it. Allah knows it. Allah records it. And Allah rewards it.
            </p>

            <div className="gold-divider my-1" />

            <p className="text-base leading-relaxed">
              Look at Prophet Ayyub, peace be upon him. He was tested with loss of health, wealth,
              and family, yet he remained connected to Allah.
            </p>

            <QuranBlock
              surah="Surah Sad · 38:44"
              arabic="إِنَّا وَجَدْنَاهُ صَابِرًا ۚ نِّعْمَ الْعَبْدُ"
              english="We truly found him patient. What an excellent servant."
            />

            <p className="text-base leading-relaxed">
              This is the honor of patience. Allah Himself praised Ayyub, peace be upon him,
              because he remained patient.
            </p>

            <div className="gold-divider my-1" />

            {/* Closing reminder */}
            <div
              className="rounded-xl px-6 py-7 my-6 text-center"
              style={{ background: 'rgba(0,0,0,0.18)', border: '1px solid rgba(201,162,77,0.22)' }}
            >
              <p className="font-lora text-xs text-cream-dark italic mb-4 opacity-60 tracking-wide uppercase">
                The main message
              </p>
              <div className="space-y-2">
                <p className="font-lora text-base text-cream-light leading-relaxed">
                  When we are in ease — say Alhamdulillah.
                </p>
                <p className="font-lora text-base text-cream-light leading-relaxed">
                  When we are in hardship — say Alhamdulillah.
                </p>
                <p className="font-lora text-base text-cream-light leading-relaxed">
                  When we understand Allah&apos;s wisdom — say Alhamdulillah.
                </p>
                <p className="font-lora text-base text-cream-light leading-relaxed">
                  When we do not understand Allah&apos;s wisdom — still say Alhamdulillah.
                </p>
              </div>
              <div className="gold-divider mt-5" />
              <div className="space-y-1.5 mt-4">
                <p className="font-lora text-sm text-cream-dark leading-relaxed">
                  Because Allah knows and we do not know.
                </p>
                <p className="font-lora text-sm text-cream-dark leading-relaxed">
                  Allah does not burden us beyond what we can bear.
                </p>
                <p className="font-lora text-sm text-cream-dark leading-relaxed">
                  With hardship comes ease.
                </p>
                <p className="font-lora text-sm text-cream-dark leading-relaxed">
                  And the reward of patience is without limit.
                </p>
              </div>
            </div>

            <p className="text-base text-center leading-relaxed">
              May Allah make us among those who are grateful in ease and patient in hardship.
            </p>

            <div className="gold-divider my-4" />

            {/* Dua */}
            <DuaBlock
              lines={[
                'O Allah, make us among the people of sabr.',
                'O Allah, grant us patience during trials and gratitude during ease.',
                'O Allah, when we are tested, do not let our hearts turn away from You.',
                'O Allah, make every hardship a means of forgiveness, purification, and closeness to You.',
                'O Allah, remove the difficulties of those who are suffering. Cure the sick, comfort the grieving, provide for those in need, guide those who are lost, and bring ease to every heart carrying a burden.',
                'O Allah, help us say Alhamdulillah in every condition.',
                'O Allah, give us trust in Your plan when we do not understand Your wisdom.',
                'O Allah, grant us ease after hardship.',
                'O Allah, grant us goodness in this dunya and goodness in the Hereafter, and protect us from the punishment of the Fire.',
              ]}
            />

          </div>

          {/* Attribution */}
          <div className="bg-green-dark px-8 py-6 text-center">
            <cite className="font-playfair text-base text-gold not-italic font-bold">
              Zeeshan Hayat
            </cite>
            <p className="font-lora text-xs text-cream-dark mt-1 opacity-70">
              Delivered during Jumu&apos;ah prayers &nbsp;&middot;&nbsp; Inspired by the teachings of Aslam Hayat
            </p>
          </div>

        </div>

        {/* Bottom nav */}
        <div className="mt-8 text-center">
          <Link
            href="/living-legacy"
            className="font-lora text-sm text-gold-dark hover:text-gold transition-colors"
          >
            ← Living Legacy
          </Link>
        </div>
      </div>

      {/* Footer cross-links */}
      <section className="bg-green border-t border-green-dark py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-lora text-base text-cream-dark leading-relaxed mb-6">
            The spiritual foundation behind this khutbah was built through decades of study
            by Aslam Hayat.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/faith-theology-and-spirituality" className="btn-gold">
              Faith &amp; Theology
            </Link>
            <Link href="/tributes/zeeshan-hayat" className="btn-gold">
              Zeeshan&apos;s Tribute
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
