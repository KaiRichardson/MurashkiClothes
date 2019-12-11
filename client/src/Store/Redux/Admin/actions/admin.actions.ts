import { Dispatch } from 'redux';

import { PrintfulProduct, ProductCategories, Product } from 'Store/types';
import {
  ConvertedProduct,
  RequestReadNewProducts,
  SuccessReadNewProducts,
  FailReadNewProducts,
  RequestReadExistingProducts,
  SuccessReadExistingProducts,
  FailReadExistingProducts,
  AddProduct,
  UpdateProduct,
  REQUEST_READ_NEW_PRODUCTS,
  SUCCESS_READ_NEW_PRODUCTS,
  FAIL_READ_NEW_PRODUCTS,
  REQUEST_READ_EXISTING_PRODUCTS,
  SUCCESS_READ_EXISTING_PRODUCTS,
  FAIL_READ_EXISTING_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT
} from '../admin.types';

export const readNewProducts = () => async (
  dispatch: Dispatch<RequestReadNewProducts | SuccessReadNewProducts | FailReadNewProducts>
): Promise<SuccessReadNewProducts | FailReadNewProducts> => {
  dispatch({ type: REQUEST_READ_NEW_PRODUCTS });

  try {
    const response: Response = await fetch('/api/products/admin/add', {
      method: 'GET'
    });
    const data: PrintfulProduct[] = await response.json();

    return dispatch({ type: SUCCESS_READ_NEW_PRODUCTS, payload: data });
  } catch (err) {
    return dispatch({ type: FAIL_READ_NEW_PRODUCTS, payload: err.message });
  }
};

export const readExistingProducts = () => async (
  dispatch: Dispatch<RequestReadExistingProducts | SuccessReadExistingProducts | FailReadExistingProducts>
): Promise<SuccessReadExistingProducts | FailReadExistingProducts> => {
  dispatch({ type: REQUEST_READ_EXISTING_PRODUCTS });

  try {
    const response: Response = await fetch('/api/products/admin/edit', {
      method: 'GET'
    });
    const data: Product[] = await response.json();

    return dispatch({ type: SUCCESS_READ_EXISTING_PRODUCTS, payload: data });
  } catch (err) {
    return dispatch({ type: FAIL_READ_EXISTING_PRODUCTS, payload: err.message });
  }
};

export const addNewProduct = ({
  product,
  category,
  price
}: {
  product: PrintfulProduct;
  category: ProductCategories;
  price: number;
}): AddProduct => ({
  type: ADD_PRODUCT,
  payload: new ConvertedProduct(product, category, price)
});

export const updateProduct = ({
  product,
  price = product.price,
  category = product.category
}: {
  product: Product;
  price?: number;
  category?: ProductCategories;
}): UpdateProduct => ({
  type: UPDATE_PRODUCT,
  payload: { ...product, price, category }
});
