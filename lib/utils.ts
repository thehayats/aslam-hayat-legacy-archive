import { format, parseISO } from 'date-fns';

/**
 * Format a date string to a readable format
 */
export function formatDate(dateString: string, formatStr = 'MMMM d, yyyy'): string {
  try {
    return format(parseISO(dateString), formatStr);
  } catch {
    return dateString;
  }
}

/**
 * Format a date string for Urdu display (Month Year only)
 */
export function formatDateShort(dateString: string): string {
  try {
    return format(parseISO(dateString), 'MMM yyyy');
  } catch {
    return dateString;
  }
}

/**
 * Estimate reading time for an article
 */
export function estimateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

/**
 * Create a slug from a title string
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

/**
 * Truncate text to a given character count
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '…';
}

/**
 * Get category color class for timeline entries
 */
export function getCategoryColor(category: string): string {
  const map: Record<string, string> = {
    personal: 'bg-green-light text-cream',
    education: 'bg-gold text-green-dark',
    career: 'bg-green text-cream',
    family: 'bg-gold-dark text-cream',
    recognition: 'bg-green-dark text-gold-light',
  };
  return map[category] ?? 'bg-green text-cream';
}

/**
 * Get gallery category label
 */
export function getCategoryLabel(category: string): string {
  const map: Record<string, string> = {
    family: 'Family',
    professional: 'Professional',
    events: 'Events',
    personal: 'Personal',
  };
  return map[category] ?? category;
}

/**
 * Base URL for the site
 */
export const SITE_URL = 'https://aslamhayat.com';
export const SITE_TITLE = 'The Aslam Hayat Legacy Archive';
export const SITE_DESCRIPTION =
  'A digital museum and family biography site honoring the life, writings, and legacy of Aslam Hayat — scholar, writer, and beloved father.';
