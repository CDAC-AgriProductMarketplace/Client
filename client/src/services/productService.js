import api from './api';

export const getProductsByCategory = (categoryId) =>
  api.get(`/products/category/${categoryId}`);

export const getProductsBySubCategory = (subCategoryId) =>
  api.get(`/products/sub-category/${subCategoryId}`);
