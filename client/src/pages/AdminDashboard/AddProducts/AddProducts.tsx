import React from 'react';

import { useAdminAddProducts } from 'hooks';

interface Props {}

const AddProducts: React.FC<Props> = () => {
  // TODO: Fetch Products from Printful and add price and category, then store in DB
  const { newProducts } = useAdminAddProducts();

  return (
    <>
      AddProducts
      <p>{JSON.stringify(newProducts)}</p>
    </>
  );
};

export default AddProducts;
