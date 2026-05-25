<script setup>
import { ref } from 'vue'

import event1 from '@/assets/images/event1.png'
import event2 from '@/assets/images/event2.png'
import event3 from '@/assets/images/event3.png'
import event4 from '@/assets/images/event4.png'

const selectedEvent = ref(null)

const events = [
  {
    title: 'SM Care Book Donation Drive',
    dateCreated: 'July 24, 2024',
    image: event1,
    description:
      'SKL received more than 40 boxes of donated books and learning materials through the SM Cares Book Donation Drive Project to support literacy and community learning.',
    fullContent:
      `The SM Cares Book Donation Drive Project has become a meaningful initiative in promoting literacy, education, and community development through the sharing of knowledge resources. As one of the chosen recipients of this generous program, the Sentro ng Karunungan Library (SKL) proudly received more than 40 boxes of general collection materials composed of books and other learning resources beneficial to readers of all ages. The donation serves as a valuable addition to the library’s growing collection and reflects the shared commitment of both organizations in supporting accessible education and lifelong learning within the community.
      The donated materials include a wide range of subjects and genres that can greatly assist students, researchers, teachers, and regular library users in their educational and personal reading needs. These resources are expected to strengthen the library’s services by providing updated and diverse reading materials that encourage reading habits, academic excellence, and intellectual growth. Through this initiative, SKL continues its mission of becoming a welcoming learning hub where everyone can freely access information, knowledge, and opportunities for self-development.
      SKL extends its heartfelt gratitude to SM Cares and all individuals involved in making the Book Donation Drive Project possible. Their generosity and support greatly contribute to the improvement of library services and the promotion of a reading culture in the community. The library remains committed to maximizing these resources for the benefit of its readers and hopes to continue building partnerships that inspire education, literacy, and community empowerment for future generations.`
  },

  {
    title: 'Livelihood Program',
    dateCreated: 'July 28, 2024',
    image: event2,
    description:
      'A community-based livelihood activity that provided practical skills, learning opportunities, and empowerment programs for participants.',    
    fullContent: `The Livelihood Program of Sentro ng Karunungan Library was conducted to provide community members with practical knowledge and skills that can help improve their livelihood opportunities and daily living. The program featured learning sessions focused on basic entrepreneurship, creativity, and sustainable income-generating activities that encourage self-development and community empowerment.
      Participants were given the opportunity to learn from resource speakers and facilitators who shared valuable techniques, experiences, and guidance related to small business ideas, financial awareness, and productive skills. The activity also encouraged collaboration and participation among attendees, promoting confidence, creativity, and continuous learning within the community.
      Through this initiative, the library continues to expand its role beyond providing books and information resources by becoming an active partner in community development. The Livelihood Program reflects the library’s commitment to supporting education, empowerment, and lifelong learning opportunities for individuals and families in the community.`  
  },

  {
    title: 'Library Orientation',
    dateCreated: 'August 05, 2024',
    image: event3,
    description:
      'An orientation activity introducing library users to the facilities, services, collections, and digital resources of Sentro ng Karunungan Library.',
    fullContent: `The Library Orientation Program was organized to introduce students, visitors, and community members to the different services, facilities, and resources available at Sentro ng Karunungan Library. The activity aimed to familiarize participants with proper library usage, borrowing procedures, available collections, and digital resources that support learning and research.
      During the orientation, participants toured the different sections of the library and learned about the various programs and services offered, including reference assistance, online resources, internet access, and community activities. Library staff also discussed the importance of responsible library use and how users can maximize available resources for academic and personal development.
      The orientation program serves as an important initiative in promoting information literacy and encouraging active library participation among users. Through this activity, the library strengthens its mission of providing accessible, organized, and user-friendly services that support education, research, and lifelong learning in the community.`  
  },

  {
    title: 'Library Outreach Program',
    dateCreated: 'August 12, 2024',
    image: event4,
    description:
      'A literacy and community engagement initiative that extends library programs, reading activities, and educational services beyond the library.',
    fullContent: `The Library Outreach Program was conducted as part of Sentro ng Karunungan Library’s continuing effort to promote literacy, education, and community engagement beyond the library premises. The program aimed to bring library services and learning activities closer to schools, organizations, and communities that have limited access to educational resources.
      The outreach activity included storytelling sessions, reading programs, educational discussions, and the distribution of informational materials designed to encourage reading habits and lifelong learning among participants. Through interactive activities and community involvement, the program created opportunities for learners of all ages to experience the value of libraries and accessible information resources.
      Through the Library Outreach Program, SKL continues to strengthen partnerships and extend its services to wider communities. The activity reflects the library’s commitment to inclusive education, public service, and community empowerment through knowledge-sharing and literacy development initiatives.`  
  }
]

