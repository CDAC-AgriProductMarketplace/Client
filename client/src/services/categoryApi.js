import axios from "axios";

const BASE_URL = "http://localhost:8081/api/products/categories";

export const getAllCategories = async () => {
    const response = await axios.get(`${BASE_URL}/`);
    return response.data;
};

export const getCategoryById = async (categoryId) => {
    const response = await axios.get(`${BASE_URL}/${categoryId}`);
    return response.data;
};
