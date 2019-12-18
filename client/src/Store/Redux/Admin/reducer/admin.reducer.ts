import { PrintfulProduct, Product } from 'Store/types';
import {
  ConvertedProduct,
  AdminActions,
  REQUEST_READ_NEW_PRODUCTS,
  SUCCESS_READ_NEW_PRODUCTS,
  FAIL_READ_NEW_PRODUCTS,
  REQUEST_READ_EXISTING_PRODUCTS,
  SUCCESS_READ_EXISTING_PRODUCTS,
  FAIL_READ_EXISTING_PRODUCTS,
  ADD_PRODUCT,
  UPDATE_PRODUCT
} from '../admin.types';

export interface AdminState {
  newProducts: PrintfulProduct[];
  productsToAdd: ConvertedProduct[];
  existingProducts: Product[];
  productsToUpdate: Product[];
  loading: {
    newProducts: boolean;
    existingProducts: boolean;
  };
  errorMessage: {
    newProducts?: string;
    existingProducts?: string;
  };
}
export const initialState: AdminState = {
  newProducts: [],
  productsToAdd: [],
  existingProducts: [],
  productsToUpdate: [],
  loading: {
    newProducts: false,
    existingProducts: false
  },
  errorMessage: {}
};

export default (state = initialState, action: AdminActions): AdminState => {
  switch (action.type) {
    //* New Products
    case REQUEST_READ_NEW_PRODUCTS:
      /*
      Remove any currently saved newProducts
      Set loading.newProducts => true
      */
      return { ...state, newProducts: [], loading: { ...state.loading, newProducts: true } };
    case SUCCESS_READ_NEW_PRODUCTS:
      /*
      Set newProducts to payload
      Set loading.newProducts => false
      */
      return { ...state, newProducts: action.payload, loading: { ...state.loading, newProducts: false } };
    case FAIL_READ_NEW_PRODUCTS:
      /*
      Set errorMessage.newProducts to payload
      Set loading.newProducts => false
      */
      return {
        ...state,
        errorMessage: { ...state.errorMessage, newProducts: action.payload },
        loading: { ...state.loading, newProducts: false }
      };

    //* Existing Products
    case REQUEST_READ_EXISTING_PRODUCTS:
      /*
      Remove any currently saved existingProducts
      Set loading.exsitingProducts => false
      */
      return { ...state, existingProducts: [], loading: { ...state.loading, existingProducts: true } };
    case SUCCESS_READ_EXISTING_PRODUCTS:
      /*
      Set existingProducts to payload
      Set loading.existingProducts => false
      */
      return { ...state, existingProducts: action.payload, loading: { ...state.loading, existingProducts: false } };
    case FAIL_READ_EXISTING_PRODUCTS:
      /*
      Set errorMessage.existingProducts to payload
      Set loading.existingProducts => false
      */
      return {
        ...state,
        errorMessage: { ...state.errorMessage, existingProducts: action.payload },
        loading: { ...state.loading, existingProducts: false }
      };

    //* Stage Changes
    case ADD_PRODUCT:
      /*
      Adds payload to array of products to add to database
      */
      return { ...state, productsToAdd: [...state.productsToAdd, action.payload] };
    case UPDATE_PRODUCT:
      /*
      Adds payload to array of products to update in database
      */
      return { ...state, productsToUpdate: [...state.productsToUpdate, action.payload] };
    default:
      return state;
  }
};
