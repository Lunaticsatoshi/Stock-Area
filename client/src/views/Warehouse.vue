<template>
  <div class="warehouse">
    <h1>This is a Warehouse</h1>
    <Warehouse />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Warehouse from "@/components/Warehouse";
export default {
  name: "WarehouseView",
  components: {
    Warehouse,
  },
  methods: {
    ...mapActions(["setWarehouse"]),
  },
  mounted() {
    console.log(this.$route.params.id);
    this.setWarehouse(this.$route.params.id);
  },
};
</script>

<style scoped>
.warehouse {
  width: 1300px;
  margin: 50px auto;
  padding: 0 10px;
}
@media only screen and (max-width: 768px) {
  .warehouse {
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
}
</style>