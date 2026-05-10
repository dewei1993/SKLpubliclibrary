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
            <a
              href="#"
              class="badge-item text-center text-decoration-none"
            >
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
            <a
              href="#"
              class="badge-item text-center text-decoration-none"
            >
              <div class="icon-badge">

                <img
                  :src="charterLogo"
                  alt="Citizen Charter Logo"
                  class="badge-logo"
                >

              </div>

              <h6 class="badge-label">
                Citizen Charter
              </h6>
            </a>

            <!-- E-RESOURCES -->
            <a
              href="#"
              class="badge-item text-center text-decoration-none"
            >
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