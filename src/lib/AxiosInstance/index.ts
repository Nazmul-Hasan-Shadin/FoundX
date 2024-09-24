import axios from "axios";
import envConfig from "@/src/config/envConfig";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API || "http://localhost:5000/api/v1",
});

export default axiosInstance;
