<template>
  <section class="contact-page">
    <!-- HERO -->
    <div class="contact-hero">
      <div class="container">
        <h1>Contact</h1>
        <p>
          Connect with us for more information about our library services, programs, and community
          resources.
        </p>
      </div>
    </div>

    <!-- CONTACT INFO CARDS -->
    <div class="container">
      <div class="contact-info-card">
        <div class="contact-info-item">
          <span>Phone</span>
          <strong>Tel: +63 966-2640-944</strong>
          <strong>Fax: N/A</strong>
        </div>

        <div class="contact-info-item">
          <span>Location</span>
          <strong>3rd Floor, TMX Prime Block</strong>
          <strong>Tutuban Center Mall, Manila</strong>
        </div>

        <div class="contact-info-item">
          <span>Need Assistance?</span>
          <strong>Check out our Help Center.</strong>
        </div>
      </div>
    </div>

    <!-- GET IN TOUCH -->
    <section class="contact-details-section">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-5">
            <div class="contact-kicker">Get in Touch</div>

            <h2>How can we help you?</h2>

            <p class="contact-desc">
              Our library is dedicated to helping users access reliable information, learning
              spaces, and community programs.
            </p>

            <div class="contact-location">
              <h5>Library Address</h5>
              <p>
                3rd Floor, TMX Prime Block, Tutuban Center Mall,<br />
                Recto Avenue, Tondo, Manila
              </p>
              <span>+63 966-2640-944</span>
            </div>

            <div class="contact-location">
              <h5>Email Address</h5>
              <p>sentrongkarununganlibrary2007@gmail.com</p>
            </div>

            <div class="contact-social">
              <h5>Follow us on</h5>
              <div>
                <a href="#"><i class="bi bi-facebook"></i></a>
                <a href="#"><i class="bi bi-tiktok"></i></a>
                <a href="#"><i class="bi bi-instagram"></i></a>
                <a href="#"><i class="bi bi-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MAP -->
    <section class="contact-map-section">
      <div class="container">
        <div class="contact-kicker">Where We Work</div>

        <h2>Visit Sentro ng Karunungan Library at Tutuban Center Mall, Tondo, Manila.</h2>

        <div class="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3860.847018307678!2d120.97066707481842!3d14.607789176901157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cba159d822bf%3A0xb31447f92c2bcdc5!2sSENTRO%20NG%20KARUNUNGAN%20LIBRARY!5e0!3m2!1sfil!2sph!4v1708048659200!5m2!1sfil!2sph"
            width="100%"
            height="420"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  </section>
</template>

<style scoped>
/* REMOVE TOP SPACE */
.contact-page {
  background: #c9cfd1;
  padding-top: 0;
  padding-bottom: 0;
}

.contact-hero {
  min-height: 260px;
  background:
    linear-gradient(rgba(20, 10, 5, 0.65), rgba(20, 10, 5, 0.65)),
    url('@/assets/images/event13.png') center/cover no-repeat;
  display: flex;
  align-items: center;
  color: #fff;
  position: relative;
  overflow: hidden;
}

.contact-hero h1 {
  font-size: clamp(46px, 7vw, 76px);
  font-weight: 900;
  margin-bottom: 10px;
}

.contact-hero p {
  max-width: 520px;
  font-size: 14px;
  line-height: 1.7;
}

.contact-info-card {
  background: #fff;
  border: 1px solid #cad4b8;
  border-radius: 8px;
  margin-top: -38px;
  position: relative;
  z-index: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  overflow: hidden;
}

.contact-info-item {
  padding: 30px 36px;
  border-right: 1px solid #cad4b8;
}

.contact-info-item:last-child {
  border-right: none;
}

.contact-info-item span {
  display: block;
  text-transform: uppercase;
  font-size: 11px;
  color: #7c806f;
  letter-spacing: 1.4px;
  margin-bottom: 12px;
}

.contact-info-item strong {
  display: block;
  color: #1b280f;
  font-size: 14px;
  margin-bottom: 5px;
}

.contact-details-section {
  padding: 90px 0;
}

.contact-kicker {
  text-transform: uppercase;
  letter-spacing: 1.6px;
  font-size: 11px;
  font-weight: 900;
  color: var(--primary);
  margin-bottom: 14px;
}

.contact-details-section h2,
.contact-map-section h2 {
  color: var(--primary);
  font-size: clamp(34px, 4vw, 54px);
  font-weight: 900;
  line-height: 1.2;
  margin-bottom: 18px;
}

.contact-desc {
  color: #4f5a44;
  line-height: 1.8;
  margin-bottom: 34px;
}

.contact-location {
  border-bottom: 1px solid #c9d4b8;
  padding-bottom: 22px;
  margin-bottom: 22px;
}

.contact-location h5,
.contact-social h5 {
  color: #253910;
  font-size: 15px;
  font-weight: 900;
}

.contact-location p,
.contact-location span {
  color: #4f5a44;
  font-size: 14px;
}

.contact-social a {
  color: #111;
  margin-right: 14px;
  font-size: 16px;
}

.contact-social a:hover {
  color: var(--secondary);
}

.contact-map-section {
  background: #fff;
  padding: 90px 0;
}

.contact-map-section h2 {
  max-width: 850px;
}

.contact-map {
  margin-top: 40px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
}

@media (max-width: 991px) {
  .contact-info-card {
    grid-template-columns: 1fr;
  }

  .contact-info-item {
    border-right: none;
    border-bottom: 1px solid #cad4b8;
  }

  .contact-info-item:last-child {
    border-bottom: none;
  }
}
</style>
