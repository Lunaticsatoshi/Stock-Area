<template>
  <div class="home">
    <div class="inputs">
      <input
        type="text"
        aria-label="search"
        placeholder="Search"
        class="text__input"
      />
      <div class="select__inputs">
        <select name="cars" id="cars" class="select__input" v-model="city" @change="onChange()">
          <option v-for="city in cities" :key="city.id">{{city}}</option>
        </select>
        <select name="cars" id="cars" class="select__input" v-model="cluster" @change="onChange()">
          <option v-for="cluster in clusters" :key="cluster.id">{{cluster}}</option>
        </select>
        <select name="cars" id="cars" class="select__input" v-model="spaceavailable" @change="onChange()">
          <option v-for="spaceavailable in spacesavailable" :key="spaceavailable.id">{{spaceavailable}}</option>
        </select>
      </div>
    </div>

    <div class="card__list" v-for="warehouse in warehouses" :key="warehouse.id">
      <card :warehouse="warehouse"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card/Card";
import {mapGetters} from "vuex";

export default {
  name: "Home",
  components: {
    Card,
  },
  data(){
    return {
      cities: [],
      city: "Delhi",
      clusters: [],
      cluster: "cluster-a-32",
      spacesavailable: [],
      spaceavailable: 1234
    }
  },
  computed: { 
    ...mapGetters({warehouses: "getWarehouses"}),
  },
  updated() {
    this.warehouses.forEach((warehouse) => {
      if(!this.cities.includes(warehouse.city)){
        this.cities.push(warehouse.city);
      }
      if(!this.clusters.includes(warehouse.cluster)){
        this.clusters.push(warehouse.cluster);
      }
      if(!this.spacesavailable.includes(warehouse.space_available)){
        this.spacesavailable.push(warehouse.space_available);
      }
    })
  },
  methods: {
    onChange(){
      let newWarehouses = this.warehouses.filter((warehouse) => warehouse.city === this.city)
      this.warehouses = newWarehouses
      console.log(newWarehouses);
    }
  }
};
</script>

<style scoped>
.home {
  width: 1300px;
  margin: 50px auto;
  padding: 0 10px;
}

.inputs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
}

.select__inputs {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 50%;
}

.text__input {
  height: 50px;
  width: 500px;
  background-color: #000000;
  color: #ffffff;
  border: 0.5px solid gray;
  border-radius: 7px;
  padding: 0 10px;
}
.select__input {
  height: 50px;
  width: 200px;
  background-color: #000000;
  color: #ffffff;
  border: 0.5px solid gray;
  border-radius: 7px;
  padding: 0 10px;
}

.card__list {
  width: 1100px;
  margin: 20px auto;
}

@media only screen and (max-width: 768px) {
  .home {
    width: 100%;
    margin: 50px auto;
    padding: 0 10px;
  }
  .inputs {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
  }
  .select__inputs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .text__input {
    height: 50px;
    width: 100%;
    background-color: #000000;
    color: #ffffff;
    border: 0.5px solid gray;
    border-radius: 7px;
    padding: 0 10px;
  }
  .select__input {
    height: 50px;
    width: 500px;
    background-color: #000000;
    color: #ffffff;
    border: 0.5px solid gray;
    border-radius: 7px;
    padding: 0 10px;
    margin: 10px;
  }

  .card__list {
    width: 100%;
  }
}
</style>
