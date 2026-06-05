import type { Metadata } from 'next';
import { SITE_TITLE, SITE_DESCRIPTION, SITE_URL } from '@/lib/utils';

interface MetaTagsProps {
  title?: string;
  description?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  canonical?: string;
}

export function buildMetadata({
  title,
  description,
  ogType = 'website',
  ogImage,
  canonical,
}: MetaTagsProps): Metadata {
  const fullTitle = title ? `${title} | ${SITE_TITLE}` : SITE_TITLE;
  const metaDescription = description ?? SITE_DESCRIPTION;
  const image = ogImage ?? '/images/og-default.jpg';
  const url = canonical ? `${SITE_URL}${canonical}` : SITE_URL;

  return {
    title: { absolute: fullTitle },
    description: metaDescription,
    metadataBase: new URL(SITE_URL),
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url,
      siteName: SITE_TITLE,
      type: ogType,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: metaDescription,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}
