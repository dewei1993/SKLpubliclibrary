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

<style>

.navbar-custom {
   background: linear-gradient(
  135deg,
  rgba(255,255,255,0.96) 0 75%,
  var(--primary-dark) 75% 84%,
  var(--secondary) 84% 92%,
  var(--tertiary) 92% 100%
);
  backdrop-filter: blur(5px);
  box-shadow: 0 2px 10px rgba(0,0,0,0.08);
  z-index: 1000;
  padding: 0;
}

.navbar-custom .nav-link {
  font-weight: 700;
  color: #333;
  text-transform: uppercase;
  font-size: 14px;
  padding: 16px 14px;
}

/* ABOUT DROPDOWN FIX */
.dropdown-hover {
  position: relative;
}

.hover-menu {
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 190px;
  background: #fff;
  padding: 8px 0;
  margin: 0;
  list-style: none;
  border-top: 4px solid var(--secondary);
  box-shadow: 0 10px 25px rgba(0,0,0,0.15);
  opacity: 0;
  visibility: hidden;
  transform: translateY(12px);
  transition: 0.25s ease;
  z-index: 9999;
}

.dropdown-hover:hover .hover-menu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.hover-menu li a {
  display: block;
  padding: 10px 16px;
  color: var(--primary);
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
}

.hover-menu li a:hover {
  background: var(--primary);
  color: #fff;
}

/* SEARCH */
.nav-search-form {
  position: relative;
  z-index: 5;
}

.nav-search-input {
  width: 220px;
  border-radius: 8px;
  padding: 6px 40px 6px 14px;
  border: 2px solid var(--primary);
  font-size: 14px;
}

.nav-search-input:focus {
  box-shadow: none;
  border-color: var(--secondary);
}

.nav-search-btn {
  position: absolute;
  right: 3px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: var(--primary);
  color: #fff;
  border-radius: 0 6px 6px 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar-collapse {
  position: relative;
  z-index: 3;
}

@media (max-width: 991px) {
  .hover-menu {
    position: static;
    opacity: 1;
    visibility: visible;
    transform: none;
    box-shadow: none;
    border-top: none;
    padding-left: 18px;
  }

  .nav-search-form {
    margin: 12px 0;
  }

  .nav-search-input {
    width: 100%;
  }
}
</style>