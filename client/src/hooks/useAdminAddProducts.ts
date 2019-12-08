import { useState, useEffect } from 'react';
import { PrintfulProduct, Product, ProductCategories } from 'Store';

export const useAdminAddProducts = () => {
  const [newProducts, setNewProducts] = useState<PrintfulProduct[]>([]);
  const [productsToAdd, setProductsToAdd] = useState<Product[]>([]);

  useEffect(() => {
    const fetchNewProducts = async () => {
      const response: Response = await fetch('/api/products/admin/add', {
        method: 'GET'
      });
      const data: PrintfulProduct[] = await response.json();

      setNewProducts(data);
    };

    fetchNewProducts();
  }, []);

  class LocalProduct implements Product {
    _id?: string;
    _extID: number;
    category: ProductCategories;
    name: string;
    imgUrls: { base: string[]; side: string[] };
    price: number;

    constructor(product: PrintfulProduct, category: ProductCategories, price: number) {
      this._extID = product.id;
      this.category = category;
      this.name = product.name;
      this.imgUrls = {
        base: [product.thumbnail_url],
        side: []
      };
      this.price = price;
    }
  }

  const addProduct = ({
    product,
    price,
    category
  }: {
    product: PrintfulProduct;
    price: number;
    category: ProductCategories;
  }) => {
    setProductsToAdd([...productsToAdd, new LocalProduct(product, category, price)]);
  };

  const saveProducts = async () => {
    try {
      await fetch('/api/products/admin/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ productsToAdd })
      });

      // TODO: Handle Response
    } catch (err) {
      console.log(err);
    }
  };

  return { newProducts, addProduct, saveProducts };
};
