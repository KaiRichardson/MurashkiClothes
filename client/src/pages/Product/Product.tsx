import React from 'react';
import { useParams } from 'react-router';

interface Props {}

const Product: React.FC<Props> = () => {
  const { productid } = useParams();
  return <>Product {productid}</>;
};

export default Product;
