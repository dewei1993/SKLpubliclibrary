<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import AppHeader from '../components/AppHeader.vue'
import AppNavbar from '../components/AppNavbar.vue'
import AppFooter from '../components/AppFooter.vue'

import OPACComponent from '../components/OPACResourcesComponents.vue'
import EResourcesComponents from '../components/EResourcesComponents.vue'

const route = useRoute()

const activeSection = computed(() => {
  return route.query.section || 'opac'
})
</script>

<template>

  <AppHeader />
  <AppNavbar />

  <!-- OPAC -->
  <OPACComponent
    v-if="activeSection === 'opac'"
  />

  <!-- E-RESOURCES -->
  <EResourcesComponents
    v-if="activeSection === 'eresources'"
  />

  <AppFooter />

</template>