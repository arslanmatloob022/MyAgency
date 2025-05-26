<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";
import ShopCartSection from "~/components/sections/ShopCartSection.vue";
import CtaSectionOne from "~/components/sections/CtaSectionOne.vue";

const menus = ref([
  {
    label: 'Shop Cart',
    to: ''
  }
]);
</script>

<template>
  <!-- Breadcrumb Section Start -->
  <Breadcrumb title="Shop Cart" :menus="menus" />
  <!-- Breadcrumb Section End -->

  <!-- Shop Cart Section Start -->
  <ShopCartSection />
  <!-- Shop Cart Section End -->

  <!--  CTA Section Start -->
  <CtaSectionOne />
  <!--  CTA Section End -->
</template>

<style scoped>

</style>