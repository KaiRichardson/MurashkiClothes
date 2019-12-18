import React from 'react';
import PropTypes from 'prop-types';

import { Product } from 'Store';
import { useAdminExistingProductsActions } from 'hooks';
import AdminItem from '../../AdminItem';

interface Props extends Product {}

const ExistingProductItem: React.FC<Props> = props => {
  const { updateProduct } = useAdminExistingProductsActions();
  const {
    name,
    imgUrls: { base }
  } = props;

  return <AdminItem name={name} imgUrl={base[0]} saveFunction={updateProduct} product={props} />;
};

export default ExistingProductItem;

ExistingProductItem.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrls: PropTypes.any.isRequired
};
