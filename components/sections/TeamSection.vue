<script setup lang="ts">
import { ref } from 'vue'

const teamMembers = ref([
  {
    name: "Huraiza Hussan",
    role: "App Developer",
    image: "/_nuxt/assets/img/team/01.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Syd Abdullah Hussain",
    role: "React, Next Developer",
    image: "/_nuxt/assets/img/team/02.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Muhammad Abdullah",
    role: "UI/UX Designer",
    image: "/_nuxt/assets/img/team/03.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Muhammad Javaid",
    role: "iOS Developer",
    image: "/_nuxt/assets/img/team/03.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Amna Ramzan",
    role: "Vue, Nuxt Developer",
    image: "/_nuxt/assets/img/team/05.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Ahsan Ali",
    role: "SQA Engineer",
    image: "/_nuxt/assets/img/team/06.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Muhammad Haseeb",
    role: "SEO Expert",
    image: "/_nuxt/assets/img/team/07.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Talha Shahid",
    role: "Python Django Developer",
    image: "/_nuxt/assets/img/team/01.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    name: "Hassan Younas",
    role: "AI Expert Developer",
    image: "/_nuxt/assets/img/team/01.png",
    socialLinks: {
      facebook: "#",
      twitter: "#",
      linkedin: "#",
      instagram: "#",
    },
  },
])
</script>



<template>
  <section class="team-section section-padding fix">
    <div class="container">
      <div class="row g-4">
        <div
          v-for="(member, index) in teamMembers"
          :key="index"
          class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
          :data-wow-delay="`${0.3 + index * 0.2}s`"
        >
          <div
            class="team-box-items-3 mt-0"
            :class="{ 'style-2': index % 2 === 0 }"
          >
            <div class="team-img">
              <img :src="member.image" :alt="member.name" />
            </div>
            <div class="team-content">
              <h3>
                <NuxtLink to="/team/details">{{ member.name }}</NuxtLink>
              </h3>
              <p>{{ member.role }}</p>
              <div class="social-icon d-flex align-items-center">
                <a :href="member.socialLinks.facebook"><i class="fab fa-facebook-f"></i></a>
                <a :href="member.socialLinks.twitter"><i class="fab fa-twitter"></i></a>
                <a :href="member.socialLinks.linkedin"><i class="fab fa-linkedin-in"></i></a>
                <a :href="member.socialLinks.instagram"><i class="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* You can add styles here if needed */
</style>
