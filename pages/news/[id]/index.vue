<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";
import NewsDetailsSection from "~/components/sections/NewsDetailsSection.vue";
import CtaSectionOne from "~/components/sections/CtaSectionOne.vue";

const menus = ref([
  {
    label: 'Blogs',
    to: '/news'
  },
  {
    label: 'Blog Details',
    to: ''
  },
]);
</script>

<template>
  <!-- Breadcrumb Section Start -->
  <Breadcrumb title="Blog Details" :menus="menus" />
  <!-- Breadcrumb Section End -->

  <!-- News Details Section Start -->
  <NewsDetailsSection />
  <!-- News Details Section End -->

  <!--  CTA Section Start -->
  <CtaSectionOne />
  <!--  CTA Section End -->
</template>

<style scoped>

</style>