import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  StoreState,
  Product,
  PrintfulProduct,
  ProductCategories,
  readNewProducts as rNP,
  addNewProduct as aNP,
  readExistingProducts as rEP,
  updateProduct as uP
} from 'Store';

/*
  Combines all Redux Admin Actions and State selectors into one hook,
  likely will not be needed but could be used in a future feature
*/
export const useAdmin = () => {
  const adminState = useAdminState();
  const adminActions = useAdminActions();

  return {
    ...adminState,
    ...adminActions
  };
};

/*
  Combines all state selectors
*/
export const useAdminState = () => {
  const newProductsState = useAdminNewProductsState();
  const existingProductsState = useAdminExistingProductsState();

  return {
    ...newProductsState,
    ...existingProductsState
  };
};

/*
  Combines all action dispatchers
*/
export const useAdminActions = () => {
  const newProductsActions = useAdminNewProductsActions();
  const existingProductsActions = useAdminExistingProductsActions();

  return {
    ...newProductsActions,
    ...existingProductsActions
  };
};

/*
  Creates selectors for each piece of admin state related to New Products feature
*/
export const useAdminNewProductsState = () => {
  /*
    Selects products that exist in Printful but not Murashki
  */
  const newProducts = useSelector((state: StoreState) => state.admin.newProducts.newProducts);

  /*
    Selects products that have been updated and are ready to be saved to Murashki
  */
  const productsToAdd = useSelector((state: StoreState) => state.admin.newProducts.productsToAdd);

  /*
    Selects the _status of the newProducts
    Returns 'IDLE', 'LOADING', 'SUCCESS', or 'ERROR'
  */
  const newProductsLoading = useSelector((state: StoreState) => state.admin.newProducts._status);

  /*
    Selects error message relating to loading of new products (if one exists)
  */
  const newProductsErrorMessage = useSelector((store: StoreState) => store.admin.newProducts._error);

  return {
    newProducts,
    productsToAdd,
    newProductsLoading,
    newProductsErrorMessage
  };
};

/*
  Creates selectors for each piece of admin state related to Existing Products feature
*/
export const useAdminExistingProductsState = () => {
  /*
    Selects products that exist in Murashki
  */
  const existingProducts = useSelector((state: StoreState) => state.admin.existingProducts.existingProducts);

  /*
    Selects products that have been changed and are ready to be resaved
  */
  const productsToUpdate = useSelector((state: StoreState) => state.admin.existingProducts.productsToUpdate);

  /*
    Selects _status of existingProducts
    Returns 'IDLE', 'LOADING', 'SUCCESS', or 'ERROR'

  */
  const existingProductsLoading = useSelector((state: StoreState) => state.admin.existingProducts._status);

  /*
    Selects error message relating to loading of existing products (if one exists)
  */
  const existingProductsErrorMessage = useSelector((store: StoreState) => store.admin.existingProducts._error);

  return {
    existingProducts,
    productsToUpdate,
    existingProductsLoading,
    existingProductsErrorMessage
  };
};

/*
  Creates functions for dispatching actions to modify newProducts state
*/
export const useAdminNewProductsActions = () => {
  const dispatch = useDispatch();
  const productsToAdd = useSelector((state: StoreState) => state.admin.newProducts.productsToAdd);

  /*
    Dispatches an action to read new products from Printful
  */
  const readNewProducts = () => dispatch(rNP());

  /*
    Dispatches an action to add a new product to list of products
    that are ready to be saved in Murashki's DB
  */
  const addNewProduct = ({
    product,
    category,
    price
  }: {
    product: PrintfulProduct;
    category: ProductCategories;
    price: number;
  }) => dispatch(aNP({ product, price, category }));

  /*
    Saves list of products to DB
    TODO: Empty productsToAdd
  */
  const saveNewProductsToDatabase = async () => {
    try {
      await fetch('/api/products/admin/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ productsToAdd })
      });

      // TODO: Handle Response
    } catch (err) {
      console.log(err);
    }
  };

  return {
    readNewProducts,
    addNewProduct,
    saveNewProductsToDatabase
  };
};

/*
  Creates functions for dispatching actions to modify existingProducts state
*/
export const useAdminExistingProductsActions = () => {
  const dispatch = useDispatch();
  const productsToUpdate = useSelector((store: StoreState) => store.admin.existingProducts.productsToUpdate);

  /*
    Dispatches an action to read existing products from Murashki's DB
  */
  const readExistingProducts = () => dispatch(rEP());

  /*
    Dispatches an action to create a new object with optionally updated price and category
  */
  const updateProduct = ({
    product,
    price,
    category
  }: {
    product: Product;
    price?: number;
    category?: ProductCategories;
  }) => dispatch(uP({ product, price, category }));

  /*
    Saves changes to Murashki's DB
    TODO: empty productsToUpdate
  */
  const saveUpdatedProductsToDatabase = async () => {
    try {
      await fetch('/api/products/admin/edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({ productsToUpdate })
      });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    readExistingProducts,
    updateProduct,
    saveUpdatedProductsToDatabase
  };
};

/*
  Dispatches an action to readNewProducts effect when components mounts to the DOM
*/
export const useReadNewProductsOnMount = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(rNP());
  }, [dispatch]);
};

/*
  Dispatches an action to readExistingProducts effect when components mounts to the DOM
*/
export const useReadExistingProductsOnMount = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(rEP());
  }, [dispatch]);
};
