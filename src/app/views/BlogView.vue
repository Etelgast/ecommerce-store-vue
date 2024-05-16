<script setup>
import { computed, onBeforeMount, ref, watch } from 'vue'
import router from '../router'

import { getBlogArticles, getFilteredBlogArticles } from '../services/products'
import { transformDate } from '@/products/composables/useTransfromDate'
import debounce from 'lodash.debounce'

import SearchInput from '@/app/components/ui/inputs/SearchInput.vue'
import PaginationSection from '@/app/components/blocks/PaginationSection.vue'

const articles = ref([])

const meta = ref({
  currentPage: 1,
  totalPages: null
})

const categories = ['fashion', 'style', 'accessories', 'season']

const queryParams = ref({
  title: '',
  categorie: null
})

async function gettingBlogArticles() {
  try {
    const { data } = await getBlogArticles(meta.value.currentPage)
    articles.value = data.items.reverse()
    meta.value.totalPages = data.meta.total_pages
  } catch (err) {
    console.log(err)
  }
}

async function openingNewPage(page) {
  try {
    const { data } = await getBlogArticles(page)
    articles.value = data.items.reverse()
    meta.value.currentPage = data.meta.current_page
    scrollToTop()
  } catch (err) {
    console.log(err)
  }
}

function scrollToTop() {
  setTimeout(() => {
    window.scrollTo({ top: 0 })
  }, 50)
}

const updatingArticlesList = debounce(async () => {
  try {
    const { data } = await getFilteredBlogArticles(queryParams.value)
    articles.value = data.items
    meta.value.totalPages = data.meta.total_pages
    meta.value.currentPage = data.meta.current_page
  } catch (err) {
    console.log(err)
  }
}, 300)

function updatingCategorieParams(element) {
  if (queryParams.value.categorie == element) {
    queryParams.value.categorie = null
  } else {
    queryParams.value.categorie = element
  }
}

async function openingArticlePage(id) {
  router.push({ name: 'article', params: { id: id } })
}

watch(queryParams, updatingArticlesList, { deep: true })

const isErrorMessageVisible = computed(() => {
  return articles.value.length === 0
})

const transfromArticleCategoriesWithDate = computed(() => {
  return (article) => {
    return article.categories + ' ' + '- ' + transformDate(article.date)
  }
})

onBeforeMount(() => {
  gettingBlogArticles()
})
</script>

<template>
  <div class="blog">
    <nav class="blog-navigation">
      <h2>Blog</h2>
      <SearchInput v-model="queryParams.title" />
      <h3>Categories</h3>
      <div class="blog-navigation__categories">
        <ul>
          <li
            v-for="categorie in categories"
            :key="categorie"
            class="categorie"
            :class="{ 'categorie--active': categorie === queryParams.categorie }"
            @click="updatingCategorieParams(categorie)"
          >
            {{ categorie }}
          </li>
        </ul>
      </div>
    </nav>
    <section class="blog-content">
      <TransitionGroup name="list">
        <article
          v-for="article in articles"
          :key="article.id"
          class="blog-content__article"
          @click="openingArticlePage(article.id)"
        >
          <img :src="`/src/products/images/${article.image}`" alt="Article Image" />
          <h5>{{ transfromArticleCategoriesWithDate(article) }}</h5>
          <h2>{{ article.title }}</h2>
          <p>{{ article.content }}</p>
          <a href="">Read More</a>
        </article>
      </TransitionGroup>
      <div class="error-message" v-if="isErrorMessageVisible">
        <p>Nothing was found for your request</p>
      </div>
      <PaginationSection
        :current-page="meta.currentPage"
        :total-pages="meta.totalPages"
        :opening-new-page="openingNewPage"
        :class="{ inactive: isErrorMessageVisible }"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.blog {
  margin-top: clamp(2.438rem, 1.142rem + 6.48vw, 6rem);
  display: flex;
  gap: 39px;

  @include mobile-xl {
    flex-direction: column;

    .shop__input-wrapper,
    h2 {
      display: none;
    }

    .blog-navigation {
      order: 1;
    }
  }
}

.blog-navigation {
  display: flex;
  flex-direction: column;
  gap: clamp(1.25rem, 0.886rem + 1.82vw, 2.25rem);
  max-width: 262px;

  h2 {
    font-weight: 500;
  }

  h3 {
    font-weight: 500;
    margin-top: 23px;
  }

  .blog-navigation__categories {
    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;

      li {
        text-transform: capitalize;
        color: $dark-gray;
        cursor: pointer;
        transition: all 0.4s ease;
      }

      li:hover,
      .categorie--active {
        color: $black;
      }
    }
  }
}

.blog-content {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 450px), 1fr));
  gap: clamp(2.438rem, 2.233rem + 1.02vw, 3rem);
  align-items: center;
  justify-content: center;

  @include transition-article-blog-list('list');

  .blog-content__article {
    display: flex;
    flex-direction: column;
    cursor: pointer;

    img {
      width: 100%;
      object-fit: cover;
    }

    h5 {
      margin-top: 25px;
      color: $dark-gray;
      text-transform: capitalize;
    }

    p {
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      color: $dark-gray;
    }

    a {
      color: $accent;
      font-weight: 500;
      transition: all 0.4s ease;
    }

    a:hover {
      color: $black;
    }
  }

  .error-message {
    grid-column: 1 / -1;
    text-align: center;
    padding: 0 1rem;
  }

  .inactive {
    visibility: hidden;
  }
}
</style>
