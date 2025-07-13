<script setup lang="ts">

</script>

<template>
  <section class="news-section section-padding pt-0">
    <div class="container">
      <div class="section-title text-center">
        <h2 class="wow fadeInUp" data-wow-delay=".3s">Blog And News</h2>
        <p class="mt-3 wow fadeInUp" data-wow-delay=".5s">
          Information Technology is a rapidly evolving field that encompasses the study and <br> application of computing technology to solve complex problems
        </p>
      </div>
      <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
          <div class="news-box-items">
            <div class="news-img">
              <img src="/news/01.jpg" alt="img">
            </div>
            <div class="news-content">
              <ul class="date-list">
                <li>
                  <i class="fa-solid fa-user"></i>
                  By admin
                </li>
                <li>
                  <i class="fa-solid fa-calendar-days"></i>
                  20, june 2025
                </li>
              </ul>
              <h3><NuxtLink to="/news/details">Driving Success Through the Technological Expertise</NuxtLink></h3>
              <NuxtLink to="/news/details" class="link-btn">Read More <i class="icon-arrow-right"></i></NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
          <div class="news-box-items">
            <div class="news-img">
              <img src="/news/02.jpg" alt="img">
            </div>
            <div class="news-content">
              <ul class="date-list">
                <li>
                  <i class="fa-solid fa-user"></i>
                  By admin
                </li>
                <li>
                  <i class="fa-solid fa-calendar-days"></i>
                  20, june 2025
                </li>
              </ul>
              <h3><NuxtLink to="/news/details">Pioneering Technology for  IT That Transforms</NuxtLink></h3>
              <NuxtLink to="/news/details" class="link-btn">Read More <i class="icon-arrow-right"></i></NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
          <div class="news-box-items">
            <div class="news-img">
              <img src="/news/03.jpg" alt="img">
            </div>
            <div class="news-content">
              <ul class="date-list">
                <li>
                  <i class="fa-solid fa-user"></i>
                  By admin
                </li>
                <li>
                  <i class="fa-solid fa-calendar-days"></i>
                  20, june 2025
                </li>
              </ul>
              <h3><NuxtLink to="/news/details">Through the Technological Not Just Informs</NuxtLink></h3>
              <NuxtLink to="/news/details" class="link-btn">Read More <i class="icon-arrow-right"></i></NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>