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
  newProducts: {
    _status: 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';
    _error?: string;
    newProducts: PrintfulProduct[];
    productsToAdd: ConvertedProduct[];
  };
  existingProducts: {
    _status: 'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR';
    _error?: string;
    existingProducts: Product[];
    productsToUpdate: Product[];
  };
}
export const initialState: AdminState = {
  newProducts: {
    _status: 'IDLE',
    _error: undefined,
    newProducts: [],
    productsToAdd: []
  },
  existingProducts: {
    _status: 'IDLE',
    _error: undefined,
    existingProducts: [],
    productsToUpdate: []
  }
};

/*
  The rule `no-fallthrough` has been disabled
  because the ability to fall through to the next case is intentional
*/
/* eslint no-fallthrough: 0 */
export default (state = initialState, action: AdminActions): AdminState => {
  //* New Products
  switch (state.newProducts._status) {
    case 'IDLE':
    case 'ERROR':
      switch (action.type) {
        case REQUEST_READ_NEW_PRODUCTS:
          /*
            Set _status => 'LOADING'
            Remove any currently saved newProducts
            Remove any existing error message
          */
          return {
            ...state,
            newProducts: {
              ...state.newProducts,
              _status: 'LOADING',
              _error: undefined,
              newProducts: []
            }
          };

        default:
          break;
      }

    case 'LOADING':
      switch (action.type) {
        case SUCCESS_READ_NEW_PRODUCTS:
          /*
            Set _status => 'SUCCESS'
            Set newProducts to payload
         */
          return {
            ...state,
            newProducts: {
              ...state.newProducts,
              _status: 'SUCCESS',
              newProducts: action.payload
            }
          };

        case FAIL_READ_NEW_PRODUCTS:
          /*
            Set _status => 'ERROR'
            Set _error to payload
          */
          return {
            ...state,
            newProducts: {
              ...state.newProducts,
              _status: 'ERROR',
              _error: action.payload
            }
          };

        default:
          break;
      }

    case 'SUCCESS':
      switch (action.type) {
        case ADD_PRODUCT:
          /*
            Adds payload to array of products to add to database
          */
          return {
            ...state,
            newProducts: {
              ...state.newProducts,
              productsToAdd: [...state.newProducts.productsToAdd, action.payload]
            }
          };

        default:
          break;
      }

    /*
      Default case breaks instead of returning state 
      to allow actions to fall into Existing Products switch
    */
    default:
      break;
  }

  //* Existing Products
  switch (state.existingProducts._status) {
    case 'IDLE':
    case 'ERROR':
      switch (action.type) {
        case REQUEST_READ_EXISTING_PRODUCTS:
          /*
            Set _status => 'LOADING' 
            Remove any currently saved existingProducts
            Remove any existing error message
          */
          return {
            ...state,
            existingProducts: {
              ...state.existingProducts,
              _status: 'LOADING',
              _error: undefined,
              existingProducts: []
            }
          };

        default:
          break;
      }

    case 'LOADING':
      switch (action.type) {
        case SUCCESS_READ_EXISTING_PRODUCTS:
          /*
            Set _status => 'SUCCESS' 
            Set existingProducts to payload
          */
          return {
            ...state,
            existingProducts: {
              ...state.existingProducts,
              _status: 'SUCCESS',
              existingProducts: action.payload
            }
          };

        case FAIL_READ_EXISTING_PRODUCTS:
          /*
            Set _status => 'ERROR'
            Set _error to payload
          */
          return {
            ...state,
            existingProducts: {
              ...state.existingProducts,
              _status: 'ERROR',
              _error: action.payload
            }
          };

        default:
          break;
      }

    case 'SUCCESS':
      switch (action.type) {
        case UPDATE_PRODUCT:
          /*
            Adds payload to array of products to update in database
          */
          return {
            ...state,
            existingProducts: {
              ...state.existingProducts,
              productsToUpdate: [...state.existingProducts.productsToUpdate, action.payload]
            }
          };

        default:
          break;
      }

    default:
      return state;
  }
};
