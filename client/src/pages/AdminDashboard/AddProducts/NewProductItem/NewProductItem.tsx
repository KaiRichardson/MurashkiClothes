import React from 'react';
import PropTypes from 'prop-types';

import { PrintfulProduct } from 'Store';
import { useAdminNewProductsActions } from 'hooks';
import AdminItem from '../../AdminItem';

interface Props extends PrintfulProduct {}

const NewProductItem: React.FC<Props> = props => {
  const { addNewProduct } = useAdminNewProductsActions();
  const { name, thumbnail_url } = props;

  return <AdminItem name={name} imgUrl={thumbnail_url} product={props} saveFunction={addNewProduct} />;
};

export default NewProductItem;

NewProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  thumbnail_url: PropTypes.string.isRequired
};
