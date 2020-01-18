import { useState, useEffect } from 'react';

import { ProductCategories, Product } from 'Store';

export const useProductCategory = (category: ProductCategories) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response: Response = await fetch(`/api/products/${category}`, {
          method: 'GET'
        });
        const data: Product[] = await response.json();

        setProducts(data);
      } catch (err) {
        setErrorMessage(err.message);
      }
    };

    fetchProducts();
  }, [category]);

  return { products, errorMessage };
};
