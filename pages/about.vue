<script setup lang="ts">
import Breadcrumb from "~/components/Breadcrumb.vue";
import AboutSectionFour from "~/components/sections/AboutSectionFour.vue";
import TeamSectionTwo from "~/components/sections/TeamSectionTwo.vue";
import CtaBannerSection from "~/components/sections/CtaBannerSection.vue";
import PricingSectionTwo from "~/components/sections/PricingSectionTwo.vue";
import ContactSectionThree from "~/components/sections/ContactSectionThree.vue";
import CtaSectionOne from "~/components/sections/CtaSectionOne.vue";
import FaqSectionFour from "~/components/sections/FaqSectionFour.vue";

const menus = ref([
  {
    label: 'About Us',
    to: ''
  }
]);
</script>

<template>
  <!-- Breadcrumb Section Start -->
  <Breadcrumb title="About Us" :menus="menus" />
  <!-- Breadcrumb Section End -->

  <!-- About Section Start -->
  <AboutSectionFour />
  <!-- About Section End -->

  <!-- Team Section Start -->
  <TeamSectionTwo />
  <!-- Team Section End -->

  <!-- Cta Section Start -->
  <CtaBannerSection />
  <!-- Cta Section End -->

  <!-- Pricing Section Start -->
  <PricingSectionTwo />
  <!-- Pricing Section End -->

  <!-- Contact Section Start -->
  <ContactSectionThree />
  <!-- Contact Section End -->

  <!-- Faq Section Start -->
  <FaqSectionFour />
  <!-- Faq Section End -->

  <!--  CTA Section Start -->
  <CtaSectionOne />
  <!--  CTA Section End -->
</template>

<style scoped>

</style>