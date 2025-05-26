<script setup lang="ts">

</script>

<template>
  <section class="testimonial-section-3 section-padding">
    <div class="container">
      <div class="testimonial-wrapper-3">
        <div class="row g-0 align-items-center">
          <div class="col-xl-4 mb-4 mb-xl-0">
            <div class="swiper testimonial-slider-3">
              <swiper-container
                  :spaceBetween="30"
                  :speed="2000"
                  :loop="true"
                  :autoplay="{ delay: 1000, disableOnInteraction: false }"
                  :pagination="{ el: '.dot', clickable: true }"
                  :navigation="{
                    nextEl: '.array-prev',
                    prevEl: '.array-next',
                  }"
                  class="swiper-wrapper"
              >
                <swiper-slide class="swiper-slide">
                  <div class="testimonial-box-items">
                    <h2>What Our Clients Say</h2>
                    <p>Information Technology is a rapidly evolving field that is a encompasses the study and application Information Technology is a rapidly evolving the for the best for my choise  is a rapidly</p>
                    <div class="client-info">
                      <img src="@/assets/img/testimonial/04.png" alt="img">
                      <div class="content">
                        <h3>Cody Fisher</h3>
                        <p>Ceo</p>
                      </div>
                    </div>
                    <div class="quote-icon">
                      <img src="@/assets/img/testimonial/quote-01.png" alt="icon">
                    </div>
                  </div>
                </swiper-slide>
                <swiper-slide class="swiper-slide">
                  <div class="testimonial-box-items">
                    <h2>What Our Clients Say</h2>
                    <p>Information Technology is a rapidly evolving field that is a encompasses the study and application Information Technology is a rapidly evolving the for the best for my choise  is a rapidly</p>
                    <div class="client-info">
                      <img src="@/assets/img/testimonial/04.png" alt="img">
                      <div class="content">
                        <h3>Cody Fisher</h3>
                        <p>Ceo</p>
                      </div>
                    </div>
                    <div class="quote-icon">
                      <img src="@/assets/img/testimonial/quote-01.png" alt="icon">
                    </div>
                  </div>
                </swiper-slide>
              </swiper-container>
            </div>
            <div class="array-button justify-content-end">
              <button class="array-prev">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33636 17.8281L32.6797 17.8281L32.6797 20.1719L5.33636 20.1719L5.33636 17.8281Z" fill="#05091D"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.50781 20.1719C12.0195 20.1719 16.5234 15.3248 16.5234 10.1562L16.5234 8.98438L14.1797 8.98438L14.1797 10.1563C14.1797 14.0805 10.6756 17.8281 6.50781 17.8281L5.33656 17.8281L5.33656 20.1719L6.50781 20.1719Z" fill="#05091D"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.50781 17.8241C12.0195 17.8241 16.5234 22.6712 16.5234 27.8398L16.5234 29.0117L14.1797 29.0117L14.1797 27.8398C14.1797 23.9155 10.6756 20.1679 6.50781 20.1679L5.33656 20.1679L5.33656 17.8241L6.50781 17.8241Z" fill="#05091D"/>
                </svg>
              </button>
              <button class="array-next">
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M32.6715 20.1719H5.32812V17.8281H32.6715V20.1719Z" fill="#05091D"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M31.5 17.8281C25.9883 17.8281 21.4844 22.6752 21.4844 27.8438V29.0156H23.8281V27.8438C23.8281 23.9195 27.3322 20.1719 31.5 20.1719H32.6713V17.8281H31.5Z" fill="#05091D"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M31.5 20.1759C25.9883 20.1759 21.4844 15.3288 21.4844 10.1602V8.98828H23.8281V10.1602C23.8281 14.0845 27.3322 17.8321 31.5 17.8321H32.6713V20.1759H31.5Z" fill="#05091D"/>
                </svg>
              </button>
            </div>
          </div>
          <div class="col-xl-8">
            <div class="testimonial-image wow img-custom-anim-right">
              <img src="@/assets/img/testimonial/img-01.jpg" alt="img">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>