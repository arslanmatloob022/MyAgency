<script setup lang="ts">
import heroBg from "@/assets/img/hero/hero-3.jpg";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

onMounted(() => {
  Fancybox.bind("[data-fancybox]", {});
})
</script>

<template>
  <section class="hero-section hero-3 fix bg-cover" :style="{backgroundImage: `url(${heroBg})`}">
    <div class="left-shape">
      <img src="@/assets/img/hero/left-shape.png" alt="img">
    </div>
    <div class="container">
      <div class="row">
        <div class="col-lg-7">
          <div class="hero-content">
            <h6 class="wow fadeInUp">It Tachnology</h6>
            <h1 class="wow fadeInUp" data-wow-delay=".3s">
              Tech Solutions <br> <span>for Every Need</span> Potential
            </h1>
            <div class="main-button wow fadeInUp" data-wow-delay=".5s">
              <NuxtLink to="/contact"> <span class="theme-btn"> Contact US </span><span class="arrow-btn"><i class="icon-arrow-right"></i></span></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-video-box wow img-custom-anim-left">
      <div class="video">
        <a data-fancybox href="https://www.youtube.com/watch?v=Mt6UwMKnaTw" class="video-btn video-popup">
          <i class="fa-duotone fa-play"></i>
        </a>
        <h5>Watch Now</h5>
      </div>
      <p>
        Information Technology is a rapidly evolving field that <br> encompasses the study and application
      </p>
    </div>
    <div class="social-icon d-grid align-items-center">
      <a href="#"><i class="fab fa-facebook-f"></i></a>
      <a href="#"><i class="fab fa-twitter"></i></a>
      <a href="#"><i class="fab fa-linkedin-in"></i></a>
      <a href="#"><i class="fab fa-instagram"></i></a>
    </div>
  </section>
</template>

<style scoped>

</style>