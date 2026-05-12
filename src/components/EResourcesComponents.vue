<script setup>
import { ref, computed } from 'vue'
import readLogo from '@/assets/images/e1.png'

const activeType = ref('subscribed')

const resources = [
  /* SUBSCRIBED DATABASES */
  {
    title: 'Britannica Library',
    type: 'subscribed',
    image: readLogo,
    description:
      'A comprehensive online reference resource offering curated academic articles, multimedia content, and primary sources across various subjects for students and researchers.',
  },

  {
    title: 'De Gruyter',
    type: 'subscribed',
    image: readLogo,
    description:
      'Provides academic books, journals, and online resources covering humanities, social sciences, medicine, and natural sciences.',
  },

  {
    title: 'EBSCOhost',
    type: 'subscribed',
    image: readLogo,
    description:
      'An online research database platform offering access to scholarly journals, e-books, magazines, newspapers, and other educational resources.',
  },

  {
    title: 'Emerald Publishing',
    type: 'subscribed',
    image: readLogo,
    description:
      'Publishes academic books, journals, and research resources focusing on business, management, education, and social sciences.',
  },

  {
    title: 'Gale Databases',
    type: 'subscribed',
    image: readLogo,
    description:
      'Offers digital research databases, e-books, and reference materials covering literature, history, science, and other academic subjects.',
  },

  {
    title: 'IG Publishing',
    type: 'subscribed',
    image: readLogo,
    description:
      'An international digital publisher providing scholarly e-books, journals, teaching materials, and conference proceedings in various disciplines.',
  },

  {
    title: 'IGI Global',
    type: 'subscribed',
    image: readLogo,
    description:
      'Publishes research-based books, journals, and case studies focusing on information technology, business, education, and emerging technologies.',
  },

  {
    title: 'MyLegalWhiz',
    type: 'subscribed',
    image: readLogo,
    description:
      'A legal research and knowledge assistance platform providing AI-supported legal content, research guidance, and legal information services.',
  },

  {
    title: 'Oxford University Press',
    type: 'subscribed',
    image: readLogo,
    description:
      'Provides scholarly books, journals, and digital resources covering humanities, social sciences, medicine, and sciences.',
  },

  {
    title: 'PressReader',
    type: 'subscribed',
    image: readLogo,
    description:
      'An online platform offering access to digital newspapers and magazines from around the world for news and current events.',
  },

  {
    title: 'ProQuest Central',
    type: 'subscribed',
    image: readLogo,
    description:
      'A multidisciplinary research database providing access to scholarly journals, magazines, reports, newspapers, and academic resources.',
  },

  {
    title: 'ProQuest Dissertations & Theses Global',
    type: 'subscribed',
    image: readLogo,
    description:
      'A comprehensive database of dissertations and theses from universities and research institutions worldwide.',
  },

  {
    title: 'ProQuest Ebook Central',
    type: 'subscribed',
    image: readLogo,
    description:
      'An online e-book database providing access to thousands of academic and scholarly e-books across multiple disciplines.',
  },

  {
    title: 'Wiley Online Library',
    type: 'subscribed',
    image: readLogo,
    description:
      'Provides access to scholarly journals, books, and reference materials in science, technology, medicine, business, and social sciences.',
  },

  {
    title: 'JSTOR',
    type: 'subscribed',
    image: readLogo,
    description:
      'A digital library offering academic journals, books, and primary sources covering humanities, social sciences, and sciences.',
  },

  {
    title: 'Philippine E-Journals (PeJ)',
    type: 'subscribed',
    image: readLogo,
    description:
      'A Philippine-based database providing scholarly journals and research publications from academic institutions and organizations across various disciplines.',
  },

  /* FREE WEB-BASED DATABASES */
  {
    title: 'Open Library',
    type: 'free',
    image: readLogo,
    description:
      'A free web-based digital library offering access to millions of books and learning materials.',
  },

  {
    title: 'Project Gutenberg',
    type: 'free',
    image: readLogo,
    description: 'A free collection of public domain eBooks available for reading and downloading.',
  },
]

const filteredResources = computed(() => {
  return resources.filter((resource) => resource.type === activeType.value)
})
</script>

<template>
  <div class="resources-page-header text-center">
    <h1>Library Resources</h1>
    <p>
      Access selected digital resources, subscribed databases, and free web-based learning materials
      for reading, research, and lifelong learning.
    </p>
  </div>
  <section class="e-resources-section">
    <div class="container">
      <div class="resource-block">
        <div class="e-resource-top">
          <h3 class="resource-subtitle mb-0">E-Resources</h3>

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
          <div v-for="(resource, index) in filteredResources" :key="index" class="eresource-card">
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
  padding: 90px 0;
  background: linear-gradient(180deg, #f7f9fc 0%, #ffffff 100%);
  position: relative;
  overflow: hidden;
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
  margin-top: 50px;
  margin-bottom: 50px;
}

.resources-page-header p {
  max-width: 580px;
  margin: 12px auto 45px;
  color: var(--neutral);
  font-size: 14px;
  line-height: 1.7;
}

.resources-page-header h1 {
  color: #111;
  font-size: clamp(34px, 4vw, 52px);
  font-weight: 900;
  margin-bottom: 10px;
}

.resources-page-header h1::after {
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

.resource-subtitle {
  color: #111;
  font-size: 24px;
  font-weight: 900;
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 30px;
}

.resource-subtitle::after {
  content: '';
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
