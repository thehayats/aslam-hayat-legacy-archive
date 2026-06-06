import type { Metadata } from 'next';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Personal Profile — Aslam Hayat | Father, Family Elder & Teacher of Faith',
  description:
    'The personal story of Aslam Hayat — a devoted Muslim, student of Sufism and Ibn Arabi, witness to Partition, loving father figure, and the man who raised and guided Zeeshan Hayat.',
  canonical: '/personal',
});

export default function PersonalPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            The Man, The Family Elder
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-xl mx-auto">
            Father &middot; Grandfather &middot; Teacher of Faith &middot; Writer &middot; Community Member
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Early Life & Origins */}
        <section className="mb-14">
          <SectionHeader title="Origins &amp; Early Life" goldDivider />
          <div className="prose-archive bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <p>
              Aslam Hayat was born on 23 March 1933 in Lahore, with family roots in{' '}
              <strong>Subhan Pur, Kapurthala, Punjab</strong> — a region whose history and
              culture remained a source of deep personal significance throughout his life.
            </p>
            <p>
              He received his early education at Muslim Model High School in Lahore, and grew
              up in a city that was, at the time, one of the great cultural and intellectual
              centres of the subcontinent.
            </p>
          </div>
        </section>

        {/* Partition */}
        <section className="mb-14">
          <SectionHeader title="The Partition of India, 1947" goldDivider />
          <div className="prose-archive">
            <p>
              The Partition of India in 1947, which Aslam Hayat witnessed as a teenager in
              Lahore, was among the most formative experiences of his life. The upheaval it
              brought — the displacement, the loss, the transformation of the world he had
              grown up in — became a recurring theme in his writing and a lens through which
              he understood the history of the subcontinent.
            </p>
            <p>
              Over more than twenty-five years of newspaper columns, he returned again and again
              to the events and consequences of Partition — exploring its causes, its human cost,
              and its long shadow over the lives of South Asians in the decades that followed.
              He wrote as a witness and as a historian, bringing personal memory together with
              rigorous historical attention.
            </p>
          </div>
        </section>

        {/* Family Man */}
        <section className="mb-14">
          <SectionHeader title="Father &amp; Family Elder" goldDivider />
          <div className="prose-archive bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <p>
              At the heart of Aslam Hayat&apos;s life was his family. He was a devoted father,
              grandfather, and great-grandfather — a family elder who was deeply loved and
              respected by all those around him.
            </p>
            <p>
              He gave generously of his time, his wisdom, and his presence. His home was a
              place of warmth, learning, and faith. He encouraged those around him to value
              education, to live by strong moral principles, and to care for one another.
            </p>
            <p className="text-sm italic text-gray-500 bg-cream border border-cream-dark rounded p-4">
              Further memories and stories from family members will be added to this section
              as the archive grows.
            </p>
          </div>
        </section>

        {/* Zeeshan */}
        <section className="mb-14">
          <SectionHeader title="His Relationship with Zeeshan Hayat" goldDivider />
          <div className="prose-archive">
            <p>
              Aslam Hayat had a uniquely close and profound relationship with his grandson
              Zeeshan Hayat. To Zeeshan, he was far more than a grandfather.
            </p>
            <p>
              He was a father figure, mentor, teacher, spiritual guide, protector, and closest
              lifelong companion. When Zeeshan lost his mother at a young age, it was Aslam Hayat
              who stepped forward — helping to raise him, guiding him, and giving him the love
              and stability a child needs.
            </p>
            <p>
              He taught Zeeshan to read the Quran in Arabic. He instilled in him the values of
              education, faith, patience, humility, and service. He supported Zeeshan throughout
              his life and remained his most trusted confidant until the very end.
            </p>
            <blockquote className="border-l-4 border-gold pl-5 italic text-green bg-parchment py-3 pr-4 rounded-r">
              &ldquo;To Zeeshan, he was much more than a grandfather: he was a father figure,
              mentor, teacher, spiritual guide, protector, and closest lifelong companion.&rdquo;
              <cite className="block not-italic text-sm mt-2 text-gray-600">
                — The family of Aslam Hayat
              </cite>
            </blockquote>
          </div>
        </section>

        {/* Faith & Spirituality */}
        <section className="mb-14">
          <SectionHeader title="Faith &amp; Spiritual Life" goldDivider />
          <div className="prose-archive">
            <p>
              Aslam Hayat was a devoted Muslim who lived his faith deeply and consistently.
              Beyond daily practice, he was a serious student of Islamic spirituality — in
              particular the Sufi tradition and the writings of{' '}
              <strong>Ibn Arabi</strong>, the renowned Andalusian philosopher and mystic,
              whose works he studied extensively.
            </p>
            <p>
              His faith was inseparable from his intellectual life. It informed his writing,
              his reading of history, and his understanding of the human condition. He studied
              with the same seriousness he brought to professional matters, and sought always
              to pass that depth of faith on to those closest to him.
            </p>
            <p>
              He taught those around him that faith is expressed above all in how one treats
              others — in honesty, in patience, in generosity of spirit, and in service to family
              and community.
            </p>
          </div>
        </section>

        {/* Writer */}
        <section className="mb-14">
          <SectionHeader title="Writer &amp; Community Voice" goldDivider />
          <div className="prose-archive">
            <p>
              Aslam Hayat expressed himself in Urdu — the language of his culture and the
              medium through which he engaged with history, faith, and community life. For more
              than twenty-five years he maintained a regular column in{' '}
              <em>The Miracle</em>, Vancouver&apos;s Pakistani community newspaper, authoring
              over <strong>650 articles</strong>.
            </p>
            <p>
              His writing ranged across history — particularly the history of the subcontinent
              and the Partition era — Islamic thought, current affairs, and the experience of
              living as part of the Pakistani-Canadian diaspora. He was known in the community
              as a thoughtful, historically grounded voice.
            </p>
            <p>
              In his later years he was also active on Facebook, where he continued to share
              his thoughts, memories, and reflections with family, friends, and the wider community.
            </p>
            <p className="text-sm italic text-gray-500 bg-parchment border border-cream-dark rounded p-4">
              Original articles and writings will be added to this archive as they are reviewed
              and approved by the family.
            </p>
          </div>
        </section>

        {/* Life in Canada */}
        <section className="mb-14">
          <SectionHeader title="Life in Canada" goldDivider />
          <div className="prose-archive">
            <p>
              Aslam Hayat arrived in Canada in 1989 and made his home in Vancouver, British
              Columbia. He remained a beloved presence in his family and in the
              Pakistani-Canadian community until his passing on May 30, 2026, aged 93.
            </p>
          </div>
        </section>

        {/* Contribute */}
        <div className="bg-green rounded-lg p-6 text-center">
          <p className="font-lora text-base text-cream-dark leading-relaxed mb-4">
            Did you know Aslam Hayat? The family welcomes your memories, stories, and
            photographs to add to this archive.
          </p>
          <Link href="/contact" className="btn-gold inline-block">
            Share a Memory
          </Link>
        </div>

      </div>
    </div>
  );
}
