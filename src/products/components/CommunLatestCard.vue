<script setup>
import HeartFavouriteIcon from '@/app/components/ui/icons/HeartFavouriteIcon.vue'
import BadgeCard from '@/app/components/ui/icons/BadgeCard.vue'
import { useFavourites } from './../composables/useFavourites'
import { useProducts } from '../composables/useProducts'

import router from '@/app/router/index'
import { computed } from 'vue'

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
          <svg
            class="action-icon__drawer"
            :class="isAddedToProducts ? 'added' : ''"
            @click="toggleProduct(props.product, defaultAmount)"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            stroke="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.05473 16.1624H8.05588C8.05683 16.1624 8.05778 16.1622 8.05874 16.1622H21.3379C21.6648 16.1622 21.9522 15.9454 22.0421 15.631L24.9718 5.37713C25.0349 5.15607 24.9907 4.91841 24.8524 4.73492C24.7139 4.55144 24.4974 4.44348 24.2676 4.44348H6.36558L5.84202 2.08733C5.76744 1.75221 5.47028 1.51379 5.12695 1.51379H0.732422C0.327873 1.51379 0 1.84167 0 2.24622C0 2.65076 0.327873 2.97864 0.732422 2.97864H4.53949C4.63219 3.39616 7.04498 14.2539 7.18384 14.8786C6.40545 15.2169 5.85937 15.993 5.85937 16.8947C5.85937 18.1062 6.84509 19.0919 8.05664 19.0919H21.3379C21.7424 19.0919 22.0703 18.764 22.0703 18.3595C22.0703 17.9549 21.7424 17.6271 21.3379 17.6271H8.05664C7.65285 17.6271 7.32422 17.2984 7.32422 16.8947C7.32422 16.4914 7.65171 16.1634 8.05473 16.1624ZM23.2965 5.90833L20.7853 14.6974H8.6441L6.69098 5.90833H23.2965Z"
              fill="black"
            />
            <path
              d="M7.32422 21.2889C7.32422 22.5005 8.30994 23.4862 9.52148 23.4862C10.733 23.4862 11.7187 22.5005 11.7187 21.2889C11.7187 20.0774 10.733 19.0917 9.52148 19.0917C8.30994 19.0917 7.32422 20.0774 7.32422 21.2889ZM9.52148 20.5565C9.92527 20.5565 10.2539 20.8852 10.2539 21.2889C10.2539 21.6927 9.92527 22.0214 9.52148 22.0214C9.1177 22.0214 8.78906 21.6927 8.78906 21.2889C8.78906 20.8852 9.1177 20.5565 9.52148 20.5565Z"
              fill="black"
            />
            <path
              d="M17.6758 21.2889C17.6758 22.5005 18.6615 23.4862 19.873 23.4862C21.0846 23.4862 22.0703 22.5005 22.0703 21.2889C22.0703 20.0774 21.0846 19.0917 19.873 19.0917C18.6615 19.0917 17.6758 20.0774 17.6758 21.2889ZM19.873 20.5565C20.2768 20.5565 20.6055 20.8852 20.6055 21.2889C20.6055 21.6927 20.2768 22.0214 19.873 22.0214C19.4693 22.0214 19.1406 21.6927 19.1406 21.2889C19.1406 20.8852 19.4693 20.5565 19.873 20.5565Z"
              fill="black"
            />
          </svg>
          <img
            class="action-icon__eye"
            src="/src/app/assets/icons/eye.svg"
            @click="getFullProductCard"
            alt="Full Card"
          />
          <HeartFavouriteIcon
            class="action-icon__heart"
            @click="toggleFavourite(props.product.id)"
            :class="{ selected: isFavourite }"
            :isFavourite="isInFavourite(props.product.id)"
          />
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

    &.added {
      fill: black;
      stroke: black;
    }
  }
}
</style>
