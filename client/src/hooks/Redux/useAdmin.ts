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

export const useAdmin = () => {
  const adminState = useAdminState();
  const adminActions = useAdminActions();

  return {
    ...adminState,
    ...adminActions
  };
};

export const useAdminState = () => {
  const newProductsState = useAdminNewProductsState();
  const existingProductsState = useAdminExistingProductsState();

  return {
    ...newProductsState,
    ...existingProductsState
  };
};

export const useAdminActions = () => {
  const newProductsActions = useAdminNewProductsActions();
  const existingProductsActions = useAdminExistingProductsActions();

  return {
    ...newProductsActions,
    ...existingProductsActions
  };
};

export const useAdminNewProductsState = () => {
  const newProducts = useSelector((state: StoreState) => state.admin.newProducts);
  const productsToAdd = useSelector((state: StoreState) => state.admin.productsToAdd);
  const newProductsLoading = useSelector((state: StoreState) => state.admin.loading.newProducts);
  const newProductsErrorMessage = useSelector((store: StoreState) => store.admin.errorMessage.newProducts);

  return {
    newProducts,
    productsToAdd,
    newProductsLoading,
    newProductsErrorMessage
  };
};

export const useAdminExistingProductsState = () => {
  const existingProducts = useSelector((state: StoreState) => state.admin.existingProducts);
  const productsToUpdate = useSelector((state: StoreState) => state.admin.productsToUpdate);
  const existingProductsLoading = useSelector((state: StoreState) => state.admin.loading.existingProducts);
  const existingProductsErrorMessage = useSelector((store: StoreState) => store.admin.errorMessage.existingProducts);

  return {
    existingProducts,
    productsToUpdate,
    existingProductsLoading,
    existingProductsErrorMessage
  };
};

export const useAdminNewProductsActions = () => {
  const dispatch = useDispatch();
  const { productsToAdd } = useAdminNewProductsState();

  const readNewProducts = () => dispatch(rNP());
  const addNewProduct = ({
    product,
    category,
    price
  }: {
    product: PrintfulProduct;
    category: ProductCategories;
    price: number;
  }) => dispatch(aNP({ product, price, category }));
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

export const useAdminExistingProductsActions = () => {
  const dispatch = useDispatch();
  const { productsToUpdate } = useAdminExistingProductsState();

  const readExistingProducts = () => dispatch(rEP());
  const updateProduct = ({
    product,
    price,
    category
  }: {
    product: Product;
    price?: number;
    category?: ProductCategories;
  }) => dispatch(uP({ product, price, category }));
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

export const useReadNewProductsOnLoad = () => {
  const { readNewProducts } = useAdminNewProductsActions();

  useEffect(() => {
    readNewProducts();
  }, [readNewProducts]);
};

export const useReadExistingProductsOnLoad = () => {
  const { readExistingProducts } = useAdminExistingProductsActions();

  useEffect(() => {
    readExistingProducts();
  }, [readExistingProducts]);
};
