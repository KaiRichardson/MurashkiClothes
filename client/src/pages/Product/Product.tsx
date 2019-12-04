import React from 'react';
// import { useParams } from 'react-router';

import { Breadcrumbs } from 'elements';

interface Props {}

const Product: React.FC<Props> = () => {
  // const { category, productid } = useParams();
  return (
    <>
      <Breadcrumbs productName={'JavaScript is !Cool'} />
      Product
    </>
  );
};

export default Product;
