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

<style>

    .hero {
      position: relative;
      min-height: 620px;
      background:
        linear-gradient(rgba(15, 90, 141, 0.28), rgba(15, 90, 141, 0.35)),
        url('@/assets/images/hero1.png') center center / cover no-repeat;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0));
    }

    .hero-content {
      position: relative;
      z-index: 2;
      padding: 80px 0 130px;
    }

    .hero-card {
      background: rgba(255, 255, 255, 0.14);
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 24px;
      padding: 24px;
      color: #fff;
      box-shadow: var(--shadow);
      max-width: 680px;
      backdrop-filter: blur(8px);
    }

    .hero-card h1 {
      font-size: clamp(30px, 5vw, 58px);
      font-weight: 900;
      text-transform: uppercase;
      line-height: 1.02;
      margin-bottom: 18px;
    }

    .hero-card p {
      font-size: 17px;
      margin-bottom: 24px;
      max-width: 560px;
    }

    .hero-thumb-stack {
      position: absolute;
      right: 3%;
      bottom: 48px;
      z-index: 2;
      width: min(320px, 38vw);
    }

    .hero-thumb {
      border-radius: 24px;
      overflow: hidden;
      background: #fff;
      box-shadow: var(--shadow);
      border: 6px solid rgba(255,255,255,0.9);
      position: absolute;
    }

    /* PRIMARY BUTTON */
    .btn-primary-custom {
      background: var(--secondary);
      color: #fff;
      padding: 12px 22px;
      border-radius: 8px;
      font-weight: 700;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      transition: 0.3s ease;
    }

    .btn-primary-custom:hover {
      background: var(--primary);
      color: #fff;
      transform: translateY(-2px);
    }

    /* OUTLINE BUTTON */
    .btn-outline-custom {
      background: #fff;
      color: var(--primary);
      padding: 12px 22px;
      border-radius: 8px;
      font-weight: 700;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      transition: 0.3s ease;
    }

    .btn-outline-custom:hover {
      transform: translateY(-2px);
    }

    .hero-search .form-control {
      height: 54px;
      border-radius: 10px 0 0 10px;
      border: none;
      padding: 0 18px;
      font-size: 15px;
      box-shadow: none;
    }

    .hero-search .form-control:focus {
      box-shadow: none;
      border: none;
    }

    .hero-search .btn {
      border-radius: 0 10px 10px 0;
      background: var(--tertiary);
      border: none;
      color: #1a1a1a;
    }

    .hero-search .btn:hover {
      background: var(--secondary);
      color: #fff;
    }


</style>