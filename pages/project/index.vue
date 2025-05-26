<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";
import ProjectDetailsSection from "~/components/sections/ProjectDetailsSection.vue";
import CtaSectionOne from "~/components/sections/CtaSectionOne.vue";

const menus = ref([
  {
    label: 'Our project',
    to: ''
  },
]);
</script>

<template>
  <!-- Breadcrumb Section Start -->
  <Breadcrumb title="Our project" :menus="menus" />
  <!-- Breadcrumb Section End -->

  <!-- Project Details Section Start -->
  <ProjectDetailsSection />
  <!-- Project Details Section End -->

  <!--  CTA Section Start -->
  <CtaSectionOne />
  <!--  CTA Section End -->
</template>

<style scoped>

</style>