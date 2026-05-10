<script setup>
import AppHeader from '../components/AppHeader.vue'
import AppNavbar from '../components/AppNavbar.vue'
import HeroSection from '../components/HeroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import FeaturedSection from '../components/FeaturedSection.vue'
import ResourcesSection from '../components/ResourcesSection.vue'
import ServicesSection from '../components/ServicesSection.vue'
import StatisticSection from '../components/StatisticsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import AppFooter from '../components/AppFooter.vue'
import StripSection from '../components/StripSection.vue'
</script>

<template>
  <AppHeader />
  <AppNavbar />

  <HeroSection />
  <StripSection />
  <AboutSection />
  <FeaturedSection />
  <ResourcesSection />
  <ServicesSection />
  <StatisticSection />
  <ContactSection />

  <AppFooter />
</template>