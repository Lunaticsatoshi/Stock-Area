<template>
  <header class="header">
    <nav class="navbar">
      <a href="#" class="nav-logo">WebDev.</a>
      <ul v-bind:class="classObject" class="nav-menu">
        <li class="nav-item">
          <a href="#" class="nav-link" @click="hamburgerActive = !hamburgerActive">Services</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click="hamburgerActive = !hamburgerActive">Blog</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click="hamburgerActive = !hamburgerActive">About</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click="hamburgerActive = !hamburgerActive">Contact</a>
        </li>
      </ul>
      <div v-bind:class="hamburgerObject" @click="hamburgerActive = !hamburgerActive" class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      hamburgerActive: false,
    };
  },
  methods: {
    hamburgerClick() {
        this.hamburgerClick = !this.hamburgerClick
        console.log(this.hamburgerClick)
    },
  },
  computed: {
    classObject: function () {
      return {
        active: this.hamburgerActive ,
        "nav-menu": !this.hamburgerActive
      };
    },
    hamburgerObject: function () {
      return {
        active: this.hamburgerActive ,
        "hamburger": !this.hamburgerActive
      };
    },
  },
};
</script>

<style scoped>
.header {
  max-width: 1300px;
  margin: 0 auto;
  padding: 10px 10px;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
.hamburger {
  display: none;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: #101010;
}

.nav-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-item {
  margin-left: 5rem;
}

.nav-link {
  font-size: 1.6rem;
  font-weight: 400;
  color: #475569;
}

.nav-link:hover {
  color: #482ff7;
}

.nav-logo {
  font-size: 2.1rem;
  font-weight: 500;
  color: #482ff7;
}

@media only screen and (max-width: 768px) {
  .nav-menu {
    position: fixed;
    left: -100%;
    top: 5rem;
    flex-direction: column;
    background-color: #fff;
    width: 100%;
    border-radius: 10px;
    text-align: center;
    transition: 0.3s;
    box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
  }

  .nav-menu.active {
    left: 0;
  }

  .nav-item {
    margin: 2.5rem 0;
  }

  .hamburger {
    display: block;
    cursor: pointer;
  }

  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }

  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>