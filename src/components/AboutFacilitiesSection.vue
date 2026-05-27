<script setup>
import { ref } from 'vue'

import facility8 from '@/assets/images/facility8.jpeg'
import facility9 from '@/assets/images/facility9.jpg'
import facility2 from '@/assets/images/facility2.jpg'
import facility6 from '@/assets/images/facility6.jpg'
import facility14 from '@/assets/images/facility14.jpg'
import facility5 from '@/assets/images/facility5.jpg'
import facility16 from '@/assets/images/facility16.jpg'
import facility7 from '@/assets/images/facility7.jpeg'
import facility19 from '@/assets/images/facility19.jpg'
import facility11 from '@/assets/images/facility11.jpg'
import facility10 from '@/assets/images/facility10.jpg'
import facility15 from '@/assets/images/facility15.jpg'
import facility17 from '@/assets/images/facility17.jpg'
import facility18 from '@/assets/images/facility18.jpg'

const facilitiesTrack = ref(null)

const facilities = [
  { title: 'Reading Area', category: 'Study Space', image: facility8 },
  { title: 'Circulation Counter', category: 'Library Facility', image: facility9 },
  { title: 'Discussion Room', category: 'Community Space', image: facility16 },
  { title: 'Computer Area', category: 'Digital Facility', image: facility6 },
  { title: 'Children’s Section', category: 'Children Space', image: facility14 },
  { title: 'Registration Area', category: 'Library Facility', image: facility11 },
  { title: 'Review Area', category: 'Study Facility', image: facility7 },
  { title: 'OPAC Station', category: 'Library Access', image: facility2 },
  { title: 'Library Collections', category: 'Library Collection', image: facility19 },
  { title: 'Exhibit Corner', category: 'Community Space', image: facility5 },
  { title: 'Baggage Counter', category: 'Library Facility', image: facility10 },
  { title: 'Children’s Section', category: 'Children Space', image: facility15 },
  { title: 'Children’s Section', category: 'Children Space', image: facility17 },
  { title: 'Library Collections', category: 'Library Collection', image: facility18 },
]

function scrollFacilities(direction) {
  const container = facilitiesTrack.value
  if (!container) return

  const card = container.querySelector('.facility-card')
  if (!card) return

  const cardWidth = card.offsetWidth + 22

  container.scrollBy({
    left: direction * cardWidth * 3,
    behavior: 'smooth',
  })
}

const showPreview = ref(false)
const currentImage = ref(0)

function openPreview(index) {
  currentImage.value = index
  showPreview.value = true
}

function nextImage() {
  currentImage.value = (currentImage.value + 1) % facilities.length
}

function prevImage() {
  currentImage.value = (currentImage.value - 1 + facilities.length) % facilities.length
}
</script>

<template>
  <div class="facilities-header text-center">
    <h2>Library Facilities</h2>
    <div class="facilities-line"></div>

    <p>
      Explore the different library spaces designed for reading, research, learning, collaboration,
      and community engagement.
    </p>
  </div>

  <section id="sections" class="about-facilities-section">
    <div class="container">
      <div class="facilities-slider-wrap">
        <!-- LEFT -->
        <button
          class="facility-arrow facility-arrow-left"
          type="button"
          @click="scrollFacilities(-1)"
        >
          <i class="bi bi-arrow-left"></i>
        </button>

        <!-- TRACK -->
        <div class="facilities-track" ref="facilitiesTrack">
          <div
            v-for="(facility, index) in facilities"
            :key="index"
            class="facility-card"
            @click="openPreview(index)"
          >
            <img :src="facility.image" :alt="facility.title" />
          </div>
        </div>

        <!-- RIGHT -->
        <button
          class="facility-arrow facility-arrow-right"
          type="button"
          @click="scrollFacilities(1)"
        >
          <i class="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>

    <!-- LIGHTBOX -->
    <div v-if="showPreview" class="facility-preview">
      <button class="preview-close" @click="showPreview = false">✕</button>

      <!-- PREV -->
      <button class="preview-arrow preview-left" @click="prevImage">
        <i class="bi bi-arrow-left"></i>
      </button>

      <!-- IMAGE -->
      <img
        :src="facilities[currentImage].image"
        :alt="facilities[currentImage].title"
        class="preview-image"
      />
      <div class="preview-label">
        <h3>{{ facilities[currentImage].title }}</h3>
        <p>{{ facilities[currentImage].category }}</p>
      </div>

      <!-- NEXT -->
      <button class="preview-arrow preview-right" @click="nextImage">
        <i class="bi bi-arrow-right"></i>
      </button>
    </div>
  </section>
