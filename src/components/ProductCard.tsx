export interface Product {
  id: string;
  name: string;
  thumbnail: {
    url: string;
  };
  category: {
    name: string;
  };
  pricing: {
    priceRange: {
      start: {
        gross: {
          amount: number;
          currency: string;
        };
      };
    };
  };
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-2xl overflow-hidden">
      <img
        src={product?.thumbnail?.url}
        alt={product?.name}
        className="w-full h-40 object-cover rounded-t-lg transition-transform duration-300 ease-in-out transform hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40" />
      <h2 className="text-lg font-bold mt-4 text-white shadow-lg hover:text-gray-300 transition duration-300">
        {product?.name}
      </h2>
      <p className="text-gray-200 mt-2 text-lg font-semibold shadow-lg mb-4">
        {product?.pricing?.priceRange?.start?.gross?.amount}{" "}
        {product?.pricing?.priceRange?.start?.gross?.currency}
      </p>
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mt-2">
        {product?.category?.name}
      </div>
    </div>
  );
}
