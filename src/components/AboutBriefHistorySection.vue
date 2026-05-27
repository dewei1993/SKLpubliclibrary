<script setup>
import building1Img from '@/assets/images/building1.webp'
import building2Img from '@/assets/images/building2.webp'
</script>

<template>
  <div class="facilities-header text-center">
    <h2>Brief History</h2>
    <div class="facilities-line"></div>
    <p class="brief-description">
      Discover the rich history and development of Sentro ng Karunungan Library as it continues to
      promote literacy, knowledge, lifelong learning, and meaningful public service within the
      community.
    </p>
  </div>
  <!-- BRIEF HISTORY -->
  <section class="brief-history-section">
    <div class="container">
      <!-- FIRST ROW -->
      <div class="row g-5 align-items-start">
        <div class="col-lg-7">
          <p>
            “Sentro ng Karunungan Library (SKL), formerly the “Tondo Congressional District Library”
            is one of the congressional libraries affiliated with the National Library of the
            Philippines.” SKL was built under the initiative and leadership of Rep. JAIME C. LOPEZ
            who has been serving as Congressman of the 2nd District of Manila since 1987.
          </p>
          <p>
            Rep. Lopez believes that “All people of Tondo in the Second District of Manila needed
            the government’s compassion and selfless dedication.”
          </p>
          <p>
            It was inaugurated by President GLORIA MACAPAGAL ARROYO and assisted by Speaker JOSE C.
            DE VENECIA, JR., and Mayor ALFREDO S. LIM on JULY 07, 2007.
          </p>
          <p>
            The Library implementing the Rules and Regulation of Republic Act No. 10124, otherwise
            known as “An Act Changing the nomenclature of the Tondo Congressional District Library
            in TAYUMAN, Tondo, Manila, into Sentro ng Karunungan Library, appropriating funds
            therefor and for other purposes”.
          </p>
        </div>

        <div class="col-lg-5">
          <img :src="building1Img" alt="Library Shelves" class="history-img" loading="lazy" />
        </div>
      </div>

      <!-- SECOND ROW -->
      <div class="row g-5 align-items-start mt-4">
        <div class="col-lg-5">
          <img :src="building2Img" alt="Library Interior" class="history-img" loading="lazy" />
        </div>
        <div class="col-lg-7">
          <p>
            SKL has been part of different organizations and other institutions in providing library
            resources and services in the community. One of them is the “TECH4ED” which is a project
            of the Department of Information and Communication Technology that provides online
            services and resources through the Tech4Ed platform.
          </p>
          <p>
            SKL also is one of the partners of Bangko Sentral ng Pilipinas (BSP) in providing
            resources on financial literacy, statistical data, currency, and updates of economic
            status in the Philippines through their project called “Knowledge Resources Network
            (KRN).”
          </p>
          <p>
            The library building is provided by the Honorio Lopez Technical Institute, Inc. and it
            is now located at the 3rd Floor, Prime Block, Tutuban Center Mall which is part of
            Barangay 247 District 1, Recto Avenue, Tondo Manila.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.brief-history-section {
  padding: 90px 0;
  background: linear-gradient(180deg, #f7f9fc 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

/* HEADER */
.facilities-header {
  margin-top: 50px;
  margin-bottom: 50px;
}

.facilities-header h2 {
  color: var(--primary);
  font-size: clamp(34px, 4vw, 52px);
  font-weight: 900;
  margin-bottom: 10px;
}

.facilities-line {
  width: 70px;
  height: 4px;
  background: var(--secondary);
  border-radius: 50px;
  margin: 0 auto 22px;
}

.brief-description {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  color: #5e6470;
  font-size: 16px;
  line-height: 1.9;
}

/* HISTORY CONTENT */
.brief-history-section .row {
  margin-bottom: 40px;
}

/* TEXT SIDE */
.brief-history-section p {
  font-size: 15px;
  line-height: 1.95;
  color: #4e5661;
  margin-bottom: 22px;
  text-align: justify;
}

/* IMAGE STYLE */
.history-img {
  width: 100%;
  height: 100%;
  min-height: 420px;
  object-fit: cover;

  border-radius: 24px;

  box-shadow:
    0 10px 30px rgba(0, 0, 0, 0.1),
    0 3px 10px rgba(0, 0, 0, 0.05);

  transition: 0.45s ease;
  border: 6px solid #fff;
}

.history-img:hover {
  transform: scale(1.03);
}

/* CARD EFFECT */
.brief-history-section .col-lg-7,
.brief-history-section .col-lg-5 {
  position: relative;
}

.brief-history-section .col-lg-7 {
  background: #fff;
  padding: 34px;
  border-radius: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  border-top: 6px solid var(--tertiary);
}

/* SECOND CONTENT STYLE */
.brief-history-section .row:nth-child(3) .col-lg-7 {
  border-top: 6px solid var(--secondary);
}

/* SUBTLE DECORATION */
.brief-history-section::before {
  content: '';
  position: absolute;
  top: -120px;
  right: -120px;
  width: 320px;
  height: 320px;
  background: rgba(249, 195, 0, 0.08);
  border-radius: 50%;
}

.brief-history-section::after {
  content: '';
  position: absolute;
  bottom: -120px;
  left: -120px;
  width: 320px;
  height: 320px;
  background: rgba(26, 75, 109, 0.06);
  border-radius: 50%;
}

/* MOBILE */
@media (max-width: 991px) {
  .brief-history-section {
    padding: 70px 0;
  }

  .facilities-header {
    margin-bottom: 40px;
  }

  .history-img {
    min-height: 280px;
  }

  .brief-history-section .col-lg-7 {
    padding: 24px;
  }

  .brief-history-section p {
    font-size: 14px;
    line-height: 1.8;
  }
}

@media (max-width: 576px) {
  .facilities-header h2 {
    font-size: 34px;
  }

  .history-img {
    border-radius: 18px;
  }

  .brief-history-section .col-lg-7 {
    border-radius: 18px;
  }
}
</style>
