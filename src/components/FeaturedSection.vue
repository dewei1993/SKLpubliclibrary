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

<style>

    .featured-collections-section {
      background: #fff;
      padding: 80px 0;
    }

    .collections-kicker {
      color: var(--secondary);
      text-transform: uppercase;
      letter-spacing: 1.8px;
      font-size: 12px;
      font-weight: 800;
      margin-bottom: 10px;
    }

    .collections-title {
      color: var(--primary);
      font-size: clamp(32px, 4vw, 52px);
      font-weight: 800;
      margin: 0;
    }

    .collections-link {
      color: var(--primary);
      text-decoration: none;
      font-weight: 700;
      margin-top: 10px;
      white-space: nowrap;
    }

    .collections-link:hover {
      color: var(--secondary);
    }

    .collections-grid {
      margin-top: 34px;
      display: grid;
      grid-template-columns: 1.15fr 0.85fr 0.85fr;
      grid-template-rows: 160px 190px;
      gap: 16px;
    }

    .collection-card {
      position: relative;
      overflow: hidden;
      border-radius: 6px;
      min-height: 190px;
      background: #d9d9d9;
    }

    .collection-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      transition: transform 0.4s ease;
    }

    .collection-card::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba(0, 43, 73, 0.88) 0%,
        rgba(0, 43, 73, 0.45) 35%,
        rgba(0, 43, 73, 0.08) 100%
      );
    }

    .collection-card:hover img {
      transform: scale(1.05);
    }

    .collection-card-lg {
      grid-row: 1 / span 2;
      grid-column: 1 / 2;
      min-height: 366px;
    }

    .collection-card-wide {
      grid-column: 2 / span 2;
      min-height: 160px;
    }

    .collection-overlay {
      position: absolute;
      left: 18px;
      right: 18px;
      bottom: 18px;
      z-index: 2;
      color: #fff;
    }

    .collection-overlay h3 {
      font-size: clamp(20px, 2vw, 30px);
      font-weight: 800;
      margin-bottom: 8px;
    }

    .collection-overlay p {
      font-size: 14px;
      line-height: 1.5;
      color: rgba(255,255,255,0.85);
      margin: 0;
      max-width: 90%;
    }

    .collection-btn {
      display: inline-block;
      margin-top: 14px;
      padding: 10px 16px;
      background: rgba(255,255,255,0.14);
      color: #fff;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 700;
      font-size: 14px;
      backdrop-filter: blur(4px);
      transition: 0.3s ease;
    }

    .collection-btn:hover {
      background: var(--primary);
      color: #fff;
    }

    @media (max-width: 991.98px) {
      .collections-grid {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
      }

      .collection-card-lg,
      .collection-card-wide,
      .collection-card {
        grid-column: auto;
        grid-row: auto;
        min-height: 240px;
      }
    }

    @media (max-width: 767.98px) {
      .collections-grid {
        grid-template-columns: 1fr;
      }

      .collection-card-lg,
      .collection-card-wide,
      .collection-card {
        min-height: 240px;
      }

      .collections-header {
        align-items: flex-start !important;
      }
    }



</style>
