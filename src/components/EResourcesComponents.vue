<script setup>
import { ref, computed } from 'vue'
import readLogo from '@/assets/images/e1.png'

const activeType = ref('subscribed')

const resources = [
  {
    title: "Let's Read",
    type: 'subscribed',
    image: readLogo,
    description:
      'Here is a collection of great books, reading activities, conversation starters, and coloring pages to help children keep learning, growing, and thriving while out of school.'
  },
  {
    title: 'World Book Online',
    type: 'subscribed',
    image: readLogo,
    description:
      'A trusted online encyclopedia and learning resource for students, teachers, researchers, and lifelong learners.'
  },
  {
    title: 'Open Library',
    type: 'free',
    image: readLogo,
    description:
      'A free web-based digital library offering access to millions of books and learning materials.'
  },
  {
    title: 'Project Gutenberg',
    type: 'free',
    image: readLogo,
    description:
      'A free collection of public domain eBooks available for reading and downloading.'
  }
]

const filteredResources = computed(() => {
  return resources.filter(resource => resource.type === activeType.value)
})
</script>

<template>
  <section class="e-resources-section">
    <div class="container">

      <div class="resources-page-header text-center">
        <h1>Resources</h1>
        <p>
          Access selected digital resources, subscribed databases, and free web-based
          learning materials for reading, research, and lifelong learning.
        </p>
      </div>

      <div class="resource-block">
        <div class="e-resource-top">
          <h3 class="resource-subtitle mb-0">
            E-Resources
          </h3>

          <div class="resource-filter-buttons">
            <button
              type="button"
              :class="{ active: activeType === 'subscribed' }"
              @click="activeType = 'subscribed'"
            >
              Subscribed Database
            </button>

            <button
              type="button"
              :class="{ active: activeType === 'free' }"
              @click="activeType = 'free'"
            >
              Free Web-based Database
            </button>
          </div>
        </div>

        <div class="eresource-list mt-4">
          <div
            v-for="(resource, index) in filteredResources"
            :key="index"
            class="eresource-card"
          >
            <img :src="resource.image" :alt="resource.title" />

            <div>
              <h4>{{ resource.title }}</h4>
              <p>{{ resource.description }}</p>
              <a href="#">OPEN</a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.e-resources-section {
  background: #fff;
  padding: 80px 0;
}

.e-resource-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 22px;
  flex-wrap: wrap;
}

.resource-filter-buttons {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.resources-page-header {
  color: #111;
  text-align: center;
  margin-bottom: 80px;
}

.resources-page-header h1 {
  color: #111;
  font-size: clamp(42px, 6vw, 72px);
  font-weight: 900;
  text-transform: uppercase;
  position: relative;
  display: inline-block;
  padding-bottom: 14px;
}

.resources-page-header h1::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 90px;
  height: 5px;
  background: var(--secondary);
  border-radius: 20px;
}

.resource-subtitle {
  color: #111;
  font-size: 24px;
  font-weight: 900;
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.resource-subtitle::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 72px;
  height: 4px;
  background: var(--secondary);
}

.resource-filter-buttons button {
  border: none;
  background: var(--secondary);
  color: #fff;
  padding: 7px 14px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 900;
  transition: 0.3s ease;
}

.resource-filter-buttons button:hover,
.resource-filter-buttons button.active {
  background: var(--primary);
  color: #fff;
  transform: translateY(-2px);
}

.eresource-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.eresource-card {
  background: #d9d9d9;
  border-radius: 18px;
  padding: 22px;
  display: flex;
  gap: 24px;
  align-items: center;
}

.eresource-card img {
  width: 130px;
  height: 130px;
  object-fit: contain;
  border-radius: 10px;
  background: var(--tertiary);
  padding: 10px;
}

.eresource-card h4 {
  font-size: 30px;
  font-weight: 900;
  color: #111;
  margin-bottom: 8px;
}

.eresource-card p {
  color: #333;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 8px;
}

.eresource-card a {
  background: var(--secondary);
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 900;
}

@media (max-width: 767px) {
  .e-resource-top {
    justify-content: center;
    text-align: center;
  }

  .eresource-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>