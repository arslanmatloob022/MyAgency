<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/pagination';
const sliderRef = ref(null)

const swiper = useSwiper(sliderRef)
</script>

<template>
  <section class="project-section section-padding pt-0 fix">
    <div class="swiper project-slider">
      <swiper-container
          :spaceBetween="30"
          :speed="2000"
          :loop="true"
          :autoplay="{ delay: 1000, disableOnInteraction: false }"
          :pagination="{ el: '.dot', clickable: true }"
          :breakpoints="{
            1399: { slidesPerView: 5 },
            1199: { slidesPerView: 4 },
            991: { slidesPerView: 3 },
            767: { slidesPerView: 2 },
            575: { slidesPerView: 2 },
            0: { slidesPerView: 1 }
          }"
          class="swiper-wrapper"
          ref="sliderRef"
      >
        <swiper-slide class="swiper-slide">
          <div class="project-img-items">
            <img src="@/assets/img/project/01.jpg" alt="img">
            <div class="overlay-bg"></div>
            <div class="project-content">
              <h3><NuxtLink to="/project/details">Diligently  IT Excellence</NuxtLink></h3>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <div class="project-img-items">
            <img src="@/assets/img/project/02.jpg" alt="img">
            <div class="overlay-bg"></div>
            <div class="project-content">
              <h3><NuxtLink to="/project/details">Diligently  IT Excellence</NuxtLink></h3>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <div class="project-img-items">
            <img src="@/assets/img/project/03.jpg" alt="img">
            <div class="overlay-bg"></div>
            <div class="project-content">
              <h3><NuxtLink to="/project/details">Diligently  IT Excellence</NuxtLink></h3>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <div class="project-img-items">
            <img src="@/assets/img/project/04.jpg" alt="img">
            <div class="overlay-bg"></div>
            <div class="project-content">
              <h3><NuxtLink to="/project/details">Diligently  IT Excellence</NuxtLink></h3>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <div class="project-img-items">
            <img src="@/assets/img/project/05.jpg" alt="img">
            <div class="overlay-bg"></div>
            <div class="project-content">
              <h3><NuxtLink to="/project/details">Diligently  IT Excellence</NuxtLink></h3>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
          </div>
        </swiper-slide>
      </swiper-container>
      <div class="swiper-dot text-center">
        <div class="dot"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>