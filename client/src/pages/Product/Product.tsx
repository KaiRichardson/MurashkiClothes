import React from 'react';
import { useParams } from 'react-router';

interface Props {}

const Product: React.FC<Props> = () => {
  const { category, productid } = useParams();
  return (
    <>
      Product {category} {productid}
    </>
  );
};

export default Product;
