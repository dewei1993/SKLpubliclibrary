<script setup>
import opacLogo from '@/assets/images/OPAClogo.png'
import charterLogo from '@/assets/images/CHARTERlogo.png'
import eresourcesLogo from '@/assets/images/ERESOURCESlogo.png'
</script>

<template>
  <section class="collection-strip py-5">
    <div class="container">
      <div class="row align-items-center g-4">
        <!-- LEFT CONTENT -->
        <div class="col-lg-7 text-center-mobile">
          <div class="lead-small">
            Collection & Charter
          </div>
          <h2>
            You can now access our library collection
            and Citizen Charter
          </h2>
        </div>
        <!-- RIGHT ICONS -->
        <div class="col-lg-5">
          <div class="icon-badges d-flex justify-content-center gap-4 flex-wrap">
            <!-- OPAC -->
            <a href="#" class="badge-item text-center text-decoration-none">
              <div class="icon-badge">
                <img
                  :src="opacLogo"
                  alt="OPAC Logo"
                  class="badge-logo"
                >
              </div>
              <h6 class="badge-label">
                OPAC
              </h6>
            </a>
            <!-- CHARTER -->
            <a href="#" class="badge-item text-center text-decoration-none">
              <div class="icon-badge">
                <img
                  :src="charterLogo"
                  alt="Citizen Charter Logo"
                  class="badge-logo">
              </div>
              <h6 class="badge-label">
                Citizen Charter
              </h6>
            </a>
            <!-- E-RESOURCES -->
            <a href="#" class="badge-item text-center text-decoration-none">
              <div class="icon-badge">
                <img
                  :src="eresourcesLogo"
                  alt="E-Resources Logo"
                  class="badge-logo"
                >
              </div>
              <h6 class="badge-label">
                E-Resources
              </h6>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>

  .collection-strip {
    background:
      /* YELLOW (TOP CURVE) */
      linear-gradient(
        140deg,
        transparent 55%,
        #F9C300 56%
      ),

      /* RED STRIPE */
      linear-gradient(
        140deg,
        transparent 48%,
        #D12B2E 49%,
        #D12B2E 54%,
        transparent 55%
      ),

      /* PRIMARY BASE */
      linear-gradient(
        140deg,
        #2252e2 0%,
        #2252e2 60%,
        transparent 61%
      ),

      /* BACKGROUND (WHITE/GRAY) */
      #f3f3f3;

    padding: 36px 0;
    color: #fff;
  }

    .collection-strip .lead-small {
      color: var(--tertiary);
      font-weight: 700;
      margin-bottom: 8px;
    }

    .collection-strip h2 {
      font-weight: 900;
      font-size: clamp(28px, 3vw, 42px);
    }

    .icon-badges {
      display: flex;
      gap: 20px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .icon-badge {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      background: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      box-shadow: 0 8px 22px rgba(0,0,0,0.18);
      border: 4px solid #d5e7f6;
      text-align: center;
      transition: 0.3s ease;
    }

    /* Hover effect */
    .icon-badge:hover {
      transform: translateY(-5px);
      border-color: var(--primary);
    }

    .badge-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: 0.3s ease;
    }

    /* LOGO FIT */
    .badge-logo {
      width: 70%;
      height: 70%;
      object-fit: contain;
    }

    /* LABEL */
    .badge-label {
      margin-top: 10px;
      font-size: 14px;
      font-weight: 700;
      color: var(--primary);
    }

    /* HOVER EFFECT */
    .badge-item:hover {
      transform: translateY(-5px);
    }

    .badge-item:hover .badge-label {
      color: var(--tertiary);
    }

    .badge-item:hover .icon-badge {
      border-color: var(--secondary);
    }


</style>