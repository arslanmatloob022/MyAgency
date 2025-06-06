<script setup lang="ts">
import 'swiper/css';
import 'swiper/css/pagination';
import img01 from '@/assets/img/project/project-1.jpg'
import img02 from '@/assets/img/project/project-02.jpg'
import img03 from '@/assets/img/project/project-3.jpg'
import img04 from '@/assets/img/project/project-4.jpg'
import img05 from '@/assets/img/project/project-5.jpg'
import img06 from '@/assets/img/project/project-6.jpg'






const sliderRef = ref(null)
const projects = ref([
  {
    id: 1,
    title: 'Web Development',
    description: 'Web Development & process',
    image: img01,
    link: '/project/details'
  },
    {
    id: 2,
    title: 'Website Design',
    description: 'Web Design & Development',
    image: img02,
    link: '/project/details'
  },
   {
    id: 3,
    title: 'UI/UX Design',
    description: 'UI/UX Design & Analysis',
    image: img03,
    link: '/project/details'
  },
   {
    id: 4,
    title: 'Web Security',
    description: 'Web Security & Protection',
    image: img04,
    link: '/project/details'
  },
   {
    id: 5,
    title: 'Mobile Application',
    description: 'Mobile App Development',
    image: img05,
    link: '/project/details'
  },
  {
    id: 6,
    title: 'Software Consulting',
    description: 'Flow & Process Analysis',
    image: img06,
    link: '/project/details'
  },
])

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
        <swiper-slide v-for="project in projects" class="swiper-slide">
          <div class="project-img-items">
            <img :src=project.image  alt="img">
            <div class="overlay-bg"></div>
            <div class="project-content">
              <h3><NuxtLink to="/project/details">{{ project.title }}</NuxtLink></h3>
              <p>{{ project.description }}</p>
            </div>
          </div>
        </swiper-slide>
        <!-- <swiper-slide class="swiper-slide">
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
        </swiper-slide> -->
      </swiper-container>
      <div class="swiper-dot text-center">
        <div class="dot"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>