<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import AppHeader from '../components/AppHeader.vue'
import AppNavbar from '../components/AppNavbar.vue'
import AppFooter from '../components/AppFooter.vue'
import AboutBriefHistory from '../components/AboutBriefHistorySection.vue'
import AboutVMGO from '../components/AboutVMGOSection.vue'
import AboutFacilities from '../components/AboutFacilitiesSection.vue'

const route = useRoute()

const activeSection = computed(() => route.query.section || 'history')
</script>

<template>
  <AppHeader />
  <AppNavbar />

  <AboutBriefHistory v-if="activeSection === 'history'" />
  <AboutVMGO v-if="activeSection === 'vmgo'" />
  <AboutFacilities v-if="activeSection === 'facilities'" />

  <AppFooter />
</template>