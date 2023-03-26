import type { Metadata } from 'next';
import { Suspense } from 'react';

import ProductMetrics from './ProductMetrics';
import { getAllProducts } from '~/lib/products/products';

export const metadata: Metadata = {
  title: 'Admin - My Cosmetics',
};

export default async function Page() {
  const products = await getAllProducts();

  return (
    <>
      <h1 className="font-bold text-4xl mb-8">Welcome</h1>
      <div className="space-y-16">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-4 h-24 rounded bg-blue-50 leading-8">
            <p className="text-2xl font-semibold text-gray-500">
              Total Products
            </p>
            <p className="font-bold text-xl">200</p>
          </div>
        </div>

        <Suspense fallback={<p>Loading...</p>}>
          <ProductMetrics products={products} />
        </Suspense>
      </div>
    </>
  );
}
