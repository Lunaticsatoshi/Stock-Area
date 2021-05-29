<template>
  <div class="home">
    <div class="inputs">
      <div class="search__input">
        <input
          type="text"
          aria-label="search"
          placeholder="Search"
          class="text__input"
          v-model="warehouseName"
        />
        <button class="edit__button search" @click="search()">
          <i v-show="!searching" class="fas fa-search"></i>
          <i v-show="searching" class="far fa-times-circle"></i>
        </button>
      </div>
      <div class="select__inputs">
        <select
          name="cars"
          id="cars"
          class="select__input"
          v-model="city"
          @change="onChangeCity()"
        >
          <option v-for="city in cities" :key="city.id">{{ city }}</option>
        </select>
        <select
          name="cars"
          id="cars"
          class="select__input"
          v-model="cluster"
          @change="onChangeCluster()"
        >
          <option v-for="cluster in clusters" :key="cluster.id">
            {{ cluster }}
          </option>
        </select>
        <select
          name="cars"
          id="cars"
          class="select__input"
          v-model="spaceavailable"
          @change="onChangeSpaceAvailable()"
        >
          <option
            v-for="spaceavailable in spacesavailable"
            :key="spaceavailable.id"
          >
            {{ spaceavailable }}
          </option>
        </select>
        <button class="edit__button" @click="removeFilter()"><i class="far fa-times-circle"></i></button>
      </div>
    </div>
    <!-- <div v-show="searching">
      <div
        class="card__list"
        v-for="warehouse in searchedWarehouses"
        :key="warehouse.id"
      >
        <card :warehouse="warehouse" />
      </div>
    </div> -->
    <div>
      <div
        v-show="filter"
        class="card__list"
        v-for="warehouse in filteredWarehouses"
        :key="warehouse.id"
      >
        <card :warehouse="warehouse" />
      </div>
      <div
        v-show="!filter"
        class="card__list"
        v-for="warehouse in warehouses"
        :key="warehouse.id"
      >
        <card :warehouse="warehouse" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from "@/components/Card/Card";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Card,
  },
  data() {
    return {
      cities: [],
      city: "Delhi",
      clusters: [],
      cluster: "cluster-a-32",
      spacesavailable: [],
      spaceavailable: 1234,
      filteredWarehouses: [],
      filter: false,
      warehouseName: "",
      searching: false,
      searchedWarehouses: [],
    };
  },
  computed: {
    ...mapGetters({ warehouses: "getWarehouses" }),
  },
  updated() {
    this.warehouses.forEach((warehouse) => {
      if (!this.cities.includes(warehouse.city)) {
        this.cities.push(warehouse.city);
      }
      if (!this.clusters.includes(warehouse.cluster)) {
        this.clusters.push(warehouse.cluster);
      }
      if (!this.spacesavailable.includes(warehouse.space_available)) {
        this.spacesavailable.push(warehouse.space_available);
      }
    });
  },
  mounted() {
    this.setWarehouses();
  },
  methods: {
    ...mapActions(["setWarehouses"]),
    async onChangeCity() {
      this.filter = true;
      this.cluster= "cluster-a-32";
      this.spaceavailable= 1234;
      this.filteredWarehouses = await this.warehouses.filter(
        (warehouse) => warehouse.city === this.city
      );
      // if (!this.filter) {
      //   this.filter = true;
      //   this.filteredWarehouses = await this.warehouses.filter(
      //     (warehouse) => warehouse.city === this.city
      //   );
      // } else {
      //   this.filteredWarehouses = this.filteredWarehouses.filter(
      //     (warehouse) => warehouse.city === this.city
      //   );
      // }
    },
    async onChangeCluster() {
      this.filter = true;
      this.city= "Delhi"
      this.spaceavailable= 1234;
      this.filteredWarehouses = await this.warehouses.filter(
        (warehouse) => warehouse.cluster === this.cluster
      );
      // if (!this.filter) {
      //   this.filter = true;
      //   this.filteredWarehouses = await this.warehouses.filter(
      //     (warehouse) => warehouse.cluster === this.cluster
      //   );
      // } else {
      //   this.filteredWarehouses = this.filteredWarehouses.filter(
      //     (warehouse) => warehouse.cluster === this.cluster
      //   );
      // }
    },
    async onChangeSpaceAvailable() {
      this.filter = true;
      this.city= "Delhi"
      this.cluster= "cluster-a-32";
      this.filteredWarehouses = await this.warehouses.filter(
        (warehouse) =>
          warehouse.space_available === parseInt(this.spaceavailable)
      );
      console.log(this.spaceavailable);
      // if (!this.filter) {
      //   this.filter = true;
      //   this.filteredWarehouses = await this.warehouses.filter(
      //     (warehouse) =>
      //       warehouse.space_available === parseInt(this.spaceavailable)
      //   );
      // } else {
      //   this.filteredWarehouses = this.filteredWarehouses.filter(
      //     (warehouse) =>
      //       warehouse.space_available === parseInt(this.spaceavailable)
      //   );
      // }
    },
    removeFilter() {
      this.filter = false;
    },
    search() {
      console.log("searching");
      this.searching = !this.searching;
      this.searchedWarehouses = this.warehouses.filter((warehouse) => {
        warehouse.name === this.warehouseName;
      });
      console.log(this.searchedWarehouses);
    },
  },
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

.search__input {
  display: flex;
  align-items: center;
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
  width: 170px;
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

.edit__button {
  background-color: rgb(235, 67, 45);
  width: 40px;
  height: 40px;
  padding: 10px;
  border-radius: 25px;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.24rem;
  border: none;
}

.search {
  margin-left: 0.7rem;
}

@media only screen and (max-width: 768px) {
  .home {
    width: 100%;
    margin: 50px auto;
    padding: 0 10px;
  }
  .search__input {
    width: 100%;
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
