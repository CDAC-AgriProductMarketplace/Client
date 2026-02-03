import axios from "axios";

const inventoryApi = axios.create({
  baseURL: "http://localhost:8081/api", // Spring Boot MS
  withCredentials: true, // optional (cookies / auth)
});

export default inventoryApi;
