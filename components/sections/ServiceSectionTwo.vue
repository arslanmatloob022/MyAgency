<script setup lang="ts">

</script>

<template>
  <section class="service-section section-padding fix">
    <div class="container">
      <div class="section-title text-center">
        <h2 class="wow fadeInUp" data-wow-delay=".3s">Our Best Services</h2>
      </div>
      <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
          <div class="service-items">
            <div class="service-icon">
              <i class="icon-01"></i>
            </div>
            <div class="service-content">
              <h3><NuxtLink to="/services/details">Tech Fortress Solutions</NuxtLink></h3>
              <p>Information Technology is a rapidly evolving field that encompasses the study </p>
              <div class="main-button bg-2">
                <NuxtLink to="/services/details"> <span class="theme-btn">Read More </span><span class="arrow-btn"><i class="icon-arrow-right"></i></span></NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
          <div class="service-items">
            <div class="service-icon">
              <i class="icon-02"></i>
            </div>
            <div class="service-content">
              <h3><NuxtLink to="/services/details">Cyber Pulse Security</NuxtLink></h3>
              <p>Information Technology is a rapidly evolving field that encompasses the study </p>
              <div class="main-button bg-2">
                <NuxtLink to="/about"> <span class="theme-btn">Read More </span><span class="arrow-btn"><i class="icon-arrow-right"></i></span></NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
          <div class="service-items">
            <div class="service-icon">
              <i class="icon-03"></i>
            </div>
            <div class="service-content">
              <h3><NuxtLink to="/services/details">Data Sphere Innovations</NuxtLink></h3>
              <p>Information Technology is a rapidly evolving field that encompasses the study </p>
              <div class="main-button bg-2">
                <NuxtLink to="/about"> <span class="theme-btn"> Read More </span><span class="arrow-btn"><i class="icon-arrow-right"></i></span></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>