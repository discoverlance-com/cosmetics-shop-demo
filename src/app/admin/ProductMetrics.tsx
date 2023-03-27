'use client';

import type { Product } from '@prisma/client';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Products Quantity',
    },
  },
};

interface Props {
  products: Omit<Product, 'updatedAt' | 'createdAt' | 'category_id' | 'id'>[];
}

const ProductMetrics = (props: Props) => {
  const datasets = [
    {
      label: '# of Products',
      data: props.products.map((product) => product.quantity),
      backgroundColor: props.products.map((product) =>
        product.color ? product.color : '',
      ),
      borderWidth: 1,
    },
  ];
  const labels = props.products.map((product) => product.name);
  return (
    <div className="grid md:grid-cols-3 gap-8 min-h-[200px]">
      <div className="md:col-span-2">
        <Pie height={200} data={{ datasets, labels }} options={options} />
      </div>
    </div>
  );
};

export default ProductMetrics;
