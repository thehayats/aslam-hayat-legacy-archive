// Type definitions for the archive

export interface ArticleFrontmatter {
  title: string;
  titleEn?: string;
  date: string;
  excerpt: string;
  tags: string[];
  translationSlug?: string;
  originalSlug?: string;
  author?: string;
}

export interface Article {
  slug: string;
  type: 'urdu' | 'english';
  frontmatter: ArticleFrontmatter;
  content: string;
}

export interface BlogFrontmatter {
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
  content: string;
  readingTime: number;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  category: 'personal' | 'education' | 'career' | 'family' | 'recognition' | 'writing' | 'migration';
  icon?: string;
  location?: string;
  image?: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
  description: string;
}

export interface GalleryPhoto {
  id: string;
  src: string;
  caption: string;
  date: string;
  location?: string;
  category: string;
  description?: string;
  featured?: boolean;
  alt?: string;
}

export interface GalleryData {
  categories: GalleryCategory[];
  photos: GalleryPhoto[];
}

/** @deprecated Use GalleryPhoto instead */
export interface GalleryItem {
  id: string;
  src: string;
  caption: string;
  date: string;
  category: string;
  alt: string;
}

export interface FacebookPost {
  id: string;
  date: string;
  content: string;
  likes: number;
  comments: number;
  shares?: number;
  images?: string[];
}
