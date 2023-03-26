import Image from 'next/image';
import { getAllCategoriesWithProducts } from '~/lib/products/categories';

const CategoriesTable = async () => {
  const categories = await getAllCategoriesWithProducts();
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
                # of Products
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 1 ? (
              categories.map((category) => (
                <tr
                  key={category.slug}
                  className="bg-blue-700 border-b hover:bg-blue-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-100 whitespace-nowrap "
                  >
                    {category.name}
                  </th>
                  <td className="px-6 py-4">
                    <span className="py-2 px-2 bg-gray-100 rounded text-gray-700">
                      {category._count.products}
                    </span>
                  </td>
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
                <td colSpan={3} className="px-6 py-4 text-white">
                  No Product category added yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoriesTable;
