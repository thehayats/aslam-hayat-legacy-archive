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
  { label: 'Living Legacy', href: '/living-legacy' },
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
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Memorial inscription */}
        <div className="text-center mb-12">
          <p className="arabic-text text-gold-light text-2xl md:text-3xl mb-3">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <div className="gold-divider mb-5" />
          <p className="font-playfair text-cream-light text-xl italic">
            In loving memory of Aslam Hayat
          </p>
          <p className="font-lora text-cream-dark text-xs mt-2 opacity-60 tracking-widest uppercase">
            23 March 1933 &nbsp;&ndash;&nbsp; 30 May 2026
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <h3 className="font-playfair text-gold text-xs uppercase tracking-widest mb-4">Archive</h3>
            <ul className="space-y-2">
              {archiveLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-lora text-sm text-cream-dark/70 hover:text-gold-light transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-gold text-xs uppercase tracking-widest mb-4">Scholarship</h3>
            <ul className="space-y-2">
              {contentLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-lora text-sm text-cream-dark/70 hover:text-gold-light transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-gold text-xs uppercase tracking-widest mb-4">Explore</h3>
            <ul className="space-y-2">
              {exploreLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-lora text-sm text-cream-dark/70 hover:text-gold-light transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-gold text-xs uppercase tracking-widest mb-4">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="font-lora text-sm text-cream-dark/70 hover:text-gold-light transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8" />

        {/* Copyright */}
        <div className="text-center">
          <p className="font-lora text-xs text-cream-dark/50 leading-relaxed max-w-2xl mx-auto">
            © 2026 The Aslam Hayat Archive. All Rights Reserved. The contents of this archive —
            writings, photographs, and historical materials — are the property of the Hayat family.
            Reproduction without written permission is prohibited.
          </p>
        </div>

      </div>
    </footer>
  );
}
