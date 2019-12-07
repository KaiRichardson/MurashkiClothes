import { useState, useEffect } from 'react';
import { Variant } from 'Store';

/*
  passed in id is _extID on Product,
  which refers to id in Printful Database
*/
export const useProductVariants = (id: number) => {
  const [productVariants, setProductVaraints] = useState<Variant[]>([]);

  useEffect(() => {
    const fetchVariants = async () => {
      try {
        const response: Response = await fetch(`/api/products/${id}`, {
          method: 'GET'
        });
        const data: Variant[] = await response.json();

        setProductVaraints(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchVariants();
  }, [id]);

  return productVariants;
};
