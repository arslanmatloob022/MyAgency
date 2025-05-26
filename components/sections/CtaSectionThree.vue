<script setup lang="ts">
import ctaImg1 from "@/assets/img/cta/01.jpg";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

onMounted(() => {
  Fancybox.bind("[data-fancybox]", {});
})
</script>

<template>
  <section class=" cta-counter-section section-padding section-bg-2">
    <div class="container">
      <div class="cta-counter-wrapper-3">
        <h2 class="title wow img-custom-anim-left">Information Technology is a rapidly evolving field that encompasses <span>the study and application of computing</span></h2>
        <div class="counter-box-items">
          <div class="counter-box wow fadeInUp" data-wow-delay=".2s">
            <h2>
              <span class="count">
                <ScrollCounter :start="0" :end="600" :duration="3000" :delay="10" />
              </span>+
            </h2>
            <p>Team member</p>
          </div>
          <div class="counter-box wow fadeInUp" data-wow-delay=".4s">
            <h2>
              <span class="count">
                <ScrollCounter :start="0" :end="200" :duration="3000" :delay="10" />
              </span>+
            </h2>
            <p>Work Complete</p>
          </div>
          <div class="counter-box wow fadeInUp" data-wow-delay=".6s">
            <h2>
              <span class="count">
                <ScrollCounter :start="0" :end="40" :duration="3000" :delay="10" />
              </span>+
            </h2>
            <p>Winning Award</p>
          </div>
          <div class="counter-box wow fadeInUp" data-wow-delay=".8s">
            <h2>
              <span class="count">
                <ScrollCounter :start="0" :end="100" :duration="3000" :delay="10" />
              </span>+
            </h2>
            <p>Client Review</p>
          </div>
        </div>
        <div class="cta-video bg-cover wow fadeInUp img-custom-anim-left"
             :style="{backgroundImage: `url(${ctaImg1})`}"
        >
          <a data-fancybox href="https://www.youtube.com/watch?v=Mt6UwMKnaTw" class="video-btn ripple video-popup">
            <i class="fa-duotone fa-play"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>