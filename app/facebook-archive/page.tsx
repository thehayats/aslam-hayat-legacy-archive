import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';
import { formatDate } from '@/lib/utils';
import type { FacebookPost } from '@/lib/articles';

export const metadata: Metadata = buildMetadata({
  title: 'Facebook Archive',
  description:
    "An archive of Aslam Hayat's Facebook posts — his daily reflections, observations, and spiritual meditations shared with thousands of followers.",
  canonical: '/facebook-archive',
});

const placeholderPosts: FacebookPost[] = [
  {
    id: 'fb-001',
    date: '2019-05-15T05:30:00',
    content:
      'آج صبح فجر کی نماز کے بعد باہر بیٹھا تھا۔ لاہور کی صبح کا وہ لمحہ جب اذان کی آواز فضا میں گھل جاتی ہے اور پرندے جاگنا شروع ہوتے ہیں — اس وقت کائنات کسی اور ہی رنگ میں ہوتی ہے۔ اللہ کا شکر ہے کہ ہم ایسے لمحات دیکھنے کے لیے زندہ ہیں۔\n\nThis morning after Fajr prayer I sat outside. Lahore at that hour, when the sound of the azan dissolves into the air and the birds begin to wake — the world looks entirely different. All praise to Allah that we are alive to witness such moments.',
    likes: 847,
    comments: 63,
    shares: 124,
  },
  {
    id: 'fb-002',
    date: '2019-06-20T08:15:00',
    content:
      'میرے ایک دوست نے پوچھا کہ کیا اردو کا مستقبل ہے؟ میں نے کہا: اردو کا مستقبل ہمارے ہاتھوں میں ہے۔ جب تک ایک بھی ماں اپنے بچے کو اردو میں لوری سنائے گی، اردو زندہ رہے گی۔ زبانیں کتابوں میں نہیں، دلوں میں جیتی ہیں۔',
    likes: 1203,
    comments: 89,
    shares: 267,
  },
  {
    id: 'fb-003',
    date: '2019-08-10T19:45:00',
    content:
      'Ramadan Reflection: There is something about the shared experience of iftar that reminds me of what community really means. For one month in the year, millions of strangers — different in everything else — break their fast together at the same moment. Unity does not need to be engineered. Sometimes it just needs the right invitation.\n\nرمضان مبارک ہو — ایک بار پھر۔',
    likes: 2156,
    comments: 134,
    shares: 412,
  },
  {
    id: 'fb-004',
    date: '2019-10-03T07:00:00',
    content:
      'کتابوں کے بارے میں ایک بات جو میں نے سیکھی ہے: اچھی کتاب وہ نہیں جو آپ کو وہ بتائے جو آپ جاننا چاہتے ہیں — اچھی کتاب وہ ہے جو آپ کو وہ بتائے جو آپ کو معلوم نہیں تھا کہ آپ جاننا چاہتے ہیں۔\n\nA good book is not one that tells you what you want to know. A good book is one that tells you what you did not know you needed to know.',
    likes: 934,
    comments: 47,
    shares: 183,
  },
  {
    id: 'fb-005',
    date: '2020-01-01T00:01:00',
    content:
      'نئے سال کی صبح۔ تقویم بدل جاتا ہے، لیکن وقت کی روانی نہیں بدلتی۔ جو لمحہ گیا، گیا۔ جو آنے والا ہے، اللہ کے ہاتھ میں ہے۔ ہمارے ہاتھ میں صرف یہ لمحہ ہے — یہ سانس، یہ ارادہ، یہ چھوٹا سا فیصلہ کہ آج کیسے جینا ہے۔\n\nNew Year morning. The calendar changes, but time does not. What has passed is gone. What is to come is in Allah\'s hands. What we hold is only this moment — this breath, this intention, this small decision about how to live today.',
    likes: 3412,
    comments: 218,
    shares: 856,
  },
  {
    id: 'fb-006',
    date: '2020-03-12T06:30:00',
    content:
      'غالب نے کہا تھا:\n"ہزاروں خواہشیں ایسی کہ ہر خواہش پہ دم نکلے"\nزندگی خواہشوں کا نام نہیں۔ زندگی ان چند خواہشوں کو سمجھنے کا نام ہے جو واقعی اہم ہیں — اور باقی سب کو جانے دینے کا۔\n\nGhalib wrote: "A thousand desires such that each desire costs a breath." Life is not the name of desires. Life is the name of understanding those few desires that truly matter — and letting the rest go.',
    likes: 1876,
    comments: 97,
    shares: 334,
  },
  {
    id: 'fb-007',
    date: '2020-05-07T05:45:00',
    content:
      'ایک بچے نے مجھ سے پوچھا: نانا ابو، خوشی کیا ہے؟\nمیں نے سوچا۔ پھر کہا: خوشی وہ احساس ہے جو تم کو تب ہوتا ہے جب تم اپنی جگہ پر ہو — اپنے آپ کے ساتھ، اپنے اللہ کے ساتھ، اپنے پیاروں کے ساتھ۔\nوہ سمجھ گیا۔ میں امید کرتا ہوں کہ میں بھی سمجھا۔',
    likes: 2234,
    comments: 156,
    shares: 567,
  },
  {
    id: 'fb-008',
    date: '2020-07-19T08:00:00',
    content:
      'Today I was asked what advice I would give to young writers. I said: read more than you write. Think more than you read. And when you do write — write as if the reader is intelligent, because they are.\n\nآج کسی نے پوچھا نوجوان لکھنے والوں کو کیا نصیحت دیں گے؟ میں نے کہا: لکھنے سے زیادہ پڑھو۔ پڑھنے سے زیادہ سوچو۔ اور جب لکھو تو سمجھدار قاری کے لیے لکھو — کیونکہ وہ سمجھدار ہے۔',
    likes: 1567,
    comments: 112,
    shares: 289,
  },
  {
    id: 'fb-009',
    date: '2020-09-02T07:15:00',
    content:
      'صبح ہوئی۔ ایک اور دن کی نعمت۔\nاللہ نے ہمیں کتنی چیزیں مفت دی ہیں: آنکھیں دیکھنے کو، کان سننے کو، دل محبت کرنے کو، عقل سمجھنے کو۔\nاور ہم شکایت کرتے ہیں کہ وہ ہم سے دور ہے۔\n\nMorning has come. Another day, another gift. How much has Allah given us freely: eyes to see, ears to hear, a heart to love, a mind to understand. And still we complain that He is far from us.',
    likes: 2891,
    comments: 178,
    shares: 734,
  },
];

