import React from 'react';

import { useReadNewProductsOnMount, useAdminNewProductsState, useAdminNewProductsActions } from 'hooks';
import { spacing } from 'utils';
import { Section, LoadingSpinner, Button } from 'elements';
import NewProductItem from './NewProductItem';

interface Props {}

const AddProducts: React.FC<Props> = () => {
  useReadNewProductsOnMount();
  const { newProducts, newProductsLoading, productsToAdd } = useAdminNewProductsState();
  const { saveNewProductsToDatabase } = useAdminNewProductsActions();
  const numberOfNewProducts = newProducts.length;
  const numberOfProductsToAdd = productsToAdd.length;

  return (
    <Section title='Add new products'>
      {newProductsLoading ? (
        <LoadingSpinner />
      ) : numberOfNewProducts === 0 ? (
        <p>No new products from Printful. Please add a product in Printful to see it here.</p>
      ) : (
        <>
          <Button brand onClick={saveNewProductsToDatabase} style={{ margin: `${spacing.sm} 0` }}>
            Save {numberOfProductsToAdd} Product{numberOfProductsToAdd !== 1 && 's'}
          </Button>
          {newProducts.map(p => (
            <NewProductItem key={p.id} {...p} />
          ))}
        </>
      )}
    </Section>
  );
};

export default AddProducts;
