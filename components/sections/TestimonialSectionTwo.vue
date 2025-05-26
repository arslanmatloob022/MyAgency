<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/pagination';
import {testimonials} from "~/data/testimonials";
</script>

<template>
  <section class="tesimonial-section-2 fix section-padding section-bg-2">
    <div class="section-title text-center">
      <h2 class="text-white wow fadeInUp">Whats Clients Say</h2>
    </div>
    <div class="testimonial-slider-2">
      <swiper-container
          :spaceBetween="30"
          :speed="2000"
          :loop="true"
          :autoplay="{ delay: 1000, disableOnInteraction: false }"
          :pagination="{ el: '.dot', clickable: true }"
          :breakpoints="{
            1199: { slidesPerView: 4 },
            991: { slidesPerView: 3 },
            767: { slidesPerView: 2 },
            575: { slidesPerView: 1 },
            0: { slidesPerView: 1 }
          }"
          class="swiper-wrapper"
      >
        <swiper-slide
            v-for="(testimonial, index) in testimonials" :key="testimonial.id"
            class="swiper-slide"
        >
          <div class="testimonial-box-items-2">
            <div class="testi-top">
              <div class="icon">
                <img :src="testimonial.icon" alt="icon">
              </div>
              <div class="star">
                <i v-for="n in testimonial.rating" :key="n" class="fa-solid fa-star"></i>
              </div>
            </div>
            <p>{{ testimonial.message }}</p>
            <div class="client-info">
              <img :src="testimonial.image" alt="img">
              <div class="content">
                <h3>{{ testimonial.name }}</h3>
                <span>{{ testimonial.role }}</span>
              </div>
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