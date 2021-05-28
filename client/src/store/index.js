import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    warehouses: [],
  },
  getters: {
    getWarehouses: (state) => state.warehouses,
  },
  mutations: {
    setWarehouses(state, payload) {
      state.warehouses = payload;
    },
  },
  actions: {
    async setWarehouses({ commit }) {
      let { data } = await axios.get("http://localhost:5000/warehouses");
      commit("setWarehouses", data);
    },
    async filtweWarehouses({ commit }, { value, type }) {
      let { data } = await axios.get("http://localhost:5000/warehouses");
      switch (type) {
        case "city":
          data = data.filter((item) => item.city === value);
          commit("setWarehouses", data);
          break;
        case "cluster":
          data = data.filter((item) => item.cluster === value);
          commit("setWarehouses", data);
          break;
        case "spaceavailable":
          data = data.filter((item) => item.space_available === value);
          commit("setWarehouses", data);
          break;
      }
    },
  },
  modules: {},
});
