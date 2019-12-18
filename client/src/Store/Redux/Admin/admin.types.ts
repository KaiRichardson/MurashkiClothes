import { Action, PrintfulProduct, Product, ProductCategories } from 'Store/types';

//* Admin Action Types
export const REQUEST_READ_NEW_PRODUCTS = 'Admin/REQUEST_READ_NEW_PRODUCTS';
export const SUCCESS_READ_NEW_PRODUCTS = 'Admin/SUCCESS_READ_NEW_PRODUCTS';
export const FAIL_READ_NEW_PRODUCTS = 'Admin/FAIL_READ_NEW_PRODUCTS';

export const REQUEST_READ_EXISTING_PRODUCTS = 'Admin/REQUEST_READ_EXISTING_PRODUCTS';
export const SUCCESS_READ_EXISTING_PRODUCTS = 'Admin/SUCCESS_READ_EXISTING_PRODUCTS';
export const FAIL_READ_EXISTING_PRODUCTS = 'Admin/FAIL_READ_EXISTING_PRODUCTS';

export const ADD_PRODUCT = 'Admin/ADD_PRODUCT';
export const UPDATE_PRODUCT = 'Admin/UPDATE_PRODUCT';
export const SAVE_NEW_PRODUCTS = 'Admin/SAVE_NEW_PRODUCTS';
export const SAVE_UPDATES = 'Admin/SAVE_UPDATES';

/*
  For use in converting Printful Products to Products for storage in Murashki's DB
*/
export class ConvertedProduct implements Product {
  _id?: string;
  _extID: number;
  category: ProductCategories;
  name: string;
  imgUrls: { base: string[]; side: string[] };
  price: number;

  constructor(product: PrintfulProduct, category: ProductCategories, price: number) {
    this._extID = product.id;
    this.category = category;
    this.name = product.name;
    this.imgUrls = {
      base: [product.thumbnail_url],
      side: []
    };
    this.price = price;
  }
}

//* Admin Actions
export interface RequestReadNewProducts extends Action {
  type: typeof REQUEST_READ_NEW_PRODUCTS;
}
export interface SuccessReadNewProducts extends Action {
  type: typeof SUCCESS_READ_NEW_PRODUCTS;
  payload: PrintfulProduct[];
}
export interface FailReadNewProducts extends Action {
  type: typeof FAIL_READ_NEW_PRODUCTS;
  payload: string;
}
export interface RequestReadExistingProducts extends Action {
  type: typeof REQUEST_READ_EXISTING_PRODUCTS;
}
export interface SuccessReadExistingProducts extends Action {
  type: typeof SUCCESS_READ_EXISTING_PRODUCTS;
  payload: Product[];
}
export interface FailReadExistingProducts extends Action {
  type: typeof FAIL_READ_EXISTING_PRODUCTS;
  payload: string;
}
export interface AddProduct extends Action {
  type: typeof ADD_PRODUCT;
  payload: ConvertedProduct;
}
export interface UpdateProduct extends Action {
  type: typeof UPDATE_PRODUCT;
  payload: Product;
}
export interface SaveNewProducts extends Action {
  type: typeof SAVE_NEW_PRODUCTS;
}
export interface SaveUpdates extends Action {
  type: typeof SAVE_UPDATES;
}

export type AdminActions =
  | RequestReadNewProducts
  | SuccessReadNewProducts
  | FailReadNewProducts
  | RequestReadExistingProducts
  | SuccessReadExistingProducts
  | FailReadExistingProducts
  | AddProduct
  | UpdateProduct
  | SaveNewProducts
  | SaveUpdates;
