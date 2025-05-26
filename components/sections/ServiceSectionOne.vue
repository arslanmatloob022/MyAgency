<script setup lang="ts">
import serviceImg from "@/assets/img/service/service-img.jpg";
</script>

<template>
  <section class="service-section section-padding">
    <div class="container">
      <div class="section-title text-center">
        <h2 class="wow fadeInUp" data-wow-delay=".3s">Our Best Services</h2>
        <p class="mt-3 wow fadeInUp" data-wow-delay=".5s">
          Information Technology is a rapidly evolving field that encompasses the study and <br> application of computing technology to solve complex problems
        </p>
      </div>
      <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
          <div class="service-box-items">
            <div class="icon">
              <i class="icon-01"></i>
            </div>
            <div class="content">
              <h3><NuxtLink to="/services/details">Tech Fortress Solutions</NuxtLink></h3>
              <p>Information Technology is a rapidly evolving field that encompasses the study and application</p>
              <NuxtLink to="/services/details" class="link-btn">Read More <span><i class="icon-arrow-right"></i></span></NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
          <div class="service-box-items">
            <div class="icon">
              <i class="icon-02"></i>
            </div>
            <div class="content">
              <h3><NuxtLink to="/services/details">Data Sphere Innovations</NuxtLink></h3>
              <p>Information Technology is a rapidly evolving field that encompasses the study and application</p>
              <NuxtLink to="/services/details" class="link-btn">Read More <span><i class="icon-arrow-right"></i></span></NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
          <div class="service-box-items">
            <div class="icon">
              <i class="icon-03"></i>
            </div>
            <div class="content">
              <h3><NuxtLink to="/services/details">Cyber Pulse Security</NuxtLink></h3>
              <p>Information Technology is a rapidly evolving field that encompasses the study and application</p>
              <NuxtLink to="/services/details" class="link-btn">Read More <span><i class="icon-arrow-right"></i></span></NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
          <div class="service-box-items">
            <div class="icon">
              <i class="icon-04"></i>
            </div>
            <div class="content">
              <h3><NuxtLink to="/services/details">Net Vantage Systems</NuxtLink></h3>
              <p>Information Technology is a rapidly evolving field that encompasses the study and application</p>
              <NuxtLink to="/services/details" class="link-btn">Read More <span><i class="icon-arrow-right"></i></span></NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
          <div class="service-box-items">
            <div class="icon">
              <i class="icon-05"></i>
            </div>
            <div class="content">
              <h3><NuxtLink to="/services/details">Code Nova Technologies</NuxtLink></h3>
              <p>Information Technology is a rapidly evolving field that encompasses the study and application</p>
              <NuxtLink to="/services/details" class="link-btn">Read More <span><i class="icon-arrow-right"></i></span></NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
          <div class="service-img bg-cover" :style="{backgroundImage: `url(${serviceImg})`}">
            <div class="service-content">
              <div class="icon">
                <i class="fa-solid fa-phone"></i>
              </div>
              <h3>Need Help?</h3>
              <p class="mb-0">For fast service</p>
              <h4><a href="tel:+888123456765" class="text-white">(+888) 123 456 765</a></h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>