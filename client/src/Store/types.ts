//! Depricated, do not use
export interface ProductProps {
  id: string;
  title: string;
  price: number;
  discount?: number;
  img: string;
}

export interface PrintfulProduct {
  external_id: string;
  id: number;
  name: string;
  synced: number;
  thumbnail_url: string;
  variants: number;
}

export interface PrintfulProductVariant {
  variant_id: number;
  retail_price: string;
  name: string;
  color: string;
  size: string;
}

export interface User {
  id: string;
  username: string;
}

export interface Action<T = any> {
  type: T;
}
