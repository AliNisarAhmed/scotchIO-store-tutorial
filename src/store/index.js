import Vuex from 'vuex';

import { productGetters, manufacturerGetters } from './getters';

export default new Vuex.Store({
  strict: true,
  state: {
    cart: [],
    showLoader: false,
    product: {},
    products: [],
    manufacturers: []
  },
  getters: Object.assign({}, productGetters, manufacturerGetters),
});