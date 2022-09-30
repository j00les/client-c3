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

    async fetch(s) {
      await this.fetchProduct(s);
    },
  },

  computed: {
    ...mapState(useIndexStore, ["products"]),
  },

  created() {
    this.fetch();
    this.productData = this.products;
    // console.log(this.productData);
  },
};
</script>

<template>
  <Carousel />

  <section id="home-section" class="flex justify-center mt-20">
    <SideBar @fetch-product="fetch" />
    <div class="gap-6 grid grid-cols-3 grid-rows-3">
      <ProductCard v-for="product in productData" :product="product" />
    </div>
  </section>
</template>
