<script setup lang="ts">

</script>

<template>
  <section class="about-section section-padding">
    <div class="container">
      <div class="about-wrapper-2">
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="about-content">
              <div class="section-title mb-0">
                <h2 class="wow fadeInUp">Unleashing the Power  Technology</h2>
                <p class="wow fadeInUp" data-wow-delay=".3s">Information Technology is a rapidly evolving field that encompasses the study and application of computing technology to solve complex problems</p>
              </div>
              <div class="counter-items-area">
                <div class="counter-items wow fadeInUp" data-wow-delay=".3s">
                  <h3>
                    <span class="count">
                      <ScrollCounter :start="0" :end="1" :duration="3000" :delay="10" />
                    </span>M+
                  </h3>
                  <p>Clients</p>
                </div>
                <div class="counter-items wow fadeInUp" data-wow-delay=".5s">
                  <h3>
                    <span class="count">
                      <ScrollCounter :start="0" :end="20" :duration="3000" :delay="10" />
                    </span>K+
                  </h3>
                  <p>Clients Review</p>
                </div>
                <div class="counter-items wow fadeInUp" data-wow-delay=".7s">
                  <h3>
                    <span class="count">
                      <ScrollCounter :start="0" :end="14" :duration="3000" :delay="10" />
                    </span>K+
                  </h3>
                  <p>Complete Project</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="about-img">
              <img src="@/assets/img/about/11.jpg" alt="img" class="wow img-custom-anim-left">
              <div class="shape-box float-bob-y">
                <img src="@/assets/img/about/shape-box-2.png" alt="img">
              </div>
              <div class="line-shape">
                <img src="@/assets/img/about/line-shape-2.png" alt="img">
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