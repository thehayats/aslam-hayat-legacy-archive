'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavChild {
  label: string;
  href: string;
}

interface NavGroup {
  label: string;
  href?: string;
  children?: NavChild[];
}

const navGroups: NavGroup[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Biography',
    children: [
      { label: 'About', href: '/about' },
      { label: 'Timeline', href: '/timeline' },
      { label: 'Professional Life', href: '/professional' },
      { label: 'Personal Life', href: '/personal' },
      { label: 'Travels & Pilgrimage', href: '/travels-pilgrimage-and-exploration' },
    ],
  },
  {
    label: 'Scholarship',
    children: [
      { label: 'Faith & Theology', href: '/faith-theology-and-spirituality' },
      { label: 'Scholarship & Spirituality', href: '/scholarship-and-spirituality' },
      { label: 'Technology & Learning', href: '/technology-and-lifelong-learning' },
      { label: 'Politics & World Affairs', href: '/politics-economics-and-world-affairs' },
    ],
  },
  {
    label: 'Writings',
    children: [
      { label: 'Articles', href: '/articles' },
      { label: 'Blog', href: '/blog' },
      { label: 'Facebook Archive', href: '/facebook-archive' },
    ],
  },
  {
    label: 'Legacy',
    children: [
      { label: 'Gallery', href: '/gallery' },
      { label: 'Tributes', href: '/tributes' },
      { label: 'Submit Memory', href: '/contact' },
    ],
  },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({});
  const pathname = usePathname();

  const isActivePath = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const isGroupActive = (group: NavGroup): boolean => {
    if (group.href) return isActivePath(group.href);
    return group.children?.some((c) => isActivePath(c.href)) ?? false;
  };

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const active = isGroupActive;

  return (
    <nav>
      {/* ── Desktop ── */}
      <ul className="hidden lg:flex items-center">
        {navGroups.map((group) => (
          <li key={group.label} className="relative group h-16 flex items-center">
            {group.href ? (
              /* Standalone link */
              <Link
                href={group.href}
                className={`relative px-3 py-2 text-sm font-lora whitespace-nowrap transition-colors duration-200
                  after:absolute after:bottom-1 after:left-3 after:right-3 after:h-px after:bg-gold after:origin-left
                  after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200
                  ${active(group) ? 'text-gold' : 'text-cream-dark hover:text-gold-light'}`}
              >
                {group.label}
              </Link>
            ) : (
              <>
                {/* Dropdown trigger */}
                <button
                  className={`relative px-3 py-2 text-sm font-lora whitespace-nowrap transition-colors duration-200
                    flex items-center gap-1 cursor-default
                    after:absolute after:bottom-1 after:left-3 after:right-3 after:h-px after:bg-gold after:origin-left
                    after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-200
                    ${active(group) ? 'text-gold' : 'text-cream-dark group-hover:text-gold-light'}`}
                  tabIndex={-1}
                  aria-haspopup="true"
                >
                  {group.label}
                  <svg
                    className="w-3 h-3 flex-shrink-0 transition-transform duration-200 group-hover:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown panel — pt-1 creates hover bridge over the visual gap */}
                <div
                  className="absolute top-full left-0 pt-1 z-50
                    opacity-0 invisible -translate-y-1
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-150"
                >
                  <div
                    className="min-w-[210px] rounded-lg shadow-2xl overflow-hidden"
                    style={{
                      background: 'rgba(12, 30, 20, 0.97)',
                      border: '1px solid rgba(201,162,77,0.22)',
                    }}
                  >
                    {group.children!.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2.5 text-sm font-lora whitespace-nowrap
                          border-b border-white/5 last:border-b-0 transition-colors duration-150
                          ${isActivePath(child.href)
                            ? 'text-gold bg-white/5'
                            : 'text-cream-dark hover:text-gold-light hover:bg-white/5'
                          }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

      {/* ── Mobile hamburger ── */}
      <button
        className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
        onClick={() => setMobileOpen((o) => !o)}
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileOpen}
      >
        <span className={`block w-6 h-px bg-cream-dark transition-all duration-200 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`block w-6 h-px bg-cream-dark transition-opacity duration-200 ${mobileOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-6 h-px bg-cream-dark transition-all duration-200 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 z-50 border-t border-gold/20 shadow-2xl"
          style={{ background: 'rgba(8, 22, 15, 0.98)' }}
        >
          <ul>
            {navGroups.map((group) => (
              <li key={group.label} className="border-b border-white/5 last:border-b-0">
                {group.href ? (
                  <Link
                    href={group.href}
                    className={`block px-6 py-3.5 text-sm font-lora transition-colors ${
                      active(group) ? 'text-gold' : 'text-cream-dark'
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {group.label}
                  </Link>
                ) : (
                  <>
                    <button
                      className={`w-full flex items-center justify-between px-6 py-3.5 text-sm font-lora transition-colors ${
                        active(group) ? 'text-gold' : 'text-cream-dark'
                      }`}
                      onClick={() => toggleGroup(group.label)}
                      aria-expanded={!!openGroups[group.label]}
                    >
                      <span>{group.label}</span>
                      <svg
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          openGroups[group.label] ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {openGroups[group.label] && (
                      <ul className="border-t border-white/5" style={{ background: 'rgba(0,0,0,0.25)' }}>
                        {group.children!.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className={`block pl-10 pr-6 py-3 text-sm font-lora border-b border-white/5 last:border-b-0 transition-colors ${
                                isActivePath(child.href)
                                  ? 'text-gold'
                                  : 'text-cream-dark/75 hover:text-gold-light'
                              }`}
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
