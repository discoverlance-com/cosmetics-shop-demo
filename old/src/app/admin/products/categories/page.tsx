import type { Metadata } from 'next';
import CategoriesTable from './CategoriesTable';

export const metadata: Metadata = {
  title: 'Categories - My Cosmetics',
};

export default function Categories() {
  return (
    <div className="space-y-16">
      <h1 className="mb-8 font-bold text-4xl">Categories</h1>

      {/* @ts-expect-error Server component  */}
      <CategoriesTable />
    </div>
  );
}
