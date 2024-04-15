<script setup>
import { onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'

import { getFullCards } from '@/app/services/products'

import AdditionalInfoSection from '@/products/components/FullProductCard/AdditionalInfoSection.vue'
import OverviewImages from '@/products/components/FullProductCard/OverviewImages.vue'
import DescriptionSection from '@/products/components/FullProductCard/DescriptionSection.vue'

const fullProductCard = ref()

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

onBeforeMount(() => {
  getCard()
})
</script>

<template>
  <div v-if="fullProductCard" class="product-card">
    <div class="product-card__main-info">
      <OverviewImages
        :main-image="fullProductCard.main_img"
        :additional-images="fullProductCard.additional_img"
      />
      <DescriptionSection
        :description="fullProductCard.description"
        :price="fullProductCard.price"
        :rate="fullProductCard.rate"
        :categories="fullProductCard.categories"
        :title="fullProductCard.title"
        :comments="fullProductCard.comments"
        :id="fullProductCard.id"
        :main-image="fullProductCard.main_img"
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
