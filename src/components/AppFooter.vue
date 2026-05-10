<script setup>
import sklLogo from '@/assets/images/SKLlogo.png'

const currentYear = new Date().getFullYear()
</script>


<template>
  <footer>
    <div class="footer-top">
      <div class="container">
        <div class="row g-4">

          <!-- LOGO -->
          <div class="col-lg-3 text-center text-lg-start">
            <div class="footer-logo mx-auto mx-lg-0">
              <RouterLink to="/">
                <img :src="sklLogo" alt="Footer Logo" />
              </RouterLink>
            </div>

            <div class="footer-policy">
              Data Privacy Statement <br />
              Terms of Service
            </div>
          </div>

          <!-- QUICK LINKS -->
          <div class="col-lg-3">
            <div class="footer-title">Quick Links</div>

            <div class="footer-links">
              <RouterLink to="/about">› About Us</RouterLink>
              <a href="#services">› Services</a>
              <a href="#resources">› Resources</a>
              <a href="#facilities">› Facilities</a>
              <a href="#contact">› Contact Us</a>
            </div>
          </div>

          <!-- CONTACT -->
          <div class="col-lg-3">
            <div class="footer-title">Contact Information</div>
            <p class="mb-2">
              3rd Floor, TMX Prime Block <br />
              Tutuban Center Mall <br />
              Recto Avenue, Tondo, Manila
            </p>
            <p class="mb-1">
              +63 966-2640-944
            </p>
            <p class="mb-0">
              sentrongkarununganlibrary2007@gmail.com
            </p>
          </div>
          <!-- VISITORS -->
          <div class="col-lg-3">
            <div class="footer-title">
              Offsite Visitors Count
            </div>
            <ul class="visitors p-0 m-0">
              <li>📘 Users Today: <strong>14</strong></li>
              <li>📘 Users Yesterday: <strong>21</strong></li>
              <li>📘 Users Last 7 Days: <strong>104</strong></li>
              <li>📘 Users Last 30 Days: <strong>386</strong></li>
              <li>📘 Users This Month: <strong>752</strong></li>
              <li>📘 Users This Year: <strong>5,912</strong></li>
              <li>📘 Total Users: <strong>28,502</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER BOTTOM -->
    <div class="footer-bottom">
      Copyright © {{ currentYear }}
      SENTRO NG KARUNUNGAN LIBRARY.
      All Rights Reserved.
    </div>
  </footer>
</template>


<style>

    .footer-top {
      background: #a3b7c4;
      padding: 46px 0;
      color: #12324d;
    }

    .footer-logo {
      width: 130px;
      height: 130px;
      border-radius: 50%;
      background: rgba(255,255,255,0.4);
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    /* FIX LOGO */
    .footer-logo img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }

    .footer-title {
      font-weight: 900;
      text-transform: uppercase;
      color: var(--primary-dark);
      margin-bottom: 16px;
    }

    .footer-links a {
      display: block;
      color: #12324d;
      text-decoration: none;
      margin-bottom: 10px;
    }

    .footer-links a:hover {
      color: var(--primary);
    }

    .visitors li {
      list-style: none;
      margin-bottom: 8px;
    }

    .footer-bottom {
      background: #f3f3f3;
      text-align: center;
      padding: 20px 10px;
      font-size: 15px;
    }

    .floating-btn {
      position: fixed;
      right: 18px;
      bottom: 18px;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: var(--primary);
      color: #fff;
      border: none;
      box-shadow: var(--shadow);
      z-index: 999;
      display: none;
    }

    .floating-btn.show {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }


</style>