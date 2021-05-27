import { createStore } from 'vuex'
import axios from "axios"

export default createStore({
  state: {
    warehouses: []
  },
  getters: {
    getWarehouses: (state) => state.warehouses,
  },
  mutations: {
    setWarehouses(state,payload){
      state.warehouses = payload
    }
  },
  actions: {
    async setWarehouses({commit}){
      let {data} = await axios.get("http://localhost:5000/warehouses")
      commit("setWarehouses",data)
    }
  },
  modules: {
  }
})
