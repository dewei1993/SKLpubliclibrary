<script setup>
import { ref } from 'vue'
import aboutImage from '@/assets/images/about1.webp'

const activeTab = ref('mission')

const aboutData = {
  mission: `The Sentro Ng Karunungan Library is an institutional for the collection of relevant books, reading materials, records, information technology materials, tapes, photographs, films, and other resources intended to inspire people in all walks of life to seek knowledge and enlightenment about this ever-changing world, and thereby become leaders in this part of the country in building and sustaining a literate community transforming lives through learning and understanding.`,

  vision: `In 2028, the Sentro ng Karunungan Library strives to be a dynamic and innovative center for knowledge and learning. It aims to provide a diverse collection of digital resources, cutting-edge technology, and interactive spaces for collaboration. The library will actively engage the community through inclusive programs, fostering a culture of lifelong learning and empowering individuals to explore, discover, and grow.`,

  goals: `To provide the best possible access to relevant information within a sustainable environment.
1. Develop the library at its best in serving and providing resources and programs for the community; 2. Develop the staff in building their skills for them to serve the community confidently; and 3. Develop the library, people and community to connect, inspire, and engage to increase opportunities for people to experience and share cultural expression and beyond.`,

  objectives: `• To identify community needs and provide programs of service and technology to meet those needs, in cooperation with other organizations and institutions;
• To serve the community as a center of reliable information through adequate, relevant, and up-to-date collections across various subjects;
• To promote reading and literacy for people of all ages;
• To provide instruction in library and information literacy skills to support research and effective use of information resources;
• To cultivate innovation and opportunities that enhance the community and raise educational standards;
• To serve as a community education provider and open platform for sharing information freely while addressing user needs;
• To promote and share cultural heritage through traditions, spaces, and artifacts;
• To protect and preserve the cultural heritage of communities, big or small.`,
}

function changeTab(tab) {
  activeTab.value = tab
}

function truncateText(text, words = 50) {
  return text.split(' ').slice(0, words).join(' ') + '...'
}
</script>

<template>
  <section id="about">
    <div class="container">
      <div class="row align-items-center g-4">
        <!-- IMAGE -->
        <div class="col-lg-5">
          <div class="about-image">
            <img :src="aboutImage" alt="Sentro ng Karunungan Library" loading="lazy" />

            <div class="about-quote">
              “A library is not a luxury but one of the necessities of life.”
            </div>
          </div>
        </div>

        <!-- CONTENT -->
        <div class="col-lg-7">
          <div class="about-panel">
            <div class="section-title-top">About Us</div>

            <h2 class="section-title">Sentro ng Karunungan Library</h2>

            <!-- TABS -->
            <div class="tabs-wrap mb-3">
              <button
                class="btn btn-outline-primary about-tab"
                :class="{ active: activeTab === 'mission' }"
                @click="changeTab('mission')"
              >
                Mission
              </button>

              <button
                class="btn btn-outline-primary about-tab"
                :class="{ active: activeTab === 'vision' }"
                @click="changeTab('vision')"
              >
                Vision
              </button>

              <button
                class="btn btn-outline-primary about-tab"
                :class="{ active: activeTab === 'goals' }"
                @click="changeTab('goals')"
              >
                Goals
              </button>

              <button
                class="btn btn-outline-primary about-tab"
                :class="{ active: activeTab === 'objectives' }"
                @click="changeTab('objectives')"
              >
                Objectives
              </button>
            </div>

            <!-- TAB CONTENT -->
            <div class="content-box">
              {{ truncateText(aboutData[activeTab], 60) }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-image {
  position: relative;
  height: 500px;
  border: 8px solid #fff;
  box-shadow: var(--shadow);
  border-radius: 8px;
  overflow: hidden;
}

/* QUOTE OVERLAY */
.about-quote {
  position: absolute;
  bottom: 15px;
  left: 15px;
  max-width: 70%;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  padding: 10px 14px;
  font-size: 13px;
  font-style: italic;
  border-left: 4px solid var(--tertiary);
  border-radius: 4px;
}

.about-panel {
  padding-left: 20px;
}

.content-box {
  white-space: pre-line;
}

/* Default */
.tabs-wrap .btn {
  border-radius: 8px;
  font-weight: 700;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px 18px;
  border: 2px solid var(--primary);
  color: var(--primary);
  background: transparent;
  transition: 0.3s ease;
}

/* Hover = SECONDARY */
.tabs-wrap .btn:hover {
  background: var(--secondary);
  border-color: var(--secondary);
  color: #fff;
  transform: translateY(-2px);
}

/* Active = PRIMARY */
.tabs-wrap .btn.active {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
}

/* Prevent hover from overriding active */
.tabs-wrap .btn.active:hover {
  background: var(--primary);
  border-color: var(--primary);
  color: #fff;
}

.content-box {
  border: 4px solid var(--primary);
  padding: 26px;
  font-size: 18px;
  line-height: 1.7;
  background: #fff;
  min-height: 250px;
}
</style>
