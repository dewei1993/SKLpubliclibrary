<script setup>
import { ref } from 'vue'

import e1 from '@/assets/images/e1.png'
import e2 from '@/assets/images/e2.png'
import e3 from '@/assets/images/e3.png'
import e4 from '@/assets/images/e4.png'
import e5 from '@/assets/images/e5.png'
import e6 from '@/assets/images/e6.png'
import e7 from '@/assets/images/e7.png'
import e8 from '@/assets/images/e8.png'
import e9 from '@/assets/images/e9.png'
import e10 from '@/assets/images/e10.png'
import e11 from '@/assets/images/e11.png'

const resourceTrack = ref(null)

const resources = [
  {
    image: e1,
    link: 'https://www.letsreadasia.org/',
  },
  {
    image: e2,
    link: 'https://www.uniteforliteracy.com/',
  },
  {
    image: e3,
    link: 'https://www.africanstorybook.org/',
  },
  {
    image: e4,
    link: 'https://bookdash.org/books/',
  },
  {
    image: e5,
    link: 'https://www.thefablecottage.com/',
  },
  {
    image: e6,
    link: 'https://storylineonline.net/',
  },
    {
    image: e7,
    link: 'http://www.childrenslibrary.org/',
  },
  {
    image: e8,
    link: 'http://www.kids-bookreview.com/',
  },
  {
    image: e9,
    link: 'https://www.loyalbooks.com/',
  },
  {
    image: e10,
    link: 'https://archive.org/details/books',
  },
  {
    image: e11,
    link: 'https://www.openculture.com/freeaudiobooks',
  },
]

function scrollResources(direction) {
  const container = resourceTrack.value

  if (!container) return

  const card = container.querySelector('.resource-card')

  if (!card) return

  const cardWidth = card.offsetWidth + 24

  container.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth',
  })
}
</script>

<template>
  <section id="resources" class="resources-section">
    <div class="container">

      <div class="resources-header-wrap">
        <div>
          <div class="section-title-top">E-Resources</div>

          <h2 class="section-title text-uppercase">
            OPEN EDUCATIONAL RESOURCES
          </h2>

          <p class="resources-subtext">
            Access a curated digital environment of open-license materials,
            textbooks, and peer-reviewed research.
          </p>
        </div>

        <div class="resources-right-controls">
          <a
            href="https://eportal.nlp.gov.ph/eresources"
            target="_blank"
            class="collections-link"
          >
            View all Collections
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>
      </div>

      <div class="resource-carousel-wrap">
        <button
          class="resource-side-arrow resource-side-arrow-left"
          @click="scrollResources(-1)"
        >
          <i class="bi bi-arrow-left"></i>
        </button>

        <div class="resource-track" ref="resourceTrack">
          <a
            v-for="(resource, index) in resources"
            :key="index"
            :href="resource.link"
            target="_blank"
            class="resource-card"
          >
            <img
              :src="resource.image"
              class="resource-logo"
              alt="E-Resources"
            />
          </a>
        </div>
        <button
          class="resource-side-arrow resource-side-arrow-right"
          @click="scrollResources(1)"
        >
          <i class="bi bi-arrow-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>
<style scoped>
.resources-section {
  background: #f4f6f8;
  padding: 70px 0;
}

.resources-title-main {
  font-weight: 900;
  color: var(--primary);
  margin-bottom: 8px;
}

.resources-subtext {
  color: var(--neutral);
  max-width: 500px;
  font-size: 14px;
}

/* Cards layout */
.resource-track {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-top: 10px;
  cursor: grab;
}

.resource-track.dragging {
  cursor: grabbing;
}

.resource-track::-webkit-scrollbar {
  display: none;
}

/* Card */
.resource-card {
  min-width: 200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  text-align: center;
  cursor: pointer;
  transition: 0.3s ease;
}

.resource-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-bottom: 10px;
}

.resource-card:hover .resource-logo {
  filter: grayscale(0%);
}

/* Hover effect */
.resource-card:hover h6 {
  color: #fff;
}

.resource-card p {
  margin: 0;
  font-weight: 600;
  color: #333;
}

.resource-card:hover {
  transform: translateY(-4px);
}

.resource-card:hover i,
.resource-card:hover p {
  color: #fff;
}

.resources-header-wrap {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 28px;
}

/* RIGHT SIDE */
.resources-right-controls {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 12px;
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

.resource-carousel-wrap {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

.resource-track {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding: 10px 56px;
  cursor: grab;
  scrollbar-width: none;
}

.resource-track::-webkit-scrollbar {
  display: none;
}

.resource-side-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  width: 46px;
  height: 46px;
  border: none;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
}

.resource-side-arrow:hover {
  background: var(--secondary);
}

.resource-side-arrow-left {
  left: 0;
}

.resource-side-arrow-right {
  right: 0;
}

.resource-card {
  flex: 0 0 200px;
  height: 200px;
}

/* MOBILE */
@media (max-width: 768px) {

  .resources-header-wrap {
    flex-direction: column;
  }

  .resources-right-controls {
    width: 100%;
    align-items: flex-start;
  }
}
</style>
