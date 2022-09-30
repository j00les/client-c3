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
    handleSearch(query) {
      this.$emit("handle-search", query);
    },
  },
};
</script>
<template>
  <!-- sidebar -->
  <div id="sidebar" class="border mr-8 border-stone-500">
    <FilterRadio />
    <Search @handle-search="handleSearch" />
  </div>
</template>
<style></style>
