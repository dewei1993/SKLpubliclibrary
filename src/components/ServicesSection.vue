<script setup>
import { ref } from 'vue'

import event1 from '@/assets/images/event1.png'
import event2 from '@/assets/images/event2.png'
import event3 from '@/assets/images/event3.png'
import event4 from '@/assets/images/event4.png'

import service1 from '@/assets/images/services1.png'
import service2 from '@/assets/images/services2.png'
import service3 from '@/assets/images/services3.png'
import service4 from '@/assets/images/services4.png'
import service5 from '@/assets/images/services5.png'
import service6 from '@/assets/images/services6.png'
import service7 from '@/assets/images/services7.png'
import service8 from '@/assets/images/services8.png'

const featuredActivity = ref({
  title: 'SM Care Book Donation Drive',
  date: 'JULY 24, 2024',
  desc: 'SKL received more than 40 boxes of donated books and learning materials through the SM Cares Book Donation Drive Project to support literacy and community learning.',
  img: event1,
})

const activities = [
  {
    date: 'AUGUST 12, 2024',
    title: 'Library Outreach Program',
    desc: 'A literacy and community engagement initiative that extends library programs, reading activities, and educational services beyond the library.',
    img: event4,
  },

  {
    date: 'JULY 28, 2024',
    title: 'Livelihood Program',
    desc: 'A community-based livelihood activity that provided practical skills, learning opportunities, and empowerment programs for participants.',
    img: event2,
  },

  {
    date: 'AUGUST 05, 2024',
    title: 'Library Orientation Program',
    desc: 'An orientation activity introducing library users to the facilities, services, collections, and digital resources of Sentro ng Karunungan Library.',
    img: event3,
  }
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

const servicesTrack = ref(null)

function setFeaturedActivity(activity) {
  featuredActivity.value = activity
}

function scrollServices(direction) {
  const container = servicesTrack.value
  if (!container) return

  const card = container.querySelector('.service-card')
  if (!card) return

  const cardWidth = card.offsetWidth + 24

  container.scrollBy({
    left: direction * cardWidth * 3,
    behavior: 'smooth',
  })
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
              <img :src="featuredActivity.img" alt="Featured Event" />
            </div>

            <div class="featured-news-content">
              <span class="featured-label">FEATURED EVENT</span>

              <h2>{{ featuredActivity.title }}</h2>

              <p>{{ featuredActivity.desc }}</p>

              <RouterLink to="/events" class="readmore-btn">
                Read More
              </RouterLink>
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

              <RouterLink
                to="/events"
                class="event-details-link">
                Read More
              </RouterLink>
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
        <div class="section-title-top">SERVICES</div>
        <h2 class="section-title text-uppercase">Library Services</h2>
        <p class="services-subtitle">
          Providing the tools and environments necessary for academic success and lifelong learning.
        </p>
      </div>

      <!-- ARROWS TOP RIGHT -->
        <div class="services-top-controls">
          <!-- TOP LINK -->
          <a href="#" class="collections-link">
            View all Services
            <i class="bi bi-arrow-right"></i>
          </a>
          <!-- ARROWS -->
          <div class="services-arrow-group">
            <button
              class="services-arrow"
              type="button"
              aria-label="Previous services"
              @click="scrollServices(-1)">
              <i class="bi bi-arrow-left"></i>
            </button>
            <button
              class="services-arrow"
              type="button"
              aria-label="Next services"
              @click="scrollServices(1)">
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- SLIDER BELOW ARROWS -->
      <div class="services-slider-wrap">
        <div class="services-track" ref="servicesTrack">
          <div
            v-for="(service, index) in serviceImages"
            :key="index"
            class="service-card service-card-poster"
          >
            <div class="service-poster-image">
              <img :src="service" alt="Library Service" />
            </div>
          </div>
        </div>
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

/* =========================================
   TOP RIGHT ARROWS
========================================= */

.services-top-controls {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
  margin-top: 10px;
  flex-shrink: 0;
}

/* ARROW GROUP */
.services-arrow-group {
  display: flex;
  gap: 10px;
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

/* =========================================
   SLIDER
========================================= */

.services-slider-wrap {
  position: relative;
  overflow: hidden;
}

.services-track {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-behavior: smooth;
  cursor: grab;
  scrollbar-width: none;
  padding-bottom: 10px;
}

.services-track::-webkit-scrollbar {
  display: none;
}

.services-track.dragging {
  cursor: grabbing;
}

/* =========================================
   CARD
========================================= */

.service-card-poster {
  flex: 0 0 calc((100% - 48px) / 3);
  max-width: calc((100% - 48px) / 3);
  background: #fff;
  overflow: hidden;
  border-radius: 18px;
  box-shadow:
    0 12px 28px rgba(0, 0, 0, 0.08),
    0 3px 10px rgba(0, 0, 0, 0.04);
  transition: 0.35s ease;
}

.service-card-poster:hover {
  transform: translateY(-6px);
}

/* =========================================
   IMAGE
========================================= */

.service-poster-image {
  width: 100%;
  aspect-ratio: 4 / 3;
  overflow: hidden;
}

.service-poster-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.45s ease;
}

.service-card-poster:hover .service-poster-image img {
  transform: scale(1.06);
}

/* =========================================
   BUTTON
========================================= */

.service-poster-content {
  margin-top: 28px;
}


/* =========================================
   ARROWS
========================================= */

.services-arrow {
  width: 42px;
  height: 42px;
  border: none;
  background: #e0e0e0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
}

.services-arrow:hover {
  background: var(--primary);
  color: #fff;
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
