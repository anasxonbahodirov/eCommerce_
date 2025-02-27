import React from "react";
import { useLocation, useNavigate } from "react-router";
import { getTodaysDate } from "../lib";
import { usePost } from "../hooks";
import { toast } from "sonner";

export const ProductCard = ({ product }) => {
  const { mutate, loading } = usePost();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      className="relative bg-gradient-to-br from-gray-100 to-gray-300 rounded-3xl shadow-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 w-[320px] p-5 cursor-pointer group"
      onClick={(e) => {
        if (e.target.id !== "add-to-cart") {
          navigate(`/${product.id}`);
        }
      }}
    >
      <div className="flex flex-col items-center">
        <div className="w-[190px] h-[220px] flex items-center justify-center relative">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl"></div>
        </div>

        <div className="mt-4 text-center">
          <p className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {product.title}
          </p>
          <p className="text-yellow-500 font-bold">{`⭐ ${product.rating.rate}`}</p>
          <p className="text-gray-700 text-sm">{product.category}</p>
          <p className="text-green-600 font-extrabold text-2xl">${product.price}</p>
        </div>
      </div>

      {location.pathname !== "/cart" && (
        <button
          id="add-to-cart"
          disabled={loading}
          className="relative px-[93px] py-3 mt-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 ease-in-out hover:from-purple-600 hover:to-blue-500 hover:shadow-2xl active:scale-95 focus:ring-4 focus:ring-blue-300"
          
          onClick={() =>
            mutate({
              api: "https://fakestoreapi.com/carts",
              method: "POST",
              bodyData: {
                userId: 2,
                date: getTodaysDate(),
                products: [{ productId: product.id, quantity: 1 }],
              },
              onSuccess: () => toast.success("Mahsulot savatga qo`shildi"),
              onError: () => toast.error("Xatolik yuz berdi"),
            })
          }
        >
          {loading ? "Adding..." : "Add to cart"}
        </button>
      )}
    </div>
  );
};
