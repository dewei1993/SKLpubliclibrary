<script setup>
import { ref } from 'vue'

import missionImg from '@/assets/images/event1.png'
import visionImg from '@/assets/images/event1.png'
import goalsImg from '@/assets/images/event1.png'
import objectivesImg from '@/assets/images/event1.png'

const activeVmgo = ref('mission')

const vmgoItems = [
  {
    key: 'mission',
    title: 'Mission',
    image: missionImg,
    content:
      'The Sentro Ng Karunungan Library is an institutional for the collection of relevant books, reading materials, records, information technology materials, tapes, photographs, films, and other resources intended to inspire people in all walks of life to seek knowledge and enlightenment about this ever-changing world, and thereby become leaders in this part of the country in building and sustaining a literate community transforming lives through learning and understanding.',
  },
  {
    key: 'vision',
    title: 'Vision',
    image: visionImg,
    content:
      'In 2028, the Sentro ng Karunungan Library strives to be a dynamic and innovative center for knowledge and learning. It aims to provide a diverse collection of digital resources, cutting-edge technology, and interactive spaces for collaboration. The library will actively engage the community through inclusive programs, fostering a culture of lifelong learning and empowering individuals to explore, discover, and grow.',
  },
  {
    key: 'goals',
    title: 'Goals',
    image: goalsImg,
    content: `To provide the best possible access to relevant information within a sustainable environment.
1. Develop the library at its best in serving and providing resources and programs for the community; 2. Develop the staff in building their skills for them to serve the community confidently; and 3. Develop the library, people and community to connect, inspire, and engage to increase opportunities for people to experience and share cultural expression and beyond.`,
  },
  {
    key: 'objectives',
    title: 'Objectives',
    image: objectivesImg,
    content: `• To identify community needs and provide programs of service and technology to meet those needs, in cooperation with other organizations and institutions;
• To serve the community as a center of reliable information through adequate, relevant, and up-to-date collections across various subjects;
• To promote reading and literacy for people of all ages;
• To provide instruction in library and information literacy skills to support research and effective use of information resources;
• To cultivate innovation and opportunities that enhance the community and raise educational standards;
• To serve as a community education provider and open platform for sharing information freely while addressing user needs;
• To promote and share cultural heritage through traditions, spaces, and artifacts;
• To protect and preserve the cultural heritage of communities, big or small.`,
  },
]
</script>

