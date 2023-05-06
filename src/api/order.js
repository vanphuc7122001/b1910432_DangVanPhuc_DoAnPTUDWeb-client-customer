import axios from "axios";

export const createOrder = async (order) => {
  const respone = await axios({
    method: "POST",
    url: "http://localhost:9000/api/v1/order",
    data: order,
  });
  return respone.data;
};
