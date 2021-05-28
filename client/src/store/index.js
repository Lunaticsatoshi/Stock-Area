import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    warehouses: [],
    filteredWarehouses: [],
  },
  getters: {
    getWarehouses: (state) => state.warehouses,
  },
  mutations: {
    setWarehouses(state, payload) {
      state.warehouses = payload;
    },
    setFilteresWarehouses(state, payload) {
      state.filteredWarehouses = payload;
    },
  },
  actions: {
    async setWarehouses({ commit }) {
      let { data } = await axios.get("http://localhost:5000/warehouses");
      commit("setWarehouses", data);
    },
    async filterWareHouses({ commit }, filterData) {
      let { data } = await axios.get("http://localhost:5000/warehouses");
      switch (filterData.type) {
        case "city":
          data = data.filter((dataItem) => dataItem.city === filterData.value);
          break;
        case "cluster":
          data = data.filter(
            (dataItem) => dataItem.cluster === filterData.value
          );
          break;
        case "spaceavailable":
          data = data.filter(
            (dataItem) => dataItem.spaceavailable === filterData.value
          );
          break;
      }
      commit("setFilteresWarehouses", data);
    },
  },
});
