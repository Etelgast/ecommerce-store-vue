<script setup>
import { transformDate } from '@/products/composables/useTransfromDate'

defineProps({
  comment: Object
})
</script>

<template>
  <article class="review-comment">
    <div class="review__title">
      <h3>{{ comment.name }}</h3>
      <span>{{ transformDate(comment.date) }}</span>
    </div>
    <div class="description__rate-stars">
      <img
        v-for="rate in comment.rate"
        :key="rate"
        src="/src/app/assets/icons/star.svg"
        alt="rate"
      />
    </div>
    <p>
      {{ comment.content }}
    </p>
  </article>
</template>

<style lang="scss" scoped>
.review-comment {
  margin-top: clamp(2.375rem, 1.511rem + 4.32vw, 4.75rem);
  padding-bottom: 39px;
  border-bottom: 1px solid $light-gray;

  .review__title {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;

    span {
      font-family: $main-font;
      color: $dark-gray;
    }
  }

  .description__rate-stars {
    margin-top: 16px;
    display: flex;
    gap: 10px;
  }

  p {
    margin-top: 24px;
    color: $dark-gray;
  }
}
</style>
