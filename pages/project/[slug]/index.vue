<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";
import ProjectDetailsSectionTwo from "~/components/sections/ProjectDetailsSectionTwo.vue";
import CtaSectionOne from "~/components/sections/CtaSectionOne.vue";

const menus = ref([
  {
    label: 'Project',
    to: '/project'
  },
  {
    label: 'Project Details',
    to: ''
  },
]);
</script>

<template>
  <!-- Breadcrumb Section Start -->
  <Breadcrumb title="Project Details" :menus="menus" />
  <!-- Breadcrumb Section End -->

  <!-- Project Details Section Start -->
  <ProjectDetailsSectionTwo />
  <!-- Project Details Section End -->

  <!--  CTA Section Start -->
  <CtaSectionOne />
  <!--  CTA Section End -->
</template>

<style scoped>

</style>