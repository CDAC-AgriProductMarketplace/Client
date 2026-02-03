import api from './api';

export const getSubCategoriesByCategory = (categoryId) =>
  api.get(`/sub-categories/category/${categoryId}`);
