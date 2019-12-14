import React from 'react';
import PropTypes from 'prop-types';

import { ProductCategories, Product, PrintfulProduct, AddProduct, UpdateProduct } from 'Store';

interface Props {
  name: string;
  imgUrl: string;
  product: Product | PrintfulProduct;
  saveFunction: (arg0: any) => AddProduct | UpdateProduct;
  price?: number;
  category?: ProductCategories;
}

const AdminItem: React.FC<Props> = ({ name, imgUrl }) => (
  <article>
    <h3>{name}</h3>
    <img src={imgUrl} alt={name} />
  </article>
);

export default AdminItem;

AdminItem.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  product: PropTypes.any.isRequired,
  saveFunction: PropTypes.func.isRequired
};
