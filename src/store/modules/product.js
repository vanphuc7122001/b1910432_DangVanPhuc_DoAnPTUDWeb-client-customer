import { getAllProductApi } from "../../api/product";
// addProductApi
const product = {
  namespaced: true,
  state() {
    return {
      productList: [],
    };
  },
  mutations: {
    getAllProductMutations(state, payload) {
      state.productList = payload;
    },
  },
  actions: {
    async actionGetAllProduct(context) {
      const payload = await getAllProductApi();
      context.commit("getAllProductMutations", payload.data);
    },
  },
};

export default product;
