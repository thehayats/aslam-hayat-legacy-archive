import Link from 'next/link';

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'Professional', href: '/professional' },
  { label: 'Personal', href: '/personal' },
  { label: 'Urdu Articles', href: '/articles/urdu' },
  { label: 'English Translations', href: '/articles/english' },
  { label: 'Blog', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Facebook Archive', href: '/facebook-archive' },
  { label: 'Submit Memory', href: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-green text-cream-dark">
      {/* Decorative gold line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Bismillah */}
        <div className="text-center mb-8">
          <p className="arabic-text text-gold-light text-2xl md:text-3xl mb-2">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <div className="gold-divider" />
        </div>

        {/* In Loving Memory */}
        <div className="text-center mb-10">
          <p className="font-playfair text-cream-light text-xl md:text-2xl italic">
            In loving memory of Aslam Hayat
          </p>
          <p className="font-lora text-cream-dark text-sm mt-2 opacity-80">
            Scholar · Writer · Father · Friend
          </p>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3 mb-10">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-lora text-sm text-cream-dark hover:text-gold-light transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Divider */}
        <div className="section-divider" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-2">
          <p className="font-lora text-sm text-cream-dark opacity-70 text-center sm:text-left">
            © 2024 The Aslam Hayat Legacy Archive. All rights reserved.
          </p>
          <p className="font-lora text-xs text-cream-dark opacity-50 text-center">
            A family tribute — built with love
          </p>
        </div>
      </div>
    </footer>
  );
}
