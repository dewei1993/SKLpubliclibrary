<template>
  <!-- HEADER -->
  <div class="services-header text-center">
    <h2>Library Services</h2>
    <div class="services-line"></div>
    <p class="services-description mx-auto">
      We provide accessible library services designed to support learning, research, reading, and
      community development.
    </p>
  </div>
  <section class="services-section">
    <div class="container">
      <!-- SERVICES CAROUSEL -->
      <div id="servicesCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div
            v-for="(group, index) in serviceGroups"
            :key="index"
            class="carousel-item"
            :class="{ active: index === 0 }"
          >
            <div class="row g-4 justify-content-center">
              <div v-for="service in group" :key="service.id" class="col-lg-4 col-md-6">
                <div class="service-card h-100">
                  <img :src="service.image" :alt="service.title" class="service-image" />

                  <div class="service-content">
                    <div class="service-icon">
                      <i :class="service.icon"></i>
                    </div>

                    <h3>{{ service.title }}</h3>
                    <p>{{ service.description }}</p>

                    <button
                      class="service-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#serviceModal"
                      @click="selectedService = service"
                    >
                      Book Now
                      <span>
                        <i class="bi bi-arrow-right"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- CAROUSEL CONTROLS -->
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#servicesCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>

        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#servicesCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon"></span>
        </button>

        <!-- INDICATORS -->
        <div class="carousel-indicators service-indicators">
          <button
            v-for="(group, index) in serviceGroups"
            :key="index"
            type="button"
            data-bs-target="#servicesCarousel"
            :data-bs-slide-to="index"
            :class="{ active: index === 0 }"
            :aria-current="index === 0 ? 'true' : null"
            :aria-label="`Slide ${index + 1}`"
          ></button>
        </div>
      </div>
    </div>

    <!-- MODAL -->
    <div
      class="modal fade"
      id="serviceModal"
      tabindex="-1"
      aria-labelledby="serviceModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content service-modal">
          <div class="modal-header">
            <h5 class="modal-title" id="serviceModalLabel">
              {{ selectedService?.title }}
            </h5>

            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>

          <div class="modal-body text-center">
            <img
              :src="selectedService?.image"
              :alt="selectedService?.title"
              class="modal-service-image"
            />

            <p class="modal-text">
              {{ selectedService?.modalText }}
            </p>

            <img :src="selectedService?.qrCode" alt="QR Code" class="qr-code" />

            <p class="scan-text">Scan this QR code to book this service.</p>

            <!-- GOOGLE FORM BUTTON -->
            <a :href="selectedService?.googleForm" target="_blank" class="google-form-btn">
              <i class="bi bi-google"></i>
              Open Google Form
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

import services1 from '@/assets/images/services1.png'
import services2 from '@/assets/images/services2.png'
import services3 from '@/assets/images/services3.png'
import services4 from '@/assets/images/services4.png'
import services5 from '@/assets/images/services5.png'
import services6 from '@/assets/images/services6.png'
import services7 from '@/assets/images/services7.png'
import services8 from '@/assets/images/services8.png'

import qr1 from '@/assets/images/qr1.png'
import qr2 from '@/assets/images/qr2.png'
import qr3 from '@/assets/images/qr3.png'
import qr4 from '@/assets/images/qr4.png'
import qr5 from '@/assets/images/qr5.png'
import qr6 from '@/assets/images/qr6.png'
import qr7 from '@/assets/images/qr7.png'
import qr8 from '@/assets/images/qr8.png'

const services = [
  {
    id: 1,
    title: 'Book Reservation',
    icon: 'bi bi-book-fill',
    description:
      'Reserve books online and pick them up at the library once your request is processed.',
    modalText:
      'Book Reservation allows users to reserve available library materials for pickup at Sentro ng Karunungan Library.',
    image: services1,
    qrCode: qr1,
    googleForm: 'https://forms.gle/8Pv7CjuEsenUxD949',
  },
  {
    id: 2,
    title: 'Discussion Room Reservation',
    icon: 'bi bi-people-fill',
    description:
      'Reserve a discussion room for group study, collaboration, meetings, or learning activities.',
    modalText:
      'Discussion Room Reservation is available for users who need a quiet space for study, collaboration, and group learning.',
    image: services2,
    qrCode: qr2,
    googleForm: 'https://forms.gle/71qFqBog9nXNniSL9',
  },
  {
    id: 3,
    title: 'Online Document Delivery Service',
    icon: 'bi bi-envelope-paper-fill',
    description:
      'Request online journal articles, book chapters, and research materials through email assistance.',
    modalText:
      'Online Document Delivery Service helps researchers access digital materials such as articles, chapters, and other academic resources.',
    image: services3,
    qrCode: qr3,
    googleForm: 'https://forms.gle/R4QgNyzmC4SEDH7CA',
  },
  {
    id: 4,
    title: 'Research Assistance',
    icon: 'bi bi-search',
    description:
      'Get guidance in finding reliable resources, citations, references, and research information.',
    modalText:
      'Research Assistance provides support in locating relevant resources, citations, and information for academic and personal research.',
    image: services4,
    qrCode: qr4,
    googleForm: 'https://forms.gle/StEARAwpw2aG9Z8Y7',
  },
  {
    id: 5,
    title: 'E-Government Registration Assistance',
    icon: 'bi bi-person-badge-fill',
    description:
      'Receive assistance in online registration for selected government services and platforms.',
    modalText:
      'E-Government Registration Assistance supports users who need help accessing and registering for selected online government services.',
    image: services5,
    qrCode: qr5,
    googleForm: 'https://forms.gle/Yn3FfcDmgiPuHzhs8',
  },
  {
    id: 6,
    title: 'Storytelling / Film Showing / Arts & Crafts Reservation',
    icon: 'bi bi-easel-fill',
    description:
      'Reserve library spaces for storytelling sessions, film showings, arts and crafts activities, and other educational community programs.',
    modalText:
      'Storytelling / Film Showing / Arts & Crafts Reservation allows schools, organizations, and community groups to reserve designated library spaces for educational, cultural, and creative activities including storytelling programs, film viewing sessions, arts workshops, and interactive learning events.',
    image: services6,
    qrCode: qr6,
    googleForm: 'https://forms.gle/cALwGPdzp1MXjgLq9',
  },
  {
    id: 7,
    title: 'Free Lamination Service',
    icon: 'bi bi-card-heading',
    description:
      'Free lamination service for IDs, educational materials, school projects, and important learning documents.',
    modalText:
      'Free Lamination Services help library users preserve and protect important documents such as IDs, educational materials, certificates, visual aids, and school projects through quality lamination support provided by the library.',
    image: services7,
    qrCode: qr7,
    googleForm: 'https://forms.gle/C2uWpfz3bw5x3skt6',
  },
  {
    id: 8,
    title: 'Free Tutorial for Children',
    icon: 'bi bi-mortarboard-fill',
    description:
      'Free learning support for children in reading, writing, counting, arts, crafts, and computer basics.',
    modalText:
      'Free Tutorial for Children supports young learners through basic reading, writing, counting, creativity, and computer literacy activities.',
    image: services8,
    qrCode: qr8,
    googleForm: 'https://forms.gle/3QferQsqnUrSY48u6',
  },
]

