'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'shadow-xl border-b border-gold/10'
          : 'shadow-md'
      }`}
      style={{
        background: scrolled
          ? 'rgba(15, 38, 26, 0.93)'
          : '#1a3a2a',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group" aria-label="The Aslam Hayat Legacy Archive — Home">
            <div className="flex flex-col leading-tight">
              <span className="font-playfair text-cream-light text-base md:text-lg leading-snug group-hover:text-gold-light transition-colors duration-200">
                The Aslam Hayat
              </span>
              <span className="font-playfair text-gold text-xs md:text-sm leading-snug tracking-widest uppercase">
                Legacy Archive
              </span>
            </div>
          </Link>

          <Navigation />
        </div>
      </div>

      {/* Gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />
    </header>
  );
}
