<template>
  <div class="warehouse__details">
    <div v-show="editing" class="form">
      <div class="form__group">
        <label for="warehouseName">Warhouse Name</label>
        <input
          type="text"
          aria-label="warehouseName"
          placeholder="Warehouse Name"
          class="text__input"
          v-model="warehouseName"
        />
      </div>
      <div class="form__group">
        <label for="warehouseCluster">Warhouse Cluster</label>
        <input
          type="text"
          aria-label="warehouseCluster"
          placeholder="Warehouse Cluster"
          class="text__input"
          v-model="warehouseCluster"
        />
      </div>
      <div class="form__group">
        <label for="warehouseCity">Warhouse City</label>
        <input
          type="text"
          aria-label="warehouseCity"
          placeholder="Warehouse City"
          class="text__input"
          v-model="warehouseCity"
        />
      </div>
      <div class="form__group">
        <label for="warehouseSpaceAvailable">Warhouse Space Available</label>
        <input
          type="number"
          aria-label="warehouseSpaceAvailable"
          placeholder="Warehouse Space Available"
          class="text__input"
          v-model="warehouseSpaceAvailable"
        />
      </div>
      <div class="select__group">
        <input
          type="checkbox"
          aria-label="warehouseLiveStatus"
          placeholder="Warehouse Live Status"
          class="checkbox__input"
          v-model="warehouseLiveStatus"
        />
        <label for="warehouseLiveStatus">Warhouse Live Status</label>
      </div>
      <button type="submit" class="submit__buttom" @click="onSubmit()">
        Submit
      </button>
    </div>
    <div v-show="!editing" class="card">
      <div class="card__text">
        <div class="card__header">
          <h1 class="heading">{{ warehouse.name }}</h1>
          <h5 class="subheading">{{ warehouse.type }}</h5>
        </div>
        <div class="card__body">
          <div class="body__group">
            <span class="body__label"> City: </span
            ><span class="body__text"> {{ warehouse.city }}</span>
          </div>
          <div class="body__group">
            <span class="body__label"> Code: </span
            ><span class="body__text"> {{ warehouse.code }}</span>
          </div>
          <div class="body__group">
            <span class="body__label"> Available Space: </span
            ><span class="body__text"> {{ warehouse.space_available }}</span>
          </div>
          <div class="body__group">
            <span class="body__label"> Live Status: </span
            ><input
              type="checkbox"
              class="checkbox__input"
              disabled
              v-model="warehouse.is_live"
            />
          </div>
          <div class="body__group">
            <span class="body__label"> Registered Status: </span
            ><input
              type="checkbox"
              class="checkbox__input"
              disabled
              v-model="warehouse.is_registered"
            />
          </div>
        </div>
      </div>

      <button class="edit__button" @click="editWarehouse()">Edit</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Warehouse",
  data() {
    return {
      warehouseName: "",
      warehouseCluster: "",
      warehouseCity: "",
      warehouseSpaceAvailable: 0,
      warehouseLiveStatus: false,
      editing: false,
    };
  },
  computed: {
    ...mapGetters({ warehouse: "getWarehouse" }),
  },
  methods: {
    ...mapActions(["updateWarehouse"]),
    setData() {
      this.warehouseName = this.warehouse.name;
      this.warehouseCluster = this.warehouse.cluster;
      this.warehouseCity = this.warehouse.city;
      this.warehouseSpaceAvailable = this.warehouse.space_available;
      this.warehouseLiveStatus = this.warehouse.is_live;
    },
    editWarehouse() {
      this.editing = true;
      this.setData();
    },
    onSubmit() {
      const updateWarehouse = {
        ...this.warehouse,
        name: this.warehouseName,
        city: this.warehouseCity,
        space_available: this.warehouseSpaceAvailable,
        cluster: this.warehouseCluster,
        is_live: this.warehouseLiveStatus,
      };
      console.log(updateWarehouse);
      this.updateWarehouse(updateWarehouse);
      console.log("warehouseUpdated");
    },
  },
};
</script>

<style scoped>
.warehouse__details {
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.form {
  width: 70%;
  margin: 10px auto;
  padding: 10px 30px;
  background-color: #000000;
  color: #ffffff;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  border: 0.3px solid #ffffff;
  border-radius: 7px;
}

.form__group {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 80px;
  margin: 10px auto;
}

.select__group {
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
  margin: 10px auto;
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
.checkbox__input {
  margin-right: 10px;
  width: 30px;
  height: 15px;
}
.card {
  width: 70%;
  margin: 10px auto;
  padding: 10px 30px;
  background-color: #000000;
  color: #ffffff;
  height: 300px;
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border: 0.3px solid #ffffff;
  border-radius: 7px;
}

.heading {
  font-size: 3.4rem;
  font-weight: bold;
}

.subheading {
  color: rgb(194, 16, 16);
  margin-top: 1.1rem;
  font-size: 1.7rem;
}
.edit__button {
  background-color: rgb(235, 67, 45);
  width: 100px;
  height: 35px;
  padding: 10px;
  border-radius: 25px;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.24rem;
  border: none;
}

.submit__buttom {
  background-color: rgb(235, 67, 45);
  width: 100px;
  height: 35px;
  padding: 10px;
  border-radius: 25px;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.24rem;
  border: none;
  margin-left: auto;
}

.card__text {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
}

.card__header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
}

.card__body {
  margin-top: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}

.body__group {
  margin-top: 20px;
  display: flex;
  align-items: center;
}

.body__label {
  color: #ffffff;
  font-size: 1.5rem;
}
.body__text {
  color: rgb(235, 67, 45);
  font-size: 1.5rem;
  margin-left: 0.5rem;
}
</style>