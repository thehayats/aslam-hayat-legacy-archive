import type { Metadata } from 'next';
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

      <div className="bg-parchment border-b border-cream-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
          <h1 className="font-playfair text-2xl md:text-3xl text-green font-bold">The Man, The Family Elder</h1>
          <p className="font-lora text-sm text-gray-500 mt-1.5">Father · Grandfather · Teacher of Faith · Writer · Community Member</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">

        <section>
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

        <section>
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

        <section>
          <SectionHeader title="Father &amp; Family Elder" goldDivider />
          <div className="prose-archive bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <p>
              At the heart of Aslam Hayat&apos;s life was his family. He was a devoted father,
              grandfather, and great-grandfather who encouraged those around him to value
              education, to live by strong moral principles, and to care for one another.
            </p>
          </div>
        </section>

        <section>
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
          </div>
        </section>

        <section>
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

        <section>
          <SectionHeader title="Writer &amp; Community Voice" goldDivider />
          <div className="prose-archive">
            <p>
              Writing was where Aslam Hayat put his most carefully worked-out thoughts. Urdu gave
              him the precision and register he needed — a literary language with centuries of
              intellectual tradition behind it. For more than twenty-five years, week after week,
              he contributed a column to <em>The Miracle</em>, Vancouver&apos;s Pakistani community
              newspaper, and in doing so produced a body of work that exceeds{' '}
              <strong>650 articles</strong>.
            </p>
            <p>
              Those articles weren&apos;t opinion pieces. They were researched, argued, historically
              grounded. Partition. Islamic theology. The decline of Urdu in diaspora communities.
              The relationship between science and faith. He treated a community newspaper column
              with the seriousness of a scholar — because that is what he was.
            </p>
            <p>
              In his final years he used Facebook with the same intent: to share ideas, pass on
              knowledge, stay connected with family spread across continents, and keep writing until
              he could no longer.
            </p>
          </div>
        </section>

        <section>
          <SectionHeader title="Life in Canada" goldDivider />
          <div className="prose-archive">
            <p>
              Aslam Hayat arrived in Canada in 1989 and made his home in Vancouver, British
              Columbia. He remained a beloved presence in his family and in the
              Pakistani-Canadian community until his passing on 30 May 2026, aged 93.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
