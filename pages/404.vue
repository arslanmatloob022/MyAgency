<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";
import CtaSectionOne from "~/components/sections/CtaSectionOne.vue";
import Error404Section from "~/components/sections/Error404Section.vue";

const menus = ref([
  {
    label: '404',
    to: ''
  }
]);
</script>

<template>
  <!-- Breadcrumb Section Start -->
  <Breadcrumb title="404" :menus="menus" />
  <!-- Breadcrumb Section End -->

  <!-- Error 404 Section Start -->
  <Error404Section />
  <!-- Error 404 Section End -->

  <!--  CTA Section Start -->
  <CtaSectionOne />
  <!--  CTA Section End -->
</template>

<style scoped>

</style>