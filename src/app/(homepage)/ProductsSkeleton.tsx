const ProductsSkeleton = () => {
  return (
    <div className="mt-16 w-full relative">
      <h2 className="text-4xl font-bold mb-8 h-10 animate-pulse bg-blue-600 w-2/6"></h2>
      <ul className="grid sm:grid-cols-2 grid-cols-1 gap-8 lg:grid-cols-3">
        {[...Array(4)].fill(null).map((_, index) => (
          <li role="status" key={index} className="animate-pulse">
            <div className="border-blue-600 border-8 p-4 h-[549px] w-full">
              <h3 className="font-bold text-3xl h-9 w-1/2 bg-blue-600"></h3>
              <div className="w-full object-cover object-center mt-8 h-64 bg-blue-600" />
              <p className="border p-2 border-blue-500 mt-4 h-24 bg-blue-600 space-y-2">
                <span className="h-12 block w-full bg-blue-500"></span>
                <span className="block font-bold text-xl h-7 w-1/2 bg-blue-500"></span>
              </p>
            </div>
            <span className="sr-only">Loading...</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsSkeleton;
