import AppButton from '~/components/UI/button/AppButton';
import ProductsList from './ProductsList';
import { getAllProducts } from '~/lib/products/products';

const Products = async () => {
  const products = await getAllProducts();

  return (
    <div className="mt-16 w-full relative">
      <h2 className="text-4xl font-bold mb-8">Our Products</h2>
      <ProductsList products={products} />

      <div className="mt-16 flex">
        <AppButton>Load More</AppButton>
      </div>
    </div>
  );
};

export default Products;
