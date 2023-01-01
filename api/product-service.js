import axios from "axios";

const API_URL = "https://6222994f666291106a29f999.mockapi.io/api/v1/products/";

const getProducts = async () => {
  return await axios.get(API_URL);
};

const getProduct = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

const productServise = {
  getProducts,
  getProduct,
};

export default productServise;
