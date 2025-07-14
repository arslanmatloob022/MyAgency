<script setup lang="ts">
import { useRoute } from 'vue-router'
import { blogs } from '~/data/blog'

const route = useRoute()
const blogId = Number(route.params.id)

// Find the blog with matching ID
const blog = blogs.find(item => item.id === blogId)
</script>

<template>
<section class="news-details-section section-padding">
  <div class="container" v-if="blog">
    <div class="news-details-wrapper">
      <div class="row g-4">
        <div class="col-12 col-lg-12">
          <div class="news-post-details">
            <div class="single-news-post">
              <div class="post-featured-thumb">
                <img :src="blog.image" alt="Featured Image" />
              </div>
              <div class="post-content">
                <ul class="post-list d-flex align-items-center">
                  <li>
                    <i class="fa-regular fa-user"></i>
                    By Admin
                  </li>
                  <li>
                    <i class="fa-solid fa-calendar-days"></i>
                    18 Dec, 2025
                  </li>
                  <li>
                    <i class="fa-solid fa-tag"></i>
                    Technology
                  </li>
                </ul>

                <h3>{{ blog.title }}</h3>
                <p class="fst-italic text-muted mb-2">{{ blog.tagline }}</p> <!-- Tagline -->
                <p class="mb-3">{{ blog.description }}</p>

                <h4>{{ blog.fullContentHeading }}</h4>
                <div class="mt-4 mb-5" v-html="blog.fullContent"></div>

                <!-- Dynamic Blog Images Loop -->
                <div class="row g-4" v-if="blog.blogImages && blog.blogImages.length">
                  <div
                    class="col-lg-6"
                    v-for="(img, index) in blog.blogImages"
                    :key="index"
                  >
                    <div class="details-image">
                      <img :src="img" :alt="'Blog Image ' + (index + 1)" />
                    </div>
                  </div>
                </div>

                <div class="hilight-text mt-4">
                  <p>
                  {{ blog.tagline }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Optional Sidebar (Commented Out section) -->
        <!--
        <div class="col-12 col-lg-4">
          <div class="main-sidebar sticky-style">
            <div class="single-sidebar-widget">
              <div class="wid-title">
                <h4>Search</h4>
              </div>
              <div class="search-widget">
                <form action="#">
                  <input type="text" placeholder="Search here" />
                  <button type="submit">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
            </div>

            <div class="single-sidebar-widget">
              <div class="wid-title">
                <h4>All Services</h4>
              </div>
              <div class="news-widget-categories">
                <ul>
                  <li><NuxtLink to="/news/1">Digital Agency</NuxtLink> <span>(7)</span></li>
                  <li><NuxtLink to="/news/2">Business</NuxtLink> <span>(4)</span></li>
                  <li><NuxtLink to="/news/3">Digital Product</NuxtLink> <span>(5)</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        -->
      </div>
    </div>
  </div>

  <div v-else>
    <p>Blog not found.</p>
  </div>
</section>

</template>

<style scoped>
/* Add any styles you want */
</style>
