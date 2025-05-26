<script setup lang="ts">
import {menuItems} from "~/data/menus";

const activeIndex = ref(null);

const toggleMenu = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};
</script>

<template>
  <div class="mean-bar">
    <nav class="mean-nav">
      <ul>
        <li
            v-for="(item, index) in menuItems"
            :key="index"
            :class="{ 'has-dropdown': item.submenu, active: activeIndex === index }"
        >
          <!-- Parent Menu Item -->
          <a v-if="item.submenu" :href="item.link" @click.prevent="toggleMenu(index)">
            {{ item.title }}
            <i v-if="item.submenu" class="fa-solid fa-chevron-down"></i>
          </a>
          <NuxtLink v-else :to="item.link">
            {{ item.title }}
          </NuxtLink>

          <!-- Submenu (Show/Hide Based on Active Index) -->
          <ul v-if="item.submenu" class="submenu" :class="[ activeIndex === index ? 'd-block': 'd-none' ]">
            <li v-for="(sub, subIndex) in item.submenu" :key="subIndex">
              <NuxtLink :to="sub.link">
                {{ sub.title }}
              </NuxtLink>
            </li>
          </ul>

          <!-- Expand Icon (Toggles Between + and -) -->
          <a
              v-if="item.submenu"
              class="mean-expand"
              href="#"
              style="font-size: 18px"
              @click.prevent="toggleMenu(index)"
          >
            <i :class="activeIndex === index ? 'far fa-minus' : 'far fa-plus'"></i>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>

</style>