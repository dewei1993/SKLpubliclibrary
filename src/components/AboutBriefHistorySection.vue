<script setup>

import building1Img from '@/assets/images/building1.jpeg'
import building2Img from '@/assets/images/building2.jpg'


</script>

<template>
<!-- ABOUT PAGE CONTENT HERE -->
  <!-- HERO -->
  <section class="about-history-hero">
    <div class="hero-blur-overlay"></div>
    <div class="container position-relative">
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
        <h1>
          Brief History
        </h1>
        <div class="breadcrumb-text">
          <RouterLink to="/">
            Home
          </RouterLink>
          /
          <span>About Us</span>
        </div>
      </div>
    </div>
  </section>

  <!-- BRIEF HISTORY -->
  <section class="brief-history-section">
    <div class="container">
      <!-- FIRST ROW -->
      <div class="row g-5 align-items-start">
        <div class="col-lg-7">
          <p>
            “Sentro ng Karunungan Library (SKL), formerly the “Tondo Congressional District Library” 
            is one of the congressional libraries affiliated with the National Library of the Philippines.” 
            SKL was built under the initiative and leadership of Rep. JAIME C. LOPEZ who has been serving as 
            Congressman of the 2nd District of Manila since 1987.
          </p>
          <p>
            Rep. Lopez believes that “All people of Tondo in the Second District of Manila needed the 
            government’s compassion and selfless dedication.”
          </p>
          <p>
            It was inaugurated by President GLORIA MACAPAGAL ARROYO and assisted by Speaker JOSE C. 
            DE VENECIA, JR., and Mayor ALFREDO S. LIM on JULY 07, 2007.
          </p>
          <p>
            The Library implementing the Rules and Regulation of Republic Act No. 10124, otherwise 
            known as “An Act Changing the nomenclature of the Tondo Congressional District Library in 
            TAYUMAN, Tondo, Manila, into Sentro ng Karunungan Library, appropriating funds therefor 
            and for other purposes”.
          </p>
        </div>

        <div class="col-lg-5">
          <img
            :src="building1Img"
            alt="Library Shelves"
            class="history-img"
          />
        </div>
      </div>

      <!-- SECOND ROW -->
      <div class="row g-5 align-items-start mt-4">
        <div class="col-lg-5">
          <img
            :src="building2Img"
            alt="Library Interior"
            class="history-img"
          />
        </div>
        <div class="col-lg-7">
          <p>
            SKL has been part of different organizations and other institutions in providing library 
            resources and services in the community. One of them is the “TECH4ED” which is a project of the 
            Department of Information and Communication Technology that provides online services and resources 
            through the Tech4Ed platform.
          </p>
          <p>
            SKL also is one of the partners of Bangko Sentral ng Pilipinas (BSP) in providing resources on 
            financial literacy, statistical data, currency, and updates of economic status in the Philippines 
            through their project called “Knowledge Resources Network (KRN).”
          </p>
          <p>
            The library building is provided by the Honorio Lopez Technical Institute, Inc. and it is now located at the 
            3rd Floor, Prime Block, Tutuban Center Mall which is part of Barangay 247 District 1, Recto Avenue, Tondo Manila.
          </p>
        </div>
      </div>
    </div>
  </section>

</template>