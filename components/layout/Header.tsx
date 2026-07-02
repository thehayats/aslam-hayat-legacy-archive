'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-gold/10' : ''
      }`}
      style={{
        background: scrolled
          ? 'rgba(13, 32, 22, 0.95)'
          : '#1a3a2a',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        boxShadow: scrolled ? '0 1px 24px rgba(0,0,0,0.18)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[60px]">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group" aria-label="The Aslam Hayat Legacy Archive — Home">
            <div className="flex flex-col leading-tight">
              <span className="font-playfair text-cream-light text-sm md:text-base leading-snug group-hover:text-gold-light transition-colors duration-200">
                The Aslam Hayat
              </span>
              <span className="font-lora text-gold text-[10px] md:text-[11px] leading-snug tracking-[0.2em] uppercase opacity-80">
                Legacy Archive
              </span>
            </div>
          </Link>

          <Navigation />
        </div>
      </div>

      {/* Gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </header>
  );
}
