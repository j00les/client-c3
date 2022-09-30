<script></script>
<template>
  <div class="carousel rounded-md mx-auto">
    <div id="slide1" class="carousel-item relative w-full">
      <img
        src="https://www.thebluesville.com/wp-content/uploads/2022/03/DSCF9911-scaled.jpg"
        class="w-full object-cover"
      />
      <div
        class="absolute text-5xl text-red-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <h1>Lorem</h1>

        <p
          class="absolute text-sm text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi quas
          distinctio culpa facere laboriosam temporibus odit quos deleniti
          maxime velit harum blanditiis ratione omnis rem, aut ipsum
          consequuntur corporis dolorem.
        </p>
      </div>
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a href="#slide4" class="btn btn-circle">❮</a>
        <a href="#slide2" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide2" class="carousel-item relative w-full">
      <img
        src="https://www.thebluesville.com/wp-content/uploads/2020/02/DSC00395.jpg"
        class="w-full object-cover"
      />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a href="#slide1" class="btn btn-circle">❮</a>
        <a href="#slide3" class="btn btn-circle">❯</a>
      </div>
    </div>
    <div id="slide3" class="carousel-item relative w-full">
      <img
        src="https://www.thebluesville.com/wp-content/uploads/2022/09/000019-min-1.png"
        class="w-full object-cover"
      />
      <div
        class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
      >
        <a href="#slide2" class="btn btn-circle">❮</a>
        <a href="#slide4" class="btn btn-circle">❯</a>
      </div>
    </div>
  </div>
</template>

<style>
.object-cover {
  object-fit: cover;
}

.carousel {
  height: 23rem;
  width: 72rem;
  overflow: hidden;
}
</style>
