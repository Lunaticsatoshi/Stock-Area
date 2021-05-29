<template>
  <div class="card">
    <div class="card__text">
      <div class="card__header">
        <h1 class="heading">{{ warehouse.name }}</h1>
        <h5 class="subheading">{{ warehouse.type }}</h5>
      </div>
      <div class="card__body">
        <span class="subheading">{{ warehouse.city }} </span
        ><span class="subheading"> | {{ warehouse.cluster }}</span>
      </div>
    </div>

    <a class="edit__button" href="#">Visit</a>
  </div>
</template>

<script>
export default {
  name: "Warehouse",
  props: {
    warehouse: Object,
  },
};
</script>

<style>
.card {
  width: 100%;
  margin: 10px auto;
  padding: 10px 10px;
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

.card__body{
    margin-top: 10px;
}
</style>