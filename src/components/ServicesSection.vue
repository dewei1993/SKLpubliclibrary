<script setup>
import { ref } from 'vue'

import event1 from '@/assets/images/event1.webp'
import event2 from '@/assets/images/event2.webp'
import event3 from '@/assets/images/event3.webp'
import event4 from '@/assets/images/event4.webp'

import service1 from '@/assets/images/services1.webp'
import service2 from '@/assets/images/services2.webp'
import service3 from '@/assets/images/services3.webp'
import service4 from '@/assets/images/services4.webp'
import service5 from '@/assets/images/services5.webp'
import service6 from '@/assets/images/services6.webp'
import service7 from '@/assets/images/services7.webp'
import service8 from '@/assets/images/services8.webp'

const featuredActivity = ref({
  title: 'SM Care Book Donation Drive',
  date: 'NOVEMBER 12, 2025',
  desc: 'SKL received more than 40 boxes of donated books and learning materials through the SM Cares Book Donation Drive Project to support literacy and community learning.',
  img: event1,
})

const activities = [
  {
    date: 'FEBRUARY 11, 2025',
    title: 'Library Outreach Program',
    desc: 'A literacy and community engagement initiative that extends library programs, reading activities, and educational services beyond the library.',
    img: event4,
  },

  {
    date: 'MARCH 14, 2025',
    title: 'Livelihood Program',
    desc: 'A community-based livelihood activity that provided practical skills, learning opportunities, and empowerment programs for participants.',
    img: event2,
  },

  {
    date: 'June 25, 2024',
    title: 'Library Orientation Program',
    desc: 'An orientation activity introducing library users to the facilities, services, collections, and digital resources of Sentro ng Karunungan Library.',
    img: event3,
  },
]

const serviceImages = [
  service2,
  service1,
  service3,
  service4,
  service5,
  service6,
  service7,
  service8,
]

function setFeaturedActivity(activity) {
  featuredActivity.value = activity
}

const activeServiceIndex = ref(1)

function scrollServices(direction) {
  activeServiceIndex.value =
    (activeServiceIndex.value + direction + serviceImages.length) % serviceImages.length
}
</script>

<template>
  <!-- EVENTS SECTION -->
  <section id="services" class="news-events-section">
    <div class="container">
      <div class="mb-4">
        <div class="section-title-top">Events</div>
        <h2 class="section-title text-uppercase">Activities and Programs</h2>
      </div>

      <div class="row g-4 align-items-stretch">
        <div class="col-lg-8">
          <div class="featured-news-card">
            <div class="featured-news-image">
              <img :src="featuredActivity.img" alt="Featured Event" loading="lazy" />
            </div>

            <div class="featured-news-content">
              <span class="featured-label">FEATURED EVENT</span>

              <h2>{{ featuredActivity.title }}</h2>

              <p>{{ featuredActivity.desc }}</p>

              <RouterLink to="/events" class="readmore-btn"> Read More </RouterLink>
            </div>
          </div>
        </div>

        <div class="col-lg-4">
          <div class="event-list">
            <div
              v-for="(activity, index) in activities"
              :key="index"
              class="event-item activity-thumb"
              @click="setFeaturedActivity(activity)"
            >
              <div class="event-date">
                {{ activity.date }}
              </div>

              <h5>
                {{ activity.title }}
              </h5>

              <RouterLink to="/events" class="event-details-link"> Read More </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- LIBRARY SERVICES SECTION -->
  <section id="library-services" class="library-services-section">
    <div class="container">
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <div class="section-title-top">Services</div>
          <h2 class="section-title text-uppercase">Library Services</h2>
          <p class="services-subtitle">
            Providing the tools and environments necessary for academic success and lifelong
            learning.
          </p>
        </div>

        <!-- ARROWS TOP RIGHT -->
        <div class="services-top-controls">
          <!-- TOP LINK -->
          <RouterLink to="/services" class="collections-link">
            View all Services
            <i class="bi bi-arrow-right"></i>
          </RouterLink>
        </div>
      </div>

      <!-- CENTER ENLARGED CAROUSEL -->
      <div class="services-carousel">
        <button class="services-side-arrow left" @click="scrollServices(-1)">
          <i class="bi bi-arrow-left"></i>
        </button>

        <div class="services-poster-stage">
          <div
            v-for="(service, index) in serviceImages"
            :key="index"
            class="service-poster-card"
            :class="{
              active: index === activeServiceIndex,
              left:
                index === (activeServiceIndex - 1 + serviceImages.length) % serviceImages.length,
              right: index === (activeServiceIndex + 1) % serviceImages.length,
            }"
          >
            <img :src="service" alt="Library Service" loading="lazy" />
          </div>
        </div>

        <button class="services-side-arrow right" @click="scrollServices(1)">
          <i class="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* =========================================
   EVENTS SECTION
========================================= */

.news-events-section {
  background: #fff;
  padding: 70px 0;
}

.featured-news-card {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  background: #fff;
  min-height: 100%;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
}

.featured-news-image {
  min-height: 420px;
  overflow: hidden;
}

