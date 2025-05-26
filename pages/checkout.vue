<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";
import CheckoutSection from "~/components/sections/CheckoutSection.vue";
import CtaSectionOne from "~/components/sections/CtaSectionOne.vue";

const menus = ref([
  {
    label: 'Checkout',
    to: ''
  }
]);
</script>

<template>
  <!-- Breadcrumb Section Start -->
  <Breadcrumb title="Checkout" :menus="menus" />
  <!-- Breadcrumb Section End -->

  <!-- Checkout Section Start -->
  <CheckoutSection />
  <!-- Checkout Section End -->

  <!--  CTA Section Start -->
  <CtaSectionOne />
  <!--  CTA Section End -->
</template>

<style scoped>

</style>