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
  category: 'personal' | 'education' | 'career' | 'family' | 'recognition';
  image?: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  caption: string;
  date: string;
  category: 'family' | 'professional' | 'events' | 'personal';
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
