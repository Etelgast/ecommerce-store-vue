<script setup>
import HeartFavouriteIcon from '@/app/components/ui/icons/HeartFavouriteIcon.vue'
import BadgeCard from '@/app/components/ui/icons/BadgeCard.vue'
import { useFavourites } from './../composables/useFavourites'

import router from './../../app/router/index'

const { toggleFavourite, isInFavourite } = useFavourites()

defineProps({
  title: String,
  price: Number,
  img: String,
  id: Number,
  inStock: Boolean,
  onSale: Boolean
})

async function getFullProductCard(id) {
  router.push({ name: 'card', params: { id: id } })
}
</script>

<template>
  <div class="shop-card" @click="getFullProductCard(id)">
    <div class="wrapper">
      <img class="card-img" :src="`/src/products/images/${img}`" alt="" />
      <BadgeCard :in-stock="inStock" :on-sale="onSale" />
      <div class="card-actions">
        <div class="card-actions__flex">
          <img class="action-icon__drawer" src="./../../app/assets/icons/drawer-card.svg" alt="" />
          <img class="action-icon__eye" src="./../../app/assets/icons/eye.svg" alt="" />
          <HeartFavouriteIcon
            class="action-icon__heart"
            @click="toggleFavourite(id)"
            :class="{ selected: isInFavourite(id) }"
            :isFavourite="isInFavourite(id) ? true : false"
          />
        </div>
      </div>
    </div>
    <div class="description">
      <h3>{{ title }}</h3>
      <h3>$ {{ price }}</h3>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shop-card {
  // width: clamp(136px, 32%, 380px);
  // height: clamp(188px, 39%, 479px);

  // max-width: 380px;
  // max-height: 479px;

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

  & > * {
    cursor: pointer;
  }

  .action-icon__eye {
    width: 32px;
    height: 32px;
  }

  .action-icon__drawer {
    width: 28px;
    height: 28px;
  }
}
</style>
