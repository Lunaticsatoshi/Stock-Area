<template>
  <div>
    <navbar />
    <router-view />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,500;1,400&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 62.5%;
    font-family: 'Roboto', sans-serif;
    background-color: #000000;
    color: #ffffff;
}

li {
    list-style: none;
}

a {
    text-decoration: none;
}

</style>

<script>
import Navbar from "./components/Navbar/Navbar";
import {mapActions} from 'vuex';
export default {
  name: "App",
  components: {
    Navbar,
  },
  methods: {
    ...mapActions(["setWarehouses"]),
  },
  mounted() {
    this.setWarehouses();
  }
};
</script>
