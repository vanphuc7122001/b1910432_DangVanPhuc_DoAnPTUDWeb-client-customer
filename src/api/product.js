import axios from "axios";

export const addProductApi = async (product) => {
  const respone = await axios({
    method: "POST",
    url: "http://localhost:9000/api/v1/product",
    data: product,
  });
  return respone.data;
};

export const getAllProductApi = async () => {
  const respone = await axios({
    method: "GET",
    url: "http://localhost:9000/api/v1/product",
  });
  return respone.data;
};

export const getProductByNameAPi = async (name) => {
  const respone = await axios({
    method: "GET",
    url: `http://localhost:9000/api/v1/product/search?name=${name}`,
  });
  return respone.data;
};

export const getDetailProductApi = async (id) => {
  const respone = await axios({
    method: "GET",
    url: `http://localhost:9000/api/v1/product/${id}`,
  });
  return respone.data;
};

export const deleteProductApi = async (id) => {
  const res = await axios({
    method: "DELETE",
    url: `http://localhost:9000/api/v1/product/${id}`,
  });
  return res.data;
};

export const updateProductApi = async (product) => {
  const res = await axios({
    method: "PUT",
    url: `http://localhost:9000/api/v1/product/${product._id}`,
    data: product,
  });
  return res.data;
};
