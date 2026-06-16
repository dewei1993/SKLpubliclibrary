<script setup></script>

<template>
          <!-- LOCATION GUIDE -->
<section class="location-guide-section">
  <div class="container">
    <div class="section-title-top">Location Guide</div>

    <div class="location-guide-grid">
      <div class="location-guide-item">
        <h3>
          Directions to the library <br />
          <span>ENTRANCE 1 - FROM 7:00 AM to 6:00 PM</span>
        </h3>

        <!-- Replace with your interactive HTML iframe or image -->
        <iframe
          src="/location-guide/entrance2.html"
          width="100%"
          height="420"
          style="border: 0"
          loading="lazy"
        ></iframe>
      </div>

      <div class="location-guide-item">
        <h3>
          Directions to the library <br />
          <span>ENTRANCE 2 - FROM 10:00 AM to 6:00 PM</span>
        </h3>

        <!-- Replace with your interactive HTML iframe or image -->
        <iframe
          src="/location-guide/entrance1.html"
          width="100%"
          height="420"
          style="border: 0"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
</section>

  <section class="operation-wrap" id="contact">
    <div class="container">
      <div class="row g-4 align-items-center">
        <!-- MAP -->
        <div class="col-lg-6">
          <div class="feature-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.847018307678!2d120.97066707481842!3d14.607789176901157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cba159d822bf%3A0xb31447f92c2bcdc5!2sSENTRO%20NG%20KARUNUNGAN%20LIBRARY!5e0!3m2!1sfil!2sph!4v1708048659200!5m2!1sfil!2sph"
              width="100%"
              height="450"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <!-- CONTACT DETAILS -->
        <div class="col-lg-6">
          <div class="hours-card">
            <div class="section-title-top">Library Operation</div>
            <h3>Library Hours</h3>
            <p class="mb-1">
              <strong>Monday - Thursday</strong>
              |
              <strong>7:00 am - 6:00 pm</strong>
            </p>
            <p class="small text-muted mb-4">
              NOTE: We are closed on weekends, holidays, and local work suspensions.
            </p>
            <!-- ADDRESS -->
            <div class="mb-3">
              <div class="label">Address</div>
              <div class="fw-semibold">
                3rd Floor, TMX, Prime Block, Tutuban Center Mall, Recto Avenue, Tondo, Manila
              </div>
            </div>
            <!-- CONTACT -->
            <div>
              <div class="label">Contact</div>
              <div class="fw-semibold">sentrongkarununganlibrary2007@gmail.com</div>
              <div class="fw-semibold">+63 966-2640-944</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.operation-wrap {
  background: #fff;
  margin-bottom: 50px;
}

.feature-map {
  height: 300px;
  border: 4px solid var(--primary);
  overflow: hidden;
  background: #ddd;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.hours-card h3 {
  color: var(--primary);
  font-weight: 900;
  margin-bottom: 16px;
}

.hours-card .label {
  color: #6d8aa2;
  font-weight: 700;
}

.location-guide-section {
  background: #f4f6f8;
  padding: 80px 0;
}

.location-guide-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  margin-top: 35px;
}

.location-guide-item {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
}

.location-guide-item h3 {
  text-align: center;
  color: #111;
  font-size: 22px;
  font-weight: 900;
  line-height: 1.4;
  padding: 26px 20px;
  margin: 0;
}

.location-guide-item h3 span {
  font-size: 20px;
  color: var(--primary);
}

.location-guide-item iframe {
  display: block;
  background: #fff;
}

@media (max-width: 991px) {
  .location-guide-grid {
    grid-template-columns: 1fr;
  }

  .location-guide-item iframe {
    height: 360px;
  }
}
</style>
