<script setup>
import { computed } from 'vue'
import router from '@/app/router/index'

import { useFavourites } from '@/products/composables/useFavourites'
import { useProducts } from '@/products/composables/useProducts'

import BaseHeartIcon from '@/app/components/ui/icons/BaseHeartIcon.vue'
import BadgeCard from '@/app/components/ui/icons/BadgeCard.vue'
import BaseDrawerIcon from '@/app/components/ui/icons/BaseDrawerIcon.vue'

const { toggleFavourite, isInFavourite } = useFavourites()
const { toggleProduct, isInProducts } = useProducts()

const props = defineProps({
  product: Object
})

const defaultAmount = 1

const getFullProductCard = () => {
  router.push({ name: 'card', params: { id: props.product.id } })
}

const isFavourite = computed(() => {
  return isInFavourite(props.product.id)
})

const isAddedToProducts = computed(() => {
  return isInProducts(props.product.id)
})
</script>

<template>
  <div class="shop-card">
    <div class="wrapper">
      <img
        class="card-img"
        :src="`/src/products/images/${props.product.img}`"
        alt="Product"
        @click.self="getFullProductCard"
      />
      <BadgeCard :in-stock="props.product.inStock" :on-sale="props.product.onSale" />
      <div class="card-actions">
        <div class="card-actions__flex">
          <BaseDrawerIcon
            @click="toggleProduct(props.product, defaultAmount)"
            :is-added="isAddedToProducts"
          />
          <img
            class="action-icon__eye"
            src="/src/app/assets/icons/eye.svg"
            @click="getFullProductCard"
            alt="Full Card"
          />
          <BaseHeartIcon @click="toggleFavourite(props.product.id)" :isFavourite="isFavourite" />
        </div>
      </div>
    </div>
    <div class="description">
      <h3>{{ props.product.title }}</h3>
      <h3>$ {{ props.product.price }}</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shop-card {
  display: flex;
  flex-direction: column;
  gap: clamp(0.375rem, -0.034rem + 2.05vw, 1.5rem);
  cursor: pointer;

  .description {
    display: flex;
    flex-direction: column;
    gap: clamp(0.25rem, -0.023rem + 1.36vw, 1rem);

    h3 {
      font-size: clamp(0.875rem, 0.739rem + 0.68vw, 1.25rem);
    }

    :last-child {
      color: $accent;
      font-weight: 500;
    }
  }
}

.wrapper {
  position: relative;

  .card-img {
    width: 100%;
    height: auto;
    aspect-ratio: 1;

    max-height: 380px;
    object-fit: cover;
    border-radius: 8px;
  }

  .card-actions {
    position: absolute;
    display: none;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &:hover {
    .card-actions {
      display: block;
    }

    .card-img {
      opacity: 0.6;
    }
  }
}

.card-actions__flex {
  display: flex;
  align-items: center;
  gap: 30px;

  .action-icon__eye {
    width: 32px;
    height: 32px;
  }
}
</style>
