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
              <img height="80px"   src="/Logos/new_logos/3.png"
                  alt="Tekvion_system_logo">
        </NuxtLink>
        <div
          class="social-icon d-flex align-items-center wow fadeInUp"
          data-wow-delay=".5s"
        >
<a href="https://www.linkedin.com/in/tekvion-systems-78916a37b" target="_blank">
    <i class="fab fa-linkedin-in"></i>
  </a>
  <a href="https://www.instagram.com/tekvion-systems" target="_blank">
    <i class="fab fa-instagram"></i>
  </a>
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
                      <a 
                        >info@tekvionsystems.com</a
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
                <div class="main-button footer-input wow fadeInUp" data-wow-delay=".7s">
              <NuxtLink to="/contact"> <span class="theme-btn"> Contact Us </span><span class="arrow-btn"><i class="icon-arrow-right"></i></span></NuxtLink>
            </div>
               
                <div class="social-icon d-flex align-items-center">
                 
                 <a href="https://www.linkedin.com/in/tekvion-systems-78916a37b" target="_blank">
    <i class="fab fa-linkedin-in"></i>
  </a>
  <a href="https://www.instagram.com/tekvionsystems/" target="_blank">
    <i class="fab fa-instagram"></i>
  </a>
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
            © All Copyright 2025 by <NuxtLink to="/">Tekvion System</NuxtLink>
          </p>
          <ul class="footer-menu wow fadeInRight" data-wow-delay=".5s">
            <li>
              <NuxtLink to="/services"> Services </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/team"> Team </NuxtLink>
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
