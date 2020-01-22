import React, { useState } from 'react';
import { useParams } from 'react-router';

import { useProductVariants, useUserActions } from 'hooks';
import { Breadcrumbs, LoadingSpinner, Button } from 'elements';
import OptionDropdown from './OptionDropdown';

interface Props {}

const Product: React.FC<Props> = () => {
  const { productid } = useParams();
  /*
    The following line is excluded from eslint to avoid the no-non-null-assertion rule because the component will never render without a productid from the route params
  */
  /* eslint-disable */
  const { name, status, colors, sizes, variants } = useProductVariants(parseInt(productid!));
  /* eslint-enable */
  const { addCartItem } = useUserActions();
  const [options, setOptions] = useState({ quantity: '', color: '', size: '' });

  const handleOptionChange = (prop: string, updatedValue: string) => {
    setOptions({ ...options, [prop]: updatedValue });
  };

  const selectVariant = () => {
    for (let i = 0; i < variants.length; i++) {
      const item = variants[i];
      if (item.color.trim() === options.color && item.size.trim() === options.size) {
        addCartItem({ quantity: parseInt(options.quantity), product: item });
      }
    }
  };

  return (
    <>
      {status === 'LOADING' || status === 'IDLE' ? (
        <LoadingSpinner />
      ) : (
        <>
          <Breadcrumbs productName={name} />
          <div style={{ display: 'flex' }}>
            <OptionDropdown name='quantity' options={['1', '2', '3', '4', '5']} handleChange={handleOptionChange} />
            <OptionDropdown name='color' options={colors} handleChange={handleOptionChange} />
            <OptionDropdown name='size' options={sizes} handleChange={handleOptionChange} />
          </div>

          <Button brand disabled={options.quantity === ''} onClick={selectVariant}>
            Add To Cart
          </Button>
        </>
      )}
    </>
  );
};

export default Product;
