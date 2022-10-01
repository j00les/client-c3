<script>
export default {
  data() {
    return {
      search: "",
      filter: "",
    };
  },

  methods: {
    performQuery() {
      if (this.search) {
        this.$emit("perform-query", `?search=${this.search}`);
      } else if (this.filter) {
        this.$emit("perform-query", `?filter[category]=${this.filter}`);
      }
    },
  },
};
</script>
<template>
  <!-- sidebar -->
  <div id="sidebar" class="border mr-8 border-stone-500">
    <form @submit.prevent="performQuery">
      <!-- filter -->
      <div id="radio">
        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">T-Shirt</span>
            <input
              v-model="filter"
              value="1"
              type="radio"
              name="radio-6"
              class="radio checked:bg-red-500"
              checked
            />
          </label>
        </div>

        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">Shirt</span>
            <input
              v-model="filter"
              value="2"
              type="radio"
              name="radio-6"
              class="radio checked:bg-blue-500"
              checked
            />
          </label>
        </div>

        <div class="form-control">
          <label class="label cursor-pointer">
            <span class="label-text">Bottom</span>
            <input
              v-model="filter"
              value="3"
              type="radio"
              name="radio-6"
              class="radio checked:bg-green-500"
              checked
            />
          </label>
        </div>
      </div>
      <div id="search">
        <div class="form-control w-full max-w-xs">
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
        </div>
      </div>
    </form>
  </div>
</template>
<style></style>
