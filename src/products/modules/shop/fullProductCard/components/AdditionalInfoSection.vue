<script setup>
import { ref, computed } from 'vue'
import ReviewForm from './ReviewForm.vue'
import ReviewComment from './ReviewComment.vue'

const props = defineProps({
  description: String,
  weight: Number,
  dimentions: String,
  colors: Array,
  material: String,
  title: String,
  comments: Object
})

const state = ref(1)

const sortedComments = computed(() => {
  return props.comments.slice().sort((a, b) => (a.date > b.date ? -1 : 1))
})
</script>

<template>
  <div class="product-card__additional-info">
    <div class="additional-info__navigation">
      <h3 :class="{ active: state === 1 }" @click="state = 1">Description</h3>
      <h3 :class="{ active: state === 2 }" @click="state = 2">Additional information</h3>
      <h3 :class="{ active: state === 3 }" @click="state = 3">Reviews({{ comments.length }})</h3>
    </div>
    <div class="additional-info__content">
      <p v-if="state === 1" class="content__description">
        {{ description }}
      </p>
      <div v-if="state === 2" class="content__additional-parameters">
        <ul>
          <li>
            Weight:<span>{{ weight }} kg</span>
          </li>
          <li>
            Dimentions:<span>{{ dimentions }} cm</span>
          </li>
          <li>
            Colors:<span>{{ colors.join(', ') }}</span>
          </li>
          <li>
            Material:<span>{{ material }}</span>
          </li>
        </ul>
      </div>
      <div v-if="state === 3" class="content__reviews">
        <div class="reviews__comments">
          <h3>{{ comments.length }} Reviews for {{ title }}</h3>
          <ReviewComment v-for="comment in sortedComments" :key="comment.id" :comment="comment" />
        </div>
        <div class="reviews__add-comment">
          <h3>Add a Review</h3>
          <h5>Your email address will not be published. Required fields are marked *</h5>
          <ReviewForm />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-card__additional-info {
  margin-top: 100px;

  .additional-info__navigation {
    padding-bottom: 34px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap: clamp(2.375rem, 1.057rem + 6.59vw, 6rem);
    border-bottom: 1px solid $light-gray;

    h3 {
      font-size: clamp(1rem, 0.909rem + 0.45vw, 1.25rem);
      color: $dark-gray;
      position: relative;
      cursor: pointer;
      text-align: center;
    }

    .active {
      color: $black;

      &::after {
        position: absolute;
        content: '';
        bottom: -34px;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: $black;
      }
    }

    @include mobile() {
      padding-block: 15px;
      flex-direction: column;
      align-items: flex-start;
      border-top: 1px solid $light-gray;

      .active::after {
        bottom: 0;
      }
    }
  }

  .additional-info__content {
    margin-top: 39px;

    .content__description {
      color: $dark-gray;
    }

    .content__additional-parameters {
      ul {
        display: flex;
        flex-direction: column;
        justify-content: start;
        gap: 10px;
      }

      li span {
        margin-left: 10px;
        text-transform: capitalize;
        color: $dark-gray;
      }
    }

    .content__reviews {
      display: flex;
      justify-content: space-between;
      gap: 20px;

      .reviews__comments {
        max-width: 50%;
        display: flex;
        flex-direction: column;

        h3 {
          font-weight: 500;
        }
      }

      .reviews__add-comment {
        max-width: 50%;
        display: flex;
        flex-direction: column;

        h3 {
          font-weight: 500;
        }

        h5 {
          margin-top: 11px;
          color: $dark-gray;
        }
      }

      @include mobile-xl() {
        flex-direction: column;

        .reviews__comments,
        .reviews__add-comment {
          max-width: 100%;
        }
      }
    }
  }
}
</style>
