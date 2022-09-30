<script>
import { mapActions } from "pinia";
import { useIndexStore } from "../stores";

export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    // ...mapActions(useIndexStore, ["fetchProduct"]),
    fetchProduct() {
      this.$emit("fetch-product", `?search=${this.search}`);
    },
  },

  // async created() {
  // await this.fetchProduct();
  // },
};
</script>

<template>
  <div id="search">
    <div class="form-control w-full max-w-xs">
      <form @submit.prevent="fetchProduct">
        <label class="label">
          <span class="label-text">What is your name?</span>
        </label>
        <input
          v-model="search"
          type="text"
          placeholder="Search here"
          class="input input-bordered w-full max-w-xs"
        />
        <button type="submit" class="btn">Search</button>
      </form>
    </div>
  </div>
</template>
<style></style>