export default function FacebookArchivePage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            Facebook Archive
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-xl mx-auto">
            Daily reflections, observations, and spiritual meditations shared with thousands of
            followers in his final years.
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Introductory note */}
        <div className="bg-parchment border border-cream-dark rounded-lg p-6 md:p-8 mb-10">
          <SectionHeader title="About This Archive" goldDivider />
          <p className="font-lora text-base text-gray-700 leading-relaxed mb-4">
            When Aslam Hayat discovered Facebook in 2015, he found an unexpected audience for the
            short reflections and daily observations he had always written privately. His posts —
            often composed in the quiet hour after Fajr prayer — typically combined Urdu and English,
            reflecting both his bilingual readership and his conviction that the two languages could
            illuminate each other.
          </p>
          <p className="font-lora text-base text-gray-700 leading-relaxed">
            At his peak he had thousands of followers who described waiting for his morning posts
            as part of their daily routine. This archive preserves a selection of those posts.
            Engagement figures are approximate, recorded at the time of archiving.
          </p>
        </div>

        {/* Posts */}
        <div className="space-y-6">
          {placeholderPosts.map((post) => (
            <article
              key={post.id}
              className="bg-cream-light border border-cream-dark rounded-lg overflow-hidden shadow-sm card-hover"
            >
              {/* Post Header */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-cream-dark">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-green flex items-center justify-center flex-shrink-0">
                  <span className="font-playfair text-gold text-lg font-bold">A</span>
                </div>
                <div>
                  <p className="font-playfair text-sm font-bold text-green">Aslam Hayat</p>
                  <time className="font-lora text-xs text-gray-500">
                    {formatDate(post.date, "d MMMM yyyy 'at' h:mm a")}
                  </time>
                </div>
                {/* Facebook icon indicator */}
                <div className="ml-auto">
                  <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">f</span>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="px-5 py-4">
                <p className="font-lora text-base text-gray-800 leading-relaxed whitespace-pre-line">
                  {post.content}
                </p>
              </div>

              {/* Engagement */}
              <div className="px-5 py-3 bg-parchment border-t border-cream-dark flex items-center gap-6">
                <span className="flex items-center gap-1.5 font-lora text-xs text-gray-500">
                  <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                  </svg>
                  {post.likes.toLocaleString()} Likes
                </span>
                <span className="font-lora text-xs text-gray-500">
                  {post.comments} Comments
                </span>
                {post.shares && (
                  <span className="font-lora text-xs text-gray-500">
                    {post.shares} Shares
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Pagination placeholder */}
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            disabled
            className="px-4 py-2 font-lora text-sm bg-cream-dark text-gray-400 rounded cursor-not-allowed"
          >
            ← Previous
          </button>
          <span className="font-lora text-sm text-gray-500 px-4">Page 1 of 1</span>
          <button
            disabled
            className="px-4 py-2 font-lora text-sm bg-cream-dark text-gray-400 rounded cursor-not-allowed"
          >
            Next →
          </button>
        </div>

        <p className="font-lora text-xs text-gray-400 text-center mt-4">
          Showing {placeholderPosts.length} archived posts. Additional posts to be added by the family.
        </p>
      </div>
    </div>
  );
}
