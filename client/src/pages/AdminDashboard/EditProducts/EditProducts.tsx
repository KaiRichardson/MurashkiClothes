import React from 'react';

import { useAdminExistingProductsState } from 'hooks';

interface Props {}

const EditProducts: React.FC<Props> = () => {
  // TODO: Fetch Products from DB, be able to edit price, category, and be able to remove from DB
  const { existingProducts } = useAdminExistingProductsState();

  return (
    <>
      EditProducts
      {JSON.stringify(existingProducts)}
    </>
  );
};

export default EditProducts;
