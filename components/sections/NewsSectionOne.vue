<script setup lang="ts">
import { blogs } from '~/data/blog'

const topBlogs = blogs.slice(0, 3)
</script>

<template>
  <section class="news-section section-padding pt-0">
    <div class="container">
      <div class="section-title text-center">
        <h2 class="wow fadeInUp" data-wow-delay=".3s">Blog And News</h2>
        <p class="mt-3 wow fadeInUp" data-wow-delay=".5s">
          Information Technology is a rapidly evolving field that encompasses the study and
          <br />
          application of computing technology to solve complex problems.
        </p>
      </div>

      <div class="row">
        <div
          class="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
          v-for="(blog, index) in topBlogs"
          :key="blog.id"
          :data-wow-delay="`.${3 + index * 2}s`"
        >
          <div class="news-box-items">
            <div class="news-img">
              <img :src="blog.image" :alt="blog.title" style="height: 250px;" />
            </div>
            <div class="news-content">
              <ul class="date-list">
                <li class="font">
                  <i class="fa-solid fa-user"></i>
                  By admin
                </li>
                <li class="font">
                  <i class="fa-solid fa-calendar-days"></i>
                  {{ blog.date }}
                </li>
              </ul>
              <h3 class="font">
                <NuxtLink :to="`/news/${blog.id}`">{{ blog.title }}</NuxtLink>
              </h3>
              <NuxtLink :to="`/news/${blog.id}`" class="link-btn font">
                Read More <i class="icon-arrow-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.font{
      font-size: 15px!important;
}
/* You can add your own styles */
</style>
