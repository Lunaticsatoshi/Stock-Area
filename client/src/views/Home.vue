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
        <select name="cars" id="cars" class="select__input">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <select name="cars" id="cars" class="select__input">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <select name="cars" id="cars" class="select__input">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
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
}
</style>
