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
</style>