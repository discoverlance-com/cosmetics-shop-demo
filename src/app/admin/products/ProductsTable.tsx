const ProductsTable = () => {
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
            <tr className="bg-blue-700 border-b hover:bg-blue-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-100 whitespace-nowrap "
              >
                Apple MacBook Pro 17
              </th>
              <td className="px-6 py-4">$2999</td>
              <td className="px-6 py-4">4</td>
              <td className="px-6 py-4">Laptop</td>
              <td className="px-6 py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, asperiores velit ipsam maxime sit modi facere nesciunt
                assumenda.
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
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProductsTable;
