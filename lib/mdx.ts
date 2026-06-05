import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { estimateReadingTime } from './utils';
import type { Article, ArticleFrontmatter, BlogPost, BlogFrontmatter } from './articles';

const contentDir = path.join(process.cwd(), 'content');

function getFilesInDir(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'));
}

function stripSlug(filename: string): string {
  return filename.replace(/\.(mdx|md)$/, '');
}

// ─── Articles ────────────────────────────────────────────────────────────────

export function getAllArticles(type: 'urdu' | 'english'): Article[] {
  const dir = path.join(contentDir, 'articles', type);
  const files = getFilesInDir(dir);

  return files
    .map((filename) => {
      const slug = stripSlug(filename);
      const raw = fs.readFileSync(path.join(dir, filename), 'utf-8');
      const { data, content } = matter(raw);
      return {
        slug,
        type,
        frontmatter: data as ArticleFrontmatter,
        content,
      };
    })
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date).getTime();
      const dateB = new Date(b.frontmatter.date).getTime();
      return dateB - dateA;
    });
}

export function getArticleBySlug(type: 'urdu' | 'english', slug: string): Article | null {
  const dir = path.join(contentDir, 'articles', type);
  const filePath = path.join(dir, `${slug}.mdx`);
  const fallbackPath = path.join(dir, `${slug}.md`);

  const resolvedPath = fs.existsSync(filePath) ? filePath : fs.existsSync(fallbackPath) ? fallbackPath : null;

  if (!resolvedPath) return null;

  const raw = fs.readFileSync(resolvedPath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    type,
    frontmatter: data as ArticleFrontmatter,
    content,
  };
}

export function getArticleSlugs(type: 'urdu' | 'english'): string[] {
  const dir = path.join(contentDir, 'articles', type);
  const files = getFilesInDir(dir);
  return files.map(stripSlug);
}

// ─── Blog Posts ──────────────────────────────────────────────────────────────

export function getAllBlogPosts(): BlogPost[] {
  const dir = path.join(contentDir, 'blog');
  const files = getFilesInDir(dir);

  return files
    .map((filename) => {
      const slug = stripSlug(filename);
      const raw = fs.readFileSync(path.join(dir, filename), 'utf-8');
      const { data, content } = matter(raw);
      return {
        slug,
        frontmatter: data as BlogFrontmatter,
        content,
        readingTime: estimateReadingTime(content),
      };
    })
    .sort((a, b) => {
      const dateA = new Date(a.frontmatter.date).getTime();
      const dateB = new Date(b.frontmatter.date).getTime();
      return dateB - dateA;
    });
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const dir = path.join(contentDir, 'blog');
  const filePath = path.join(dir, `${slug}.mdx`);
  const fallbackPath = path.join(dir, `${slug}.md`);

  const resolvedPath = fs.existsSync(filePath) ? filePath : fs.existsSync(fallbackPath) ? fallbackPath : null;

  if (!resolvedPath) return null;

  const raw = fs.readFileSync(resolvedPath, 'utf-8');
  const { data, content } = matter(raw);

  return {
    slug,
    frontmatter: data as BlogFrontmatter,
    content,
    readingTime: estimateReadingTime(content),
  };
}

export function getBlogSlugs(): string[] {
  const dir = path.join(contentDir, 'blog');
  const files = getFilesInDir(dir);
  return files.map(stripSlug);
}
