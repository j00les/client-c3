<script>
import NavBar from "./components/NavBar.vue";
import Jumbotron from "./components/Jumbotron.vue";
import Footer from "./components/Footer.vue";
import HomeView from "./views/HomeView.vue";

export default {
  components: { NavBar, Jumbotron, Footer, HomeView },
};
</script>

<template>
  <NavBar />
  <Jumbotron />

  <HomeView />
  <Footer />

  <RouterView />
</template>
