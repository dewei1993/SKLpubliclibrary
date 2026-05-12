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

const resourceTrack = ref(null)

const resources = [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10]

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
      <!-- HEADER -->
      <div class="d-flex justify-content-between align-items-center mb-4">
        <div>
          <div class="section-title-top">E-Resources</div>
          <h2 class="section-title text-uppercase">OPEN EDUCATIONAL RESOURCES</h2>
          <p class="resources-subtext">
            Access a curated digital environment of open-license materials, textbooks, and
            peer-reviewed research.
          </p>
        </div>
        <!-- ARROWS -->
        <div class="resource-controls">
          <button class="btn-nav" @click="scrollResources(-1)">
            <i class="bi bi-arrow-left"></i>
          </button>

          <button class="btn-nav" @click="scrollResources(1)">
            <i class="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>

      <!-- CARDS -->
      <div class="resource-track" ref="resourceTrack">
        <div v-for="(resource, index) in resources" :key="index" class="resource-card">
          <img :src="resource" class="resource-logo" alt="E-Resources" />
        </div>
      </div>
    </div>
  </section>
</template>

<style>
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

/* Controls */
.resource-controls {
  display: flex;
  gap: 10px;
}

.btn-nav {
  width: 42px;
  height: 42px;
  border: none;
  background: #e0e0e0;
  border-radius: 4px;
  transition: 0.3s;
}

.btn-nav:hover {
  background: var(--primary);
  color: #fff;
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
</style>
