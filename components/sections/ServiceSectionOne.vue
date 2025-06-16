<script setup lang="ts">
import serviceImg from "@/assets/img/service/service-img.jpg";

const services = ref([
  {
    id: 1,
    title: 'Website Development',
    description: 'At CodeSphere Studios, we create stunning, responsive websites that provide a seamless user experience across all devices.We specialize in creating high-performance, scalable, and secure web applications that meet the unique needs of our clients. We are team of experts uses the latest technologies and best practices to ensure your website is fast, secure, and user-friendly.',
    iconClass: 'icon-02',
 
    link: '/services/details'
  },
   {
    id: 1,
    title: 'Website Design',
   description: "We believe that a website is more than just a digital presence; it's a powerful tool that can elevate your brand and engage your audience. Our website design services are tailored to create visually stunning, user-friendly, and highly functional websites that align with your business goals and captivate your visitors. We create interfaces that are easy to navigate and enjoyable to use.",
    iconClass: 'icon-03',
   
    link: '/services/details'
  },
    {
    id: 1,
    title: 'UI/UX Design',
    description: "At CodeSphere Studios, we understand that an outstanding user interface (UI) and user experience (UX) are critical to the success of any digital product. Our expert team is dedicated to creating intuitive, engaging, and seamless experiences that not only meet but exceed user expectations. By focusing on the user journey, we ensure your product is both beautiful and functional.",
    iconClass: 'icon-04',
   
    link: '/services/details'
  },
    {
    id: 1,
    title: 'Web Security',
    description:"At CodeSphere Studios, we understand the critical importance of web security in today's digital landscape. Our dedicated team of security experts works tirelessly to safeguard your web applications and digital assets from potential threats, ensuring a secure, reliable and trustworthy online presence for your business.",
    iconClass: 'icon-05',
   
    link: '/services/details'
  },
    {
    id: 1,
    title: 'Mobile App Development',
    description: "At CodeSphere Studios, we specialize in crafting cutting-edge mobile applications that deliver exceptional user experiences. Our team of expert developers, designers, and strategists work collaboratively to bring your mobile app ideas to life, ensuring that they are not only functional but also engaging and visually appealing.",
    iconClass: 'icon-04',
   
    link: '/services/details'
  },
   {
    id: 1,
    title: 'Software Consulting',
description: "Expert Guidance for Your Projects\nOur software consulting services are designed to provide you with the expertise and guidance you need to succeed.\nWhether you need help with project management, software architecture, or technology strategy, our team of experienced consultants is here to help.",

    iconClass: 'icon-04',
   
    link: '/services/details'
  },
])
</script>

<template>
  <section class="service-section section-padding">
    <div class="container">
      <div class="section-title text-center">
        <h2 class="wow fadeInUp" data-wow-delay=".3s">Our Best Services</h2>
        <p class="mt-3 wow fadeInUp" data-wow-delay=".5s">
          Unlock your business potential with our expert solutions.We offer tailored services designed <br> to accelerate your growth and success.
          
        </p>
      </div>
      <div class="row">
        <div   v-for="item in services" class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
          <div class="service-box-items">
            <div class="icon">
              <i :class="item.iconClass"></i>
            </div>
            <div class="content">
              <h3><NuxtLink to="/services/details">
                {{ item.title || 'N/A' }}</NuxtLink></h3>
              <p>{{ item.description }}</p>
              <NuxtLink :to="item.link" class="link-btn">Read More <span><i class="icon-arrow-right"></i></span></NuxtLink>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>