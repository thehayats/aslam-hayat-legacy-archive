import Link from 'next/link';

const archiveLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'Professional Life', href: '/professional' },
  { label: 'Personal Life', href: '/personal' },
  { label: 'Tributes', href: '/tributes' },
];

const contentLinks = [
  { label: 'Articles', href: '/articles' },
  { label: 'Blog', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Facebook Archive', href: '/facebook-archive' },
  { label: 'Faith & Theology', href: '/faith-theology-and-spirituality' },
  { label: 'Scholarship & Spirituality', href: '/scholarship-and-spirituality' },
];

const exploreLinks = [
  { label: 'Technology & Learning', href: '/technology-and-lifelong-learning' },
  { label: 'Politics & World Affairs', href: '/politics-economics-and-world-affairs' },
  { label: 'Travels & Pilgrimage', href: '/travels-pilgrimage-and-exploration' },
  { label: 'Submit Memory', href: '/contact' },
];

const legalLinks = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms of Use', href: '/terms-of-use' },
  { label: 'Copyright & Permissions', href: '/copyright-and-permissions' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-green text-cream-dark">
      {/* Gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Bismillah + memorial */}
        <div className="text-center mb-10">
          <p className="arabic-text text-gold-light text-2xl md:text-3xl mb-2">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <div className="gold-divider mb-5" />
          <p className="font-playfair text-cream-light text-xl md:text-2xl italic">
            In loving memory of Aslam Hayat
          </p>
          <p className="font-lora text-cream-dark text-sm mt-2 opacity-75">
            Scholar &nbsp;&middot;&nbsp; Writer &nbsp;&middot;&nbsp; Father &nbsp;&middot;&nbsp; Lifelong Student of Faith
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div>
            <h3 className="font-playfair text-gold text-xs uppercase tracking-widest mb-4">Archive</h3>
            <ul className="space-y-2.5">
              {archiveLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-lora text-sm text-cream-dark hover:text-gold-light transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-gold text-xs uppercase tracking-widest mb-4">Scholarship</h3>
            <ul className="space-y-2.5">
              {contentLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-lora text-sm text-cream-dark hover:text-gold-light transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-gold text-xs uppercase tracking-widest mb-4">Explore</h3>
            <ul className="space-y-2.5">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-lora text-sm text-cream-dark hover:text-gold-light transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-gold text-xs uppercase tracking-widest mb-4">Legal</h3>
            <ul className="space-y-2.5">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-lora text-sm text-cream-dark hover:text-gold-light transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />

        {/* Copyright notice */}
        <div className="text-center mb-6">
          <p className="font-lora text-sm text-cream-dark opacity-80 mb-3">
            © 2026 The Aslam Hayat Legacy Archive. All Rights Reserved.
          </p>
          <p className="font-lora text-xs text-cream-dark opacity-50 leading-relaxed max-w-2xl mx-auto">
            The contents of this archive, including writings, photographs, documents, and historical
            materials, are the property of the Hayat family. Reproduction or distribution without
            written permission is prohibited.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2 border-t border-white/5">
          <div className="flex flex-wrap justify-center gap-4">
            {legalLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-lora text-xs text-cream-dark/50 hover:text-gold-light/80 transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
