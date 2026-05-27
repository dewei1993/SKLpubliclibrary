<script setup>
import { ref, computed } from 'vue'
import BritannicaLibrary from '@/assets/images/ser1.webp'
import DeGruyter from '@/assets/images/ser2.webp'
import EBSCOHost from '@/assets/images/ser3.webp'
import EmeraldPublishing from '@/assets/images/ser4.webp'
import GaleDatabases from '@/assets/images/ser5.webp'
import IGPublishing from '@/assets/images/ser6.webp'
import IGIGlobal from '@/assets/images/ser7.webp'
import MyLegalWhiz from '@/assets/images/ser8.webp'
import OxfordUniversityPress from '@/assets/images/ser9.webp'
import PressReader from '@/assets/images/ser10.webp'
import ProQuestCentral from '@/assets/images/ser11.webp'
import ProQuestDissertationsAndThesesGlobal from '@/assets/images/ser12.webp'
import ProQuestEbookCentral from '@/assets/images/ser13.webp'
import Wiley from '@/assets/images/ser14.webp'
import JSTOR from '@/assets/images/ser15.webp'
import PhilippineEJournals from '@/assets/images/ser16.webp'

import Teknoaklatan from '@/assets/images/fer1.webp'
import KWFDiksyonaryongFilipino from '@/assets/images/fer2.webp'
import ActaMedicaPhilippina from '@/assets/images/fer3.webp'
import UNDigitalLibrary from '@/assets/images/fer4.webp'
import UNESCODigitalLibrary from '@/assets/images/fer5.webp'
import STARBOOKS from '@/assets/images/fer6.webp'
import PIDS from '@/assets/images/fer7.webp'
import SERPP from '@/assets/images/fer8.webp'
import InternationalChildrensDigitalLibrary from '@/assets/images/fer9.webp'
import LetsReadAsia from '@/assets/images/fer10.webp'
import BloomLibrary from '@/assets/images/fer11.webp'
import ERIC from '@/assets/images/fer12.webp'
import ProjectGutenberg from '@/assets/images/fer13.webp'
import GoogleNewsArchive from '@/assets/images/fer14.webp'
import InternetArchive from '@/assets/images/fer15.webp'
import PhilippineJournalOfScience from '@/assets/images/fer16.webp'
import CambridgeOpenAccess from '@/assets/images/fer17.webp'
import AccessibleBooksConsortium from '@/assets/images/fer18.webp'
import FamilySearch from '@/assets/images/fer19.webp'
import HathiTrust from '@/assets/images/fer20.webp'
import DOAJ from '@/assets/images/fer21.webp'

const activeType = ref('subscribed')

