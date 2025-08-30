<script setup lang="ts">
import { NuxtLink } from '#components';
import { services } from '~/data/services'
</script>


<template>
  <section class="Service-details-section  fix">
    <div class="container">
       <div class="section-title text-center">
        <h2 class="wow fadeInUp" data-wow-delay=".3s">Our Services Domain</h2>
        <p class="mt-3 wow fadeInUp" data-wow-delay=".5s">
        Our Services domain delivers tailored solutions to drive growth, efficiency, and innovation.
          
        </p>
      </div>
        
      <div class="sertvice-details-wrapper">
        
        <div class="service-details-content">
          <div class="row g-4 mb-5">
            <div
              v-for="(service, index) in services"
              :key="index"
              class="col-xl-4 col-lg-6 col-md-6"
            >
              <div class="service-details-box-items">
                <div class="icon">
                  <img :src="service.icon" alt="services_domain_icon" />
                </div>
                <div class="content">
                  <h3>
                <NuxtLink :to="`/services/${service.id}`">{{ service.title }}</NuxtLink>

                  </h3>
                  <p>{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


       <div class="section-title pt-5 pb-5 text-center">
        <h2 class="wow fadeInUp" data-wow-delay=".3s">Empowering Your Business – Our Services</h2>
        <p class="mt-3 wow fadeInUp" data-wow-delay=".5s">
        At Tekvion Systems Studios, we go beyond providing our cutting-edge <strong>SaaS solutions —</strong> we also deliver tailored services to meet your unique business needs.

Use Our SaaS Products: Benefit from our ready-to-use, scalable software designed to streamline your operations, enhance productivity, and grow your business.

Custom Services for Your Business: Have a specific idea or internal need? We offer end-to-end development, customization, and consulting services to bring your vision to life — just the way you want it.

Whether you're adopting our platform or building your own, we're here to support <br/> your success every step of the way.
          
        </p>
      </div>
    </div>
  </section>
</template>
