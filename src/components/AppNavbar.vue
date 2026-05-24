<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const router = useRouter()

const navSearch = ref('')
const showSuggestions = ref(false)

const searchData = [
  {
    title: 'Brief History',
    path: '/about?section=history',
    category: 'About Us',
    keywords: 'history library tondo congressional district'
  },

  {
    title: 'VMGO',
    path: '/about?section=vmgo',
    category: 'About Us',
    keywords: 'vision mission goals objectives brief history'
  },

  {
    title: 'Facilities',
    path: '/about?section=facilities',
    category: 'About Us',
    keywords: 'discussion exhibit nook review room reading area facilities study children baggage counter filipiniana krn fiction circulation registration tech4ed compact shelves'
  },

  {
    title: 'Library Services',
    path: '/services',
    category: 'Services',
    keywords: 'book reservation research assistance discussion onluine document delivery E-government services research free tutorial storytelling filmshowing lamination services  '
  },

  {
    title: 'OPAC',
    path: '/resources?section=opac',
    category: 'Resources',
    keywords: 'filipiniana reference circulation fiction books catalog call number'
  },

  {
    title: 'E-Resources',
    path: '/resources?section=eresources',
    category: 'Resources',
    keywords: 'jstor ebsco britannica databases'
  },

  {
    title: 'Library Activities and Programs',
    path: '/events',
    category: 'Events',
    keywords: 'events outreach programs donation drive'
  },

  {
    title: 'Contact Information',
    path: '/contact',
    category: 'Contact',
    keywords: 'email phone address location'
  }
]

const filteredSuggestions = computed(() => {

  const keyword = navSearch.value
    .toLowerCase()
    .trim()

  if (!keyword) return []

  return searchData.filter(item => {

    const searchable = `
      ${item.title}
      ${item.category}
      ${item.keywords}
    `.toLowerCase()

    return searchable.includes(keyword)

  })

})

function handleSearch() {

  if (filteredSuggestions.value.length > 0) {

    router.push(filteredSuggestions.value[0].path)

    navSearch.value = ''
    showSuggestions.value = false
  }
}

function selectSuggestion(path) {

  router.push(path)

  navSearch.value = ''
  showSuggestions.value = false
}
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
              active-class="active">
              Services
            </RouterLink>
          </li>

          <!-- RESOURCES -->
          <li class="nav-item dropdown-hover">

          <RouterLink
            class="nav-link"
            to="/resources"
            active-class="active">
            Resources
          </RouterLink>
          <ul class="hover-menu">
            <li>
              <RouterLink to="/resources?section=opac">
                Online Public Access Catalog
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/resources?section=eresources">
                E-Resources
              </RouterLink>
            </li>
          </ul>
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
        <div class="search-wrapper">
          <form
            class="nav-search-form d-flex"
            role="search"
            @submit.prevent="handleSearch"
          >
            <input
              v-model="navSearch"
              class="form-control nav-search-input"
              type="search"
              placeholder="Search website..."
              aria-label="Search"

              @focus="showSuggestions = true"
              @blur="setTimeout(() => showSuggestions = false, 200)"
            >
            <button
              class="nav-search-btn"
              type="submit"
            >
              <i class="bi bi-search"></i>
            </button>
          </form>

          <!-- LIVE DROPDOWN -->
          <div
            v-if="showSuggestions && filteredSuggestions.length"
            class="search-suggestions"
          >
            <div
              v-for="(item, index) in filteredSuggestions"
              :key="index"
              class="search-suggestion-item"
              @click="selectSuggestion(item.path)"
            >
              <span>{{ item.category }}</span>
              <strong>
                {{ item.title }}
              </strong>
            </div>
          </div>
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

.navbar-nav {
  gap: 14px;
}

.navbar-custom .nav-link {
  font-weight: 700;
  color: #333;
  text-transform: uppercase;
  font-size: 14px;
  padding: 16px 8px;
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

/* SEARCH WRAPPER */
.search-wrapper {
  position: relative;
}

/* LIVE SEARCH DROPDOWN */
.search-suggestions {
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 100%;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0,0,0,0.12);
  z-index: 99999;
  animation: searchDrop 0.2s ease;
}

/* ITEM */
.search-suggestion-item {
  padding: 14px 18px;
  border-bottom: 1px solid #f1f1f1;
  cursor: pointer;
  transition: 0.2s ease;
}

.search-suggestion-item:last-child {
  border-bottom: none;
}

.search-suggestion-item:hover {
  background: #f8f9ff;
}

/* CATEGORY */
.search-suggestion-item span {
  display: block;
  color: var(--secondary);
  font-size: 11px;
  font-weight: 800;
  text-transform: uppercase;
  margin-bottom: 4px;
}

/* TITLE */
.search-suggestion-item strong {
  color: var(--primary);
  font-size: 14px;
}

/* ANIMATION */
@keyframes searchDrop {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
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