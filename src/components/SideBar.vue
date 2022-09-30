<script>
import FilterRadio from "./FilterRadio.vue";
import Search from "./Search.vue";
import { useIndexStore } from "../stores";
import { mapState, mapActions } from "pinia";

export default {
  components: {
    FilterRadio,
    Search,
  },

  methods: {
    fetch(s) {
      this.$emit("fetch-product", s);
    },
    // ...mapActions(useIndexStore, ["fetchProduct"]),
  },
  // computed: {
  //   ...mapState(useIndexStore, ["products"]),
  // },

  // async created() {
  //   await this.fetchProduct("query");
  //   // this.productData = this.products;
  // },
};
</script>
<template>
  <!-- sidebar -->
  <div id="sidebar" class="border mr-8 border-stone-500">
    <FilterRadio />
    <Search @fetch-product="fetch" />
  </div>
</template>
<style></style>
