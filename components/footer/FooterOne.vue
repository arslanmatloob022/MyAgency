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
          to="/"
          class="footer-logo wow fadeInUp"
          data-wow-delay=".3s"
        >
              <img height="60px" width="120px"  src="/Logos/DarkLogos/CSDarkShortL.png"
                  alt="code_sphere_studios_logo">
        </NuxtLink>
        <div
          class="social-icon d-flex align-items-center wow fadeInUp"
          data-wow-delay=".5s"
        >
          <a href="https://www.facebook.com/arslan.raajput.1" target="_blank"><i class="fab fa-facebook-f"></i></a>
          <a href="https://x.com/blackshadowik?t=yDf4z4OXrLR7vJRbeKLyyQ&s=09" target="_blank" ><i class="fab fa-twitter"></i></a>
          <a href="www.linkedin.com/in/raoarslanmatloob" target="_blank"><i class="fab fa-linkedin-in"></i></a>
          <a href=" https://www.instagram.com/i_arslan_rao?igsh=cmV2aHQxdGxhcjhn" target="_blank"><i class="fab fa-instagram"></i></a>
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
                      <p>+92300 7626 555</p>
                    </span>
                  </li>
                  <li>
                    Location
                    <span>  Evergreen, CO 80437, USA </span>
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
                <h3>Services</h3>
              </div>
              <ul class="list-items">
                <li>
                  <NuxtLink to="/services/details">
                   Web Development
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/details">
                    Mobile App Development
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/details">
                    Software as a Service
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/details">
                    Desktop Applications
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/services/details">
                     Artificial Intelligence
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
                 We're always ready to listen and help bring your ideas to life.
Reach out today — let's build something great together.
                </p>
                <div class="footer-input">
                  <input type="email" placeholder="Your email..." />
                  <button class="newsletter-button" type="submit">
                    <i class="fa-solid fa-paper-plane"></i>
                  </button>
                </div>
                <div class="social-icon d-flex align-items-center">
                  <a href="https://www.facebook.com/arslan.raajput.1"><i class="fab fa-facebook-f"></i></a>
                  <a href="https://x.com/blackshadowik?t=yDf4z4OXrLR7vJRbeKLyyQ&s=09"><i class="fab fa-twitter"></i></a>
                  <a href="www.linkedin.com/in/raoarslanmatloob"><i class="fab fa-linkedin-in"></i></a>
                  <a href="https://www.instagram.com/i_arslan_rao?igsh=cmV2aHQxdGxhcjhn"><i class="fab fa-instagram"></i></a>
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
            © All Copyright 2025 by <NuxtLink to="/">CodeSphere</NuxtLink>
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
