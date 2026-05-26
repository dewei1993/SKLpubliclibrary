<script setup>
import { ref, onMounted } from 'vue'
import sklLogo from '@/assets/images/SKLlogo.png'


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

onMounted(() => {

  const today = new Date().toISOString().split('T')[0]

  let stats = JSON.parse(localStorage.getItem('visitorStats'))

  if (!stats) {
    stats = {
      dates: {},
      total: 0,
    }
  }

  // ADD TODAY VISIT
  stats.dates[today] = (stats.dates[today] || 0) + 1
  stats.total += 1

  localStorage.setItem(
    'visitorStats',
    JSON.stringify(stats)
  )

  const dates = stats.dates

  // TODAY
  visitors.value.today = dates[today] || 0

  // YESTERDAY
  const yesterdayDate = new Date()
  yesterdayDate.setDate(yesterdayDate.getDate() - 1)

  const yesterday =
    yesterdayDate.toISOString().split('T')[0]

  visitors.value.yesterday =
    dates[yesterday] || 0

  // LAST 7 / 30 DAYS
  let last7 = 0
  let last30 = 0
  let monthTotal = 0
  let yearTotal = 0

  const now = new Date()

  Object.entries(dates).forEach(([date, count]) => {

    const d = new Date(date)

    const diff =
      (now - d) / (1000 * 60 * 60 * 24)

    if (diff <= 7) last7 += count

    if (diff <= 30) last30 += count

    if (
      d.getMonth() === now.getMonth() &&
      d.getFullYear() === now.getFullYear()
    ) {
      monthTotal += count
    }

    if (
      d.getFullYear() === now.getFullYear()
    ) {
      yearTotal += count
    }
  })

  visitors.value.last7Days = last7
  visitors.value.last30Days = last30
  visitors.value.thisMonth = monthTotal
  visitors.value.thisYear = yearTotal
  visitors.value.total = stats.total
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
              <RouterLink to="/opac">> OPAC</RouterLink>
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
            <div class="footer-title">
              Offsite Visitors Count
            </div>
            <ul class="visitors p-0 m-0 sub-title">
              <li>📘 Users Today: <strong>{{ visitors.today }}</strong></li>
              <li>📘 Users Yesterday: <strong>{{ visitors.yesterday }}</strong></li>
              <li>📘 Users Last 7 Days: <strong>{{ visitors.last7Days }}</strong></li>
              <li>📘 Users Last 30 Days: <strong>{{ visitors.last30Days }}</strong></li>
              <li>📘 Users This Month: <strong>{{ visitors.thisMonth }}</strong></li>
              <li>📘 Users This Year: <strong>{{ visitors.thisYear }}</strong></li>
              <li>📘 Total Users: <strong>{{ visitors.total }}</strong></li>
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
