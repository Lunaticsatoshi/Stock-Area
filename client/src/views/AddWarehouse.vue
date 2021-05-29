<template>
  <div class="add__warehouse">
    <h1 class="warehouse__header">Add Warehouse</h1>
  </div>
</template>

<script>
export default {
  name: "AddWarehouse",
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
@media only screen and (max-width: 768px) {
  .add__warehouse {
    width: 100%;
    margin: 50px auto;
    padding: 0 10px;
  }
}
</style>