import { Loader } from "../../components";
import { useGet } from "../../hooks";
import { useParams, useNavigate } from "react-router";

export const SingleProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const { data, loading } = useGet(
    `https://fakestoreapi.com/products/${productId}`
  );

  if (loading) return <Loader />;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300 p-8">
      <div className="max-w-5xl w-full bg-white shadow-2xl rounded-3xl p-8 flex flex-col md:flex-row gap-10 transition-all duration-500 hover:shadow-3xl">
        <div className="flex-shrink-0 w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-72 h-72 md:w-80 md:h-80 bg-gray-100 rounded-2xl shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105">
            <img
              src={data?.image}
              alt={data?.title}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Right Side - Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-bold text-gray-900">{data?.title}</h2>
          <p className="text-gray-600 text-lg font-medium">{data?.category}</p>

          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-2xl">⭐</span>
            <span className="text-gray-700 font-semibold text-lg">
              {data?.rating?.rate}
            </span>
            <span className="text-gray-500 text-md">({data?.rating?.count} reviews)</span>
          </div>

          <p className="text-4xl font-extrabold text-green-600">${data?.price}</p>

          <p className="text-gray-700 leading-relaxed text-lg">{data?.description}</p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="w-full sm:w-auto flex-1 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95">
              Add to Cart
            </button>

            <button
              onClick={() => navigate(-1)}
              className="w-full sm:w-auto flex-1 py-3 px-6 bg-gray-500 hover:bg-gray-600 text-white rounded-xl text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
