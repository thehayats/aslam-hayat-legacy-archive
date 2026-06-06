'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'Professional', href: '/professional' },
  { label: 'Personal', href: '/personal' },
  { label: 'Tributes', href: '/tributes' },
  { label: 'Technology & Learning', href: '/technology-and-lifelong-learning' },
  { label: 'Politics & World Affairs', href: '/politics-economics-and-world-affairs' },
  { label: 'Travels & Pilgrimage', href: '/travels-pilgrimage-and-exploration' },
  { label: 'Scholarship & Spirituality', href: '/scholarship-and-spirituality' },
  { label: 'Faith & Theology', href: '/faith-theology-and-spirituality' },
  {
    label: 'Articles',
    href: '/articles',
    children: [
      { label: 'All Articles', href: '/articles' },
      { label: 'Urdu Articles', href: '/articles/urdu' },
      { label: 'English Translations', href: '/articles/english' },
    ],
  },
  { label: 'Blog', href: '/blog' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Facebook Archive', href: '/facebook-archive' },
  { label: 'Submit Memory', href: '/contact' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [articlesOpen, setArticlesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav>
      {/* Desktop Navigation */}
      <ul className="hidden lg:flex items-center gap-1">
        {navItems.map((item) => (
          <li key={item.href} className="relative group">
            {item.children ? (
              <>
                <button
                  className={`px-3 py-2 text-sm font-lora transition-colors duration-200 rounded flex items-center gap-1 ${
                    isActive(item.href)
                      ? 'text-gold'
                      : 'text-cream-dark hover:text-gold-light'
                  }`}
                  onClick={() => setArticlesOpen(!articlesOpen)}
                  onMouseEnter={() => setArticlesOpen(true)}
                  onMouseLeave={() => setArticlesOpen(false)}
                >
                  {item.label}
                  <svg
                    className="w-3 h-3 transition-transform group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className="absolute top-full left-0 mt-1 w-52 bg-green border border-gold-dark rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                  onMouseEnter={() => setArticlesOpen(true)}
                  onMouseLeave={() => setArticlesOpen(false)}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm font-lora text-cream-dark hover:text-gold-light hover:bg-green-light transition-colors duration-150 first:rounded-t last:rounded-b"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </>
            ) : (
              <Link
                href={item.href}
                className={`px-3 py-2 text-sm font-lora transition-colors duration-200 rounded ${
                  isActive(item.href)
                    ? 'text-gold'
                    : 'text-cream-dark hover:text-gold-light'
                }`}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-cream-dark transition-transform duration-200 ${
            mobileOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-cream-dark transition-opacity duration-200 ${
            mobileOpen ? 'opacity-0' : ''
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-cream-dark transition-transform duration-200 ${
            mobileOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        />
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-green-dark border-t border-gold-dark shadow-lg z-50">
          <ul className="py-4">
            {navItems.map((item) => (
              <li key={item.href}>
                {item.children ? (
                  <>
                    <div className="px-6 py-2.5 text-sm font-lora text-cream-dark font-medium">
                      {item.label}
                    </div>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-10 py-2 text-sm font-lora text-cream-dark hover:text-gold-light transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block px-6 py-2.5 text-sm font-lora transition-colors ${
                      isActive(item.href)
                        ? 'text-gold'
                        : 'text-cream-dark hover:text-gold-light'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
