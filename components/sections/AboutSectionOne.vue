<script setup lang="ts">

</script>

<template>
  <section class="about-section section-padding pt-0">
    <div class="container">
      <div class="about-title wow fadeInUp" data-wow-delay=".3s">
        <h2>Crafting Codes, <br> Shaping Future.</h2>
      </div>
      <div class="about-wrapper">
        <div class="about-shape">
          <img src="@/assets/img/about/about-shape.png" alt="img">
        </div>
        <div class="about-items">
          <div class="about-img wow fadeInUp" data-wow-delay=".3s">
            <img src="@/assets/img/about/01.jpg" alt="img">
          </div>
          <div class="about-content wow fadeInUp" data-wow-delay=".5s">
            <p>
              At CodeSphere, we help businesses thrive in the digital age.Our team crafts websites, mobile apps, and software strategies that truly work.
              <!-- Information Technology is a rapidly evolving field that encompasses the study and application of computing technology to solve complex problems -->
            </p>
            <NuxtLink to="/services" class="circle-box">
                <span>
                    <span class="icon">
                        <i class="icon-arrow-right"></i>
                    </span>
                    All Services
                </span>
            </NuxtLink>
          </div>
        </div>
        <div class="counter-box wow fadeInUp" data-wow-delay=".7s">
          <div class="icon">
            <img src="@/assets/img/icon/about-01.svg" alt="img">
          </div>
          <h2><span class="count">2000</span>+</h2>
          <p>Employees Working</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>