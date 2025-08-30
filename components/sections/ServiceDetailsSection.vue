<script setup lang="ts">
import { services } from '~/data/services'
import { useRoute } from 'vue-router'
import { computed } from 'vue'


const route = useRoute()
const serviceId = route.params.id as string
// get ID from route
console.log('route param id:', serviceId, typeof serviceId)
console.log('available service ids:', services.map(s => [s.id, typeof s.id]))

// find matching service
const service = computed(() => services.find(s => s.id === serviceId))
</script>

<template>
  <section class="Service-details-section section-padding fix" v-if="service">
    <div class="container">
      <div class="sertvice-details-wrapper">
        <div class="details-image" style="display: flex;justify-content: start;">
          <img :src="service.detailImage" :alt="`${service.title} image`" style="height: 80px;width: 80px;" />
        </div>
        <div class="service-details-content">
          <h2>{{ service.detailTitle }}</h2>
          <p>{{ service.detailText }}</p>

          <h3>Industries We Serve</h3>
         

          <div class="row g-4 pt-4 pb-5 align-items-center">



            <!-- <div class="col-md-6"> -->
              <div class="list-wrapper">
                <ul class="list-items " style="display: flex;flex-wrap: wrap;">
                  <li v-for="(item, index) in service.domains" :key="index" style="width: 350px;">
                    <i class="fa-solid fa-angles-right"></i> {{ item }}
                  </li>
                </ul>
              </div>
            <!-- </div> -->
            <!-- <div class="col-md-6">
              <div class="list-wrapper">
                <ul class="list-items">
                  <li><i class="fa-solid fa-angles-right"></i> Health Care</li>
                  <li><i class="fa-solid fa-angles-right"></i> Workforce Agencies</li>
                  <li><i class="fa-solid fa-angles-right"></i> Education</li>
                  <li><i class="fa-solid fa-angles-right"></i> Construction</li>
                </ul>
                <ul class="list-items">
                  <li><i class="fa-solid fa-angles-right"></i> Real Estate</li>
                  <li><i class="fa-solid fa-angles-right"></i> Finance & Billing</li>
                  <li><i class="fa-solid fa-angles-right"></i> Government and Inspection</li>
                  <li><i class="fa-solid fa-angles-right"></i> Human Resource</li>
                </ul>
              </div>
            </div> -->
          </div>

          <h3>Why Partner with Tekvion Systems?</h3>
          <p>
            We build flexible, scalable systems designed to grow with your business. Our tools are built with
            user-friendly interfaces, strong security, and seamless integration capabilities.<br />
            📞 Ready to streamline your operations? Contact us today to get started!
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- fallback if ID doesn't match -->
  <section v-else class="text-center py-5">
    <h2>Service Not Found</h2>
    <p>The requested service could not be located.</p>
  </section>
</template>

<style scoped></style>
