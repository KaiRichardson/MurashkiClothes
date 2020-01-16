import { PrintfulProduct, Product, ProductCategories } from 'Store/types';
import reducer, { AdminState, initialState as reducerInitialState } from './admin.reducer';
import * as types from '../admin.types';

describe('adminReducer tests', () => {
  it(`should handle ${types.REQUEST_READ_NEW_PRODUCTS}`, () => {
    //* Arrange
    const initialState: AdminState = reducerInitialState;
    const expectedState: AdminState = {
      ...initialState,
      newProducts: { ...initialState.newProducts, _status: 'LOADING' }
    };

    //* Act
    const result = reducer(initialState, { type: types.REQUEST_READ_NEW_PRODUCTS });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.SUCCESS_READ_NEW_PRODUCTS}`, () => {
    //* Arrange
    const testData: PrintfulProduct[] = [
      {
        id: 142621663,
        external_id: '5dcf0b2972a144',
        name: 'JavaScript is !Cool',
        variants: 28,
        synced: 28,
        thumbnail_url: 'https://files.cdn.printful.com/files/ba1/ba13faa1332b7f18ec847cb9f4d79868_preview.png'
      }
    ];
    const initialState: AdminState = {
      ...reducerInitialState,
      newProducts: { ...reducerInitialState.newProducts, _status: 'LOADING' }
    };
    const expectedState: AdminState = {
      ...initialState,
      newProducts: {
        ...reducerInitialState.newProducts,
        _status: 'SUCCESS',
        newProducts: testData
      }
    };

    //* Act
    const result = reducer(initialState, { type: types.SUCCESS_READ_NEW_PRODUCTS, payload: testData });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.FAIL_READ_NEW_PRODUCTS}`, () => {
    //* Arrange
    const testData = 'Oops, something went wrong';
    const initialState: AdminState = {
      ...reducerInitialState,
      newProducts: { ...reducerInitialState.newProducts, _status: 'LOADING' }
    };
    const expectedState: AdminState = {
      ...initialState,
      newProducts: {
        ...reducerInitialState.newProducts,
        _status: 'ERROR',
        _error: testData
      }
    };

    //* Act
    const result = reducer(initialState, { type: types.FAIL_READ_NEW_PRODUCTS, payload: testData });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.REQUEST_READ_EXISTING_PRODUCTS}`, () => {
    //* Arrange
    const initialState: AdminState = reducerInitialState;
    const expectedState: AdminState = {
      ...initialState,
      existingProducts: {
        ...initialState.existingProducts,
        _status: 'LOADING'
      }
    };

    //* Act
    const result = reducer(initialState, {
      type: types.REQUEST_READ_EXISTING_PRODUCTS
    });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.SUCCESS_READ_EXISTING_PRODUCTS}`, () => {
    //* Arrange
    const testData: Product[] = [
      {
        _extID: 142621663,
        category: 'MENS',
        name: 'JavaScript is !Cool',
        imgUrls: {
          base: ['https://files.cdn.printful.com/files/ba1/ba13faa1332b7f18ec847cb9f4d79868_preview.png'],
          side: []
        },
        price: 33
      }
    ];
    const initialState: AdminState = {
      ...reducerInitialState,
      existingProducts: {
        ...reducerInitialState.existingProducts,
        _status: 'LOADING'
      }
    };
    const expectedState: AdminState = {
      ...initialState,
      existingProducts: {
        ...initialState.existingProducts,
        _status: 'SUCCESS',
        existingProducts: testData
      }
    };

    //* Act
    const result = reducer(initialState, { type: types.SUCCESS_READ_EXISTING_PRODUCTS, payload: testData });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.FAIL_READ_EXISTING_PRODUCTS}`, () => {
    //* Arrange
    const testData = 'Oops, something went wrong';
    const initialState: AdminState = {
      ...reducerInitialState,
      existingProducts: {
        ...reducerInitialState.existingProducts,
        _status: 'LOADING'
      }
    };
    const expectedState: AdminState = {
      ...initialState,
      existingProducts: {
        ...initialState.existingProducts,
        _status: 'ERROR',
        _error: testData
      }
    };

    //* Act
    const result = reducer(initialState, { type: types.FAIL_READ_EXISTING_PRODUCTS, payload: testData });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.ADD_PRODUCT}`, () => {
    //* Arrange

    const testData = new types.ConvertedProduct(
      {
        external_id: '142621663',
        name: 'JavaScript is !Cool',
        thumbnail_url: 'https://files.cdn.printful.com/files/ba1/ba13faa1332b7f18ec847cb9f4d79868_preview.png',
        id: 33,
        variants: 5510,
        synced: 5510
      },
      'MENS',
      33
    );
    const initialState: AdminState = reducerInitialState;
    const expectedState: AdminState = {
      ...initialState,
      newProducts: {
        ...initialState.newProducts,
        productsToAdd: [...initialState.newProducts.productsToAdd, testData]
      }
    };

    //* Act
    const result = reducer(initialState, { type: types.ADD_PRODUCT, payload: testData });

    //* Assert
    expect(result).toEqual(expectedState);
  });

  it(`should handle ${types.UPDATE_PRODUCT}`, () => {
    //* Arrange
    const testData: { product: Product; category: ProductCategories } = {
      product: {
        _extID: 142621663,
        category: 'MENS',
        name: 'JavaScript is !Cool',
        imgUrls: {
          base: ['https://files.cdn.printful.com/files/ba1/ba13faa1332b7f18ec847cb9f4d79868_preview.png'],
          side: []
        },
        price: 33
      },
      category: 'WOMENS'
    };
    const initialState: AdminState = {
      ...reducerInitialState,
      existingProducts: {
        ...reducerInitialState.existingProducts,
        existingProducts: [testData.product]
      }
    };
    const expectedState: AdminState = {
      ...initialState,
      existingProducts: {
        ...initialState.existingProducts,
        productsToUpdate: [
          ...initialState.existingProducts.productsToUpdate,
          { ...testData.product, category: testData.category }
        ]
      }
    };

    //* Act
    const result = reducer(initialState, {
      type: types.UPDATE_PRODUCT,
      payload: { ...testData.product, category: testData.category }
    });

    //* Assert
    expect(result).toEqual(expectedState);
  });
});
