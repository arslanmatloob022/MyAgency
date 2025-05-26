<script setup></script>

<template>
  <footer class="footer-section section-bg">
    <div class="color-shape">
      <img src="../../assets/img/footer-color.png" alt="img" />
    </div>
    <div class="color-shape-2">
      <img src="../../assets/img/footer-color-2.png" alt="img" />
    </div>
    <div class="container">
      <div class="footer-logo-area">
        <NuxtLink
          to="/public"
          class="footer-logo wow fadeInUp"
          data-wow-delay=".3s"
        >
          <img src="../../assets/img/logo/black-logo.svg" alt="img" />
        </NuxtLink>
        <div
          class="social-icon d-flex align-items-center wow fadeInUp"
          data-wow-delay=".5s"
        >
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </div>
      </div>
      <div class="footer-widget-wrapper">
        <div class="row justify-content-between">
          <div
            class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div class="single-footer-widget">
              <div class="wid-title">
                <h3>Contact</h3>
              </div>
              <div class="footer-content">
                <ul class="footer-contact">
                  <li>
                    Email
                    <span>
                      <a href="mailto:codesphere@gmail.com"
                        >codesphere@gmail.com</a
                      >
                    </span>
                  </li>
                  <li>
                    Phone
                    <span>
                      <a href="tel:+17189044450">+1718-904-4450</a>
                    </span>
                  </li>
                  <li>
                    Location
                    <span> 2118 Thornridge Cir. Syracuse </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div class="single-footer-widget">
              <div class="wid-title">
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
          <div
            class="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay=".7s"
          >
            <div class="single-footer-widget">
              <div class="wid-title">
                <h3>Contact</h3>
              </div>
              <div class="footer-content">
                <p>
                  Information Technology is a rapidly evolving field that a
                  encompasses latest the study
                </p>
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
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div
          class="footer-wrapper d-flex align-items-center justify-content-between"
        >
          <p class="wow fadeInLeft color-2" data-wow-delay=".3s">
            © All Copyright 2025 by <NuxtLink to="/">TechEdge</NuxtLink>
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
