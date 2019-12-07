import { useState, useEffect } from 'react';

import { ProductCategories, Product } from 'Store';

export const useProductCategory = (category: ProductCategories) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response: Response = await fetch(`/api/products/${category}`, {
          method: 'GET'
        });
        const data: Product[] = await response.json();

        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, [category]);

  return products;
};
