<script setup>
import { ref } from 'vue'
import AppHeader from '../components/AppHeader.vue'
import AppNavbar from '../components/AppNavbar.vue'
import AppFooter from '../components/AppFooter.vue'
import ContactUsComponents from '../components/ContactUsComponents.vue'
</script>

<template>
  <AppHeader />
  <AppNavbar />

  <ContactUsComponents />

  <AppFooter />
</template>
