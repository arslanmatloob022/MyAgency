<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";
import CtaSectionOne from "~/components/sections/CtaSectionOne.vue";
import ShopPageSection from "~/components/sections/ShopPageSection.vue";

const menus = ref([
  {
    label: 'Shop Page',
    to: ''
  }
]);
</script>

<template>
  <!-- Breadcrumb Section Start -->
  <Breadcrumb title="Shop Page" :menus="menus" />
  <!-- Breadcrumb Section End -->

  <!-- Shop Page Section Start -->
  <ShopPageSection />
  <!-- Shop Page Section End -->

  <!--  CTA Section Start -->
  <CtaSectionOne />
  <!--  CTA Section End -->
</template>

<style scoped>

</style>