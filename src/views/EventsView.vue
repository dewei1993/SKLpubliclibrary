<script setup>
import { ref } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppNavbar from '../components/AppNavbar.vue'
import AppFooter from '../components/AppFooter.vue'
import EventsComponents from '@/components/EventsComponents.vue'
</script>

<template>
  <AppHeader />
  <AppNavbar />

  <EventsComponents />

  <AppFooter />
</template>
