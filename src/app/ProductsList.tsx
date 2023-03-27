'use client';

import type { Product } from '@prisma/client';
import ProductItem from './ProductItem';

interface Props {
  products: (Omit<
    Product,
    'updatedAt' | 'createdAt' | 'category_id' | 'id' | 'price'
  > & {
    price: string;
  })[];
}

const ProductsList = (props: Props) => {
  return (
    <ul className="grid sm:grid-cols-2 grid-cols-1 gap-8 lg:grid-cols-3">
      {props.products.length > 1 ? (
        props.products.map((product) => (
          <li key={product.slug}>
            <ProductItem
              product={{
                name: product.name,
                summary: product.summary,
                price: product.price,
                image: product.image,
              }}
            />
          </li>
        ))
      ) : (
        <p className="text-xl mt-8 col-span-full">
          No products added yet. Please visit at another time
        </p>
      )}
    </ul>
  );
};

export default ProductsList;
