<script setup lang="ts">
import { ref } from 'vue'

const teamMembers = ref([
  {
    name: "Huraiza Hussan",
    role: "App Developer",
    image: "/team/01.png",
    socialLinks: {
      facebook: "https://www.facebook.com/arslan.raajput.1",
      twitter: "https://x.com/blackshadowik?t=yDf4z4OXrLR7vJRbeKLyyQ&s=09",
      linkedin: "www.linkedin.com/in/raoarslanmatloob",
      instagram: " https://www.instagram.com/i_arslan_rao?igsh=cmV2aHQxdGxhcjhn",
    },
  },
  {
    name: "Syd Abdullah Hussain",
    role: "React, Next Developer",
    image: "/team/02.png",
    socialLinks: {
       facebook: "https://www.facebook.com/arslan.raajput.1",
      twitter: "https://x.com/blackshadowik?t=yDf4z4OXrLR7vJRbeKLyyQ&s=09",
      linkedin: "www.linkedin.com/in/raoarslanmatloob",
      instagram: " https://www.instagram.com/i_arslan_rao?igsh=cmV2aHQxdGxhcjhn",
    },
  },
  {
    name: "Muhammad Abdullah",
    role: "UI/UX Designer",
    image: "/team/03.png",
    socialLinks: {
      facebook: "https://www.facebook.com/arslan.raajput.1",
      twitter: "https://x.com/blackshadowik?t=yDf4z4OXrLR7vJRbeKLyyQ&s=09",
      linkedin: "www.linkedin.com/in/raoarslanmatloob",
      instagram: " https://www.instagram.com/i_arslan_rao?igsh=cmV2aHQxdGxhcjhn",
    },
  },
  {
    name: "Muhammad Javaid",
    role: "iOS Developer",
    image: "/team/03.png",
    socialLinks: {
      facebook: "https://www.facebook.com/arslan.raajput.1",
      twitter: "https://x.com/blackshadowik?t=yDf4z4OXrLR7vJRbeKLyyQ&s=09",
      linkedin: "www.linkedin.com/in/raoarslanmatloob",
      instagram: " https://www.instagram.com/i_arslan_rao?igsh=cmV2aHQxdGxhcjhn",
    },
  },
  {
    name: "Amna Ramzan",
    role: "Vue, Nuxt Developer",
    image: "/team/05.png",
    socialLinks: {
       facebook: "https://www.facebook.com/arslan.raajput.1",
      twitter: "https://x.com/blackshadowik?t=yDf4z4OXrLR7vJRbeKLyyQ&s=09",
      linkedin: "www.linkedin.com/in/raoarslanmatloob",
      instagram: " https://www.instagram.com/i_arslan_rao?igsh=cmV2aHQxdGxhcjhn",
    },
  },
  {
    name: "Ahsan Ali",
    role: "SQA Engineer",
    image: "/team/06.png",
    socialLinks: {
      facebook: "https://www.facebook.com/arslan.raajput.1",
      twitter: "https://x.com/blackshadowik?t=yDf4z4OXrLR7vJRbeKLyyQ&s=09",
      linkedin: "www.linkedin.com/in/raoarslanmatloob",
      instagram: " https://www.instagram.com/i_arslan_rao?igsh=cmV2aHQxdGxhcjhn",
    },
  },
  {
    name: "Muhammad Haseeb",
    role: "SEO Expert",
    image: "/team/07.png",
    socialLinks: {
      facebook: "https://www.facebook.com/arslan.raajput.1",
      twitter: "https://x.com/blackshadowik?t=yDf4z4OXrLR7vJRbeKLyyQ&s=09",
      linkedin: "www.linkedin.com/in/raoarslanmatloob",
      instagram: " https://www.instagram.com/i_arslan_rao?igsh=cmV2aHQxdGxhcjhn",
    },
  },
  {
    name: "Talha Shahid",
    role: "Python Django Developer",
    image: "/team/01.png",
    socialLinks: {
     facebook: "https://www.facebook.com/arslan.raajput.1",
      twitter: "https://x.com/blackshadowik?t=yDf4z4OXrLR7vJRbeKLyyQ&s=09",
      linkedin: "www.linkedin.com/in/raoarslanmatloob",
      instagram: " https://www.instagram.com/i_arslan_rao?igsh=cmV2aHQxdGxhcjhn",
    },
  },
  {
    name: "Hassan Younas",
    role: "AI Expert Developer",
    image: "/team/01.png",
    socialLinks: {
        facebook: "https://www.facebook.com/arslan.raajput.1",
      twitter: "https://x.com/blackshadowik?t=yDf4z4OXrLR7vJRbeKLyyQ&s=09",
      linkedin: "www.linkedin.com/in/raoarslanmatloob",
      instagram: " https://www.instagram.com/i_arslan_rao?igsh=cmV2aHQxdGxhcjhn",
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
               {{ member.name }}
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
