<script setup>
import col1 from '@/assets/images/col1.png'
import col2 from '@/assets/images/col2.png'
import col3 from '@/assets/images/col3.png'
import col4 from '@/assets/images/col4.png'
</script>

<template>
  <section id="featured-collections" class="featured-collections-section">
    <div class="container">
      <!-- HEADER -->
      <div
        class="collections-header d-flex justify-content-between align-items-start flex-wrap gap-3">
        <div>
          <div class="section-title-top">Collections</div>
          <h2 class="section-title text-uppercase">Featured Collections</h2>
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
          <img :src="col1" alt="New Additional Collections" />
          <div class="collection-overlay">
            <h3>New Additional Collections</h3>
            <p>Law, Engineering, and Management Books</p>
          </div>
        </div>
        <!-- TOP RIGHT -->
        <div class="collection-card collection-card-wide">
          <img :src="col2" alt="Anina ng mga Alon" />
          <div class="collection-overlay">
            <h3>Anina ng mga Alon</h3>
            <p>Literatures and other General Collections.</p>
          </div>
        </div>
        <!-- SMALL -->
        <div class="collection-card">
          <img :src="col3" alt="KRN Collections" />
          <div class="collection-overlay">
            <h3>KRN Collections</h3>
          </div>
        </div>
        <!-- SMALL -->
        <div class="collection-card">
          <img :src="col4" alt="Law and Careers" />
          <div class="collection-overlay">
            <h3>Review Books</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.featured-collections-section {
  background: #fff;
  padding: 80px 0;
}

.collections-header {
  margin-bottom: 34px;
}

.collections-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 800;
  margin-top: 10px;
  white-space: nowrap;
  transition: 0.3s ease;
}

.collections-link:hover {
  color: var(--secondary);
}

/* FIXED GRID */
.collections-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr 0.85fr;
  grid-template-rows: 190px 190px;
  gap: 16px;
  align-items: stretch;
}

/* CARD */
.collection-card {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  background: #d9d9d9;
  min-height: 0;
  height: 100%;
}

/* LARGE LEFT CARD */
.collection-card-lg {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
}

/* TOP RIGHT WIDE CARD */
.collection-card-wide {
  grid-column: 2 / 4;
  grid-row: 1 / 2;
}

/* IMAGE FIX */
.collection-card img {
  width: 100%;
  height: 100%;
  min-height: 0;
  object-fit: cover;
  display: block;
  transition: 0.45s ease;
}

.collection-card:hover img {
  transform: scale(1.06);
}

/* OVERLAY */
.collection-card::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(26, 75, 109, 0.9) 0%,
    rgba(26, 75, 109, 0.55) 45%,
    rgba(0, 0, 0, 0.05) 100%
  );
  z-index: 1;
}

/* TEXT */
.collection-overlay {
  position: absolute;
  left: 22px;
  right: 22px;
  bottom: 22px;
  z-index: 2;
  color: #fff;
}

.collection-overlay h3 {
  font-size: clamp(20px, 2vw, 32px);
  font-weight: 900;
  line-height: 1.1;
  margin-bottom: 8px;
}

.collection-overlay p {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
  max-width: 90%;
}

/* TABLET */
@media (max-width: 991px) {
  .collections-grid {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }

  .collection-card-lg,
  .collection-card-wide,
  .collection-card {
    grid-column: auto;
    grid-row: auto;
    height: 260px;
  }
}

/* MOBILE */
@media (max-width: 767px) {
  .collections-header {
    flex-direction: column;
  }

  .collections-grid {
    grid-template-columns: 1fr;
  }

  .collection-card-lg,
  .collection-card-wide,
  .collection-card {
    height: 260px;
  }
}
</style>
