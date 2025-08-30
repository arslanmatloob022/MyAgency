<script setup lang="ts">
import { ref } from "vue";

const full_name = ref("");
const email = ref("");
const company_name = ref("");
const phone_number = ref("");
const message = ref("");
const loading = ref(false);

// modal state
const showModal = ref(false);
const modalMsg = ref("");
const modalType = ref<"success" | "error">("success"); // for styling

const handleSubmit = async () => {
  loading.value = true;
  modalMsg.value = "";
  showModal.value = false;

  const payload = {
    full_name: full_name.value,
    email: email.value,
    company_name: company_name.value,
    message: message.value,
    phone_number: phone_number.value,
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
    // hide modal after 2s
    setTimeout(() => {
      showModal.value = false;
    }, 2000);
  }
};
</script>

<template>
  <section class="contact-section-12 fix section-padding">
    <div class="container">
      <div class="contact-wrapper-12">
        <div class="row g-4">
          <div class="col-lg-6">
            <div class="contact-left-items">
              <div class="section-title mb-0">
                <h2>Contact Us</h2>
              </div>
              <div class="contact-area">
                <div class="contact-item">
                  <div class="icon">
                    <i class="fa-solid fa-location-dot"></i>
                    <h5>Address</h5>
                  </div>
                  <div class="content">
                    <h6>
                      Evergreen, CO 80437, USA
                    </h6>
                  </div>
                </div>
                <div class="contact-item">
                  <div class="icon">
                    <i class="fa-solid fa-phone"></i>
                    <h5>Number</h5>
                  </div>
                  <div class="content">
                    <h6>
                      <a href="tel:+92300 7626 555">+92300 7626 555</a>
                    </h6>
                  </div>
                </div>
                <div class="contact-item mb-0">
                  <div class="icon">
                    <i class="fa-solid fa-envelope"></i>
                    <h5>E-mail</h5>
                  </div>
                  <div class="content">
                    <h6>
                      <a href="mailto:jessica.hanson@example.com">
                        info@tekvionsystems.com
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
              <div class="google-map mt-3s">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1780636324936!2d-105.32719368465133!3d39.63332177946068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876b8e97d0b2b5e9%3A0x4cfe7d6c1580f8c9!2sEvergreen%2C%20CO%2080437%2C%20USA!5e0!3m2!1sen!2sus!4v1724187987654!5m2!1sen!2sus"
                  width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>

              </div>
            </div>
          </div>
          <div class="col-lg-6 margin-custom">
            <div class="contact-box">
              <div class="section-title mb-0">
                <h2>Get In Touch</h2>
              </div>
              <!-- native HTML5 validation -->
              <form @submit.prevent="handleSubmit" class="contact-form-items">
                <div class="row g-4">
                  <div class="col-lg-6">
                    
                    <div class="form-clt">
                      <input type="text" v-model="full_name" placeholder="Your Name" required />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-clt">
                      <input type="email" v-model="email" placeholder="Email" required />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-clt">
                      <input type="text" v-model="company_name" placeholder="Company Name" />
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="form-clt">
                      <input type="tel" v-model="phone_number" placeholder="Phone Number" />
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <div class="form-clt">
                      <textarea v-model="message" placeholder="Type Here" required></textarea>
                    </div>
                  </div>

                  <div class="col-lg-12">
                    <button type="submit" class="theme-btn" :disabled="loading">
                      <span v-if="!loading">Send Now <i class="icon-arrow-right"></i></span>
                      <span v-else>Sending...</span>
                    </button>
                  </div>
                </div>
              </form>
              <p v-if="responseMsg" style="margin-top:10px;font-size: 20px;">{{ responseMsg }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

     <!-- Modal -->
    <transition name="fade-zoom">
      <div v-if="showModal" class="modal-overlay">
        <div class="modal-box" :class="modalType">
          <i v-if="modalType === 'success'" class="fa-solid fa-circle-check success-icon"></i>
          <i v-else class="fa-solid fa-circle-xmark error-icon"></i>
          <p>{{ modalMsg }}</p>
        </div>
      </div>
    </transition>
  </section>
</template>

<style scoped>
.margin-custom {
  margin-top: 120px;
}

/* Modal styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
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
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
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
  0% { transform: scale(0.5); opacity: 0; }
  60% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); }
}
</style>