.featured-news-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.featured-news-content {
  padding: 42px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.featured-label {
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 1.5px;
  color: var(--secondary);
  margin-bottom: 14px;
  display: inline-block;
}

.featured-news-content h2 {
  color: var(--primary);
  font-weight: 800;
  font-size: clamp(28px, 3vw, 48px);
  line-height: 1.15;
  margin-bottom: 20px;
}

.featured-news-content p {
  color: var(--neutral);
  font-size: 18px;
  line-height: 1.7;
  margin-bottom: 28px;
  max-width: 420px;
}

.event-list {
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 100%;
}

.event-item {
  background: #fff;
  padding: 26px 18px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
  transition: 0.3s ease;
  cursor: pointer;
}

.event-item:hover {
  transform: translateY(-4px);
}

.event-date {
  font-size: 11px;
  font-weight: 800;
  color: var(--secondary);
  text-transform: uppercase;
  margin-bottom: 10px;
}

.event-item h5 {
  color: var(--primary);
  font-weight: 800;
  font-size: 26px;
  line-height: 1.3;
  margin-bottom: 10px;
}

.event-item a {
  color: var(--primary);
  font-weight: 700;
  text-decoration: underline;
  font-size: 15px;
}

.readmore-btn {
  background: var(--primary);
  color: #fff;
  border: none;
  padding: 14px 30px;
  text-decoration: none;
  font-weight: 700;
  display: inline-block;
  width: fit-content;
  transition: 0.3s ease;
}

.readmore-btn:hover {
  background: var(--secondary);
  color: #fff;
}

.event-details-link {
  color: var(--primary);
  font-weight: 700;
  text-decoration: underline;
  font-size: 15px;
  transition: 0.3s ease;
}

.event-details-link:hover {
  color: var(--secondary);
}

/* =========================================
   SERVICES SECTION
========================================= */

.library-services-section {
  background: #fff;
  padding: 90px 0;
}

.services-header {
  margin-bottom: 30px;
}

.services-title {
  color: var(--primary);
  font-size: clamp(34px, 5vw, 54px);
  font-weight: 900;
  margin-bottom: 12px;
}

.services-subtitle {
  color: var(--neutral);
  font-size: 15px;
  line-height: 1.8;
  max-width: 620px;
}

/* VIEW ALL */
.collections-link {
  color: var(--primary);
  font-size: 14px;
  font-weight: 800;
  text-decoration: none;
  transition: 0.3s ease;
  margin-bottom: 20%;
}

.collections-link:hover {
  color: var(--secondary);
}

/* CENTER ENLARGED SERVICES CAROUSEL */
.services-carousel {
  position: relative;
  height: 520px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.services-poster-stage {
  position: relative;
  width: 100%;
  height: 100%;
}

.service-poster-card {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 55%;
  opacity: 0;
  filter: blur(6px);
  transform: translate(-50%, -50%) scale(0.7);
  transition: 0.45s ease;
  pointer-events: none;
}

.service-poster-card img {
  width: 100%;
  height: auto;
  border-radius: 18px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.18);
}

.service-poster-card.active {
  opacity: 1;
  filter: blur(0);
  transform: translate(-50%, -50%) scale(1);
  z-index: 3;
  pointer-events: auto;
}

.service-poster-card.left {
  opacity: 0.45;
  filter: blur(6px);
  transform: translate(-115%, -50%) scale(0.72);
  z-index: 1;
}

.service-poster-card.right {
  opacity: 0.45;
  filter: blur(6px);
  transform: translate(15%, -50%) scale(0.72);
  z-index: 1;
}

/* SIDE ARROWS */
.services-side-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;

  width: 58px;
  height: 58px;

  border: none;
  border-radius: 50%;

  background: var(--primary);
  color: #fff;

  font-size: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.3s ease;
}

.services-side-arrow.left {
  left: 30px;
}

.services-side-arrow.right {
  right: 30px;
}

.services-side-arrow:hover {
  background: var(--secondary);
}

/* RESPONSIVE */
@media (max-width: 991px) {
  .services-carousel {
    height: 430px;
  }

  .service-poster-card {
    width: 75%;
  }
}

@media (max-width: 576px) {
  .services-carousel {
    height: 360px;
  }

  .service-poster-card {
    width: 86%;
  }

  .service-poster-card.left,
  .service-poster-card.right {
    opacity: 0;
  }

  .services-side-arrow.left {
    left: 8px;
  }

  .services-side-arrow.right {
    right: 8px;
  }
}

/* =========================================
   RESPONSIVE
========================================= */

@media (max-width: 991px) {
  .featured-news-card {
    grid-template-columns: 1fr;
  }

  .featured-news-image {
    min-height: 300px;
  }

  .service-card-poster {
    flex: 0 0 calc((100% - 24px) / 2);
    max-width: calc((100% - 24px) / 2);
  }
}

@media (max-width: 767px) {
  .services-top-controls {
    justify-content: flex-end;
  }

  .service-card-poster {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .services-title {
    font-size: 36px;
  }

  .featured-news-content {
    padding: 28px;
  }
}
</style>
