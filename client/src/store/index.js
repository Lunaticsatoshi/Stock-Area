import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    warehouses: [],
    filteredWarehouses: [],
  },
  getters: {
    getWarehouses: (state) => state.warehouses,
    getFilteredWarehouses: (state) => state.filteredWarehouses,
  },
  mutations: {
    setWarehouses(state, payload) {
      state.warehouses = payload;
    },
    setFilteredWarehouses(state, payload) {
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
      commit("setFilteredWarehouses", data);
    },
  },
});
