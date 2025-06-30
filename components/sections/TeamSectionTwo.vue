<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import teamHoverImg from "@/assets/img/team/team-hover.png";
import {teamMembers} from "~/data/team";

const teamLineBoxes = ref<NodeListOf<Element> | null>(null);

const followImageCursor = (event: MouseEvent, teamLineBox: Element) => {
  const contentBox = teamLineBox.getBoundingClientRect();
  const dx = event.clientX - contentBox.x;
  const dy = event.clientY - contentBox.y;
  const hoverImage = teamLineBox.querySelector(".team-hover") as HTMLElement;

  if (hoverImage) {
    hoverImage.style.transform = `translate(${dx}px, ${dy}px) rotate(0)`;
  }
};

const handleMouseMove = (event: MouseEvent, item: Element) => {
  followImageCursor(event, item);
};

onMounted(() => {
  teamLineBoxes.value = document.querySelectorAll(".team-line-box");

  teamLineBoxes.value?.forEach((item) => {
    item.addEventListener("mousemove", (event) => handleMouseMove(event, item));
  });
});

onUnmounted(() => {
  teamLineBoxes.value?.forEach((item) => {
    item.removeEventListener("mousemove", (event) => handleMouseMove(event, item));
  });
});
</script>

<template>
  <div class="team-section-2 section-padding section-bg fix">
    <div class="container">
      <div class="section-title text-center">
        <h2 class="wow fadeInUp" data-wow-delay=".3s">Our Team Member</h2>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div
              v-for="(member, index) in teamMembers"
              :key="index"
              class="team-line-box bor-top bor-bottom wow fadeInUp"
              :data-wow-delay="`${0.3 + index * 0.2}s`"
          >
            <div class="content">
              <h3 style="font-size: 23px;">
                <NuxtLink :to="`/team/${member.link}`">{{ member.name }}</NuxtLink>
              </h3>
              <span>{{ member.role }}</span>
            </div>
            <p>{{ member.description }}</p>
            <div
                class="team-hover d-none d-md-block bg-cover"
                :style="{ backgroundImage: `url(${teamHoverImg})` }"
            ></div>
            <div class="social-profile">
              <ul>
                <li><a href="https://www.facebook.com/arslan.raajput.1"><i class="fab fa-facebook-f"></i></a></li>
                <li><a href="https://www.instagram.com/i_arslan_rao?igsh=cmV2aHQxdGxhcjhn"><i class="fab fa-instagram"></i></a></li>
                <li><a href="www.linkedin.com/in/raoarslanmatloob"><i class="fab fa-linkedin-in"></i></a></li>
              </ul>
              <span class="plus-btn">
                <i class="fa-sharp fa-regular fa-share-nodes"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
