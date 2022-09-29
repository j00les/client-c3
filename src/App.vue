<script>
import Navbar from "./components/Navbar.vue";
import { RouterView } from "vue-router";

export default {
  components: { Navbar },
};
</script>

<template>
  <Navbar></Navbar>

  <!-- jumbotron -->
  <section class="mx-auto grid grid-cols-3 w-3/4 border border-black">
    <button class="btn">Button</button>
    <div class="col-start-1 col-end-3 border border-blue-400">
      <img
        src="https://www.thebluesville.com/wp-content/uploads/2022/03/DSCF9911-scaled.jpg"
        alt=""
        class="max-h-72 min-h-max"
      />
    </div>

    <div class="w-full border border-blue-400">
      <h1 class="text-3xl">Indigo Dyeing</h1>
      <p>
        Admin BV On 15/03/2022 Indigo Dyeing We are doing some experiment in
        Indigo Dyeing. Yesterday we had fun by indigo dyeing some of our wooden
        bowl. The result looks amazing and interesting. The color may not to
        bold, but...
      </p>
      <!-- <img
        class="object-cover"
        src="https://www.thebluesville.com/wp-content/uploads/2022/03/AH0A6900-1-scaled.jpg"
        alt=""
      /> -->
    </div>
  </section>

  <RouterView />
</template>
