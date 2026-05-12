<script setup>
import event1 from '@/assets/images/event1.png'
import event2 from '@/assets/images/event2.png'
import event3 from '@/assets/images/event3.png'
import event4 from '@/assets/images/event4.png'

const events = [
  {
    title: 'SM Care Book Donation Drive',
    image: event1,
    description:
      'As one of the recipients of the SM Cares Book Donation Drive Project, SKL received more than 40 boxes of general collection materials.',
  },
  {
    title: 'Summer Reading Challenge for Youth',
    image: event2,
    description:
      'An engaging reading activity designed to inspire young readers and encourage library participation.',
  },
  {
    title: 'Library Outreach Program',
    image: event3,
    description:
      'A community-centered program that promotes literacy, learning, and access to library services.',
  },
  {
    title: 'Children’s Learning Activity',
    image: event4,
    description:
      'A fun and educational program for children focused on reading, creativity, and lifelong learning.',
  },
]
</script>

<template>
  <!-- HEADER -->
  <div class="events-page-header text-center">
    <h1>EVENTS</h1>
    <p>
      Stay updated with the latest activities, community programs, learning events, and public
      service initiatives of Sentro ng Karunungan Library.
    </p>
  </div>
  <section class="events-page-section">
    <div class="container">
      <!-- EVENTS GRID -->
      <div class="events-grid">
        <div v-for="(event, index) in events" :key="index" class="event-card-box">
          <img :src="event.image" :alt="event.title" />

          <div class="event-card-content">
            <h3>{{ event.title }}</h3>

            <p>
              {{ event.description }}
            </p>

            <a href="#">
              Read More
              <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.events-page-section {
  padding: 90px 0;
  background: linear-gradient(180deg, #f7f9fc 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

.events-grid {
  margin-top: 60px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 70px 0;
}

.event-card-box {
  background: #fff;
  border: 1px solid var(--tertiary);
  padding: 0 42px 32px;
  min-height: 330px;
  position: relative;
}

.event-card-box:nth-child(odd) {
  border-right: none;
  border-radius: 14px 0 0 14px;
}

.event-card-box:nth-child(even) {
  border-radius: 0 14px 14px 0;
}

.event-card-box img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 10px;
  transform: translateY(-42px);
  margin-bottom: -18px;
}

.event-card-content {
  text-align: left;
}

.event-card-content h3 {
  font-size: 22px;
  font-weight: 900;
  color: #243510;
  margin-bottom: 12px;
}

.event-card-content p {
  color: #48533d;
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 22px;
}

.event-card-content a {
  color: #243510;
  text-decoration: none;
  font-weight: 900;
  font-size: 14px;
}

.event-card-content a:hover {
  color: var(--secondary);
}

.events-page-header {
  margin-top: 50px;
  margin-bottom: 50px;
}

.events-page-header h1 {
  color: #111;
  font-size: clamp(34px, 4vw, 52px);
  font-weight: 900;
  margin-bottom: 10px;
}

.events-page-header h1::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 90px;
  height: 5px;
  background: var(--secondary);
  border-radius: 20px;
}

.events-page-header p {
  max-width: 580px;
  margin: 12px auto 45px;
  color: var(--neutral);
  font-size: 14px;
  line-height: 1.7;
}

@media (max-width: 991px) {
  .events-grid {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .event-card-box,
  .event-card-box:nth-child(odd),
  .event-card-box:nth-child(even) {
    border: 1px solid var(--tertiary);
    border-radius: 14px;
  }
}

@media (max-width: 576px) {
  .event-card-box {
    padding: 0 22px 28px;
  }

  .event-card-box img {
    height: 190px;
  }
}
</style>
