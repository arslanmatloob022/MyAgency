<script setup lang="ts">
import breadcrumbImg from "@/assets/img/breadcrumb.jpg";
defineProps({
  menus: {
    type: Array,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="breadcrumb-wrapper bg-cover" :style="{backgroundImage: `url(${breadcrumbImg})`}">
    <div class="container">
      <div class="page-heading">
        <h1 class="wow fadeInUp" data-wow-delay=".3s">{{ title }}</h1>
        <ul class="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
          <li>
            <NuxtLink href="/">
              Home
            </NuxtLink>
          </li>
          <template v-for="menu in menus">
            <li>
              <NuxtLink  :href="menu.to" v-if="menu.to">
                <i class="fas fa-chevron-right me-2"></i> {{ menu.label }}
              </NuxtLink>
              <template v-else>
                <i class="fas fa-chevron-right me-2"></i> {{ menu.label }}
              </template>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>