import { registerApi, loginApi } from "../../api/user";

const user = {
  namespaced: true,
  actions: {
    async actionRegister(context, payload) {
      const res = await registerApi(payload);
      return res;
    },

    async actionLogin(context, payload) {
      const res = await loginApi(payload);
      return res;
    },
  },
};

export default user;
