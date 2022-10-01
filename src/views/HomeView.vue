<script>
import { mapActions, mapState } from "pinia";
import { useIndexStore } from "@/stores";
import Carousel from "@/components/Carousel.vue";
import ProductCard from "@/components/ProductCard.vue";
import SideBar from "../components/SideBar.vue";

export default {
  data() {
    return {
      productData: [],
    };
  },
  components: { Carousel, ProductCard, SideBar },

  methods: {
    ...mapActions(useIndexStore, ["fetchProduct"]),

    getProduct(query) {
      this.fetchProduct(query);
    },
  },

  computed: {
    ...mapState(useIndexStore, ["products"]),
  },

  created() {
    this.getProduct();
  },
};
</script>

<template>
  <Carousel />

  <section id="home-section" class="flex justify-center mt-20">
    <SideBar @perform-query="getProduct" />
    <div class="gap-6 grid grid-cols-3 grid-rows-3">
      <ProductCard v-for="product in products" :product="product" />
    </div>
  </section>
</template>
