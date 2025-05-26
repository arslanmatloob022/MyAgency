<script setup lang="ts">
import ctaBg from "@/assets/img/cta/cta-bg.jpg";
</script>

<template>
  <section class="cta-banner-section121 section-padding">
    <div class="container">
      <div class="cta-banner-wrapper style-2 bg-cover" :style="{backgroundImage: `url(${ctaBg})`}">
        <div class="row g-4 align-items-center justify-content-between">
          <div class="col-lg-8">
            <h2>
              Driving Success Through Expertise Solutions
            </h2>
          </div>
          <div class="col-lg-3">

            <div class="main-button wow fadeInUp" data-wow-delay=".3s">
              <NuxtLink to="/about"> <span class="theme-btn"> Contact Us </span><span class="arrow-btn"><i class="icon-arrow-right"></i></span></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>