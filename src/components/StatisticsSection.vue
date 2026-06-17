<script setup>
import { computed, onMounted, ref } from 'vue'

const currentDate = computed(() => {
  return new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

const stats = ref([
  {
    label: 'Our Resources',
    icon: 'bi bi-book-half',
    target: 6025,
    value: 0
  },
  {
    label: 'Library Users',
    icon: 'bi bi-people-fill',
    target: 150000,
    value: 0
  },
  {
    label: 'Acts. & Programs',
    icon: 'bi bi-check-circle-fill',
    target: 42,
    value: 0
  },
  {
    label: 'Satisfied Users',
    icon: 'bi bi-heart-fill',
    target: 142500,
    value: 0
  }
])

function animateCounter(stat) {
  const duration = 1800
  const startTime = performance.now()

  function update(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1)
    stat.value = Math.floor(progress * stat.target)

    if (progress < 1) {
      requestAnimationFrame(update)
    }
  }

  requestAnimationFrame(update)
}

onMounted(() => {
  const section = document.querySelector('.stats-section')
  let started = false

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          stats.value.forEach((stat) => animateCounter(stat))
          started = true
        }
      })
    },
    { threshold: 0.3 }
  )

  if (section) {
    observer.observe(section)
  }
})
</script>

<template>
  <section class="stats-section" id="facilities">
    <div class="container">

      <div class="text-start mb-4">
        <h3 class="stats-title-inline">
          <span class="bar">|</span>
          Library Statistics -
          <span class="asof">as of </span>
          <span>{{ currentDate }}</span>
        </h3>
      </div>

      <div class="row g-3">
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="col-md-6 col-lg-3">
          <div class="stat-item">
            <div class="stat-icon">
              <i :class="stat.icon"></i>
            </div>
            <div>
              <div class="small text-uppercase">
                {{ stat.label }}
              </div>

              <div class="stat-value counter">
                {{ stat.value.toLocaleString() }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
  .stats-section {
      background: var(--primary);
      color: #fff;
      padding: 34px 0;
    }

    .stat-item {
      display: flex;
      align-items: center;
      gap: 16px;
      justify-content: center;
      padding: 16px 10px;
    }

    .stat-icon {
      width: 54px;
      height: 54px;
      border-radius: 50%;
      background: rgba(255,255,255,0.14);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      flex-shrink: 0;
    }

    .stat-value {
      font-size: clamp(28px, 4vw, 42px);
      font-weight: 900;
      line-height: 1;
    }

    .stats-title-inline {
      color: #fff;
      font-weight: 700;
      font-size: clamp(18px, 2.2vw, 26px);
      letter-spacing: 0.5px;
      text-align: left; /* force left */
    }

    /* LEFT BAR */
    .stats-title-inline .bar {
      color: var(--tertiary);
      margin-right: 8px;
      font-weight: 900;
    }

    /* "as of" STYLE */
    .stats-title-inline .asof {
      opacity: 0.8;
      font-weight: 500;
    }




</style>