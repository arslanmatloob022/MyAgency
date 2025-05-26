<script setup></script>

<template>
  <footer class="footer-section-22 section-bg">
    <div class="container">
      <div class="footer-widget-wrapper-22">
        <div class="row justify-content-between">
          <div class="col-xl-4">
            <div
              class="footer-widget-items-2 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div class="widget-head">
                <NuxtLink to="/" class="footer-logo-2">
                  <img src="@/assets/img/logo/black-logo-2.svg" alt="img" />
                </NuxtLink>
              </div>
              <div class="footer-input">
                <input type="email" placeholder="Your email..." />
                <button class="newsletter-button" type="submit">
                  <i class="fa-solid fa-paper-plane"></i>
                </button>
              </div>
              <div class="social-icon d-flex align-items-center">
                <a href="#"><i class="fab fa-facebook-f"></i></a>
                <a href="#"><i class="fab fa-twitter"></i></a>
                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                <a href="#"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div
              class="footer-widget-items-2 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div class="widget-head">
                <h3>Lets Work Toghter</h3>
              </div>
              <div class="footer-list-area">
                <div class="contact-list-2">
                  <h4>Location</h4>
                  <ul>
                    <li>
                      2118 Thornridge Cir. Syracuse, <br />
                      Connecticut 35624
                    </li>
                  </ul>
                </div>
                <div class="contact-list-2">
                  <h4>Contact</h4>
                  <ul>
                    <li>
                      <a href="mailto:codesphere@gmail.com"
                        >codesphere@gmail.com</a
                      >
                    </li>
                    <li>
                      <a href="tel:+20866660112">+208-6666-0112</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div
          class="footer-wrapper d-flex align-items-center justify-content-between"
        >
          <p class="wow fadeInLeft color-2" data-wow-delay=".3s">
            © All Copyright 2025 by TechEdge
          </p>
          <ul class="footer-menu wow fadeInRight" data-wow-delay=".5s">
            <li>
              <NuxtLink to="/contact"> Terms & Condition </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact"> Privacy Policy </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact"> Contact Us </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
