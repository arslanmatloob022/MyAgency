<script setup lang="ts">
</script>

<template>
  <section class="testimonial-section section-padding fix">
    <div class="container">
      <div class="testimonial-wrapper">
        <div class="row g-4">
          <div class="col-xl-4">
            <div class="testimonial-logo wow fadeInUp" data-wow-delay=".3s">
              <div class="logo-image">
                <img src="@/assets/img/testimonial/logo.svg" alt="img">
              </div>
            </div>
            <div class="testimonial-box wow fadeInUp" data-wow-delay=".5s">
              <div class="testimonial-content">
                <div class="icon">
                  <img src="@/assets/img/icon/29.svg" alt="img">
                </div>
                <h3>Tomorrow Just Informs</h3>
              </div>
              <p>
                Information Technology is a evolving field that encompasses the study application of computing technology
              </p>
              <div class="fly-image">
                <img src="@/assets/img/testimonial/05.png" alt="img">
              </div>
            </div>
          </div>
          <div class="col-xl-8">
            <div class="testimonial-items">
              <div class="testimonial-image wow fadeInUp" data-wow-delay=".3s">
                <img src="@/assets/img/testimonial/06.jpg" alt="img">
              </div>
              <div class="testimonial-card wow fadeInUp" data-wow-delay=".5s">
                <div class="client-info-item">
                  <div class="content">
                    <h3>Jenny Wilson</h3>
                    <span>Designer</span>
                  </div>
                  <div class="star style-2">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                  </div>
                </div>
                <p>
                  Information Technology is rapidly evolving field that encompasses the study and application
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="122" height="122" viewBox="0 0 122 122" fill="none">
                  <g clip-path="url(#clip0_8721_831)">
                    <path opacity="0.2" d="M95.8572 53.139L121 53.139L121 102.996L70.7143 102.996L70.7143 52.3768L87.7588 18.5678L111.662 18.5677L94.9642 51.6888L94.2331 53.139L95.8572 53.139ZM26.1428 53.139L51.2857 53.139L51.2857 102.996L1.00002 102.996L1.00001 52.3768L18.0444 18.5678L41.9475 18.5678L25.2499 51.6888L24.5188 53.139L26.1428 53.139Z" stroke="#05091D" stroke-width="2"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_8721_831">
                      <rect width="122" height="121" fill="white" transform="translate(122 121.285) rotate(180)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
            <div class="testimonial-box-wrapper wow fadeInUp" data-wow-delay=".7s">
              <div class="right-image">
                <img src="@/assets/img/testimonial/07.png" alt="img">
              </div>
              <div class="testimonial-content">
                <h3>Software Solutions Pro</h3>
                <p>
                  Information Technology is a evolving field that encompasses the <br> study application of computing technology
                </p>
                <div class="testimonial-wrap">
                  <div class="testimonial-count">
                    <h2>
                      <span class="count">
                        <ScrollCounter :start="0" :end="465" :duration="3000" :delay="10" />
                      </span>
                    </h2>
                    <p>Team member</p>
                  </div>
                  <div class="testimonial-count">
                    <h2>
                      <span class="count">
                        <ScrollCounter :start="0" :end="65" :duration="3000" :delay="10" />
                      </span>
                    </h2>
                    <p>Winning award</p>
                  </div>
                  <div class="testimonial-count">
                    <h2>
                      <span class="count">
                        <ScrollCounter :start="0" :end="20" :duration="3000" :delay="10" />
                      </span>+
                    </h2>
                    <p>Complete project</p>
                  </div>
                </div>
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