<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";
import FaqSection from "~/components/sections/FaqSection.vue";
import ContactSectionTwo from "~/components/sections/ContactSectionTwo.vue";
import CtaSectionOne from "~/components/sections/CtaSectionOne.vue";
const menus = ref([
  {
    label: 'Faq',
    to: ''
  }
]);
</script>

<template>
  <!-- Breadcrumb Section Start -->
  <Breadcrumb title="FAQ" :menus="menus" />
  <!-- Breadcrumb Section End -->

  <!-- Faq Section Start -->
  <FaqSection />
  <!-- Faq Section Start -->

  <!-- Contact Section Start -->
  <ContactSectionTwo />
  <!-- Contact Section End -->

  <!--  CTA Section Start -->
  <CtaSectionOne />
  <!--  CTA Section End -->
</template>

<style scoped>

</style>