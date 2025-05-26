<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";
import ServiceSection from "~/components/sections/ServiceSection.vue";
import CtaSectionOne from "~/components/sections/CtaSectionOne.vue";

const menus = ref([
  {
    label: 'our service',
    to: ''
  }
]);
</script>

<template>
  <!-- Breadcrumb Section Start -->
  <Breadcrumb title="our service" :menus="menus" />
  <!-- Breadcrumb Section End -->

  <!-- Service Section Start -->
  <ServiceSection />
  <!-- Service Section End -->

  <!--  CTA Section Start -->
  <CtaSectionOne />
  <!--  CTA Section End -->
</template>

<style scoped>

</style>