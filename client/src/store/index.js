import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    warehouses: [],
    warehouse: {}
  },
  getters: {
    getWarehouses: (state) => state.warehouses,
  },
  mutations: {
    setWarehouses(state,payload){
      state.warehouses = payload
    },

    setWarehouse(state,payload){
      state.warehouse = payload
    }
  },
  actions: {
    async setWarehouses({commit}){
      let {data} = await axios.get("http://localhost:5000/warehouses")
      commit("setWarehouses",data)
    },
    async setWarehouse({commit},id){
      let {data} = await axios.get(`http://localhost:5000/warehouses/${id}`)
      commit("setWarehouse",data)
    },
    async updateWarehouse({commit},warehouse){
      let {data} = await axios.put(`http://localhost:5000/warehouses/${warehouse.id}`,warehouse)
      commit("setWarehouse",data)
    }
  },
  modules: {
  }
})
