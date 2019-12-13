import React from 'react';

import { useAdminExistingProductsState, useReadExistingProductsOnMount } from 'hooks';
import { Section, LoadingSpinner } from 'elements';

interface Props {}

const EditProducts: React.FC<Props> = () => {
  useReadExistingProductsOnMount();
  const { existingProducts, existingProductsLoading } = useAdminExistingProductsState();
  // TODO: Fetch Products from DB, be able to edit price, category, and be able to remove from DB

  return (
    <Section title='Edit existing products'>
      {existingProductsLoading ? <LoadingSpinner /> : JSON.stringify(existingProducts)}
    </Section>
  );
};

export default EditProducts;
