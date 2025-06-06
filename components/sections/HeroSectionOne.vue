<script setup lang="ts">
import heroBg from "@/assets/img/hero/hero-bg.jpg";
</script>

<template>
  <section class="hero-section hero-1 bg-cover" :style="{backgroundImage: `url(${heroBg})`}">
    <div class="hero-shape">
      <img src="@/assets/img/hero/hero-shape.png" alt="img">
    </div>
    <div class="container">
      <div class="row g-4 align-items-center">
        <div class="col-lg-6">
          <div class="hero-content">
            <h6 class="wow fadeInUp" data-wow-delay=".3s">
              
              NextGen Software
            </h6>
            <h1 class="wow fadeInUp" data-wow-delay=".5s">
              <!-- Empowering the -->
               where innovation meets excellence
               <!-- <span>Technology is the <br></span>evolving field -->
              </h1>
            <p class="wow fadeInUp" data-wow-delay=".7s">
              We specialize in delivering cutting-edge software solutions tailored to meet your business needs. Our expertise spans across website development, mobile application development, software consulting.
              <!-- Information Technology is a rapidly evolving field that encompasses the study and application of computing technology to solve complex -->
             </p>
            <div class="main-button wow fadeInUp" data-wow-delay=".3s">
              <NuxtLink to="/about"> <span class="theme-btn"> Get Started </span><span class="arrow-btn"><i class="icon-arrow-right"></i></span></NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="hero-image">
            <img src="@/assets/img/hero/hero-img.png" alt="img">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>