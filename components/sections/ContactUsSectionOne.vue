<script setup lang="ts">
import "swiper/css";
import brand01 from '@/assets/img/brand/brand_1.jpg'
import brand02 from '@/assets/img/brand/brand_2.jpg'
import brand03 from '@/assets/img/brand/brand_3.jpg'
import brand04 from '@/assets/img/brand/brand_4.jpg'
import brand05 from '@/assets/img/brand/brand_5.jpg'
import brand06 from '@/assets/img/brand/brand_6.jpg'
const slidesPerView = ref(4);

const brandImages = ref([
  brand05,
  brand02,
  brand03,
  brand04,
  brand05,
  brand06,
  brand03,
  brand04,
  brand05,
  brand06
])
const breakpoints = {
  1199: { slidesPerView: 6 },
  991: { slidesPerView: 5 },
  767: { slidesPerView: 4 },
  575: { slidesPerView: 3 },
  400: { slidesPerView: 2 },
  0: { slidesPerView: 1 },
};
</script>

<template>
  <section class="contact-section section-padding">
    <div class="container">
      <div class="contact-wrapper">
        <div class="row g-4 align-items-center justify-content-between">
          <div class="col-lg-5">
            <div class="contact-content">
              <div class="section-title mb-0">
                <h2 class="text-white wow fadeInUp" data-wow-delay=".3s">
                  Contact Us
                </h2>
                <p class="text-white mt-3 wow fadeInUp" data-wow-delay=".5s">
                 We’d love to hear from you! Whether you have a question about our services, want to discuss a project, or just want to say hello — our team is ready to help. Fill out the form and we’ll get back to you as soon as possible.
                </p>
              </div>
              <ul class="contact-info wow fadeInUp" data-wow-delay=".7s">
                <li>
                  <span>
                    <i class="fa-solid fa-location-dot"></i>
                    Address
                  </span>
                  Evergreen, CO 80437, USA
                </li>
                <li>
                  <span>
                    <i class="fa-solid fa-envelope"></i>
                    Email
                  </span>
                  <a href="mailto:codesphere@gmail.com">codesphere@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6">
            <form
              action="#"
              id="contact-form1"
              method="POST"
              class="contact-form-items"
            >
              <div class="row g-4">
                <div class="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                  <div class="form-clt">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div class="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                  <div class="form-clt">
                    <span>Email</span>
                    <input
                      type="text"
                      name="name"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <!-- <div class="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                  <div class="form-clt">
                    <span>Option</span>
                    <div class="form">
                      <select class="single-select nice-select w-100">
                        <option>Choose An Option</option>
                        <option>Choose Option 01</option>
                        <option>Choose Option 02</option>
                        <option>Choose Option 03</option>
                        <option>Choose Option 04</option>
                      </select>
                    </div>
                  </div>
                </div> -->
                <div class="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                  <div class="form-clt">
                    <span>Message</span>
                    <textarea
                      name="message"
                      id="message1"
                      placeholder="Type Here"
                    ></textarea>
                  </div>
                </div>
                <div class="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                  <div class=""></div>
                  <button type="submit" class="theme-btn">
                    <span>Sent Now <i class="icon-arrow-right"></i></span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="brand-section section-padding pb-0">
    <div class="swiper brand-slider">
      <swiper-container
        :space-between="50"
        :speed="2000"
        :loop="true"
        :autoplay="{ delay: 1000, disableOnInteraction: false }"
        :breakpoints="breakpoints"
         :slides-per-view="slidesPerView"
        class="swiper-wrapper"
      >
        <swiper-slide
          v-for="(image, index) in brandImages"
          :key="index"
          class="swiper-slide"
        >
          <div class="brand-image">
            <img :src="image" alt="brand" style="width: 179px;height: auto;" />
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
    </div>
  </section>
</template>


