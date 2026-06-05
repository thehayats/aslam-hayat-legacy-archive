import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Personal Profile',
  description:
    "Aslam Hayat's family background, personal values, interests and hobbies, faith and spirituality, and personal legacy.",
  canonical: '/personal',
});

const values = [
  {
    title: 'Honesty',
    description:
      'He believed that truthfulness — in writing, in speech, and in daily dealings — was not a virtue among others but the foundation upon which all other virtues rested.',
  },
  {
    title: 'Hospitality',
    description:
      'His door was always open. Friends, students, strangers passing through Lahore — all were welcomed with the same warmth and offered tea before anything else was said.',
  },
  {
    title: 'Lifelong Learning',
    description:
      'He read every day until the very end of his life. He believed that a day without learning something new was a day partially wasted.',
  },
  {
    title: 'Simplicity',
    description:
      'Despite his reputation and recognition, he lived simply and without ostentation. He distrusted wealth as a measure of value and was suspicious of those who confused influence with importance.',
  },
  {
    title: 'Gentleness',
    description:
      'He was never a man of anger. Those who knew him well struggled to recall him raising his voice. His disagreements were conducted quietly, with evidence and patience.',
  },
];

const interests = [
  {
    title: 'Classical Urdu Poetry',
    detail:
      'He could recite Ghalib, Mir, Iqbal, and Faiz from memory at length. Poetry was not a leisure activity for him but a mode of understanding.',
  },
  {
    title: 'Islamic History',
    detail:
      'His personal library was extensive in the history of the early Islamic period. He was particularly drawn to the lives of the scholars of the second and third Islamic centuries.',
  },
  {
    title: 'Walking',
    detail:
      "His morning walk through Lahore's older neighbourhoods was a daily ritual. He said he thought most clearly while walking, and many of his best essays were composed mentally before he sat down to write them.",
  },
  {
    title: 'Gardening',
    detail:
      'He maintained a small garden at the family home with notable care. He said plants taught patience in a way that nothing else did.',
  },
  {
    title: 'Calligraphy',
    detail:
      'He practiced Urdu calligraphy and had great respect for the tradition of beautiful script. Several of his pieces were hand-lettered and given as gifts.',
  },
  {
    title: 'Chess',
    detail:
      "He played chess regularly with a group of friends and was, by all accounts, a formidable and patient opponent who preferred to win slowly rather than spectacularly.",
  },
];

export default function PersonalPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            Personal Profile
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-xl mx-auto">
            The man behind the words — his values, his family, his faith, and his quiet joys.
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Family Background */}
        <section className="mb-14">
          <SectionHeader title="Family Background" />
          <div className="prose-archive bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <p>
              Aslam Hayat was born into a family with deep roots in Islamic scholarship and
              education. His father, a schoolteacher with a rich knowledge of classical Urdu poetry
              and Islamic history, set the intellectual and moral tone of the household. His
              mother&apos;s beautiful Quranic recitation was the soundtrack of his childhood
              mornings.
            </p>
            <p>
              He was the second of four children. His elder brother went on to a career in
              medicine; his younger siblings into business and teaching respectively. The family
              was close-knit and remained so throughout his life — gatherings at the family home
              in Lahore were regular and warmly anticipated occasions.
            </p>
            <p>
              When he established his own family with Nasreen Akhtar in 1975, he tried to
              recreate the atmosphere of his childhood home: books everywhere, honest conversation
              at meals, the Quran read and discussed rather than merely recited, guests always
              welcome. By the accounts of his children, he largely succeeded.
            </p>
          </div>
        </section>

        {/* Personal Values */}
        <section className="mb-14">
          <SectionHeader title="Personal Values" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-cream-light border border-cream-dark rounded-lg p-5 card-hover"
              >
                <div className="w-8 h-0.5 bg-gold mb-3" />
                <h3 className="font-playfair text-lg text-green font-bold mb-2">
                  {value.title}
                </h3>
                <p className="font-lora text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interests & Hobbies */}
        <section className="mb-14">
          <SectionHeader title="Interests & Hobbies" />
          <div className="grid md:grid-cols-2 gap-5">
            {interests.map((interest) => (
              <div
                key={interest.title}
                className="flex gap-4 bg-parchment border border-cream-dark rounded-lg p-5"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-green rounded-full flex items-center justify-center">
                  <span className="text-gold text-lg">◆</span>
                </div>
                <div>
                  <h3 className="font-playfair text-base text-green font-bold mb-1">
                    {interest.title}
                  </h3>
                  <p className="font-lora text-sm text-gray-600 leading-relaxed">{interest.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Faith & Spirituality */}
        <section className="mb-14">
          <SectionHeader title="Faith & Spirituality" arabicTitle="الإيمان والروحانية" />
          <div className="prose-archive">
            <p>
              Faith was not one dimension of Aslam Hayat&apos;s life among others — it was the
              ground upon which everything else stood. He prayed five times a day without fail,
              performed Hajj in 1998, and studied Quranic tafseer throughout his adult life with
              a depth and seriousness that went well beyond what is commonly encountered.
            </p>
            <p>
              His spiritual approach was one of quiet, consistent practice rather than public
              display. He was suspicious of religiosity that expressed itself primarily in
              appearance or in the judgment of others, and he wrote about this suspicion frankly
              in several essays. What he admired was the kind of faith that made a person more
              patient, more honest, more generous — the kind of faith that expressed itself in
              character rather than in costume.
            </p>
            <p>
              He had a deep love of the classical Islamic spiritual tradition — of Rumi, of Imam
              al-Ghazali, of Ibn Ata&apos;illah al-Iskandari whose <em>Hikam</em> he could quote
              at length. He found in that tradition an engagement with the inner life that he
              felt was too often neglected in the Islam of his own time.
            </p>
            <blockquote className="border-l-4 border-gold pl-5 italic text-green bg-parchment py-3 pr-4 rounded-r">
              &ldquo;Iman is not a destination you arrive at. It is a direction you keep choosing,
              every day, in small things as much as in large ones.&rdquo;
              <cite className="block not-italic text-sm mt-2 text-gray-600">— Aslam Hayat</cite>
            </blockquote>
          </div>
        </section>

        {/* Personal Legacy */}
        <section>
          <SectionHeader title="Personal Legacy" />
          <div className="bg-green rounded-lg p-6 md:p-8 text-cream-dark">
            <p className="font-lora text-base leading-relaxed mb-4">
              Those who knew Aslam Hayat personally tend to reach for the same words when asked
              to describe him: gentle, consistent, generous, present. The consistency is what
              they emphasise most. He was the same person in public and in private, the same
              with his family as with strangers, the same in difficulty as in ease. This
              consistency — this integrity in the original sense, the quality of being
              integrated, of being one thing rather than many — is perhaps the deepest mark
              he left.
            </p>
            <p className="font-lora text-base leading-relaxed mb-4">
              His children speak of being raised in a home where learning was valued but never
              weaponised, where faith was practised but never performed, where hospitality was
              genuine and love was expressed in attention rather than in grand gestures.
            </p>
            <p className="font-lora text-base leading-relaxed">
              That is the personal legacy — not the books, not the awards, but the texture of
              a life lived with care, and the people who were shaped by proximity to it.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
