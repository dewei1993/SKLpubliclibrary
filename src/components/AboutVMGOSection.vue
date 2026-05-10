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
      'The Sentro Ng Karunungan Library is an institutional for the collection of relevant books, reading materials, records, information technology materials, tapes, photographs, films, and other resources intended to inspire people in all walks of life to seek knowledge and enlightenment about this ever-changing world, and thereby become leaders in this part of the country in building and sustaining a literate community transforming lives through learning and understanding.'
  },
  {
    key: 'vision',
    title: 'Vision',
    image: visionImg,
    content:
      'In 2028, the Sentro ng Karunungan Library strives to be a dynamic and innovative center for knowledge and learning. It aims to provide a diverse collection of digital resources, cutting-edge technology, and interactive spaces for collaboration. The library will actively engage the community through inclusive programs, fostering a culture of lifelong learning and empowering individuals to explore, discover, and grow.'
  },
  {
    key: 'goals',
    title: 'Goals',
    image: goalsImg,
    content:
`To provide the best possible access to relevant information within a sustainable environment.
1. Develop the library at its best in serving and providing resources and programs for the community; 2. Develop the staff in building their skills for them to serve the community confidently; and 3. Develop the library, people and community to connect, inspire, and engage to increase opportunities for people to experience and share cultural expression and beyond.`,
  },
  {
    key: 'objectives',
    title: 'Objectives',
    image: objectivesImg,
    content:
      `• To identify community needs and provide programs of service and technology to meet those needs, in cooperation with other organizations and institutions;
• To serve the community as a center of reliable information through adequate, relevant, and up-to-date collections across various subjects;
• To promote reading and literacy for people of all ages;
• To provide instruction in library and information literacy skills to support research and effective use of information resources;
• To cultivate innovation and opportunities that enhance the community and raise educational standards;
• To serve as a community education provider and open platform for sharing information freely while addressing user needs;
• To promote and share cultural heritage through traditions, spaces, and artifacts;
• To protect and preserve the cultural heritage of communities, big or small.`
  }
]
</script>

<template>
<!-- ABOUT PAGE CONTENT HERE -->
  <!-- HERO -->
  <section class="about-history-hero">
    <div class="hero-blur-overlay"></div>
    <div class="container position-relative">
      <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
        <h1>
          Library VMGO
        </h1>
        <div class="breadcrumb-text">
          <RouterLink to="/">
            Home
          </RouterLink>
          /
          <span>About Us</span>
        </div>
      </div>
    </div>
  </section>

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