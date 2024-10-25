import ProductCard from "@/components/ProductCard";
import client from "@/lib/ApolloClient";
import { GET_PRODUCTS } from "@/lib/Query";
import { Product, ProductsQueryResult } from "@/types/ProductTypes";

export default async function Home() {
  const { data: productsData } = await client.query<ProductsQueryResult>({
    query: GET_PRODUCTS,
  });
  const products = productsData.products.edges.map((edge) => edge.node);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-300 to-indigo-300 p-6">
      <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-700 to-violet-700 text-center mb-6">
        <img src="https://docs.saleor.io/img/logo.svg" className="w-36 h-10" />
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <div
            key={product.id}
            className="transition-transform duration-300 transform hover:scale-105"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
