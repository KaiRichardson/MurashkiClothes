import { useState, useEffect } from 'react';

import { Product, ProductCategories } from 'Store';

export const useAdminEditProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [productsToUpdate, setProductsToUpdate] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response: Response = await fetch('/api/products', {
          method: 'GET'
        });
        const data: Product[] = await response.json();

        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchProducts();
  }, []);

  const updateProduct = ({
    product,
    price = product.price,
    category = product.category
  }: {
    product: Product;
    price?: number;
    category?: ProductCategories;
  }) => {
    setProductsToUpdate([...productsToUpdate, { ...product, price, category }]);
  };

  const saveUpdates = async () => {
    await fetch('/api/products/admin/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ productsToUpdate })
    });
  };

  return { products, updateProduct, saveUpdates };
};
