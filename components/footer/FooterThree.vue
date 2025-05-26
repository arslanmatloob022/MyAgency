<script setup>
</script>

<template>
  <footer class="footer-section-3 section-bg">
    <div class="container">
      <div class="footer-widget-wrapper-3">
        <div class="row justify-content-between">
          <div class="col-xl-4 col-lg-12 col-md-12">
            <div class="footer-widget-single">
              <div class="footer-head">
                <NuxtLink to="/" class="footer-logo">
                  <img src="@/assets/img/logo/black-logo-3.svg" alt="img">
                </NuxtLink>
              </div>
              <div class="footer-content">
                <p>
                  Information Technology is a rapidly evolving field that a encompasses latest the study
                </p>
                <div class="footer-input">
                  <input type="email" placeholder="Your email...">
                  <button class="plane-icon" type="submit">
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
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6">
            <div class="footer-widget-single">
              <div class="footer-head">
                <h3>Contact</h3>
              </div>
              <ul class="footer-contact">
                <li>
                  <a href="mailto:jessica.hanson@example.com">
                    jessica.hanson@example.com
                  </a>
                </li>
                <li>
                  <a href="tel:207555-0119">207555-0119</a>
                </li>
                <li>
                  2118 Thornridge Cir. Syracuse, Connecticut 35624
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-3 col-lg-6 col-md-6">
            <div class="footer-widget-single">
              <div class="footer-head">
                <h3>Service</h3>
              </div>
              <ul class="list-items">
                <li>
                  <NuxtLink to="/services/details">
                    Tech Savvy Solutions
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/details">
                    Data Driven Dynamics
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/details">
                    Network Ninja Services
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/details">
                    Cloud Craft Creations
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/details">
                    Cyber Security Sentinel
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-wrapper d-flex align-items-center justify-content-between">
          <p class="wow fadeInLeft color-2" data-wow-delay=".3s">
            © All Copyright 2025 by TechEdge
          </p>
          <ul class="footer-menu wow fadeInRight" data-wow-delay=".5s">
            <li>
              <NuxtLink to="/contact">
                Terms &amp; Condition
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact">
                Privacy Policy
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact">
                Contact Us
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>