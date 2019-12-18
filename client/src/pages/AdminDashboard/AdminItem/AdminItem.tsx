import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ProductCategories, Product, PrintfulProduct, AddProduct, UpdateProduct } from 'Store';
import { lighterGrey, spacing } from 'utils';
import UpdateProductForm from './UpdateProductForm';

interface Props {
  name: string;
  imgUrl: string;
  product: Product | PrintfulProduct;
  saveFunction: (arg0: any) => AddProduct | UpdateProduct;
  price?: number;
  category?: ProductCategories;
}

const AdminItem: React.FC<Props> = ({ name, imgUrl, product, saveFunction }) => (
  <Wrapper>
    <Name>{name}</Name>
    <Image src={imgUrl} alt={name} />

    <UpdateProductForm product={product} saveFunction={saveFunction} />
  </Wrapper>
);

export default AdminItem;

const Wrapper = styled.article`
  background: ${lighterGrey};
  padding: ${spacing.md};
  margin-block-start: ${spacing.md};
  display: grid;
  grid-gap: ${spacing.sm};
  grid-template-rows: repeat(3, max-content);
  grid-template-areas:
    'name'
    'image'
    'form';

  @media screen and (min-width: 992px) {
    grid-template-rows: repeat(2, max-content);
    grid-template-columns: max-content 1fr max-content;
    grid-template-areas:
      'name name name'
      'image . form';
  }
`;

const Name = styled.h3`
  grid-area: name;
`;

const Image = styled.img`
  grid-area: image;

  height: 13rem;
  justify-self: center;
`;

AdminItem.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  product: PropTypes.any.isRequired,
  saveFunction: PropTypes.func.isRequired
};
