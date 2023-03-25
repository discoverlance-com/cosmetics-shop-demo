import type { Metadata } from 'next';
import ProductMetrics from './ProductMetrics';

export const metadata: Metadata = {
  title: 'Admin - My Cosmetics',
};

export default function Page() {
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

        <ProductMetrics />
      </div>
    </>
  );
}
