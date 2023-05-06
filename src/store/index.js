import { createStore } from "vuex";
import product from "./modules/product";
import user from "./modules/user";
import order from "./modules/order";
const store = createStore({
  modules: {
    product,
    user,
    order,
  },
});

export default store;
