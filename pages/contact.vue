<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";
import ContactSection from "~/components/sections/ContactSection.vue";
import CtaSectionOne from "~/components/sections/CtaSectionOne.vue";

const menus = ref([
  {
    label: 'Contact Us',
    to: ''
  }
]);
</script>

<template>
  <!-- Breadcrumb Section Start -->
  <Breadcrumb title="Contact Us" :menus="menus" />
  <!-- Breadcrumb Section End -->

  <!-- Contact Section Start -->
  <ContactSection />
  <!-- Contact Section End -->

  <!--  CTA Section Start -->
  <CtaSectionOne />
  <!--  CTA Section End -->
</template>

<style scoped>

</style>