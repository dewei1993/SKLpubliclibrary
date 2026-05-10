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
  img: event1
})

const activities = [
  {
    date: 'JULY 24, 2024',
    title: 'Summer Reading Challenge for Youth',
    desc: 'Join our summer reading challenge designed to inspire young readers through engaging book activities and library participation.',
    img: event1
  },
  {
    date: 'JULY 28, 2024',
    title: 'Author Spotlight: Elena Vance',
    desc: 'A special author spotlight event featuring Elena Vance.',
    img: event2
  },
  {
    date: 'AUG 05, 2024',
    title: 'Library Board Town Hall Meeting',
    desc: 'Attend the library board town hall meeting to hear updates and ask questions.',
    img: event3
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
  service8
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
    behavior: 'smooth'
  })
}
</script>

<template>
  <!-- EVENTS SECTION -->
  <section id="services" class="news-events-section">
    <div class="container">

      <div class="mb-4">
        <div class="section-title-top">Events</div>
        <h2 class="section-title text-uppercase">
          Activities and Programs
        </h2>
      </div>

      <div class="row g-4 align-items-stretch">

        <!-- LEFT FEATURED EVENT -->
        <div class="col-lg-8">
          <div class="featured-news-card">
            <div class="featured-news-image">
              <img
                :src="featuredActivity.img"
                alt="Featured Event"
              />
            </div>

            <div class="featured-news-content">
              <span class="featured-label">
                FEATURED EVENT
              </span>

              <h2>
                {{ featuredActivity.title }}
              </h2>

              <p>
                {{ featuredActivity.desc }}
              </p>

              <a href="#" class="readmore-btn">
                Read More
              </a>
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

              <a href="#" @click.prevent>
                Details
              </a>
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
        <div class="section-title-top">
          SERVICES
        </div>

        <h2 class="services-title">
          Library Services
        </h2>

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

        <div
          class="services-track"
          ref="servicesTrack"
        >

          <div
            v-for="(service, index) in serviceImages"
            :key="index"
            class="service-card service-card-poster"
          >
            <div class="service-poster-image">
              <img
                :src="service"
                alt="Library Service"
              />
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
          <RouterLink to="/services" class="service-poster-btn">
            BOOK NOW
          </RouterLink>
        </div>

    </div>
  </section>
</template>