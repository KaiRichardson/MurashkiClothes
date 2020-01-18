import React from 'react';
import PropTypes from 'prop-types';

import { ProductCategories } from 'Store';
import { useProductCategory } from 'hooks';
import { Breadcrumbs, ProductList, ProductItem, Section } from 'elements';

interface Props {
  category: ProductCategories;
}

const SingleCollection: React.FC<Props> = ({ category }) => {
  const { products, errorMessage } = useProductCategory(category);

  return (
    <>
      <Breadcrumbs />

      {errorMessage && <p>{errorMessage}</p>}

      <Section title={category}>
        {products.length === 0 ? (
          <p>No Products found!</p>
        ) : (
          <ProductList>
            {products.map(item => (
              <ProductItem key={item._extID} {...item} />
            ))}
          </ProductList>
        )}
      </Section>
    </>
  );
};

export default SingleCollection;

SingleCollection.propTypes = {
  category: PropTypes.oneOf<ProductCategories>(['MENS', 'WOMENS', 'CHILDRENS']).isRequired
};
