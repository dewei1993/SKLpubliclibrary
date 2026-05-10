<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-custom sticky-top">
    <div class="container position-relative">

      <!-- MOBILE TOGGLER -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mainNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- NAVIGATION -->
      <div class="collapse navbar-collapse" id="mainNav">

        <!-- LEFT NAV -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">

          <!-- HOME -->
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              to="/"
              exact-active-class="active"
            >
              Home
            </RouterLink>
          </li>

          <!-- ABOUT -->
          <li class="nav-item dropdown-hover">
            <RouterLink
              class="nav-link"
              to="/about"
              active-class="active"
            >
              About Us
            </RouterLink>
            <ul class="hover-menu">
              <li>
              <RouterLink to="/about?section=history">Brief History</RouterLink>
              </li>
              <li>
              <RouterLink to="/about?section=vmgo">VMGO</RouterLink>
              </li>
              <li>
              <RouterLink to="/about?section=facilities">Facilities</RouterLink>
              </li>
            </ul>
          </li>

          <!-- SERVICES -->
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              to="/services"
              active-class="active"
            >
              Services
            </RouterLink>
          </li>

          <!-- RESOURCES -->
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              to="/resources"
              active-class="active"
            >
              Resources
            </RouterLink>
          </li>

          <!-- EVENTS -->
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              to="/events"
              active-class="active"
            >
              Events
            </RouterLink>
          </li>

          <!-- CONTACT -->
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              to="/contact"
              active-class="active"
            >
              Contact
            </RouterLink>
          </li>
        </ul>

        <!-- SEARCH -->
        <div class="d-flex align-items-center ms-auto gap-3">
          <form
            class="nav-search-form d-flex"
            role="search"
          >
            <input
              class="form-control nav-search-input"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            >
            <button
              class="nav-search-btn"
              type="submit"
            >
              <i class="bi bi-search"></i>
            </button>
          </form>
        </div>
      </div>

      <!-- RIGHT ACCENT -->
      <div class="nav-accent d-none d-lg-block">
        <div class="nav-accent-yellow"></div>
      </div>
    </div>
  </nav>
</template>