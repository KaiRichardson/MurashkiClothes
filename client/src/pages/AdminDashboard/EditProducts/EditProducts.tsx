import React from 'react';

import { useAdminEditProducts } from 'hooks';

interface Props {}

const EditProducts: React.FC<Props> = () => {
  // TODO: Fetch Products from DB, be able to edit price, category, and be able to remove from DB
  const { products } = useAdminEditProducts();

  return (
    <>
      EditProducts
      {JSON.stringify(products)}
    </>
  );
};

export default EditProducts;
