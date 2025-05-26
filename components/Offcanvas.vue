<script setup>
import MobileMenu from "~/components/MobileMenu.vue";

const { isOffcanvasOpen, isOverlayOpen, closeOffcanvas } = useOffcanvas();
</script>

<template>
  <div class="fix-area">
    <div class="offcanvas__info" :class="{ 'info-open': isOffcanvasOpen }">
      <div class="offcanvas__wrapper">
        <div class="offcanvas__content">
          <div
            class="offcanvas__top mb-5 d-flex justify-content-between align-items-center"
          >
            <div class="offcanvas__logo">
              <NuxtLink to="/">
                <img src="@/assets/img/logo/black-logo.svg" alt="logo-img" />
              </NuxtLink>
            </div>
            <div class="offcanvas__close" @click="closeOffcanvas">
              <button>
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
          <p class="text d-none d-xl-block">
            Nullam dignissim, ante scelerisque the is euismod fermentum odio sem
            semper the is erat, a feugiat leo urna eget eros. Duis Aenean a
            imperdiet risus.
          </p>
          <div class="mobile-menu fix mb-3 mean-container">
            <MobileMenu />
          </div>
          <div class="offcanvas__contact">
            <h4>Contact Info</h4>
            <ul>
              <li class="d-flex align-items-center">
                <div class="offcanvas__contact-icon">
                  <i class="fal fa-map-marker-alt"></i>
                </div>
                <div class="offcanvas__contact-text">
                  <a target="_blank" href="#">Evergreen, CO 80437, USA</a>
                </div>
              </li>
              <li class="d-flex align-items-center">
                <div class="offcanvas__contact-icon mr-15">
                  <i class="fal fa-envelope"></i>
                </div>
                <div class="offcanvas__contact-text">
                  <a href="mailto:codesphere@gmail.com"
                    ><span class="mailto:codesphere@gmail.com"
                      >codesphere@gmail.com</span
                    ></a
                  >
                </div>
              </li>
              <li class="d-flex align-items-center">
                <div class="offcanvas__contact-icon mr-15">
                  <i class="fal fa-clock"></i>
                </div>
                <div class="offcanvas__contact-text">
                  <a target="_blank" href="#">Mod-friday, 09am -05pm</a>
                </div>
              </li>
              <li class="d-flex align-items-center">
                <div class="offcanvas__contact-icon mr-15">
                  <i class="far fa-phone"></i>
                </div>
                <div class="offcanvas__contact-text">
                  <a href="tel:+11002345909">+11002345909</a>
                </div>
              </li>
            </ul>
            <div class="header-button mt-4"></div>
            <div class="main-button">
              <NuxtLink to="/contact">
                <span class="theme-btn">Contact Us </span
                ><span class="arrow-btn"><i class="icon-arrow-right"></i></span
              ></NuxtLink>
            </div>
            <div class="social-icon d-flex align-items-center">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-twitter"></i></a>
              <a href="#"><i class="fab fa-youtube"></i></a>
              <a href="#"><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="offcanvas__overlay"
    :class="{ 'overlay-open': isOverlayOpen }"
  ></div>
</template>