function openEvent(event) {
  selectedEvent.value = event
}

function closeEvent() {
  selectedEvent.value = null
}
</script>

<template>
  <!-- HEADER -->
  <div class="events-page-header text-center">
    <h1>Library Activities and Programs</h1>
        <div class="services-line"></div>
    <p>
      Stay updated with the latest activities, community programs, learning events, and public
      service initiatives of Sentro ng Karunungan Library.
    </p>
  </div>

  <section class="events-page-section">
    <div class="container">
      <div class="events-grid">
        <div
          v-for="(event, index) in events"
          :key="index"
          class="event-card-box"
        >
          <img :src="event.image" :alt="event.title" />

          <div class="event-card-content">
            <div class="event-date-created">
              <i class="bi bi-calendar-event"></i>
              {{ event.dateCreated }}
            </div>
            <h3>{{ event.title }}</h3>

            <p>
              {{ event.description }}
            </p>

            <button
              type="button"
              class="event-readmore-btn"
              @click="openEvent(event)"
            >
              Read More
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- EVENT MODAL -->
  <div
    v-if="selectedEvent"
    class="event-modal-overlay"
    @click="closeEvent"
  >
    <div
      class="event-modal"
      @click.stop
    >
      <button
        class="event-modal-close"
        type="button"
        @click="closeEvent"
      >
        ×
      </button>

      <img
        :src="selectedEvent.image"
        :alt="selectedEvent.title"
      />

      <div class="event-modal-content">
        <div class="event-modal-date">
          <i class="bi bi-calendar-event"></i>
          {{ selectedEvent.dateCreated }}
        </div>
        <h2>
          {{ selectedEvent.title }}
        </h2>

        <p>
          {{ selectedEvent.fullContent }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.events-page-section {
  padding: 90px 0;
  background: linear-gradient(180deg, #f7f9fc 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
}

.services-line {
  width: 70px;
  height: 4px;
  background: var(--secondary);
  border-radius: 50px;
  margin: 0 auto 22px;
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

.event-readmore-btn {
  border: none;
  background: transparent;
  color: #243510;
  font-weight: 900;
  font-size: 14px;
  padding: 0;
  transition: 0.3s ease;
}

.event-readmore-btn:hover {
  color: var(--secondary);
}

.events-page-header {
  margin-top: 50px;
  margin-bottom: 50px;
  text-align: center;
}

.events-page-header h1 {
  color: var(--primary);
  font-size: clamp(34px, 4vw, 52px);
  font-weight: 900;
  margin-bottom: 10px;
}

.events-page-header p {
  max-width: 580px;
  margin: 12px auto 45px;
  color: var(--neutral);
  font-size: 14px;
  line-height: 1.7;
}

/* MODAL */
.event-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;
  padding: 20px;
}

.event-modal {
  width: 100%;
  max-width: 850px;
  background: #fff;
  border-radius: 22px;
  overflow: hidden;
  position: relative;
  animation: modalShow 0.3s ease;
}

.event-modal img {
  width: 100%;
  height: 360px;
  object-fit: cover;
}

.event-modal-content {
  padding: 36px;
}

.event-modal-content h2 {
  color: var(--primary);
  font-size: clamp(30px, 4vw, 52px);
  font-weight: 900;
  margin-bottom: 18px;
}

.event-modal-content p {
  color: var(--neutral);
  line-height: 1.9;
  font-size: 16px;
  white-space: pre-line;
}

.event-modal-close {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 42px;
  height: 42px;
  border: none;
  border-radius: 50%;
  background: rgba(255,255,255,0.95);
  font-size: 28px;
  font-weight: 700;
  cursor: pointer;
  z-index: 3;
}

.event-date-created {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--secondary);
  font-size: 13px;
  font-weight: 800;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.event-modal-date {
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--secondary);
  font-size: 14px;
  font-weight: 800;
  margin-bottom: 14px;
  text-transform: uppercase;
}

.event-modal-content {
  padding: 36px;
  max-height: 420px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--secondary) #f1f1f1;
}

/* CHROME */
.event-modal-content::-webkit-scrollbar {
  width: 10px;
}

.event-modal-content::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 20px;
}

.event-modal-content::-webkit-scrollbar-thumb {
  background: var(--secondary);
  border-radius: 20px;
}

.event-modal-content::-webkit-scrollbar-thumb:hover {
  background: var(--primary);
}

@keyframes modalShow {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.96);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
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

  .event-modal img {
    height: 240px;
  }

  .event-modal-content {
    padding: 24px;
  }
}
</style>