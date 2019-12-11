import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

import { PrintfulProduct, ProductCategories, Product } from 'Store/types';
import * as actions from './admin.actions';
import * as types from '../admin.types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Redux Admin Action Creator tests', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('should create an action to request to read new products from Printful and a success action', () => {
    //* Arrange
    const store = mockStore();
    const apiResponse: PrintfulProduct[] = [
      {
        /* eslint-disable */
        id: 142621663,
        external_id: '5dcf0b2972a144',
        name: 'JavaScript is !Cool',
        variants: 28,
        synced: 28,
        thumbnail_url: 'https://files.cdn.printful.com/files/ba1/ba13faa1332b7f18ec847cb9f4d79868_preview.png'
        /* eslint-enable */
      }
    ];
    const expectedActions: types.AdminActions[] = [
      {
        type: types.REQUEST_READ_NEW_PRODUCTS
      },
      {
        type: types.SUCCESS_READ_NEW_PRODUCTS,
        payload: apiResponse
      }
    ];

    //* Act
    fetchMock.once('/api/products/admin/add', {
      body: apiResponse
    });

    //* Assert
    //@ts-ignore
    return store.dispatch(actions.readNewProducts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create an action to request to read new products from Printful and a fail action', () => {
    //* Arrange
    const store = mockStore();
    const expectedActions: types.AdminActions[] = [
      {
        type: types.REQUEST_READ_NEW_PRODUCTS
      },
      {
        type: types.FAIL_READ_NEW_PRODUCTS,
        payload: 'Oops, something went wrong'
      }
    ];

    //* Act
    fetchMock.once('/api/products/admin/add', {
      throws: Error('Oops, something went wrong')
    });

    //* Assert
    //@ts-ignore
    return store.dispatch(actions.readNewProducts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create a request action to read existing products from the database and a success action', () => {
    //* Arrange
    const store = mockStore();
    const apiResponse: Product[] = [
      {
        _extID: 142621663,
        category: 'men',
        name: 'JavaScript is !Cool',
        imgUrls: {
          base: ['https://files.cdn.printful.com/files/ba1/ba13faa1332b7f18ec847cb9f4d79868_preview.png'],
          side: []
        },
        price: 33
      }
    ];
    const expectedActions: types.AdminActions[] = [
      {
        type: types.REQUEST_READ_EXISTING_PRODUCTS
      },
      {
        type: types.SUCCESS_READ_EXISTING_PRODUCTS,
        payload: apiResponse
      }
    ];

    //* Act
    fetchMock.once('/api/products/admin/edit', {
      body: apiResponse
    });

    //* Assert
    //@ts-ignore
    return store.dispatch(actions.readExistingProducts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create an action to request to read existing products from the database and a fail action', () => {
    //* Arrange
    const store = mockStore();
    const expectedActions: types.AdminActions[] = [
      {
        type: types.REQUEST_READ_EXISTING_PRODUCTS
      },
      {
        type: types.FAIL_READ_EXISTING_PRODUCTS,
        payload: 'Oops, something went wrong'
      }
    ];

    //* Act
    fetchMock.once('/api/products/admin/edit', {
      throws: Error('Oops, something went wrong')
    });

    //* Assert
    //@ts-ignore
    return store.dispatch(actions.readExistingProducts()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should create an action to add a new product', () => {
    //* Arrange
    const testData: { product: PrintfulProduct; category: ProductCategories; price: number } = {
      product: {
        /* eslint-disable */
        id: 142621663,
        external_id: '5dcf0b2972a144',
        name: 'JavaScript is !Cool',
        variants: 28,
        synced: 28,
        thumbnail_url: 'https://files.cdn.printful.com/files/ba1/ba13faa1332b7f18ec847cb9f4d79868_preview.png'
        /* eslint-enable */
      },
      category: 'men',
      price: 33
    };
    const expectedAction: types.AddProduct = {
      type: types.ADD_PRODUCT,
      payload: new types.ConvertedProduct(testData.product, testData.category, testData.price)
    };

    //* Assert
    expect(actions.addNewProduct({ ...testData })).toEqual(expectedAction);
  });

  it('should create an action to update an existing product', () => {
    //* Arrange
    const testData: { product: Product; price: number } = {
      product: {
        _extID: 142621663,
        category: 'men',
        name: 'JavaScript is !Cool',
        imgUrls: {
          base: ['https://files.cdn.printful.com/files/ba1/ba13faa1332b7f18ec847cb9f4d79868_preview.png'],
          side: []
        },
        price: 33
      },
      price: 55.1
    };
    const updatedProduct: Product = {
      _extID: 142621663,
      category: 'men',
      name: 'JavaScript is !Cool',
      imgUrls: {
        base: ['https://files.cdn.printful.com/files/ba1/ba13faa1332b7f18ec847cb9f4d79868_preview.png'],
        side: []
      },
      price: 55.1
    };
    const expectedAction: types.UpdateProduct = {
      type: types.UPDATE_PRODUCT,
      payload: updatedProduct
    };

    //* Assert
    expect(actions.updateProduct({ product: testData.product, price: testData.price })).toEqual(expectedAction);
  });
});
