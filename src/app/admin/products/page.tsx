import type { Metadata } from 'next';
import ProductsTable from './ProductsTable';

export const metadata: Metadata = {
  title: 'Products - My Cosmetics',
};

export default function Products() {
  return (
    <div className="space-y-16">
      <h1 className="mb-8 font-bold text-4xl">Products</h1>

      <ProductsTable />
    </div>
  );
}
