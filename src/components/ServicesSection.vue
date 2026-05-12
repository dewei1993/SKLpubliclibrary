<script setup>
import { ref } from 'vue'

import event1 from '@/assets/images/event1.png'
import event2 from '@/assets/images/event2.png'
import event3 from '@/assets/images/event3.png'

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
  desc: 'As one of the recipients of the SM Cares Book Donation Drive Project, SKL received more than 40 boxes of general collection materials as a starting point to establish a Book Nook section in the library.',
  img: event1,
})

const activities = [
  {
    date: 'JULY 24, 2024',
    title: 'Summer Reading Challenge for Youth',
    desc: 'Join our summer reading challenge designed to inspire young readers through engaging book activities and library participation.',
    img: event1,
  },
  {
    date: 'JULY 28, 2024',
    title: 'Author Spotlight: Elena Vance',
    desc: 'A special author spotlight event featuring Elena Vance.',
    img: event2,
  },
  {
    date: 'AUG 05, 2024',
    title: 'Library Board Town Hall Meeting',
    desc: 'Attend the library board town hall meeting to hear updates and ask questions.',
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
        <!-- LEFT FEATURED EVENT -->
        <div class="col-lg-8">
          <div class="featured-news-card">
            <div class="featured-news-image">
              <img :src="featuredActivity.img" alt="Featured Event" />
            </div>
            <div class="featured-news-content">
              <span class="featured-label"> FEATURED EVENT </span>
              <h2>
                {{ featuredActivity.title }}
              </h2>
              <p>
                {{ featuredActivity.desc }}
              </p>
              <a href="#" class="readmore-btn"> Read More </a>
            </div>
          </div>
        </div>

        <!-- RIGHT EVENT LIST -->
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

              <a href="#" @click.prevent> Details </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- LIBRARY SERVICES SECTION -->
  <section id="library-services" class="library-services-section">
    <div class="container">
      <div class="services-header text-center">
        <div class="section-title-top">SERVICES</div>
        <h2 class="section-title text-uppercase">Library Services</h2>
        <p class="services-subtitle">
          Providing the tools and environments necessary for academic success and lifelong learning.
        </p>
      </div>
      <div class="services-slider-wrap">
        <button
          class="services-arrow services-arrow-left"
          type="button"
          aria-label="Previous services"
          @click="scrollServices(-1)"
        >
          <i class="bi bi-arrow-left"></i>
        </button>

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
        <button
          class="services-arrow services-arrow-right"
          type="button"
          aria-label="Next services"
          @click="scrollServices(1)"
        >
          <i class="bi bi-arrow-right"></i>
        </button>
      </div>
      <div class="service-poster-content text-center">
        <RouterLink to="/services" class="service-poster-btn"> BOOK NOW </RouterLink>
      </div>
    </div>
  </section>
</template>

<style>
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

@media (max-width: 991.98px) {
  .featured-news-card {
    grid-template-columns: 1fr;
  }

  .featured-news-image {
    min-height: 300px;
  }
}

.library-services-section {
  background: #fff;
  padding: 80px 0;
}

.services-header {
  max-width: 680px;
  margin: 0 auto 40px;
}

.services-title {
  color: var(--primary);
  font-size: clamp(30px, 4vw, 48px);
  font-weight: 800;
  margin-bottom: 10px;
}

.services-subtitle {
  color: var(--neutral);
  font-size: 15px;
  line-height: 1.7;
  margin: 0;
}

.services-slider-wrap {
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
}

.services-track {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-behavior: smooth;
  cursor: grab;
}

.services-track.dragging {
  cursor: grabbing;
  scroll-behavior: auto;
}

.services-track::-webkit-scrollbar {
  display: none;
}

.service-card-poster {
  width: 100%;
  max-width: 420px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  margin: auto;
  flex: 0 0 calc((100% - 48px) / 3); /* 3 cards */
  max-width: calc((100% - 48px) / 3);
}

/* IMAGE SIZE (KEY PART 🔥) */
.service-poster-image {
  width: 100%;
  aspect-ratio: 4 / 3; /* matches your image */
  background: #ddd;
}

.service-poster-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* fills like poster */
}

.service-poster-btn {
  background: var(--primary);
  color: #fff;
  font-weight: 600;
  font-size: 18px;
  padding: 8px 20px;
  border-radius: 0;
  text-decoration: none;
  display: inline-block;
  margin-top: 15px;
  margin-bottom: 15px;
}

.service-poster-btn:hover {
  background: var(--secondary);
  color: #fff;
}

.services-arrow {
  width: 46px;
  height: 46px;
  border: none;
  border-radius: 50%;
  background: #fff;
  color: var(--primary);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  flex-shrink: 0;
  transition: 0.3s ease;
}

.services-arrow:hover {
  background: var(--primary);
  color: #fff;
}

@media (max-width: 767.98px) {
  .service-card-poster {
    min-width: 300px;
    max-width: 300px;
  }

  .service-poster-image {
    height: 340px;
  }

  .service-poster-content h3 {
    font-size: 26px;
  }

  .service-stars {
    font-size: 30px;
    letter-spacing: 4px;
  }

  .service-poster-btn {
    font-size: 18px;
    padding: 14px 26px;
  }
}
</style>
