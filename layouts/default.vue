<script lang="ts" setup>
import HeaderOne from "~/components/header/HeaderOne.vue";
import HeaderTwo from "~/components/header/HeaderTwo.vue";
import HeaderThree from "~/components/header/HeaderThree.vue";
import FooterOne from "~/components/footer/FooterOne.vue"
import FooterTwo from "~/components/footer/FooterTwo.vue"
import FooterThree from "~/components/footer/FooterThree.vue"
import SearchSection from "~/components/sections/SearchSection.vue";

const route = useRoute();
</script>

<template>
  <div>
    <!-- Header Section Start -->
    <template v-if="route.name === 'home-2'">
      <HeaderTwo/>
    </template>
    <template v-if="route.name === 'home-3'">
      <HeaderThree/>
    </template>
    <template v-if="route.name !== 'home-2' && route.name !== 'home-3'">
      <HeaderOne/>
    </template>
    <!-- Header Section End -->

    <slot/>

    <!-- Offcanvas Area Start -->
    <Offcanvas />
    <!-- Offcanvas Area End -->

    <!-- Search Area Start -->
    <SearchSection />
    <!-- Search Area End -->

    <!--  Footer Section Start -->
    <template v-if="route.name === 'home-2'">
      <FooterTwo/>
    </template>
    <template v-if="route.name === 'home-3'">
      <FooterThree/>
    </template>
    <template v-if="route.name !== 'home-2' && route.name !== 'home-3'">
      <FooterOne/>
    </template>
    <!--  Footer Section End -->
  </div>
</template>