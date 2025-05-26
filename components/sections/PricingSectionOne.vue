<script setup lang="ts">

</script>

<template>
  <section class="pricing-section section-padding section-bg">
    <div class="container">
      <div class="row g-4">
        <div class="col-xl-4 col-lg-4">
          <div class="pricing-box">
            <h2 class="wow fadeInUp" data-wow-delay=".3s">Our Pricing Plan</h2>
            <p class="wow fadeInUp" data-wow-delay=".5s">Information Technology is a rapidly evolving field that encompasses the study and application</p>
            <div class="pricing-two__tab wow fadeInUp" data-wow-delay=".7s">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button class="nav-link active" id="pt-1-tab" data-bs-toggle="tab"
                          data-bs-target="#pt-1" type="button" role="tab" aria-controls="pt-1"
                          aria-selected="true">Monthly</button>
                  <button class="nav-link" id="pt-2-tab" data-bs-toggle="tab" data-bs-target="#pt-2"
                          type="button" role="tab" aria-controls="pt-2"
                          aria-selected="false">Yearly</button>

                </div>
              </nav>
            </div>
          </div>
        </div>
        <div class="col-xl-8 col-lg-8">
          <div class="tab-content" id="nav-tabContent">
            <div class="tab-pane fade show active" id="pt-1" role="tabpanel" aria-labelledby="pt-1-tab">
              <div class="row g-4">
                <div class="col-xl-6 col-lg-6">
                  <div class="pricing-box-items">
                    <div class="circle-shape">
                      <img src="@/assets/img/circle-shape.png" alt="img">
                    </div>
                    <div class="pricing-header">
                      <h3>Basic</h3>
                      <h2>$19<sub>/Month</sub></h2>
                    </div>
                    <ul class="pricing-list">
                      <li>
                        Cyber Security Sentinel
                        <i class="fa-solid fa-circle-check"></i>
                      </li>
                      <li>
                        Software Solutions Pro
                        <i class="fa-solid fa-circle-check"></i>
                      </li>
                      <li>
                        IT Infrastructure Innovations
                        <i class="fa-solid fa-circle-check color-2"></i>
                      </li>
                      <li>
                        Mobile Tech Mastery
                        <i class="fa-solid fa-circle-check color-2"></i>
                      </li>
                    </ul>
                    <div class="main-button">
                      <NuxtLink to="/contact"> <span class="theme-btn"> Get Started Now </span><span class="arrow-btn"><i class="icon-arrow-right"></i></span></NuxtLink>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <div class="pricing-box-items">
                    <div class="circle-shape">
                      <img src="@/assets/img/circle-shape.png" alt="img">
                    </div>
                    <div class="pricing-header">
                      <h3>Advanced</h3>
                      <h2>$29<sub>/Month</sub></h2>
                    </div>
                    <ul class="pricing-list">
                      <li>
                        Cyber Security Sentinel
                        <i class="fa-solid fa-circle-check"></i>
                      </li>
                      <li>
                        Software Solutions Pro
                        <i class="fa-solid fa-circle-check"></i>
                      </li>
                      <li>
                        IT Infrastructure Innovations
                        <i class="fa-solid fa-circle-check color-2"></i>
                      </li>
                      <li>
                        Mobile Tech Mastery
                        <i class="fa-solid fa-circle-check color-2"></i>
                      </li>
                    </ul>
                    <div class="main-button">
                      <NuxtLink to="/contact"> <span class="theme-btn"> Get Started Now </span><span class="arrow-btn"><i class="icon-arrow-right"></i></span></NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pt-2" role="tabpanel" aria-labelledby="pt-2-tab">
              <div class="row g-4">
                <div class="col-xl-6 col-lg-6">
                  <div class="pricing-box-items">
                    <div class="circle-shape">
                      <img src="@/assets/img/circle-shape.png" alt="img">
                    </div>
                    <div class="pricing-header">
                      <h3>Basic</h3>
                      <h2>$19<sub>/Month</sub></h2>
                    </div>
                    <ul class="pricing-list">
                      <li>
                        Cyber Security Sentinel
                        <i class="fa-solid fa-circle-check"></i>
                      </li>
                      <li>
                        Software Solutions Pro
                        <i class="fa-solid fa-circle-check"></i>
                      </li>
                      <li>
                        IT Infrastructure Innovations
                        <i class="fa-solid fa-circle-check color-2"></i>
                      </li>
                      <li>
                        Mobile Tech Mastery
                        <i class="fa-solid fa-circle-check color-2"></i>
                      </li>
                    </ul>
                    <div class="main-button">
                      <NuxtLink to="/contact"> <span class="theme-btn"> Get Started Now </span><span class="arrow-btn"><i class="icon-arrow-right"></i></span></NuxtLink>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                  <div class="pricing-box-items">
                    <div class="circle-shape">
                      <img src="@/assets/img/circle-shape.png" alt="img">
                    </div>
                    <div class="pricing-header">
                      <h3>Advanced</h3>
                      <h2>$29<sub>/Month</sub></h2>
                    </div>
                    <ul class="pricing-list">
                      <li>
                        Cyber Security Sentinel
                        <i class="fa-solid fa-circle-check"></i>
                      </li>
                      <li>
                        Software Solutions Pro
                        <i class="fa-solid fa-circle-check"></i>
                      </li>
                      <li>
                        IT Infrastructure Innovations
                        <i class="fa-solid fa-circle-check color-2"></i>
                      </li>
                      <li>
                        Mobile Tech Mastery
                        <i class="fa-solid fa-circle-check color-2"></i>
                      </li>
                    </ul>
                    <div class="main-button">
                      <NuxtLink to="/contact"> <span class="theme-btn"> Get Started Now </span><span class="arrow-btn"><i class="icon-arrow-right"></i></span></NuxtLink>
                    </div>
                  </div>
                </div>
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