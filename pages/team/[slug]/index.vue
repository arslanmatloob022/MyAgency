<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";
import CtaSectionOne from "~/components/sections/CtaSectionOne.vue";
import PersonalSection from "~/components/sections/PersonalSection.vue";
import TeamDetailsSection from "~/components/sections/TeamDetailsSection.vue";

const menus = ref([
  {
    label: 'Team',
    to: '/team'
  },
  {
    label: 'Team Details',
    to: ''
  },
]);
</script>

<template>
  <!-- Breadcrumb Section Start -->
  <Breadcrumb title="Team Details" :menus="menus"/>
  <!-- Breadcrumb Section End -->

  <!-- Team Details Section Start -->
  <TeamDetailsSection/>
  <!-- Team Details Section End -->

  <!--  Personal Section Start -->
  <PersonalSection/>
  <!--  Personal Section End -->

  <!--  CTA Section Start -->
  <CtaSectionOne/>
  <!--  CTA Section End -->
</template>

<style scoped>

</style>