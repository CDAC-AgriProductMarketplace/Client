import inventoryApi from "./inventoryApi";

export const getAllCategories = () =>
  inventoryApi.get("/categories");
