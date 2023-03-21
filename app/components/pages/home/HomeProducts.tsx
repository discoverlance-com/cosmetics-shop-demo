import type { Product } from "~/types";
import ProductItem from "./ProductItem";
import AppButton from "~/components/UI/button/AppButton";

interface Props {
  products: Product[];
}

const HomeProducts = (props: Props) => {
  return (
    <div className="mt-16 w-full relative" id="products">
      <h2 className="text-4xl font-bold mb-8">Our Products</h2>
      <ul className="grid sm:grid-cols-2 grid-cols-1 gap-8 lg:grid-cols-3">
        {props.products.map((product) => (
          <li key={product.id}>
            <ProductItem {...product} />
          </li>
        ))}
      </ul>

      <div className="mt-16 flex">
        <AppButton>Load More</AppButton>
      </div>
    </div>
  );
};

export default HomeProducts;
