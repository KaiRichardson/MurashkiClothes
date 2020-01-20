import React from 'react';

import { useAdminExistingProductsState, useReadExistingProductsOnMount, useAdminExistingProductsActions } from 'hooks';
import { spacing } from 'utils';
import { Section, LoadingSpinner, Button } from 'elements';
import ExistingProductItem from './ExistingProductItem';

interface Props {}

const EditProducts: React.FC<Props> = () => {
  // TODO: be able to remove from DB
  useReadExistingProductsOnMount();
  const { existingProducts, existingProductsLoading, productsToUpdate } = useAdminExistingProductsState();
  const { saveUpdatedProductsToDatabase } = useAdminExistingProductsActions();
  const numberOfExistingProducts = existingProducts.length;
  const numberOfProductsToUpdate = productsToUpdate.length;

  return (
    <Section title='Edit existing products'>
      {existingProductsLoading === 'LOADING' ? (
        <LoadingSpinner />
      ) : numberOfExistingProducts === 0 ? (
        <p>No products found in database, please add a product.</p>
      ) : (
        <>
          <Button brand onClick={saveUpdatedProductsToDatabase} style={{ margin: `${spacing.sm} 0` }}>
            Save {numberOfProductsToUpdate} Change{numberOfProductsToUpdate !== 1 && 's'}
          </Button>
          {existingProducts.map(p => (
            <ExistingProductItem key={p._extID} {...p} />
          ))}
        </>
      )}
    </Section>
  );
};

export default EditProducts;
