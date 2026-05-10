<template>
  <section     
    id="home"
    class="hero d-flex align-items-center"
    :style="{
      backgroundImage: `linear-gradient(rgba(15, 90, 141, 0.28), rgba(15, 90, 141, 0.35)), url(${heroImage})`
    }"
  >

    <div class="container hero-content">

      <div class="hero-card">

        <!-- TITLE -->
        <h1>
          Welcome to Sentro ng Karunungan Library
        </h1>

        <!-- DESCRIPTION -->
        <p>
          A modern public library website with accessible resources,
          library programs, citizen charter information,
          and featured community activities.
        </p>

        <!-- BUTTONS -->
        <div class="d-flex gap-3 flex-wrap">

          <a href="#about" class="btn-primary-custom">
            Explore Library
            <i class="bi bi-arrow-right ms-1"></i>
          </a>

          <a href="#contact" class="btn-outline-custom">
            Visit Us
            <i class="bi bi-geo-alt ms-1"></i>
          </a>

        </div>

        <!-- SEARCH -->
        <form class="hero-search mt-4" @submit.prevent="handleHeroSearch">

          <div class="input-group">

            <input
              v-model="searchQuery"
              type="text"
              class="form-control"
              placeholder="Search books, resources, programs, or services..."
              aria-label="Search library content"
            />

            <button
              class="btn btn-warning fw-bold px-4"
              type="submit"
            >
              <i class="bi bi-search me-2"></i>
              Search
            </button>

          </div>

        </form>

      </div>

    </div>

  </section>
</template>

<script setup>
import { ref } from 'vue'
import heroImage from '@/assets/images/hero1.png'

const searchQuery = ref('')

function handleHeroSearch() {

  if (!searchQuery.value.trim()) {
    alert('Please enter a search keyword.')
    return
  }

  alert(`Searching for: ${searchQuery.value}`)
}
</script>