<template>
  <div class="add__warehouse">
    <h1 class="warehouse__header">Add Warehouse</h1>
    <div class="form">
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
        <label for="warehouseCode">Warhouse Code</label>
        <input
          type="text"
          aria-label="warehouseCode"
          placeholder="Warehouse Code"
          class="text__input"
          v-model="warehouseCode"
        />
      </div>
      <div class="form__group">
        <label for="warehouseType">Warhouse Type</label>
        <input
          type="text"
          aria-label="warehouseType"
          placeholder="Warehouse Type"
          class="text__input"
          v-model="warehouseType"
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
      <div class="select__group">
        <input
          type="checkbox"
          aria-label="warehouseRegisteredStatus"
          placeholder="Warehouse Registered Status"
          class="checkbox__input"
          v-model="warehouseRegisteredStatus"
        />
        <label for="warehouseRegisteredStatus"
          >Warhouse Registered Status</label
        >
      </div>
      <button type="submit" class="submit__buttom" @click="onSubmit()">
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "AddWarehouse",
  data() {
    return {
      warehouseName: "",
      warehouseCity: "",
      warehouseCluster: "",
      warehouseCode: "",
      warehouseType: "",
      warehouseSpaceAvailable: 0,
      warehouseLiveStatus: false,
      warehouseRegisteredStatus: false,
    };
  },
  computed: {
    ...mapGetters({ warehouses: "getWarehouses" }),
  },
  methods: {
    onSubmit() {
      const newWarehouse = {
        name: this.warehouseName,
        code: this.warehouseCode,
        id: this.warehouses.length + 1,
        city: this.warehouseCity,
        space_available: this.warehouseSpaceAvailable,
        type: this.warehouseType,
        cluster: this.warehouseCluster,
        is_registered: this.warehouseRegisteredStatus,
        is_live: this.warehouseLiveStatus
      };
      console.log(this.warehouses.length);
    },
  },
};
</script>

<style scoped>
.add__warehouse {
  width: 1300px;
  margin: 50px auto;
  padding: 0 10px;
}
.warehouse__header {
  font-size: 3rem;
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
  height: 30px;
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
@media only screen and (max-width: 768px) {
  .add__warehouse {
    width: 100%;
    margin: 50px auto;
    padding: 0 10px;
  }
}
</style>