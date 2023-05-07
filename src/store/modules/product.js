import { getAllProductApi, getProductByNameAPi } from "../../api/product";
// addProductApi
const product = {
  namespaced: true,
  state() {
    return {
      productList: [],
      productName: null,
    };
  },

  getters: {
    userListByGenDer(state) {},
  },
  mutations: {
    getAllProductMutations(state, payload) {
      state.productList = payload;
    },

    getProductByNameMutations(state, payload) {
      state.productName = payload;
    },
  },
  actions: {
    async actionGetAllProduct(context) {
      const payload = await getAllProductApi();
      context.commit("getAllProductMutations", payload.data);
    },

    async actionGetProductByName(context, name) {
      const payload = await getProductByNameAPi(name);
      if (payload.success) {
        context.commit("getProductByNameMutations", payload.data);
      }
    },
  },
};

export default product;