const selectedService = ref(services[0])

const serviceGroups = computed(() => {
  const groups = []

  for (let i = 0; i < services.length; i += 3) {
    groups.push(services.slice(i, i + 3))
  }

  return groups
})
</script>

<style scoped>
.services-section {
  padding: 90px 0;
  background: linear-gradient(180deg, #f7f9fc 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

/* HEADER */
.services-header {
  margin-bottom: 50px;
  margin-top: 50px;
}

.services-header h2 {
  color: #111;
  font-size: clamp(34px, 4vw, 52px);
  font-weight: 900;
  margin-bottom: 10px;
}

.services-line {
  width: 70px;
  height: 4px;
  background: var(--secondary);
  border-radius: 50px;
  margin: 0 auto 22px;
}

.services-description {
  max-width: 720px;
  color: var(--neutral);
  font-size: 16px;
  line-height: 1.8;
}

/* CAROUSEL */
.carousel {
  padding-bottom: 70px;
}

.carousel-control-prev,
.carousel-control-next {
  width: 45px;
  height: 45px;
  background: var(--primary);
  border-radius: 50%;
  top: 42%;
  opacity: 1;
}

.carousel-control-prev {
  left: -20px;
}

.carousel-control-next {
  right: -20px;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  width: 18px;
  height: 18px;
}

.service-indicators {
  bottom: -10px;
}

.service-indicators button {
  width: 12px;
  height: 12px;
  background-color: var(--secondary);
  border-radius: 50%;
}

/* CARD */
.service-card {
  background: #fff;
  border-radius: 24px;
  padding: 25px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  transition: 0.3s ease;
}

.service-card:hover {
  transform: translateY(-8px);
}

.service-image {
  width: 100%;
  height: 230px;
  object-fit: contain;
  margin-bottom: 25px;
}

.service-content {
  text-align: center;
}

.service-icon {
  color: var(--tertiary);
  font-size: 28px;
  margin-bottom: 12px;
}

.service-content h3 {
  font-size: 22px;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 15px;
}

.service-content p {
  color: var(--neutral);
  line-height: 1.8;
  font-size: 15px;
  margin-bottom: 25px;
}

/* BOOK NOW BUTTON */
.service-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  border: 2px solid var(--secondary);
  background: transparent;
  padding: 10px 18px;
  border-radius: 50px;
  color: #111;
  font-weight: 700;
  transition: 0.3s ease;
  font-size: 14px;
}

.service-btn span {
  width: 28px;
  height: 28px;
  background: var(--secondary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.service-btn:hover {
  background: var(--primary);
  color: #fff;
}

/* MODAL */
.service-modal {
  border: none;
  border-radius: 18px;
  overflow: hidden;
}

.modal-header {
  background: var(--primary);
  color: #fff;
}

.modal-title {
  font-weight: 800;
}

.modal-service-image {
  width: 100%;
  max-width: 260px;
  height: 170px;
  object-fit: contain;
  margin-bottom: 15px;
}

.modal-text {
  color: var(--neutral);
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 20px;
}

.qr-code {
  width: 220px;
  height: 220px;
  object-fit: contain;
  margin-bottom: 15px;
}

.scan-text {
  font-weight: 700;
  color: var(--primary);
}

.google-form-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: var(--secondary);
  color: #fff;
  text-decoration: none;
  padding: 12px 22px;
  border-radius: 50px;
  font-weight: 700;
  margin-top: 10px;
  transition: 0.3s ease;
}

.google-form-btn:hover {
  background: var(--primary);
  color: #fff;
  transform: translateY(-3px);
}

/* MOBILE */
@media (max-width: 991px) {
  .carousel-control-prev {
    left: 5px;
  }

  .carousel-control-next {
    right: 5px;
  }
}

@media (max-width: 767px) {
  .service-card {
    max-width: 380px;
    margin: 0 auto;
  }

  .service-image {
    height: 200px;
  }
}
</style>
