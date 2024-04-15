<script setup>
import { ref } from 'vue'

import { useFavourites } from '@/products/composables/useFavourites'
const { toggleFavourite, isInFavourite } = useFavourites()

import { useProducts } from '@/products/composables/useProducts'
const { toggleProduct, isInProducts, gettingAmount } = useProducts()

import ActionCardButton from '@/app/components/ui/Buttons/ActionCardButton.vue'
import HeartFavouriteIconSmall from '@/app/components/ui/Icons/HeartFavouriteIconSmall.vue'
import CardCounter from '@/app/components/ui/Buttons/CardCounter.vue'
import ThirdPartyLinks from '@/app/components/blocks/ThirdPartyLinks.vue'

const props = defineProps({
  title: String,
  price: String,
  rate: Number,
  comments: Array,
  description: String,
  id: Number,
  categories: Array,
  mainImage: String
})

const product = ref({
  id: props.id,
  title: props.title,
  price: props.price,
  amount: isInProducts(props.id) ? gettingAmount(props.id) : 1,
  mainImage: props.mainImage
})
</script>

<template>
  <div class="main-info__description">
    <div class="main-content">
      <div class="main-content__title">
        <h2>{{ title }}</h2>
        <h3>$ {{ price }}</h3>
      </div>

      <div class="main-content__center">
        <span class="description__rate">
          <div class="description__rate-stars">
            <img v-for="rate in rate" :key="rate" src="/src/app/assets/icons/star.svg" alt="rate" />
          </div>
          <h5>{{ comments.length }} customer review</h5></span
        >
        <p>
          {{ description }}
        </p>
        <div class="description__adding">
          <CardCounter v-model="product.amount"></CardCounter>
          <ActionCardButton @click="toggleProduct(product)">{{
            isInProducts(props.id) ? 'Remove from cart' : 'Add to cart'
          }}</ActionCardButton>
        </div>
        <div class="description__icons">
          <HeartFavouriteIconSmall
            @click="toggleFavourite(id)"
            :isFavourite="isInFavourite(id) ? true : false"
          />
          <span class="divider"></span>
          <ThirdPartyLinks />
        </div>
        <h5 class="description__cathegories">
          <b>Categories: </b>
          <span> {{ categories.join(', ') }}</span>
        </h5>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-info__description {
  display: flex;
  gap: clamp(1.5rem, 0.682rem + 4.09vw, 3.75rem);

  .main-content {
    max-width: 684px;
    flex-shrink: 2;

    .main-content__title {
      display: flex;
      flex-direction: column;
      gap: 23px;

      h3 {
        color: $accent;
      }
    }

    .main-content__center {
      margin-top: clamp(2rem, 1.273rem + 3.64vw, 4rem);
      display: flex;
      flex-direction: column;
      gap: 30px;

      .description__rate {
        display: flex;
        align-items: center;
        gap: 24px;

        .description__rate-stars {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        h5 {
          color: $dark-gray;
        }
      }

      .description__adding {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 23px;

        .counter {
          width: 120px;
        }

        .action-card__btn {
          flex-grow: 1;
          padding-block: clamp(0.375rem, 0.148rem + 1.14vw, 1rem);
        }
      }

      .description__icons {
        display: flex;
        align-items: center;
        gap: 40px;

        img,
        svg {
          cursor: pointer;
        }

        .divider {
          width: 1px;
          height: 17px;
          background-color: $dark-gray;
        }
      }

      .description__cathegories {
        span {
          text-transform: capitalize;
          color: $dark-gray;
        }
      }
    }
  }
}
</style>
