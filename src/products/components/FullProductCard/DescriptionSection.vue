<script setup>
import { onMounted, ref, watch } from 'vue'

import { useFavourites } from '@/products/composables/useFavourites'
const { toggleFavourite, isInFavourite } = useFavourites()

import { useProducts } from '@/products/composables/useProducts'
const { toggleProduct, isInProducts, gettingAmount, updatingAmount } = useProducts()

import ActionCardButton from '@/app/components/ui/buttons/ActionCardButton.vue'
import HeartFavouriteIconSmall from '@/app/components/ui/icons/HeartFavouriteIconSmall.vue'
import CardCounter from '@/app/components/ui/buttons/CardCounter.vue'
import ThirdPartyLinks from '@/app/components/blocks/ThirdPartyLinks.vue'

const props = defineProps({
  fullProductCard: Object
})

const emit = defineEmits(['addingProductToCart'])

const amount = ref(1)

function getAmountOfProduct() {
  if (isInProducts(props.fullProductCard.id)) {
    amount.value = gettingAmount(props.fullProductCard.id)
  }
}

function updateAmountOfProduct() {
  if (isInProducts(props.fullProductCard.id)) {
    updatingAmount(props.fullProductCard.id, amount)
  }
}

function showHeaderMessage() {
  if (isInProducts(props.fullProductCard.id)) {
    emit('addingProductToCart', true)
  }
}

onMounted(() => {
  getAmountOfProduct()
})

watch(amount, () => {
  updateAmountOfProduct()
})
</script>

<template>
  <div class="main-info__description">
    <div class="main-content">
      <div class="main-content__title">
        <h2>{{ props.fullProductCard.title }}</h2>
        <h3>$ {{ props.fullProductCard.price }}</h3>
      </div>

      <div class="main-content__center">
        <span class="description__rate">
          <div class="description__rate-stars">
            <img
              v-for="rate in props.fullProductCard.rate"
              :key="rate"
              src="/src/app/assets/icons/star.svg"
              alt="rate"
            />
          </div>
          <h5>{{ props.fullProductCard.comments.length }} customer review</h5></span
        >
        <p>
          {{ props.fullProductCard.description }}
        </p>
        <div class="description__adding">
          <CardCounter v-model="amount"></CardCounter>
          <ActionCardButton
            @click="toggleProduct(props.fullProductCard, amount), showHeaderMessage()"
          >
            {{ isInProducts(props.fullProductCard.id) ? 'Remove from cart' : 'Add to cart' }}
          </ActionCardButton>
        </div>
        <div class="description__icons">
          <HeartFavouriteIconSmall
            @click="toggleFavourite(props.fullProductCard.id)"
            :isFavourite="isInFavourite(props.fullProductCard.id) ? true : false"
          />
          <span class="divider"></span>
          <ThirdPartyLinks />
        </div>
        <h5 class="description__cathegories">
          <b>Categories: </b>
          <span> {{ props.fullProductCard.categories.join(', ') }}</span>
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
