<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'

import { transformDate } from '../composables/useTransfromDate'

import { getFullArticle } from '../../app/services/products'

import ThirdPartyLinks from '@/app/components/blocks/ThirdPartyLinks.vue'

const route = useRoute()

const article = ref()

async function getArticle() {
  let articleId = route.params.id

  try {
    const { data } = await getFullArticle(articleId)
    article.value = Object.assign({}, ...data)
  } catch (err) {
    console.log(err)
  }
}

onBeforeMount(() => {
  getArticle()
})
</script>

<template>
  <div class="article" v-if="article">
    <div class="article__header">
      <h1>{{ article.title }}</h1>
      <h3>
        by <span>{{ article.author }}</span> - {{ transformDate(article.date) }}
      </h3>
    </div>
    <img :src="'/src/products/images/' + article.main_img" alt="Main Image of Article" />
    <div class="article-wrapper">
      <div class="article__content">
        <p>{{ article.content }}</p>
      </div>
      <div class="article__footer">
        <div class="footer__categories">
          Tags <span class="footer-line"></span>
          <span class="categories-array">{{ article.categories.join(', ') }}</span>
        </div>
        <div class="footer__third-party">
          Share <span class="footer-line"></span> <ThirdPartyLinks />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.article {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &__header {
    text-align: center;

    h3 {
      margin-top: clamp(0rem, -0.364rem + 1.82vw, 1rem);
      color: $dark-gray;

      span {
        color: $black;
        text-transform: uppercase;
      }
    }
  }

  img {
    margin-top: clamp(1.5rem, 1.159rem + 1.7vw, 2.438rem);
    width: 100%;
    object-fit: cover;
  }

  &__content {
    max-width: 750px;
  }

  p {
    margin-top: clamp(1rem, -0.091rem + 5.45vw, 4rem);
    white-space: pre-line;
  }

  &__footer {
    margin-top: clamp(2.875rem, 1.852rem + 5.11vw, 5.688rem);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 34px;

    .footer__categories,
    .footer__third-party {
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: $main-font;
    }

    .categories-array {
      color: $dark-gray;
    }

    .footer-line {
      display: inline-block;
      width: 64px;
      height: 1px;
      background-color: $black;
    }
  }
}
</style>
