<script setup>
import col1 from '@/assets/images/col1.png'
import col2 from '@/assets/images/col2.png'
import col3 from '@/assets/images/col3.png'
import col4 from '@/assets/images/col4.png'
</script>

<template>
  <section
    id="featured-collections"
    class="featured-collections-section"
  >
    <div class="container">
      <!-- HEADER -->
      <div
        class="collections-header d-flex justify-content-between align-items-start flex-wrap gap-3"
      >
        <div>
          <div class="section-title-top">
            Collections
          </div>

          <h2 class="collections-title">
            Featured Collections
          </h2>
        </div>
        <a href="#" class="collections-link">
          View all collections
          <i class="bi bi-arrow-right"></i>
        </a>
      </div>
      <!-- GRID -->
      <div class="collections-grid">
        <!-- LARGE CARD -->
        <div class="collection-card collection-card-lg">
          <img
            :src="col1"
            alt="New Additional Collections"
          />
          <div class="collection-overlay">
            <h3>
              New Additional Collections
            </h3>
            <p>
              Law, Engineering, and Management Books
            </p>
            <a href="#" class="collection-btn">
              Check Out
            </a>
          </div>
        </div>
        <!-- TOP RIGHT -->
        <div class="collection-card collection-card-wide">
          <img
            :src="col2"
            alt="Anina ng mga Alon"
          />
          <div class="collection-overlay">
            <h3>
              Anina ng mga Alon
            </h3>
            <p>
              Literatures and other General Collections.
            </p>
          </div>
        </div>
        <!-- SMALL -->
        <div class="collection-card">
          <img
            :src="col3"
            alt="KRN Collections"
          />
          <div class="collection-overlay">
            <h3>
              KRN Collections
            </h3>
          </div>
        </div>
        <!-- SMALL -->
        <div class="collection-card">
          <img
            :src="col4"
            alt="Law and Careers"
          />
          <div class="collection-overlay">
            <h3>
              Law & Careers
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
