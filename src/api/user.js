import axios from "axios";

export const registerApi = async (user) => {
  const respone = await axios({
    method: "POST",
    url: "http://localhost:9000/api/v1/user/register",
    data: user,
  });
  return respone.data;
};

export const loginApi = async (user) => {
  const respone = await axios({
    method: "POST",
    url: "http://localhost:9000/api/v1/user/login",
    data: user,
  });
  return respone.data;
};
