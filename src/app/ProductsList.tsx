'use client';

import type { Product } from '@prisma/client';
import ProductItem from './ProductItem';

interface Props {
  products: Omit<Product, 'updatedAt' | 'createdAt' | 'category_id' | 'id'>[];
}

const ProductsList = (props: Props) => {
  return (
    <ul className="grid sm:grid-cols-2 grid-cols-1 gap-8 lg:grid-cols-3">
      {props.products.map((product) => (
        <li key={product.slug}>
          <ProductItem
            name={product.name}
            summary={product.summary}
            price={product.price}
            image={product.image}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
