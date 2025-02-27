import React, { useState } from "react";
import { useGet } from "../../hooks";
import { Error, Loader, ProductCard } from "../../components";

export const Products = () => {
  const [limit, setLimit] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const {
    data: productData,
    loading: productLoading,
    error: productError,
  } = useGet(`https://fakestoreapi.com/products?limit=${limit}`);

  const {
    data: categoryData,
    loading: categoryLoading,
    error: categoryError,
  } = useGet("https://fakestoreapi.com/products/categories");

  if (productLoading || categoryLoading) return <Loader />;
  if (productError) return <Error error={productError} />;
  if (categoryError) return <Error error={categoryError} />;

  const filteredProducts = selectedCategory
    ? productData.filter((product) => product.category === selectedCategory)
    : productData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-5 py-2 text-lg font-medium rounded-full shadow-md transition-all ${
              selectedCategory === null
                ? "bg-gray-900 text-white"
                : "bg-gray-300 text-gray-900 hover:bg-gray-400"
            }`}
          >
            All
          </button>
          {categoryData.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 text-lg font-medium rounded-full shadow-md transition-all ${
                selectedCategory === category
                  ? "bg-blue-700 text-white"
                  : "bg-blue-500 text-white hover:bg-blue-600"
              }`}
            >
              {category}
            </button>
          ))}
          <select
            value={limit}
            className="px-5 py-2 text-lg font-medium rounded-full shadow-md bg-blue-500 text-white hover:bg-blue-600 transition-all"
            onChange={(e) => setLimit(parseInt(e.target.value))}
          >
            <option value={null}>All</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>

        {/* Mahsulotlar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-gray-600 text-lg text-center col-span-full">
              Siz tanlagan mahsulot yo'q, boshqatdan urinib ko'ring
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
