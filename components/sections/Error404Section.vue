<script setup lang="ts">

</script>

<template>
  <section class="error-section fix section-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="error-items">
            <div class="error-image">
              <img src="@/assets/img/404.png" alt="img">
            </div>
            <div class="error-content">
              <h2>Sorry!This Page is not Available</h2>
              <p>
                Oops! The page which you are looking for does not exist. Please return to the homepage.
              </p>
              <div class="main-button justify-content-center">
                <NuxtLink href="/"> <span class="theme-btn"> Go To Home </span><span class="arrow-btn"><i class="icon-arrow-right"></i></span></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>