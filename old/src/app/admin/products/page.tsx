import type { Metadata } from 'next';
import ProductsTable from './ProductsTable';
import AppButtonLink from '~/components/UI/links/AppButtonLink';

export const metadata: Metadata = {
  title: 'Products - My Cosmetics',
};

export default function Products() {
  return (
    <div className="space-y-16">
      <div className="flex justify-between items-center">
        <h1 className="mb-8 font-bold text-4xl">Products</h1>

        <AppButtonLink to="/admin/products/create" variant="blue">
          Create
        </AppButtonLink>
      </div>

      {/* @ts-expect-error Server component  */}
      <ProductsTable />
    </div>
  );
}
