import { useState, useEffect } from 'react';
import { Product } from 'Store';

export const useAllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response: Response = await fetch('/api/products', {
        method: 'GET'
      });
      const data: Product[] = await response.json();

      setProducts(data);
    };

    fetchProducts();
  }, []);

  return products;
};
