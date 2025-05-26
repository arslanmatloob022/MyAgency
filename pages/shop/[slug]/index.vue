<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";
import ShopDetailsSection from "~/components/sections/ShopDetailsSection.vue";
import CtaSectionOne from "~/components/sections/CtaSectionOne.vue";

const menus = ref([
  {
    label: 'Shop',
    to: '/shop'
  },
  {
    label: 'Shop Details',
    to: ''
  },
]);
</script>

<template>
  <!-- Breadcrumb Section Start -->
  <Breadcrumb title="Shop Details" :menus="menus" />
  <!-- Breadcrumb Section End -->

  <!-- Shop Details Section Start -->
  <ShopDetailsSection />
  <!-- Shop Details Section End -->

  <!--  CTA Section Start -->
  <CtaSectionOne />
  <!--  CTA Section End -->
</template>

<style scoped>

</style>