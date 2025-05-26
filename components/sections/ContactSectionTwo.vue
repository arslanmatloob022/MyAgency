<script setup lang="ts">

</script>

<template>
  <section class="contact-section-2 section-padding pt-0 fix">
    <div class="container">
      <div class="contact-wrapper-2">
        <div class="row">
          <div class="col-lg-6">
            <div class="contact-image">
              <img src="@/assets/img/contact/01.png" alt="img" class="wow img-custom-anim-left
                                ">
              <div class="radius-image">
                <img src="@/assets/img/contact/radius-image.png" alt="img">
              </div>
              <div class="box-shape float-bob-y">
                <img src="@/assets/img/choose-us/shape-box.png" alt="img">
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="contact-item">
              <div class="section-title mb-0 wow fadeInUp" data-wow-delay=".3s">
                <h2>Contact Us</h2>
              </div>
              <form action="#" id="contact-form1" method="POST" class="contact-form-items">
                <div class="row g-4">
                  <div class="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                    <div class="form-clt">
                      <input type="text" name="name" id="name" placeholder="Your Name">
                    </div>
                  </div>
                  <div class="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                    <div class="form-clt">
                      <input type="text" name="name" id="email" placeholder="Email">
                    </div>
                  </div>
                  <div class="col-lg-12 wow fadeInUp" data-wow-delay=".5s">
                    <div class="form-clt">
                      <div class="form">
                        <select class="single-select nice-select w-100">
                          <option>Select Service</option>
                          <option>Service 01</option>
                          <option>Service 02</option>
                          <option>Service 03</option>
                          <option>Service 04</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                    <div class="form-clt">
                      <input type="text" name="name" id="name2" placeholder="mm/dd/yyy">
                    </div>
                  </div>
                  <div class="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                    <div class="form-clt">
                      <input type="text" name="Time" id="Time" placeholder="Time">
                    </div>
                  </div>
                  <div class="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
                    <div class="form-clt">
                      <textarea name="message" id="message1" placeholder="Type Here"></textarea>
                    </div>
                  </div>
                  <div class="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
                    <button type="submit" class="theme-btn">
                      <span>Sent Now <i class="icon-arrow-right"></i></span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>