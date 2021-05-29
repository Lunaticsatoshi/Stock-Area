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
@media only screen and (max-width: 768px) {
  .add__warehouse {
    width: 100%;
    margin: 50px auto;
    padding: 0 10px;
  }
}
</style>