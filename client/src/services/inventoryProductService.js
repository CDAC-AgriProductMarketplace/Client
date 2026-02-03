import inventoryApi from "./inventoryApi";

export const getAllProducts = () =>
  inventoryApi.get("/products");
