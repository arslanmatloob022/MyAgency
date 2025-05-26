<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";
import NewsStandardSection from "~/components/sections/NewsStandardSection.vue";
import CtaSectionOne from "~/components/sections/CtaSectionOne.vue";

const menus = ref([
  {
    label: 'Blog',
    to: ''
  }
]);
</script>

<template>
  <!-- Breadcrumb Section Start -->
  <Breadcrumb title="Blog" :menus="menus" />
  <!-- Breadcrumb Section End -->

  <!-- News Standard Section Start -->
  <NewsStandardSection />
  <!-- News Standard Section End -->

  <!--  CTA Section Start -->
  <CtaSectionOne />
  <!--  CTA Section End -->
</template>

<style scoped>

</style>