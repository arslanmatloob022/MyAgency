<script setup lang="ts">
import "swiper/css";

import brand01 from '@/assets/img/brand/brand_1.jpg'
import brand02 from '@/assets/img/brand/brand_2.jpg'
import brand03 from '@/assets/img/brand/brand_3.jpg'
import brand04 from '@/assets/img/brand/brand_4.jpg'
import brand05 from '@/assets/img/brand/brand_5.jpg'
import brand06 from '@/assets/img/brand/brand_6.jpg'
const slidesPerView = ref(4);

const brandImages = ref([
  brand05,
  brand02,
  brand03,
  brand04,
  brand05,
  brand06,
  brand03,
  brand04,
  brand05,
  brand06
])
const breakpoints = {
  1199: { slidesPerView: 6 },
  991: { slidesPerView: 5 },
  767: { slidesPerView: 4 },
  575: { slidesPerView: 3 },
  400: { slidesPerView: 2 },
  0: { slidesPerView: 1 },
};




const full_name = ref("");
const email = ref("");
const company_name = ref("");
const phone_number = ref("");
const message = ref("");
const loading = ref(false);

const showModal = ref(false);
const modalMsg = ref("");
const modalType = ref<"success" | "error">("success");

const handleSubmit = async () => {
  loading.value = true;
  showModal.value = false;
  modalMsg.value = "";

  const payload = {
    full_name: full_name.value,
    email: email.value,
    company_name: company_name.value,
    phone_number: phone_number.value,
    message: message.value,
    service_message: "Contact form submission",
  };

  try {
    const { error } = await useFetch(
      "https://api.ibexworkhub.com/api/contact/contact-us/",
      {
        method: "POST",
        body: payload,
      }
    );

    if (error.value) {
      modalType.value = "error";
      modalMsg.value =
        "Error: " + (error.value?.data?.message || "Something went wrong ❌");
    } else {
      modalType.value = "success";
      modalMsg.value = "✅ Your message has been sent successfully!";
      // reset form
      full_name.value = "";
      email.value = "";
      company_name.value = "";
      phone_number.value = "";
      message.value = "";
    }
  } catch (err) {
    modalType.value = "error";
    modalMsg.value = "Network error ❌";
    console.error(err);
  } finally {
    loading.value = false;
    showModal.value = true;
    setTimeout(() => {
      showModal.value = false;
    }, 2000);
  }
};

</script>

<template>
  <section class="contact-section section-padding">
    <div class="container">
      <div class="contact-wrapper">
        <div class="row g-4 align-items-center justify-content-between">
          <div class="col-lg-5">
            <div class="contact-content">
              <div class="section-title mb-0">
                <h2 class="text-white wow fadeInUp" data-wow-delay=".3s">
                  Contact Us
                </h2>
                <p class="text-white mt-3 wow fadeInUp mt-5" data-wow-delay=".5s">
                 We’d love to hear from you! Whether you have a question about our services, want to discuss a project, or just want to say hello — our team is ready to help. Fill out the form and we’ll get back to you as soon as possible.
                </p>
              </div>
              <ul class="mt-5 contact-info wow fadeInUp" data-wow-delay=".7s">
                <li>
                  <span>
                    <i class="fa-solid fa-location-dot"></i>
                    Address
                  </span>
                  Evergreen, CO 80437, USA
                </li>
                <li>
                  <span>
                    <i class="fa-solid fa-envelope"></i>
                    Email
                  </span>
                  <a href="mailto:codesphere@gmail.com">info@tekvionsystems.com
</a>
                </li>
              </ul>
            </div>
          </div>
           <div class="col-lg-6">
    <form @submit.prevent="handleSubmit" class="contact-form-items">
      <div class="row g-4">
       
        <div class="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
          <div class="form-clt">
            <span>Name</span>
            <input
              type="text"
              v-model="full_name"
              name="name"
              id="name"
              placeholder=""
              required
            />
          </div>
        </div>

        <!-- Email -->
        <div class="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
          <div class="form-clt">
            <span>Email</span>
            <input
              type="email"
              v-model="email"
              id="email"
              placeholder=""
              required
            />
          </div>
        </div>

        <!-- Company Name -->
        <div class="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
          <div class="form-clt">
            <span>Company Name</span>
            <input
              type="text"
              v-model="company_name"
              id="company"
              placeholder=""
            />
          </div>
        </div>

        <!-- Phone -->
        <div class="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
          <div class="form-clt">
            <span>Phone Number</span>
            <input
              type="tel"
              v-model="phone_number"
              id="phone"
              placeholder=""
            />
          </div>
        </div>

        <!-- Message -->
        <div class="col-lg-12 wow fadeInUp" data-wow-delay=".9s">
          <div class="form-clt">
            <span>Message</span>
            <textarea
              v-model="message"
              id="message1"
              placeholder=""
              required
            ></textarea>
          </div>
        </div>

        <!-- Button -->
        <div class="col-lg-12 wow fadeInUp" data-wow-delay=".3s">
          <button type="submit" class="theme-btn" :disabled="loading">
            <span v-if="!loading">Send Now <i class="icon-arrow-right"></i></span>
            <span v-else>Sending...</span>
          </button>
        </div>
      </div>
    </form>
  </div>
        </div>
      </div>
      <div class="brand-section section-padding pb-0">
    <div class="swiper brand-slider">
      <swiper-container
        :space-between="50"
        :speed="2000"
        :loop="true"
        :autoplay="{ delay: 1000, disableOnInteraction: false }"
        :breakpoints="breakpoints"
         :slides-per-view="slidesPerView"
        class="swiper-wrapper"
      >
        <swiper-slide
          v-for="(image, index) in brandImages"
          :key="index"
          class="swiper-slide"
        >
          <div class="brand-image">
            <img :src="image" alt="brand" style="width: 179px;height: auto;" />
          </div>
        </swiper-slide>
      </swiper-container>
    </div>
  </div>
    </div>
    <!-- Modal -->
  <transition name="fade-zoom">
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-box" :class="modalType">
        <i
          v-if="modalType === 'success'"
          class="fa-solid fa-circle-check success-icon"
        ></i>
        <i
          v-else
          class="fa-solid fa-circle-xmark error-icon"
        ></i>
        <p>{{ modalMsg }}</p>
      </div>
    </div>
  </transition>
  </section>
</template>
<style scoped>
/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal-box {
  background: #fff;
  padding: 25px 40px;
  border-radius: 12px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  animation: bounceIn 0.5s;
}

.modal-box.success {
  border-left: 6px solid #28a745;
}
.modal-box.error {
  border-left: 6px solid #dc3545;
}

.success-icon {
  font-size: 40px;
  color: #28a745;
  margin-bottom: 10px;
}
.error-icon {
  font-size: 40px;
  color: #dc3545;
  margin-bottom: 10px;
}

/* Animation */
.fade-zoom-enter-active,
.fade-zoom-leave-active {
  transition: all 0.4s ease;
}
.fade-zoom-enter-from,
.fade-zoom-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

@keyframes bounceIn {
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  60% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
}
</style>

