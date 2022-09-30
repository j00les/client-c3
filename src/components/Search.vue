<script>
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    handleSearch() {
      this.$emit("handle-search", `?search=${this.search}`);
    },
  },
};
</script>

<template>
  <div id="search">
    <div class="form-control w-full max-w-xs">
      <form @submit.prevent="handleSearch">
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
