<script setup>
import NavMenu from "~/components/NavMenu.vue";
const { isSticky } = useStickyHeader();
</script>

<template>
  <header class="header-section style-2">
    <div class="header-top">
      <div class="container">
        <div class="header-top-wrapper">
          <ul>
            <li>
              <i class="far fa-envelope"></i>
              <a href="mailto:codesphere@gmail.com" class="link"
                >codesphere@gmail.com</a
              >
            </li>
            <li>
              <i class="fal fa-map-marker-alt"></i>
              Evergreen, CO 80437, USA
            </li>
          </ul>
          <div class="social-icon d-flex align-items-center">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div id="header-sticky" class="header-1" :class="{ sticky: isSticky }">
      <div class="container">
        <div class="mega-menu-wrapper">
          <div class="header-main">
            <div class="logo">
              <NuxtLink to="/" class="header-logo-22">
                <img
                  src="/Logos/LogoWhiteGreen/BCodeSphereS.png"
                  alt="logo-img"
                />
              </NuxtLink>
            </div>
            <div class="mean__menu-wrapper">
              <div class="main-menu">
                <nav id="mobile-menu">
                  <ClientOnly>
                    <NavMenu />
                  </ClientOnly>
                </nav>
              </div>
            </div>
            <div
              class="header-right d-flex justify-content-end align-items-center"
            >
              <div class="main-button bg-2">
                <NuxtLink to="/contact">
                  <span class="theme-btn">Contact Us </span
                  ><span class="arrow-btn"
                    ><i class="icon-arrow-right"></i></span
                ></NuxtLink>
              </div>
              <div class="header__hamburger d-xl-none my-auto">
                <div class="sidebar__toggle">
                  <i class="fas fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
