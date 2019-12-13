import React from 'react';

import { useReadNewProductsOnMount, useAdminNewProductsState } from 'hooks';
import { Section, LoadingSpinner } from 'elements';

interface Props {}

const AddProducts: React.FC<Props> = () => {
  // TODO: Fetch Products from Printful and add price and category, then store in DB
  useReadNewProductsOnMount();
  const { newProducts, newProductsLoading } = useAdminNewProductsState();

  return (
    <Section title='Add new products'>{newProductsLoading ? <LoadingSpinner /> : JSON.stringify(newProducts)}</Section>
  );
};

export default AddProducts;
