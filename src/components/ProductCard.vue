<script>
export default {
  props: ["product"],
};
</script>
<template>
  <div class="card w-72 bg-base-100 shadow-xl">
    <div id="img-container w-100">
      <img
        class="m-auto"
        src="https://www.thebluesville.com/wp-content/uploads/2022/07/Khaki-wide-Pants-2-433x514.jpg"
      />
    </div>

    <div class="card-body">
      <h2 class="card-title">{{ product.name }}</h2>
      <p>{{ product.price }}</p>
    </div>
  </div>
</template>
<style>
#img-container {
  height: 17rem;
  width: 200px;
}
</style>
