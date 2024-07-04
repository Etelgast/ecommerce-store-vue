<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import { getFullCards } from '@/app/services/products'

import AdditionalInfoSection from '@/products/modules/shop/fullProductCard/components/AdditionalInfoSection.vue'
import OverviewImages from '@/products/modules/shop/fullProductCard/components/OverviewImages.vue'
import DescriptionSection from '@/products/modules/shop/fullProductCard/components/DescriptionSection.vue'

const fullProductCard = ref(null)
const isHeaderMessageActive = ref(false)

const route = useRoute()

async function getCard() {
  const id = route.params.id
  try {
    const { data } = await getFullCards(id)
    openProductCard(data)
  } catch (err) {
    console.log(err)
  }
}

function openProductCard(data) {
  fullProductCard.value = Object.assign({}, ...data)
}

const activateHeaderMessage = () => {
  isHeaderMessageActive.value = true
  window.scrollTo({ top: 0 })
  setTimeout(() => {
    isHeaderMessageActive.value = false
  }, 8000)
}

onMounted(() => {
  getCard()
})
</script>

<template>
  <Transition name="bounce">
    <section v-show="isHeaderMessageActive" class="header-message">
      <span>The item added to your Shopping bag.</span>
      <RouterLink :to="{ name: 'drawer' }">View Cart</RouterLink>
    </section>
  </Transition>
  <div v-if="fullProductCard" class="product-card">
    <div class="product-card__main-info">
      <OverviewImages
        :main-image="fullProductCard.img"
        :additional-images="fullProductCard.additional_img"
      />
      <DescriptionSection
        :full-product-card="fullProductCard"
        @adding-product-to-cart="activateHeaderMessage"
      />
    </div>
    <AdditionalInfoSection
      :description="fullProductCard.description"
      :weight="fullProductCard.weight"
      :dimentions="fullProductCard.dimentions"
      :colors="fullProductCard.colors"
      :material="fullProductCard.material"
      :title="fullProductCard.title"
      :comments="fullProductCard.comments"
    />
  </div>
</template>

<style lang="scss">
.header-message {
  padding-block: clamp(0.563rem, 0.335rem + 1.14vw, 1.188rem);
  padding-inline: clamp(2.813rem, 2.131rem + 3.41vw, 4.688rem);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 15px;
  background-color: $light-gray;
  border-top: 2px solid $accent;

  span {
    display: block;
    position: relative;
    font-family: $main-font;

    &::before {
      content: url('/assets/icons/added-product.svg');
      position: absolute;
      top: 0;
      left: -30px;
      text-align: center;
    }
  }

  a {
    text-transform: uppercase;
    color: $accent;
    font-weight: 600;
  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.product-card {
  margin-top: clamp(1.063rem, 0.085rem + 4.89vw, 3.75rem);
}

.product-card__main-info {
  display: flex;
  gap: 40px;
  max-height: 680px;
}

@media (max-width: 930px) {
  .product-card__main-info {
    max-height: none;
    flex-direction: column;
  }

  .main-info__main-image img {
    max-height: 480px !important;
  }

  .main-info__description {
    justify-content: center;
    flex-direction: column;

    .description__adding {
      .counter {
        display: none;
      }
    }
  }
}
</style>