</template>

<style scoped>
/* ABOUT FACILITIES */
.about-facilities-section {
  padding: 90px 0;
  background: linear-gradient(180deg, #f7f9fc 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

.facilities-header {
  margin-top: 50px;
  margin-bottom: 50px;
}

.facilities-header h2 {
  color: var(--primary);
  font-size: clamp(34px, 4vw, 52px);
  font-weight: 900;
  margin-bottom: 10px;
}

.facilities-line {
  width: 70px;
  height: 3px;
  background: var(--secondary);
  margin: 0 auto 18px;
}

.facilities-header p {
  color: var(--neutral);
  font-size: 15px;
  margin: 0 auto;
  max-width: 600px;
  line-height: 1.8;
}

.facilities-slider-wrap {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
}

.facilities-track {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: calc((100% - 44px) / 3);
  grid-template-rows: repeat(3, 170px);
  gap: 22px;
  overflow-x: auto;
  scroll-behavior: smooth;
  scrollbar-width: none;
  padding: 4px;
}

.facilities-track::-webkit-scrollbar {
  display: none;
}

.facility-card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  border-top: 5px solid var(--tertiary);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
  cursor: pointer;
}

.facility-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: 0.35s ease;
}

.facility-card:hover img {
  transform: scale(1.05);
}

.facility-arrow {
  width: 46px;
  height: 46px;
  border: none;
  background: var(--primary);
  color: #fff;
  border-radius: 50%;
  flex-shrink: 0;
  transition: 0.3s ease;
}

.facility-arrow:hover {
  background: var(--secondary);
}

/* LIGHTBOX */
.facility-preview {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.92);
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;
}

.preview-image {
  width: 85%;
  max-width: 1200px;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 12px;

  animation: zoomIn 0.3s ease;
}

.preview-label {
  position: absolute;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);

  text-align: center;
  color: #fff;

  background: rgba(0, 58, 112, 0.78);

  padding: 14px 28px;
  border-radius: 12px;

  backdrop-filter: blur(10px);
}

.preview-label h3 {
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 4px;
}

.preview-label p {
  margin: 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.85);
}

@keyframes zoomIn {
  from {
    transform: scale(0.85);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
}

.preview-close {
  position: absolute;
  top: 30px;
  right: 35px;

  width: 46px;
  height: 46px;

  border: none;
  border-radius: 50%;

  background: var(--secondary);
  color: #fff;

  font-size: 22px;
  font-weight: 900;

  cursor: pointer;
}

.preview-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 55px;
  height: 55px;

  border: none;
  border-radius: 50%;

  background: rgba(255, 255, 255, 0.15);
  color: #fff;

  font-size: 22px;

  cursor: pointer;
  transition: 0.3s ease;
}

.preview-arrow:hover {
  background: var(--secondary);
}

.preview-left {
  left: 30px;
}

.preview-right {
  right: 30px;
}

@media (max-width: 991px) {
  .facilities-track {
    grid-auto-columns: calc((100% - 22px) / 2);
  }
}

@media (max-width: 576px) {
  .facilities-track {
    grid-auto-columns: 100%;
    grid-template-rows: repeat(3, 180px);
  }

  .preview-image {
    width: 92%;
  }

  .preview-arrow {
    width: 46px;
    height: 46px;
  }
}
</style>
