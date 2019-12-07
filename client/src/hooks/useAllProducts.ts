import { useProductCategory } from './useProductCategory';

export const useAllProducts = () => {
  const mensProducts = useProductCategory('men');
  const womensProducts = useProductCategory('women');
  const childrensProducts = useProductCategory('children');

  return { mensProducts, womensProducts, childrensProducts };
};
