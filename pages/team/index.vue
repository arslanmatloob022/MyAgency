<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";
import TeamSection from "~/components/sections/TeamSection.vue";
import ContactSectionTwo from "~/components/sections/ContactSectionTwo.vue";
import CtaSectionOne from "~/components/sections/CtaSectionOne.vue";

const menus = ref([
  {
    label: 'Our Team',
    to: ''
  }
]);
</script>

<template>
  <!-- Breadcrumb Section Start -->
  <Breadcrumb title="Our Team" :menus="menus" />
  <!-- Breadcrumb Section End -->

  <!-- Team Section Start -->
  <TeamSection />
  <!-- Team Section End -->

  <!-- Contact Section Start -->
  <ContactSectionTwo />
  <!-- Contact Section End -->

  <!--  CTA Section Start -->
  <CtaSectionOne />
  <!--  CTA Section End -->
</template>

<style scoped>

</style>