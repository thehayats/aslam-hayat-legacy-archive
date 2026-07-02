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
      <div className="bg-green py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl text-cream-light font-bold mb-4">
            Archive Notes
          </h1>
          <p className="font-lora text-lg text-cream-dark italic max-w-xl mx-auto">
            Notes and reflections from the archive — on his life, his writing, and the project
            of preservation itself.
          </p>
          <div className="gold-divider mt-6" />
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
