<script setup lang="ts">
import { blogs } from '~/data/blog';

</script>

<template>
  <section class="news-standard-section section-padding">
    <div class="container">
      <div class="row g-4">
        <div class="col-12 col-lg-12 row">
          <div class="news-standard-wrapper row">
            <div
              v-for="blog in blogs"
              :key="blog.id"
              class="news-standard-items col-lg-12"
            >
              <div class="thumb">
                <img :src="blog.image" alt="img" />
              </div>
              <div class="content">
                <ul class="post-cat">
                  <li>
                    <i class="fa-regular fa-user"></i>
                    By Admin
                  </li>
                  <li>
                    <i class="fa-regular fa-comments"></i>
                    0 Comments
                  </li>
                </ul>
                <h3>
                  <NuxtLink :to="`/news/${blog.id}`">
                    {{ blog.title }}
                  </NuxtLink>
                </h3>
                <p>{{ blog.description }}</p>
                <div class="main-button">
                  <NuxtLink :to="`/news/${blog.id}`">
                    <span class="theme-btn">Read More</span>
                    <span class="arrow-btn"><i class="icon-arrow-right"></i></span>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="page-nav-wrap pt-5 text-center">
              <ul>
                <li><a class="page-numbers" href="#">01</a></li>
                <li><a class="page-numbers" href="#">02</a></li>
                <li><a class="page-numbers" href="#">03</a></li>
                <li><a class="page-numbers" href="#"><i class="fa-solid fa-arrow-right-long"></i></a></li>
              </ul>
            </div>
          </div>
        </div>

        <!-- <div class="col-12 col-lg-4">
        
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
                  <li class="active"><NuxtLink to="/news/3">Digital Product</NuxtLink> <span>(5)</span></li>
                  <li><NuxtLink to="/news/2">Social Marketing</NuxtLink> <span>(3)</span></li>
                  <li><NuxtLink to="/news/1">System</NuxtLink> <span>(6)</span></li>
                </ul>
              </div>
            </div>

            <div class="single-sidebar-widget">
              <div class="wid-title">
                <h3>Recent Post</h3>
              </div>
              <div class="recent-post-area">
                <div class="recent-items" v-for="blog in blogPosts" :key="blog.id">
                  <div class="recent-thumb">
                    <img :src="blog.image" alt="img" />
                  </div>
                  <div class="recent-content">
                    <ul>
                      <li>
                        <i class="fa-solid fa-calendar-days"></i>
                        14 Feb, 2025
                      </li>
                    </ul>
                    <h6>
                      <NuxtLink :to="`/news/${blog.id}`">
                        {{ blog.title }}
                      </NuxtLink>
                    </h6>
                  </div>
                </div>
              </div>
            </div>

            <div class="single-sidebar-widget">
              <div class="wid-title">
                <h4>Tag</h4>
              </div>
              <div class="news-widget-categories">
                <div class="tagcloud">
                  <NuxtLink to="/news/1">Security</NuxtLink>
                  <NuxtLink to="/news/2">Business</NuxtLink>
                  <NuxtLink to="/news/3">Digital</NuxtLink>
                  <NuxtLink to="/news/2">Technology</NuxtLink>
                  <NuxtLink to="/news/1">Change</NuxtLink>
                  <NuxtLink to="/news/3">Video</NuxtLink>
                  <NuxtLink to="/news/2">UI/UX Design</NuxtLink>
                  <NuxtLink to="/news/1">Startup</NuxtLink>
                  <NuxtLink to="/news/3">Services</NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div> -->

      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any styles you wish */
</style>
