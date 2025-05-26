<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";
import ServiceDetailsSection from "~/components/sections/ServiceDetailsSection.vue";
import CtaSectionOne from "~/components/sections/CtaSectionOne.vue";

const menus = ref([
  {
    label: 'Services',
    to: '/services'
  },
  {
    label: 'Service Details',
    to: ''
  },
]);
</script>

<template>
  <!-- Breadcrumb Section Start -->
  <Breadcrumb title="Service Details" :menus="menus" />
  <!-- Breadcrumb Section End -->

  <!-- Service Details Section Start -->
  <ServiceDetailsSection />
  <!-- Service Details Section End -->

  <!--  CTA Section Start -->
  <CtaSectionOne />
  <!--  CTA Section End -->
</template>

<style scoped>

</style>