<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";

const blogs = ref<any[]>([]);
const loading = ref(false);

const getBlogs = async () => {
  loading.value = true;
  try {
    const response = await axios.get("https://api.ibexworkhub.com/api/blog/");
    blogs.value = response.data; // Axios wraps data in response.data
  } catch (err) {
    console.error("Error fetching blogs:", err);
  } finally {
    loading.value = false;
  }
};

// ✅ helper function to limit words per blog
const getLimitedContent = (content: string, wordLimit = 50) => {
  if (!content) return "";

  // Strip HTML tags → plain text
  const text = content.replace(/<[^>]+>/g, " ");

  // Limit words
  const words = text.split(/\s+/).slice(0, wordLimit).join(" ");

  return words + " ...";
};

onMounted(() => {
  getBlogs();
});
</script>

<template>
  <section class="news-standard-section section-padding">
    <div class="container">
      <div class="row g-4">
        <div class="col-12 col-lg-12 row">

          <p v-if="loading" class="loading" >Loading...</p>
          <div v-else class="news-standard-wrapper row">
            <div
              v-for="blog in blogs"
              :key="blog.id"
              class="news-standard-items col-lg-12"
            >
              <div class="thumb" style="height: 300px;width:fit-content;">
                <img :src="blog.main_image" alt="img"  />
              </div>
              <div class="content">
                <ul class="post-cat">
                  <li>
                    <i class="fa-regular fa-user"></i>
                    By Admin
                  </li>
                   <li>
                    <i class="fa-solid fa-calendar-days"></i>
                {{ new Date(blog.created_at).toLocaleDateString("en-US", { 
  year: "numeric", 
  month: "short", 
  day: "numeric" 
}) }}
                  </li>
                </ul>
                <h3>
                  <NuxtLink :to="`/news/${blog.id}`">
                    {{ blog.title }}
                  </NuxtLink>
                </h3>
                <div>{{ getLimitedContent(blog.content) }}</div>
                
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

       
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any styles you wish */
.loading{
  font-size: 30px;
  text-align: center;
}
</style>
