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

const resources = [
  e1,
  e2,
  e3,
  e4,
  e5,
  e6,
  e7,
  e8,
  e9,
  e10
]

function scrollResources(direction) {
  const container = resourceTrack.value

  if (!container) return

  const card = container.querySelector('.resource-card')

  if (!card) return

  const cardWidth = card.offsetWidth + 24

  container.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  })
}
</script>

<template>
  <section id="resources" class="resources-section">

    <div class="container">

      <!-- HEADER -->
      <div class="d-flex justify-content-between align-items-center mb-4">

        <div>

          <div class="section-title-top">
            E-Resources
          </div>

          <h2 class="resources-title-main">
            OPEN EDUCATIONAL RESOURCES
          </h2>

          <p class="resources-subtext">
            Access a curated digital environment of
            open-license materials, textbooks,
            and peer-reviewed research.
          </p>

        </div>

        <!-- ARROWS -->
        <div class="resource-controls">

          <button
            class="btn-nav"
            @click="scrollResources(-1)"
          >
            <i class="bi bi-arrow-left"></i>
          </button>

          <button
            class="btn-nav"
            @click="scrollResources(1)"
          >
            <i class="bi bi-arrow-right"></i>
          </button>

        </div>

      </div>

      <!-- CARDS -->
      <div
        class="resource-track"
        ref="resourceTrack"
      >

        <div
          v-for="(resource, index) in resources"
          :key="index"
          class="resource-card"
        >

          <img
            :src="resource"
            class="resource-logo"
            alt="E-Resources"
          >

        </div>

      </div>

    </div>

  </section>
</template>