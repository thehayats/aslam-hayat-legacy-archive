import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-green shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16 md:h-18">
          {/* Site Title / Logo */}
          <Link
            href="/"
            className="flex-shrink-0 group"
            aria-label="The Aslam Hayat Legacy Archive — Home"
          >
            <div className="flex flex-col">
              <span className="font-playfair text-cream-light text-lg md:text-xl leading-tight group-hover:text-gold-light transition-colors duration-200">
                The Aslam Hayat
              </span>
              <span className="font-playfair text-gold text-sm md:text-base leading-tight tracking-wide">
                Legacy Archive
              </span>
            </div>
          </Link>

          {/* Navigation (includes hamburger for mobile) */}
          <Navigation />
        </div>
      </div>

      {/* Decorative gold line at bottom */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />
    </header>
  );
}
