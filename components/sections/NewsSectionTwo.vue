<script setup lang="ts">

</script>

<template>
  <section class="news-section section-padding pt-0">
    <div class="container">
      <div class="section-title text-center">
        <h2 class="wow fadeInUp" data-wow-delay=".3s">Our Recent Blog</h2>
      </div>
      <div class="row">
        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
          <div class="news-box-items-2">
            <div class="news-img">
              <img src="@/assets/img/news/04.jpg" alt="img">
              <div class="date-box">
                <ul>
                  <li>30</li>
                  <li> May</li>
                </ul>
              </div>
            </div>
            <div class="news-content">
              <h3><NuxtLink to="/news/details">Empowering Innovation Through Digitally the Technology</NuxtLink></h3>
              <NuxtLink to="/news/details" class="btn-itms">
                Read Now <i class="icon-arrow-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
          <div class="news-box-items-2">
            <div class="news-img">
              <img src="@/assets/img/news/05.jpg" alt="img">
              <div class="date-box">
                <ul>
                  <li>30</li>
                  <li> May</li>
                </ul>
              </div>
            </div>
            <div class="news-content">
              <h3><NuxtLink to="/news/details">IT Excellence Every Step of the Elevate Your Business</NuxtLink></h3>
              <NuxtLink to="/news/details" class="btn-itms">
                Read Now <i class="icon-arrow-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
          <div class="news-box-items-2">
            <div class="news-img">
              <img src="@/assets/img/news/06.jpg" alt="img">
              <div class="date-box">
                <ul>
                  <li>30</li>
                  <li> May</li>
                </ul>
              </div>
            </div>
            <div class="news-content">
              <h3><NuxtLink to="/news/details">Unleashing the Power of  Seamless Solutions the Power</NuxtLink></h3>
              <NuxtLink to="/news/details" class="btn-itms">
                Read Now <i class="icon-arrow-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>