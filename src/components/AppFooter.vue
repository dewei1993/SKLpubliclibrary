<script setup>
import { ref, onMounted } from 'vue'
import sklLogo from '@/assets/images/SKLlogo.webp'
import rplogo from '@/assets/images/rp-logo.webp'

const currentYear = new Date().getFullYear()

const visitors = ref({
  today: 0,
  yesterday: 0,
  last7Days: 0,
  last30Days: 0,
  thisMonth: 0,
  thisYear: 0,
  total: 0,
})

function getDateKey(date = new Date()) {
  return date.toISOString().split('T')[0]
}

function updateVisitorDisplay(stats) {
  const dates = stats.dates
  const today = getDateKey()

  visitors.value.today = dates[today] || 0

  const yesterdayDate = new Date()
  yesterdayDate.setDate(yesterdayDate.getDate() - 1)
  const yesterday = getDateKey(yesterdayDate)

  visitors.value.yesterday = dates[yesterday] || 0

  let last7 = 0
  let last30 = 0
  let monthTotal = 0
  let yearTotal = 0

  const now = new Date()

  Object.entries(dates).forEach(([date, count]) => {
    const d = new Date(date)
    const diff = (now - d) / (1000 * 60 * 60 * 24)

    if (diff <= 7) last7 += count
    if (diff <= 30) last30 += count

    if (
      d.getMonth() === now.getMonth() &&
      d.getFullYear() === now.getFullYear()
    ) {
      monthTotal += count
    }

    if (d.getFullYear() === now.getFullYear()) {
      yearTotal += count
    }
  })

  visitors.value.last7Days = last7
  visitors.value.last30Days = last30
  visitors.value.thisMonth = monthTotal
  visitors.value.thisYear = yearTotal
  visitors.value.total = stats.total
}

onMounted(() => {
  const today = getDateKey()

  let stats = JSON.parse(localStorage.getItem('visitorStats'))

  if (!stats) {
    stats = {
      dates: {},
      total: 0,
    }
  }

  const sessionKey = `visited-${today}`

  // Count only once per browser session per day
  if (!sessionStorage.getItem(sessionKey)) {
    stats.dates[today] = (stats.dates[today] || 0) + 1
    stats.total += 1

    localStorage.setItem('visitorStats', JSON.stringify(stats))
    sessionStorage.setItem(sessionKey, 'true')
  }

  updateVisitorDisplay(stats)
})
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
                <img :src="sklLogo" alt="Footer Logo" loading="lazy" />
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
              <RouterLink to="resources?section=opac">> OPAC</RouterLink>
              <RouterLink to="/about?section=history">> About Us</RouterLink>
              <RouterLink to="/services">> Services</RouterLink>
              <RouterLink to="/resources?section=eresources">> Resources</RouterLink>
              <RouterLink to="/about?section=facilities">> Facilities</RouterLink>
              <RouterLink to="/events">> Events</RouterLink>
              <RouterLink to="/contact">> Contact Us</RouterLink>
            </div>
          </div>

          <!-- CONTACT -->
          <div class="col-lg-3">
            <div class="footer-title">Contact Information</div>
            <p class="mb-2 sub-title">
              3rd Floor, TMX Prime Block <br />
              Tutuban Center Mall <br />
              Recto Avenue, Tondo, Manila
            </p>
            <p class="mb-1 sub-title">+63 966-2640-944</p>
            <p class="mb-0 sub-title">sentrongkarununganlibrary2007@gmail.com</p>
          </div>
          <!-- VISITORS -->
          <div class="col-lg-3">
            <div class="footer-title">Offsite Visitors Count</div>
            <ul class="visitors p-0 m-0 sub-title">
              <li>
                📘 Users Today: <strong>{{ visitors.today }}</strong>
              </li>
              <li>
                📘 Users Yesterday: <strong>{{ visitors.yesterday }}</strong>
              </li>
              <li>
                📘 Users Last 7 Days: <strong>{{ visitors.last7Days }}</strong>
              </li>
              <li>
                📘 Users Last 30 Days: <strong>{{ visitors.last30Days }}</strong>
              </li>
              <li>
                📘 Users This Month: <strong>{{ visitors.thisMonth }}</strong>
              </li>
              <li>
                📘 Users This Year: <strong>{{ visitors.thisYear }}</strong>
              </li>
              <li>
                📘 Total Users: <strong>{{ visitors.total }}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

