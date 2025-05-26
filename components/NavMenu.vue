<script setup lang="ts">
import {menuItems} from "~/data/menus";
</script>

<template>
  <ul>
    <li
        v-for="(item, index) in menuItems"
        :key="index"
        :class="{ 'has-dropdown': item.submenu, active: item.active }" class="menu-thumb"
    >
      <template v-if="item.submenu">
        <a role="button">
          {{ item.title }}
          <i class="fa-solid fa-chevron-down"></i>
        </a>
      </template>
      <template v-else>
        <NuxtLink :to="item.link">
          {{ item.title }}
        </NuxtLink>
      </template>

      <!-- Submenu -->
      <ul v-if="item.submenu" class="submenu" :class="{'has-homemenu' : item.hasHomeMenu}">
        <li v-if="item.hasHomeMenu">
          <div class="homemenu-items">
            <div
                class="homemenu"
                v-for="(home, homeIndex) in item.submenu"
                :key="homeIndex"
            >
              <div class="homemenu-thumb">
                <img :src="home.image" :alt="home.title" />
                <div class="demo-button">
                  <NuxtLink :to="home.link" class="theme-btn">Demo Page</NuxtLink>
                </div>
              </div>
              <div class="homemenu-content text-center">
                <h4 class="homemenu-title">{{ home.title }}</h4>
              </div>
            </div>
          </div>
        </li>

        <!-- Normal Submenu Items -->
        <li v-else v-for="(sub, subIndex) in item.submenu" :key="subIndex" class="menu-thumb">
          <NuxtLink :to="sub.link">{{ sub.title }}</NuxtLink>
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>

</style>