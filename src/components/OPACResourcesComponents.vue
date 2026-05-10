<script setup>
import { ref, computed } from 'vue'
import books from '@/data/books.json'

const search = ref('')

const filteredBooks = computed(() => {

  const keyword = search.value
    .toLowerCase()
    .trim()

  if (!keyword) {
    return books
  }

  // SPLIT MULTIPLE KEYWORDS
  const keywords = keyword.split(' ')

  return books.filter(book => {

    // COMBINE ALL SEARCHABLE FIELDS
    const searchableText = `
      ${book.callNumber}
      ${book.title}
      ${book.author}
      ${book.location}
      ${book.copyright}
    `
    .toLowerCase()

    // EVERY KEYWORD MUST MATCH
    return keywords.every(word =>
      searchableText.includes(word)
    )

  })

})
</script>

<template>
  <section class="opac-section">
    <div class="container">

      <div class="resources-page-header text-center">
        <h1>Resources</h1>
        <p>
          Search library records by call number, title, author, location, or copyright year.
        </p>
      </div>

      <div class="opac-block">
        <h3 class="resource-subtitle">
          Online Public Access Catalog (OPAC)
        </h3>

        <div class="opac-search-wrap">
          <input
            v-model="search"
            type="text"
            placeholder="Search author, title, keywords, call number..."
          />
        </div>

        <p class="opac-note">
          Search the library collection using keywords.
        </p>

        <div class="opac-table-box">
          <div class="table-responsive">
            <table class="table opac-table align-middle">
              <thead>
                <tr>
                  <th>Call Number</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Location</th>
                  <th>Copyright</th>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="(book, index) in filteredBooks"
                  :key="index"
                >
                  <td>{{ book.callNumber }}</td>
                  <td>{{ book.title }}</td>
                  <td>{{ book.author }}</td>
                  <td>{{ book.location }}</td>
                  <td>{{ book.copyright }}</td>
                </tr>

                <tr v-if="filteredBooks.length === 0">
                  <td colspan="5" class="text-center no-result">
                    No matching book found.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<style scoped>
.opac-section {
  background: #fff;
  padding: 80px 0;
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

.resources-page-header p {
  max-width: 580px;
  margin: 12px auto 45px;
  color: var(--neutral);
  font-size: 14px;
  line-height: 1.7;
}

.opac-block {
  max-width: 1100px;
  margin: 0 auto;
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

.opac-search-wrap {
  width: min(520px, 100%);
  margin: 0 auto;
  position: relative;
}

.opac-search-wrap input {
  width: 100%;
  height: 42px;
  border: 2px solid var(--secondary);
  border-radius: 999px;
  padding: 0 48px 0 18px;
  outline: none;
}

.opac-search-wrap i {
  position: absolute;
  right: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--secondary);
  font-size: 18px;
}

.opac-note {
  text-align: center;
  color: var(--neutral);
  font-size: 12px;
  margin-top: 14px;
}

.opac-table-box {
  margin-top: 28px;
  border: 4px solid var(--primary);

  /* ADD THESE */
  max-height: 520px;
  overflow-y: auto;
  overflow-x: auto;

  padding: 24px;

  scrollbar-width: thin;
  scrollbar-color: var(--secondary) #f1f1f1;
}

/* CHROME SCROLLBAR */
.opac-table-box::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.opac-table-box::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 20px;
}

.opac-table-box::-webkit-scrollbar-thumb {
  background: var(--secondary);
  border-radius: 20px;
}

.opac-table-box::-webkit-scrollbar-thumb:hover {
  background: var(--primary);
}

.opac-table {
  margin-bottom: 0;
}

.opac-table thead th {
  background: var(--primary);
  color: #fff;
  text-transform: uppercase;
  font-size: 13px;
}

.opac-table tbody td {
  font-size: 14px;
  color: #222;
}

.no-result {
  color: var(--secondary);
  font-weight: 800;
}




</style>