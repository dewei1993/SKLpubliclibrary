<script setup>
import { RouterLink } from 'vue-router'

import sklLogo from '@/assets/images/SKLlogo.webp'
import nlpLogo from '@/assets/images/NLPlogo.webp'
import pbLogo from '@/assets/images/PBlogo.webp'
</script>

<template>
  <!-- TOPBAR -->
  <div class="topbar">
    <div class="container d-flex justify-content-between align-items-center">
      <div>PPLCo: 00001</div>
      <!-- SOCIAL LINKS -->
      <div class="social">
        <a href="https://www.facebook.com/SKLpubliclibrary" target="_blank">
          <i class="bi bi-facebook"></i>
        </a>
        <a href="#">
          <i class="bi bi-tiktok"></i>
        </a>
        <a href="#">
          <i class="bi bi-instagram"></i>
        </a>
        <a href="#">
          <i class="bi bi-youtube"></i>
        </a>
      </div>
    </div>
  </div>
  <!-- HEADER -->
  <header class="branding">
    <div class="container">
      <div class="row align-items-center g-3">
        <!-- MAIN LOGO -->
        <div class="col-auto">
          <div class="logo-circle">
            <RouterLink to="/" class="logo-home-link">
              <img :src="sklLogo" alt="Library Logo" loading="lazy" />
            </RouterLink>
          </div>
        </div>

        <!-- TITLE -->
        <div class="col">
          <div class="fw-semibold">National Library of the Philippines</div>
          <div class="title-main">Sentro ng Karunungan Library</div>
          <div class="title-small">
            Congressional District Public Library, 3rd Floor, TMX, Tutuban Center Mall, C.M. Recto
            Ave., Tondo, Manila
          </div>
        </div>
        <!-- PARTNER LOGOS -->
        <div class="col-auto d-none d-md-flex align-items-center gap-3">
          <img :src="nlpLogo" alt="NLP Logo" class="partner-logo" loading="lazy" />
          <img :src="pbLogo" alt="PB Logo" class="partner-logo" loading="lazy" />
        </div>
      </div>
    </div>
  </header>
</template>

<style>
.topbar {
  background: #f2f2f2;
  font-size: 13px;
  padding: 6px 0;
}

.topbar .social a {
  color: #111;
  margin-left: 12px;
  text-decoration: none;
}

.branding {
  background: var(--primary);
  color: #fff;
  padding: 14px 0;
}

.branding .title-small {
  font-size: 12px;
  letter-spacing: 0.8px;
  opacity: 0.95;
  font-weight: 700;
}

.branding .title-main {
  font-size: clamp(26px, 4vw, 44px);
  line-height: 1;
  font-weight: 900;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.logo-circle {
  width: 76px;
  height: 76px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
}

.logo-circle img,
.hero-thumb img,
.about-image img,
.program-thumb img,
.feature-map img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.partner-logo {
  height: 60px;
  transition: 0.3s ease;
}

.partner-logo:hover {
  transform: scale(1.05);
}
</style>
