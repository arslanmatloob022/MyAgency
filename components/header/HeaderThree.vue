<script setup>
import NavMenu from "~/components/NavMenu.vue";
import {useSettingsStore} from "~/stores/settings.js";
const { isSticky } = useStickyHeader();
const settingStore = useSettingsStore();
</script>

<template>
  <header  id="header-sticky" class="header-section header-1 header-3" :class="{ sticky: isSticky }">
    <div class="container">
      <div class="mega-menu-wrapper">
        <div class="header-main">
          <div class="logo">
            <NuxtLink to="/" class="header-logo">
              <img src="@/assets/img/logo/white-logo-2.svg" alt="logo-img">
            </NuxtLink>
            <NuxtLink to="/" class="header-logo-2">
              <img src="@/assets/img/logo/black-logo-3.svg" alt="logo-img">
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
          <div class="header-right d-flex justify-content-end align-items-center">
            <a role="button" class="search-trigger search-icon" @click.stop="settingStore.toggleSearch">
              <i class="fa-regular fa-magnifying-glass"></i>
            </a>
            <div class="header__hamburger d-xl-block my-auto">
              <div class="sidebar__toggle">
                <div class="header-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>