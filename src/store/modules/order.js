import { createOrder } from "../../api/order";

const order = {
  namespaced: true,
  actions: {
    async actionOrderProduct(context, payload) {
      const res = await createOrder(payload);
      return res;
    },
  },
};

export default order;
