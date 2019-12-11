import { Action, PrintfulProduct, Product, ProductCategories } from 'Store/types';

//* Admin Action Types
export const ADD_PRODUCT = 'Admin/ADD_PRODUCT';
export const UPDATE_PRODUCT = 'Admin/UPDATE_PRODUCT';
export const SAVE_NEW_PRODUCTS = 'Admin/SAVE_NEW_PRODUCTS';
export const SAVE_UPDATES = 'Admin/SAVE_UPDATES';

//* Admin Actions
export interface AddProduct extends Action {
  type: typeof ADD_PRODUCT;
  payload: PrintfulProduct;
}
export interface UpdateProduct extends Action {
  type: typeof UPDATE_PRODUCT;
  payload: {
    product: Product;
    category: ProductCategories;
    price: number;
  };
}
export interface SaveNewProducts extends Action {
  type: typeof SAVE_NEW_PRODUCTS;
}
export interface SaveUpdates extends Action {
  type: typeof SAVE_UPDATES;
}

export type AdminActions = AddProduct | UpdateProduct | SaveNewProducts | SaveUpdates;
