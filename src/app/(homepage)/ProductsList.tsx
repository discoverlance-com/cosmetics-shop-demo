'use client';

import ProductItem from './ProductItem';
import productsJson from './products.json';

interface Props {
  products: typeof productsJson;
}

const ProductsList = (props: Props) => {
  return (
    <ul className="grid sm:grid-cols-2 grid-cols-1 gap-8 lg:grid-cols-3">
      {props.products.map((product) => (
        <li key={product.id}>
          <ProductItem {...product} />
        </li>
      ))}
    </ul>
  );
};

export default ProductsList;