<template>
  <div class="facilities-header text-center">
    <h2>Library VMGO</h2>
    <div class="facilities-line"></div>
    <p class="vmgo-description">
      Learn more about the Vision, Mission, Goals, and Objectives of Sentro ng Karunungan Library in
      promoting literacy, knowledge, community development, and accessible public library services
      for lifelong learning.
    </p>
  </div>
  <section id="vmgo" class="vmgo-section">
    <div class="container">
      <div class="vmgo-horizontal">
        <div
          v-for="item in vmgoItems"
          :key="item.key"
          class="vmgo-slide-card"
          :class="{ active: activeVmgo === item.key }"
          @mouseenter="activeVmgo = item.key"
        >
          <img :src="item.image" :alt="item.title" />

          <div class="vmgo-slide-overlay">
            <h3>{{ item.title }}</h3>

            <p v-if="activeVmgo === item.key">
              {{ item.content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vmgo-section {
  background: linear-gradient(180deg, #f7f9fc 0%, #ffffff 100%);
  padding: 100px 0;
  position: relative;
  overflow: hidden;
}

/* DECORATIVE BG */
.vmgo-section::before {
  content: '';
  position: absolute;
  top: -120px;
  right: -120px;
  width: 320px;
  height: 320px;
  background: rgba(249, 195, 0, 0.08);
  border-radius: 50%;
}

.vmgo-section::after {
  content: '';
  position: absolute;
  bottom: -140px;
  left: -140px;
  width: 340px;
  height: 340px;
  background: rgba(26, 75, 109, 0.05);
  border-radius: 50%;
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

/* HEADER */
.vmgo-header {
  max-width: 860px;
  margin: 0 auto 60px;
  text-align: center;
  position: relative;
  z-index: 2;
}

.vmgo-header .section-title {
  font-size: clamp(36px, 5vw, 60px);
  font-weight: 900;
  color: var(--primary);
  margin-bottom: 18px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.vmgo-header p,
.vmgo-description {
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
  color: #5e6470;
  font-size: 16px;
  line-height: 1.9;
}

/* HORIZONTAL SLIDER */
.vmgo-horizontal {
  display: flex;
  gap: 20px;
  height: 520px;
  overflow: hidden;
  position: relative;
  z-index: 2;
}

/* CARD */
.vmgo-slide-card {
  position: relative;
  flex: 1;
  min-width: 140px;
  border-radius: 28px;
  overflow: hidden;
  cursor: pointer;

  transition:
    flex 0.55s ease,
    transform 0.4s ease;

  box-shadow:
    0 15px 35px rgba(0, 0, 0, 0.1),
    0 5px 10px rgba(0, 0, 0, 0.04);

  background: #fff;
}

/* ACTIVE */
.vmgo-slide-card.active {
  flex: 4.5;
}

/* IMAGE */
.vmgo-slide-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

/* IMAGE HOVER */
.vmgo-slide-card:hover img {
  transform: scale(1.08);
}

/* OVERLAY */
.vmgo-slide-overlay {
  position: absolute;
  inset: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 34px;

  background: linear-gradient(
    to top,
    rgba(26, 75, 109, 0.96) 8%,
    rgba(26, 75, 109, 0.75) 38%,
    rgba(0, 0, 0, 0.15) 100%
  );

  color: #fff;

  transition: 0.4s ease;
}

/* ACTIVE OVERLAY */
.vmgo-slide-card.active .vmgo-slide-overlay {
  background: linear-gradient(
    to top,
    rgba(209, 43, 46, 0.95) 5%,
    rgba(26, 75, 109, 0.78) 42%,
    rgba(0, 0, 0, 0.12) 100%
  );
}

/* TITLE */
.vmgo-slide-overlay h3 {
  font-size: clamp(28px, 4vw, 56px);
  font-weight: 900;
  margin-bottom: 18px;
  text-transform: uppercase;
  line-height: 1;
}

/* SMALL CARDS */
.vmgo-slide-card:not(.active) .vmgo-slide-overlay {
  padding: 24px;
  justify-content: flex-end;
}

.vmgo-slide-card:not(.active) .vmgo-slide-overlay h3 {
  font-size: 24px;
  margin-bottom: 0;
}

/* CONTENT */
.vmgo-slide-overlay p {
  white-space: pre-line;
  overflow-y: auto;

  max-height: 240px;

  padding-right: 10px;

  font-size: 15px;
  line-height: 1.9;
  color: rgba(255, 255, 255, 0.95);

  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.45) transparent;
}

/* SCROLLBAR */
.vmgo-slide-overlay p::-webkit-scrollbar {
  width: 6px;
}

.vmgo-slide-overlay p::-webkit-scrollbar-track {
  background: transparent;
}

.vmgo-slide-overlay p::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.4);
  border-radius: 20px;
}

.vmgo-slide-overlay p::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.7);
}

/* HOVER EFFECT */
.vmgo-slide-card:hover {
  transform: translateY(-6px);
}

/* MOBILE */
@media (max-width: 991px) {
  .vmgo-section {
    padding: 80px 0;
  }

  .vmgo-horizontal {
    flex-direction: column;
    height: auto;
  }

  .vmgo-slide-card,
  .vmgo-slide-card.active {
    flex: none;
    height: 320px;
  }

  .vmgo-slide-overlay {
    padding: 24px;
  }

  .vmgo-slide-overlay h3 {
    font-size: 32px;
  }

  .vmgo-slide-overlay p {
    max-height: 150px;
    font-size: 14px;
  }
}

@media (max-width: 576px) {
  .vmgo-header .section-title {
    font-size: 34px;
  }

  .vmgo-slide-card,
  .vmgo-slide-card.active {
    height: 280px;
  }

  .vmgo-slide-overlay h3 {
    font-size: 28px;
  }
}
</style>
