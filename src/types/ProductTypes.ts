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

export interface ProductCardProps {
  product: Product;
}

export interface ProductsQueryResult {
  products: {
    edges: {
      node: Product;
    }[];
  };
}
