<script setup>
import NavMenu from "~/components/NavMenu.vue";
const { isSticky } = useStickyHeader();
const { isOffcanvasOpen, isOverlayOpen, isBodyOverlayOpen, openOffcanvas } =
  useOffcanvas();
</script>

<template>
  <header class="header-section">
    <div class="header-top">
      <div class="container">
        <div class="header-top-wrapper">
          <ul>
            <li>
              <i class="far fa-envelope"></i>
              <a href="mailto:codesphere@gmail.com" class="link"
                >info@tekvionsystems.com</a
              >
            </li>
            <li>
              <i class="fal fa-map-marker-alt"></i>
              Evergreen, CO 80437, USA
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="header-sticky" class="header-1" :class="{ sticky: isSticky }">
      <div class="container">
        <div class="mega-menu-wrapper">
          <div class="header-main">
            <div class="logo">
              <NuxtLink to="/"   class="header-logo">
                <img
                  src="/Logos/new_logos/3.png"
                  alt="Tekvion_system_logo"
                  height="90px"
                  
                />
              </NuxtLink>
              <NuxtLink to="/" class="header-logo-2">
                 <img
                  src="/Logos/new_logos/3.png"
                  alt="Tekvion_system_logo"
                  height="80px"
                  
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
              <div class="main-button">
                <NuxtLink to="/contact">
                  <span class="theme-btn">Contact Us </span
                  ><span class="arrow-btn"
                    ><i class="icon-arrow-right"></i></span
                ></NuxtLink>
              </div>
              <div class="header__hamburger d-xl-none my-auto">
                <div class="sidebar__toggle" @click="openOffcanvas">
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
