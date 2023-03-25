import AppButton from '~/components/UI/button/AppButton';
import productsJson from './products.json';
import ProductsList from './ProductsList';

const getProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return productsJson;
};

const Products = async () => {
  const products = await getProducts();

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
