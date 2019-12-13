import React from 'react';
import { useAdminNewProductsState } from 'hooks';

interface Props {}

const AddProducts: React.FC<Props> = () => {
  // TODO: Fetch Products from Printful and add price and category, then store in DB
  const { newProducts } = useAdminNewProductsState();

  return (
    <>
      AddProducts
      {JSON.stringify(newProducts)}
    </>
  );
};

export default AddProducts;
