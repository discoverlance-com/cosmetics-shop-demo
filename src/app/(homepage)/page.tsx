import { WithContext, WebSite } from 'schema-dts';
import { Suspense } from 'react';

import ThePrimaryLayout from '~/components/UI/layout/ThePrimaryLayout';
import Header from './Header';
import Products from './Products';
import ProductsSkeleton from './ProductsSkeleton';

const jsonLd: WithContext<WebSite> = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'My Cosmetics',
  description: 'Generated by create next app',
};

export default async function Home() {
  return (
    <ThePrimaryLayout>
      <>
        <Header />

        <Suspense fallback={<ProductsSkeleton />}>
          {/* @ts-expect-error Server Component */}
          <Products />
        </Suspense>

        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </>
    </ThePrimaryLayout>
  );
}
