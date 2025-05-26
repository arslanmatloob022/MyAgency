<script setup>
import HeroSectionOne from "~/components/sections/HeroSectionOne.vue";
import ServiceSectionOne from "~/components/sections/ServiceSectionOne.vue";
import AboutSectionOne from "~/components/sections/AboutSectionOne.vue";
import ProjectSectionOne from "~/components/sections/ProjectSectionOne.vue";
import PricingSectionOne from "~/components/sections/PricingSectionOne.vue";
import MarqueeSectionOne from "~/components/sections/MarqueeSectionOne.vue";
import ContactUsSectionOne from "~/components/sections/ContactUsSectionOne.vue";
import HowWorkSectionOne from "~/components/sections/HowWorkSectionOne.vue";
import TeamSectionOne from "~/components/sections/TeamSectionOne.vue";
import TestimonialSectionOne from "~/components/sections/TestimonialSectionOne.vue";
import NewsSectionOne from "~/components/sections/NewsSectionOne.vue";
import CtaSectionOne from "~/components/sections/CtaSectionOne.vue";
</script>

<template>
  <!-- Hero Section Start -->
  <HeroSectionOne/>
  <!-- Hero Section End -->

  <!-- Service Section Start -->
  <ServiceSectionOne/>
  <!-- Service Section End -->

  <!--About Section Start -->
  <AboutSectionOne/>
  <!--About Section End -->

  <!--  Project Section Start-->
  <ClientOnly>
    <ProjectSectionOne/>
  </ClientOnly>
  <!--  Project Section End-->

  <!-- Pricing Section Start -->
  <PricingSectionOne/>
  <!-- Pricing Section End -->

  <!-- Marquee Section Start -->
  <MarqueeSectionOne/>
  <!-- Marquee Section End -->

  <!-- Contact Us Section Start -->
  <ContactUsSectionOne/>
  <!-- Contact Us Section End -->

  <!--  How Work Section Start -->
  <HowWorkSectionOne/>
  <!--  How Work Section End -->

  <!--  Team Section Start -->
  <TeamSectionOne />
  <!--  Team Section End -->

  <!--  Testimonial Section Start -->
  <TestimonialSectionOne />
  <!--  Testimonial Section End -->

  <!--  News Section Start -->
  <NewsSectionOne />
  <!--  News Section End -->

  <!--  CTA Section Start -->
  <CtaSectionOne />
  <!--  CTA Section End -->
</template>
