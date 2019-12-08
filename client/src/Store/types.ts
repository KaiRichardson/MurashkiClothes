//! Depricated, do not use
export interface ProductProps {
  id: string;
  title: string;
  price: number;
  discount?: number;
  img: string;
}

export interface PrintfulProductVariant {
  variant_id: number;
  retail_price: string;
  name: string;
  color: string;
  size: string;
}

export interface Action<T = any> {
  type: T;
}

/* Product Data Types */
export type ProductCategories = 'men' | 'women' | 'children';

// Product in Murashki Database
export interface Product {
  _id?: string;
  _extID: number;
  category: ProductCategories;
  name: string;
  imgUrls: {
    base: string[];
    side: string[];
  };
  price: number;
}

// Product in Printful Database
export interface Variant {
  variant_id: string;
  name: string;
  color: string;
  size: string;
  quantity?: number;
}

// Admin Use Only
export interface PrintfulProduct {
  external_id: string;
  id: number;
  name: string;
  synced: number;
  thumbnail_url: string;
  variants: number;
}

/* User Data Types */
export interface User {
  _id: string;
  username: string;
  email: string;
  stripeToken?: string;
  orders: string[];
  address?: Address;
  cart: Variant[];
}

export interface Address {
  name: string;
  address1: string;
  address2?: string;
  city: string;
  company?: string;
  state_code: string;
  state_name: string;
  country_code: string;
  country_name: string;
  phone?: string;
  zip: string;
}
