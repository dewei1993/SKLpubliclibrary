<script setup>
import { RouterLink } from 'vue-router'

import sklLogo from '@/assets/images/SKLlogo.png'
import nlpLogo from '@/assets/images/NLPlogo.png'
import pbLogo from '@/assets/images/PBlogo.png'
</script>

<template>

  <!-- TOPBAR -->
  <div class="topbar">
    <div class="container d-flex justify-content-between align-items-center">

      <div>
        PPLCo: 00001
      </div>

      <!-- SOCIAL LINKS -->
      <div class="social">

        <a href="#">
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
              <img :src="sklLogo" alt="Library Logo" />
            </RouterLink>

          </div>

        </div>

        <!-- TITLE -->
        <div class="col">

          <div class="fw-semibold">
            National Library of the Philippines
          </div>

          <div class="title-main">
            Sentro ng Karunungan Library
          </div>

          <div class="title-small">
            Congressional District Public Library,
            3rd Floor, TMX, Tutuban Center Mall,
            C.M. Recto Ave., Tondo, Manila
          </div>

        </div>

        <!-- PARTNER LOGOS -->
        <div class="col-auto d-none d-md-flex align-items-center gap-3">

          <img
            :src="nlpLogo"
            alt="NLP Logo"
            class="partner-logo"
          />

          <img
            :src="pbLogo"
            alt="PB Logo"
            class="partner-logo"
          />

        </div>

      </div>

    </div>
  </header>

</template>