import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s | The Aslam Hayat Legacy Archive',
    default: 'The Aslam Hayat Legacy Archive',
  },
  description:
    'A digital museum and family biography site honoring the life, writings, and legacy of Aslam Hayat — scholar, writer, devoted father, and beloved member of our community.',
  keywords: ['Aslam Hayat', 'Urdu literature', 'Pakistan', 'legacy archive', 'family biography'],
  authors: [{ name: 'The Family of Aslam Hayat' }],
  openGraph: {
    type: 'website',
    siteName: 'The Aslam Hayat Legacy Archive',
    title: 'The Aslam Hayat Legacy Archive',
    description:
      'A digital museum and family biography site honoring the life, writings, and legacy of Aslam Hayat.',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Aslam Hayat Legacy Archive',
    description: 'A digital museum honoring the life and legacy of Aslam Hayat.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
