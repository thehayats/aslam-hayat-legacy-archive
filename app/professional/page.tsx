import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import { buildMetadata } from '@/components/seo/MetaTags';

export const metadata: Metadata = buildMetadata({
  title: 'Professional Profile',
  description:
    "An overview of Aslam Hayat's professional career, key roles, achievements, publications, and intellectual contributions.",
  canonical: '/professional',
});

const keyRoles = [
  {
    period: '1970 – 1978',
    role: 'Lecturer & Columnist',
    organisation: 'Various educational institutions and literary publications, Lahore',
    description:
      'Established himself as a thoughtful commentator on culture, society, and Islamic thought through regular columns and academic teaching.',
  },
  {
    period: '1978 – 1988',
    role: 'Senior Writer & Editor',
    organisation: 'National literary journals, Lahore & Karachi',
    description:
      'Contributed major essays to Pakistan\'s leading literary publications while taking on editorial responsibilities that shaped the careers of younger writers.',
  },
  {
    period: '1988 – 2000',
    role: 'Academic & Public Intellectual',
    organisation: 'University of the Punjab and national media',
    description:
      'Combined academic lecturing with a broader public intellectual role, speaking at conferences, appearing in print media, and contributing to national cultural debates.',
  },
  {
    period: '2000 – 2015',
    role: 'Senior Fellow & Community Leader',
    organisation: 'Independent / Freelance',
    description:
      'Focused on long-form writing, mentoring, and community educational initiatives, while maintaining an active presence in literary circles.',
  },
];

const achievements = [
  'National Literary Award for contributions to Urdu prose (1980)',
  'Distinguished Alumnus Award, University of the Punjab (1995)',
  'Featured author in the National Urdu Anthology (2003)',
  'Keynote speaker, All-Pakistan Urdu Conference (1985, 1992, 2001)',
  'Essays anthologised and taught at five Pakistani universities',
  'Founder, Lahore Community Literacy Initiative (1995)',
  'Honorary membership, Pakistan Academy of Letters',
];

const publications = [
  {
    title: 'زندگی کی دھوپ چھاؤں',
    titleEn: 'The Light and Shadow of Life',
    year: '1978',
    type: 'Essay Collection',
    description: 'First formal collection of essays on life, society, and faith.',
  },
  {
    title: 'اردو زبان کا مستقبل',
    titleEn: 'The Future of the Urdu Language',
    year: '1990',
    type: 'Critical Essay',
    description: 'Influential essay on the state and future of Urdu in Pakistan.',
  },
  {
    title: 'وقت کی آواز',
    titleEn: 'The Voice of Time',
    year: '2005',
    type: 'Essay Collection',
    description:
      'Second major collection, widely praised for its mature synthesis of classical learning and contemporary reflection.',
  },
  {
    title: 'ایمان اور عقل',
    titleEn: 'Faith and Reason',
    year: '2012',
    type: 'Essay Collection',
    description: 'Philosophical essays on the relationship between Islamic faith and rational inquiry.',
  },
];

export default function ProfessionalPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            Professional Profile
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-xl mx-auto">
            Five decades of scholarship, writing, and public intellectual engagement.
          </p>
          <div className="gold-divider mt-6" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Career Overview */}
        <section className="mb-14">
          <SectionHeader title="Career Overview" />
          <div className="bg-parchment border border-cream-dark rounded-lg p-6 md:p-8">
            <p className="font-lora text-base text-gray-700 leading-relaxed mb-4">
              Over a professional career that spanned more than five decades, Aslam Hayat
              established himself as one of the most consistent and respected voices in Pakistani
              Urdu literature. His work crossed the boundaries between literary journalism and
              academic scholarship, between spiritual reflection and cultural criticism, bringing
              a rare clarity and warmth to all of them.
            </p>
            <p className="font-lora text-base text-gray-700 leading-relaxed mb-4">
              He began writing for publication in the late 1960s, shortly after graduating from
              the University of the Punjab, and continued producing new work until very near the
              end of his life. Through changing governments, social upheaval, the transformation
              of the media landscape, and the rise of digital communication, his voice remained
              recognisably his own — rooted, thoughtful, unhurried.
            </p>
            <p className="font-lora text-base text-gray-700 leading-relaxed">
              He was not a writer who sought controversy or celebrity. He sought truth, and he
              sought to share it in a form that his readers could receive and use. That modesty
              of aim, paradoxically, is what gave his work its lasting quality.
            </p>
          </div>
        </section>

        {/* Key Roles */}
        <section className="mb-14">
          <SectionHeader title="Key Roles & Positions" />
          <div className="space-y-5">
            {keyRoles.map((role) => (
              <div
                key={role.period}
                className="bg-cream-light border border-cream-dark rounded-lg p-5 md:p-6 card-hover"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 mb-3">
                  <span className="font-lora text-xs font-medium text-gold-dark border border-gold px-3 py-1 rounded-full flex-shrink-0">
                    {role.period}
                  </span>
                  <div>
                    <h3 className="font-playfair text-lg text-green font-bold">
                      {role.role}
                    </h3>
                    <p className="font-lora text-sm text-gray-500 italic">{role.organisation}</p>
                  </div>
                </div>
                <p className="font-lora text-sm text-gray-600 leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-14">
          <SectionHeader title="Achievements & Recognition" />
          <ul className="space-y-3">
            {achievements.map((achievement) => (
              <li key={achievement} className="flex items-start gap-3">
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2" />
                <span className="font-lora text-base text-gray-700 leading-relaxed">
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Publications */}
        <section className="mb-14">
          <SectionHeader title="Selected Publications" />
          <div className="grid md:grid-cols-2 gap-5">
            {publications.map((pub) => (
              <div
                key={pub.title}
                className="bg-parchment border border-cream-dark rounded-lg p-5 card-hover"
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    <h3 className="font-urdu text-lg text-green text-right" dir="rtl">
                      {pub.title}
                    </h3>
                    <p className="font-playfair text-base text-green italic">
                      {pub.titleEn}
                    </p>
                  </div>
                  <span className="font-lora text-xs text-gold-dark border border-gold px-2 py-0.5 rounded flex-shrink-0">
                    {pub.year}
                  </span>
                </div>
                <p className="font-lora text-xs text-gold-dark font-medium uppercase tracking-wide mb-2">
                  {pub.type}
                </p>
                <p className="font-lora text-sm text-gray-600 leading-relaxed">{pub.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Legacy */}
        <section>
          <SectionHeader title="Professional Legacy" />
          <div className="bg-green rounded-lg p-6 md:p-8 text-cream-dark">
            <p className="font-lora text-base leading-relaxed mb-4">
              The professional legacy of Aslam Hayat is best understood not through the awards
              he received or the positions he held, but through the quality of attention he brought
              to the craft of writing itself. He treated every essay as an opportunity to think
              carefully, to say something true, and to say it in a form worthy of the thought.
            </p>
            <p className="font-lora text-base leading-relaxed mb-4">
              Younger writers who came to him for advice were told the same things, consistently:
              read widely, write slowly, never publish something you would be ashamed to have read
              aloud to your grandmother, and remember that the most important thing a writer can
              possess is not talent but honesty.
            </p>
            <p className="font-lora text-base leading-relaxed">
              That legacy — the example of intellectual honesty, the insistence on craft, the
              refusal to separate thought from character — lives on in all those who were shaped
              by his work and by his presence.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