const resources = [
  /* SUBSCRIBED DATABASES */
  {
    title: 'Britannica Library',
    type: 'subscribed',
    image: BritannicaLibrary,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'Britannica Library is a comprehensive online resource offering curated collections of authoritative articles, multimedia content, and primary sources across diverse subjects.',
  },
  {
    title: 'De Gruyter',
    type: 'subscribed',
    image: DeGruyter,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'De Gruyter provides academic publishing books, journals, and online resources covering humanities, social sciences, and natural sciences.',
  },
  {
    title: 'EBSCOHost',
    type: 'subscribed',
    image: EBSCOHost,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'EBSCOHost provides access to research databases, eBooks, journals, newspapers, and multimedia resources for students and researchers.',
  },
  {
    title: 'Emerald Publishing',
    type: 'subscribed',
    image: EmeraldPublishing,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'Emerald Publishing offers books, journals, and online research resources focusing on business, management, education, and social sciences.',
  },
  {
    title: 'Gale Databases',
    type: 'subscribed',
    image: GaleDatabases,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'Gale Databases provide access to eBooks, journals, literature resources, encyclopedias, and scholarly academic content across multiple disciplines.',
  },
  {
    title: 'IG Publishing',
    type: 'subscribed',
    image: IGPublishing,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'IG Publishing is an innovative international distributor of digital academic content specializing in information science, technology, management, and conference proceedings.',
  },
  {
    title: 'IGI Global',
    type: 'subscribed',
    image: IGIGlobal,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'IGI Global focuses on research publications in IT and management, offering access to journals, books, and case studies on emerging technologies.',
  },
  {
    title: 'MyLegalWhiz',
    type: 'subscribed',
    image: MyLegalWhiz,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'MyLegalWhiz is a legal knowledge and research assistance platform focusing on legal content and AI-powered legal research guidance.',
  },
  {
    title: 'Oxford University Press',
    type: 'subscribed',
    image: OxfordUniversityPress,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'Oxford University Press provides scholarly resources for humanities, social sciences, and sciences.',
  },
  {
    title: 'PressReader',
    type: 'subscribed',
    image: PressReader,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'PressReader is an online database of newspapers and magazines from around the world, providing access to current news and publications.',
  },
  {
    title: 'ProQuest Central',
    type: 'subscribed',
    image: ProQuestCentral,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'ProQuest Central is a multidisciplinary database providing access to scholarly journals, magazines, newspapers, and research resources.',
  },
  {
    title: 'ProQuest Dissertations & Theses Global',
    type: 'subscribed',
    image: ProQuestDissertationsAndThesesGlobal,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'ProQuest Dissertations & Theses Global is a comprehensive database of dissertations and theses from universities around the world.',
  },
  {
    title: 'ProQuest Ebook Central',
    type: 'subscribed',
    image: ProQuestEbookCentral,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'ProQuest Ebook Central is an online database of academic eBooks covering various disciplines widely used by libraries and researchers.',
  },
  {
    title: 'Wiley',
    type: 'subscribed',
    image: Wiley,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'Wiley offers journals, books, and reference works in science, technology, medicine, and social sciences.',
  },
  {
    title: 'JSTOR',
    type: 'subscribed',
    image: JSTOR,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'JSTOR provides access to scholarly journals, books, and primary sources through an extensive digital academic platform.',
  },
  {
    title: 'Philippine E-Journals (PeJ)',
    type: 'subscribed',
    image: PhilippineEJournals,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'A Philippine-based database providing scholarly journals and research publications from academic institutions and organizations across various disciplines.',
  },

  /* FREE WEB-BASED DATABASES */
  {
    title: 'Teknoaklatan',
    type: 'free',
    image: Teknoaklatan,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'A database produced by the National Library of the Philippines containing digitized serials, historical records, government publications, and rare Philippine collections.',
  },
  {
    title: 'KWF Diksyonaryong Filipino',
    type: 'free',
    image: KWFDiksyonaryongFilipino,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'Ang KWF Diksyonaryong Wikang Filipino ay hango sa database ng Diksiyonaryo ng Wikang Filipino na unang nailathala noong 1989.',
  },
  {
    title: 'Acta Medica Philippina',
    type: 'free',
    image: ActaMedicaPhilippina,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'An open-access, peer-reviewed medical and health science journal published by the University of the Philippines Manila.',
  },
  {
    title: 'UN Digital Library',
    type: 'free',
    image: UNDigitalLibrary,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'A repository of official publications and documents produced by the United Nations covering various subjects.',
  },
  {
    title: 'UNESCO Digital Library',
    type: 'free',
    image: UNESCODigitalLibrary,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'UNESCO’s institutional repository providing access to high-quality information, publications, and historical records.',
  },
  {
    title: 'STARBOOKS',
    type: 'free',
    image: STARBOOKS,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'A portable digital library developed by DOST providing science and technology resources accessible even in low-internet areas.',
  },
  {
    title: 'PIDS',
    type: 'free',
    image: PIDS,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'Philippine Institute for Development Studies is a research database focusing on the Philippines’ economic and social development.',
  },
  {
    title: 'SERP-P',
    type: 'free',
    image: SERPP,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'Studies in Educational Research Program – Philippines is an online repository of socioeconomic and educational research resources.',
  },
  {
    title: 'International Children’s Digital Library',
    type: 'free',
    image: InternationalChildrensDigitalLibrary,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'A global collection of children’s literature available in multiple languages to promote literacy and cultural understanding.',
  },
  {
    title: 'Let’s Read Asia',
    type: 'free',
    image: LetsReadAsia,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'An online library of Asian children’s books promoting literacy and cultural exchange among young readers.',
  },
  {
    title: 'Bloom Library',
    type: 'free',
    image: BloomLibrary,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'A global digital library containing books in hundreds of languages available for reading, listening, and downloading.',
  },
  {
    title: 'ERIC',
    type: 'free',
    image: ERIC,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'Education Resources Information Center is an extensive database for educational research and academic resources.',
  },
  {
    title: 'Project Gutenberg',
    type: 'free',
    image: ProjectGutenberg,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'A volunteer-driven digital library offering free eBooks and digitized cultural works from around the world.',
  },
  {
    title: 'Google News Archive',
    type: 'free',
    image: GoogleNewsArchive,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'A Google News extension providing access to scanned newspaper archives and historical news collections.',
  },
  {
    title: 'Internet Archive',
    type: 'free',
    image: InternetArchive,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'A non-profit digital library offering free access to books, websites, multimedia, and historical digital collections.',
  },
  {
    title: 'Philippine Journal of Science',
    type: 'free',
    image: PhilippineJournalOfScience,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'An open-access peer-reviewed journal covering science, engineering, mathematics, and social sciences in the Philippines.',
  },
  {
    title: 'Cambridge Open Access',
    type: 'free',
    image: CambridgeOpenAccess,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'Cambridge University’s repository of open-access research articles, conference papers, datasets, and theses.',
  },
  {
    title: 'Accessible Books Consortium',
    type: 'free',
    image: AccessibleBooksConsortium,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'A global initiative increasing the availability of accessible books for people with print disabilities.',
  },
  {
    title: 'FamilySearch',
    type: 'free',
    image: FamilySearch,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'A free genealogy platform providing historical records, family trees, and ancestry research resources.',
  },
  {
    title: 'HathiTrust',
    type: 'free',
    image: HathiTrust,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'A digital partnership of academic institutions offering millions of digitized books and research publications.',
  },
  {
    title: 'DOAJ',
    type: 'free',
    image: DOAJ,
    link: 'https://eportal.nlp.gov.ph/eresources',
    description:
      'The Directory of Open Access Journals indexes high-quality peer-reviewed open-access journals worldwide.',
  },
]

const filteredResources = computed(() => {
  return resources.filter((resource) => resource.type === activeType.value)
})
</script>

<template>
  <div class="resources-page-header text-center">
    <h1>Library Resources</h1>
    <div class="services-line"></div>
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
            <img :src="resource.image" :alt="resource.title" loading="lazy" />

            <div>
              <h4>{{ resource.title }}</h4>
              <p>{{ resource.description }}</p>
              <a :href="resource.link" target="_blank" rel="noopener noreferrer"> OPEN </a>
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

.services-line {
  width: 70px;
  height: 4px;
  background: var(--secondary);
  border-radius: 50px;
  margin: 0 auto 22px;
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
  color: var(--primary);
  font-size: clamp(34px, 4vw, 52px);
  font-weight: 900;
  margin-bottom: 10px;
}

.resource-subtitle {
  color: var(--primary);
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
  background: #ededed;
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
  padding: 3px;
}

.eresource-card h4 {
  font-size: 30px;
  font-weight: 900;
  color: var(--primary);
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
