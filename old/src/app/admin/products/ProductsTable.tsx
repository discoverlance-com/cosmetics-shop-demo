import Image from 'next/image';

import { getAllProductsWithCategory } from '~/lib/products/products';

const ProductsTable = async () => {
  const products = await getAllProductsWithCategory();
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded">
        <table className="w-full text-base text-left text-gray-300">
          <thead className="text-sm text-gray-700 uppercase bg-gray-100">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Summary
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length > 1 ? (
              products.map((product) => (
                <tr
                  key={product.slug}
                  className="bg-blue-700 border-b hover:bg-blue-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-100 whitespace-nowrap "
                  >
                    {product.name}
                  </th>
                  <td className="px-6 py-4">
                    <span className="py-2 px-2 bg-gray-100 rounded text-gray-700">
                      {product.category?.name}
                    </span>
                  </td>
                  <td className="px-6 py-4">$ {product.price.toString()}</td>
                  <td className="px-6 py-4">{product.quantity}</td>
                  <td className="px-6 py-4">
                    {product.image && (
                      <Image
                        alt={product.name}
                        src={product?.image}
                        height={100}
                        width={100}
                        className="object-center"
                      />
                    )}
                  </td>
                  <td className="px-6 py-4">{product.summary}</td>
                  <td className="px-6 py-4 flex gap-2 flex-wrap text-right">
                    <a
                      href="#"
                      className="font-medium text-gray-200 hover:underline"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      className="font-medium text-gray-200 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="bg-blue-700 border-b hover:bg-blue-600">
                <td colSpan={7} className="px-6 py-4 text-white">
                  No Product added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductsTable;
