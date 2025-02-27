import React, { useMemo } from "react";
import { useGet, useGetApis } from "../../hooks";
import { ProductCard } from "../../components";

export const Cart = () => {
  const {
    data: cartData,
    leading: cartLeading,
    error: cartError,
  } = useGet("https://fakestoreapi.com/carts/user/4");

  const urls = useMemo(() => {
    if (!cartData?.[0]?.products) return [];
    return cartData[0].products.map(
      (product) => `https://fakestoreapi.com/products/${product.productId}`
    );
  }, [cartData]);

  const {
    data: productsData,
    leading: productsLeading,
    error: productsError,
  } = useGetApis(urls);

  if (cartLeading || productsLeading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="mt-3 text-lg text-gray-600">Yuklanmoqda...</p>
        </div>
      </div>
    );
  }

  if (cartError)
    return (
      <div className="text-center text-red-500 text-lg">{cartError?.message}</div>
    );
  if (productsError)
    return (
      <div className="text-center text-red-500 text-lg">{productsError?.message}</div>
    );

  return (
    <div className="container mx-auto px-5 py-10">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
        Savatchangiz 🛒
      </h2>

      {productsData?.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          Savatchangiz bo‘sh 😕
        </div>
      ) : (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {productsData?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      )}
    </div>
  );
};
