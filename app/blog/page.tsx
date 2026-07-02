import type { Metadata } from 'next';
import SectionHeader from '@/components/ui/SectionHeader';
import BlogCard from '@/components/ui/BlogCard';
import { buildMetadata } from '@/components/seo/MetaTags';
import { getAllBlogPosts } from '@/lib/mdx';

export const metadata: Metadata = buildMetadata({
  title: 'Archive Blog — Notes on the Life of Aslam Hayat | Legacy Archive Updates',
  description:
    'Notes, updates and reflections from the Aslam Hayat Legacy Archive — preserving the life, Urdu writings, and memory of a Pakistani Chartered Accountant, PCAA Director, and family man.',
  canonical: '/blog',
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="border-b border-cream-dark">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6">
          <h1 className="font-playfair text-2xl text-green font-bold">Archive Notes</h1>
          <p className="font-lora text-sm text-gray-500 mt-1">Notes and reflections on the archive and the life behind it.</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <SectionHeader title="All Posts" />

        {posts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="font-lora text-gray-500 text-center py-12">
            No blog posts yet. Check back soon.
          </p>
        )}
      </div>
    </div>
  );
}
