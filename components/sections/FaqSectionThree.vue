<script setup lang="ts">

</script>

<template>
  <section class="faq-section fix">
    <div class="container">
      <div class="faq-wrapper">
        <div class="row g-4 align-items-center justify-content-between">
          <div class="col-xl-4 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
            <div class="faq-area">
              <div class="faq-item">
                <div class="icon">
                  <i class="fa-solid fa-location-dot"></i>
                </div>
                <div class="content">
                  <h5>Address</h5>
                  <h6>
                    2118 Thornridge Cir. Syracuse
                  </h6>
                </div>
              </div>
              <div class="faq-item">
                <div class="icon">
                  <i class="fa-solid fa-phone"></i>
                </div>
                <div class="content">
                  <h5>Number</h5>
                  <h6>
                    <a href="tel:207555-0119">207555-0119</a>
                  </h6>
                </div>
              </div>
              <div class="faq-item">
                <div class="icon">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <div class="content">
                  <h5>E-mail</h5>
                  <h6>
                    <a href="mailto:jessica.hanson@example.com">
                      jessica.hanson@example.com
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6">
            <div class="faq-image">
              <img src="@/assets/img/faq/01.png" alt="img" class="wow img-custom-anim-left">
              <div class="radius-shape">
                <img src="@/assets/img/faq/radius-shape.png" alt="img">
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-lg-6">
            <div class="faq-items">
              <div class="section-title mb-0 style-2">
                <h6 class="wow fadeInUp">faq</h6>
                <h2 class="wow fadeInUp" data-wow-delay=".3s">Ask Question</h2>
              </div>
              <div class="accordion" id="accordionExample">
                <div class="accordion-item wow fadeInUp" data-wow-delay=".3s">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      I implement for my business?
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show"
                       aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>
                        Information Technology is a rapidly evolving field that is a encompasses the study and application
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item wow fadeInUp" data-wow-delay=".5s">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      What latest trends in IT security?
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                       data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>
                        Information Technology is a rapidly evolving field that is a encompasses the study and application
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item wow fadeInUp" data-wow-delay=".7s">
                  <h2 class="accordion-header" id="headingthree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsethree" aria-expanded="false"
                            aria-controls="collapsethree">
                      I network from cyber threats?
                    </button>
                  </h2>
                  <div id="collapsethree" class="accordion-collapse collapse"
                       aria-labelledby="headingthree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>
                        Information Technology is a rapidly evolving field that is a encompasses the study and application
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item wow fadeInUp" data-wow-delay=".3s">
                  <h2 class="accordion-header" id="headingfour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsefour" aria-expanded="false"
                            aria-controls="collapsefour">
                      The best backup and recovery?
                    </button>
                  </h2>
                  <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingfour"
                       data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>
                        Information Technology is a rapidly evolving field that is a encompasses the study and application
                      </p>
                    </div>
                  </div>
                </div>
                <div class="accordion-item mb-0 wow fadeInUp" data-wow-delay=".5s">
                  <h2 class="accordion-header" id="headingfive">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapsefive" aria-expanded="false"
                            aria-controls="collapsefive">
                      Cyber Security Sentinel
                    </button>
                  </h2>
                  <div id="collapsefive" class="accordion-collapse collapse" aria-labelledby="headingfive"
                       data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>
                        Information Technology is a rapidly evolving field that is a encompasses the study and application
                      </p>
                    </div>
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