<!-- GOVPH SECTION -->
<div class="govph-section">
  <div class="container">
    <div class="row g-5 align-items-start">

      <!-- REPUBLIC -->
      <div class="col-lg-3 text-center text-lg-start">
        <div class="govph-seal">
          <img
            :src=rplogo
            alt="Republic of the Philippines"
            loading="lazy"
          />
        </div>
      </div>

      <!-- REPUBLIC -->
      <div class="col-lg-3">
        <h5>REPUBLIC OF THE PHILIPPINES</h5>

        <p>
          All content is in the public domain unless otherwise stated.
        </p>
      </div>

      <!-- ABOUT GOVPH -->
      <div class="col-lg-3">
        <h5>ABOUT GOVPH</h5>

        <p>
          Learn more about the Philippine government, its structure,
          how government works and the people behind it.
        </p>

        <ul class="govph-links">
          <li>
            <a
              href="https://data.gov.ph"
              target="_blank"
            >
              Open Data Portal
            </a>
          </li>

          <li>
            <a
              href="https://www.officialgazette.gov.ph/"
              target="_blank"
            >
              Official Gazette
            </a>
          </li>
        </ul>
      </div>

      <!-- GOVERNMENT LINKS -->
      <div class="col-lg-3">
        <h5>GOVERNMENT LINKS</h5>

        <ul class="govph-links">
          <li>
            <a href="https://op-proper.gov.ph" target="_blank">
              Office of the President
            </a>
          </li>

          <li>
            <a href="https://ovp.gov.ph" target="_blank">
              Office of the Vice President
            </a>
          </li>

          <li>
            <a href="https://senate.gov.ph" target="_blank">
              Senate of the Philippines
            </a>
          </li>

          <li>
            <a href="https://www.congress.gov.ph" target="_blank">
              House of Representatives
            </a>
          </li>

          <li>
            <a href="https://sc.judiciary.gov.ph" target="_blank">
              Supreme Court
            </a>
          </li>

          <li>
            <a href="https://ca.judiciary.gov.ph" target="_blank">
              Court of Appeals
            </a>
          </li>

          <li>
            <a href="https://sb.judiciary.gov.ph" target="_blank">
              Sandiganbayan
            </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</div>

    <!-- FOOTER BOTTOM -->
    <div class="footer-bottom">
      Copyright © {{ currentYear }}
      SENTRO NG KARUNUNGAN LIBRARY. All Rights Reserved.
    </div>
  </footer>
</template>

<style scoped>
.footer-top {
  background: #a3b7c4;
  padding: 46px 0;
  color: var(--primary);
}

.footer-logo {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.4);
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
  color: var(--primary);
  margin-bottom: 16px;
}

.sub-title {
  color: #111;
}

.footer-links a {
  display: block;
  color: #111;
  text-decoration: none;
  margin-bottom: 10px;
}

.footer-links a:hover {
  color: #111;
}

.visitors li {
  list-style: none;
  margin-bottom: 8px;
}

.footer-bottom { 
  background: #a3b7c4;
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

/* ======================================
   GOVPH SECTION
====================================== */

.govph-section {
  background: #f4f6f9;
  padding: 50px 0;
  color: #111;
}

.govph-section h5 {
  color: var(--primary);
  font-weight: 900;
  margin-bottom: 25px;
  font-size: 1rem;
}

.govph-section p {
  line-height: 1.8;
  font-size: 15px;
  margin-bottom: 20px;
}

.govph-seal {
  display: flex;
  justify-content: center;
}

.govph-seal img {
  width: 180px;
  max-width: 100%;
}

.govph-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.govph-links li {
  margin-bottom: 14px;
}

.govph-links a {
  color: #111;
  text-decoration: none;
  transition: 0.3s ease;
}

.govph-links a:hover {
  color: var(--primary);
  padding-left: 6px;
}

/* RESPONSIVE */
@media (max-width: 991px) {

  .govph-section {
    text-align: center;
  }

  .govph-seal {
    margin-bottom: 30px;
  }
}
</style>
