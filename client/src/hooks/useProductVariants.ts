import { useState, useEffect } from 'react';
import { Variant } from 'Store';

/*
  passed in id is _extID on Product,
  which refers to id in Printful Database
*/
export const useProductVariants = (id: number) => {
  const [productVariants, setProductVaraints] = useState<Variant[]>([]);
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const colors: string[] = [];
  const sizes: string[] = [];
  let productName = '';

  useEffect(() => {
    const fetchVariants = async () => {
      try {
        setStatus('LOADING');
        const response: Response = await fetch(`/api/printful/variants/${id}`, {
          method: 'GET'
        });
        const data: Variant[] = await response.json();

        setStatus('SUCCESS');
        setProductVaraints(data);
      } catch (err) {
        setStatus('ERROR');
        console.log(err);
      }
    };

    fetchVariants();
  }, [id]);

  if (productVariants[0]) {
    productName = productVariants[0].name.split(' -')[0];

    for (let i = 0; i < productVariants.length; i++) {
      const currentColor = productVariants[i].color.trim();
      const currentSize = productVariants[i].size.trim();
      if (colors.indexOf(currentColor) === -1) {
        colors.push(currentColor);
      }
      if (sizes.indexOf(currentSize) === -1) {
        sizes.push(currentSize);
      }
    }
  }

  return { variants: productVariants, name: productName, status, colors, sizes };
};
