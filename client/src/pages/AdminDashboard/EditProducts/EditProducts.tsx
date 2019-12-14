import React from 'react';

import { useAdminExistingProductsState, useReadExistingProductsOnMount } from 'hooks';
import { Section, LoadingSpinner } from 'elements';
import ExistingProductItem from './ExistingProductItem';

interface Props {}

const EditProducts: React.FC<Props> = () => {
  useReadExistingProductsOnMount();
  const { existingProducts, existingProductsLoading } = useAdminExistingProductsState();
  // TODO: Fetch Products from DB, be able to edit price, category, and be able to remove from DB

  return (
    <Section title='Edit existing products'>
      {existingProductsLoading ? (
        <LoadingSpinner />
      ) : existingProducts.length === 0 ? (
        <p>No products found in database, please add a product.</p>
      ) : (
        existingProducts.map(p => <ExistingProductItem key={p._extID} {...p} />)
      )}
    </Section>
  );
};

export default EditProducts;
