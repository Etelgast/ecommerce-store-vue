<script setup>
import { onMounted, ref } from 'vue'
import { getOffersSlider } from '@/app/services/products'

import OffersSliderSkeleton from '@/app/components/ui/sliders/OffersSliderSkeleton.vue'
import WhiteButton from '@/app/components/ui/buttons/WhiteButton.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css'
import router from '@/app/router'

const isLoading = ref(true)

const offers = ref([])

const getOffers = async () => {
  try {
    const { data } = await getOffersSlider()
    offers.value = data
    isLoading.value = false
  } catch (err) {
    console.log(err)
  }
}

const openProductCardPage = (id) => {
  router.push({ name: 'card', params: { id: id } })
}

onMounted(() => {
  getOffers()
})
</script>

<template>
  <OffersSliderSkeleton v-if="isLoading" />
  <section v-else class="offer-slider">
    <Swiper :slides-per-view="1" :space-between="50" :modules="[Pagination]" :pagination="true">
      <swiper-slide class="swiper-slide" v-for="offer in offers" :key="offer.id">
        <article>
          <img :src="`/assets/images/${offer.img}`" alt="Offer" />
          <div class="content">
            <div class="content-text">
              <h1>{{ offer.name }}</h1>
              <h2>$ {{ offer.price }}</h2>
            </div>
            <div>
              <WhiteButton @click="openProductCardPage(offer.id)">View Product</WhiteButton>
            </div>
          </div>
        </article>
      </swiper-slide>
    </Swiper>
  </section>
</template>

<style lang="scss" scoped>
.offer-slider {
  margin-top: clamp(1rem, 0.773rem + 1.14vw, 1.625rem);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: clamp(22.125rem, 15.489rem + 33.18vw, 40.375rem);
  overflow: hidden;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  article {
    position: relative;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
  }
}

.content {
  position: absolute;
  bottom: clamp(1.625rem, -2.898rem + 22.61vw, 14.063rem);
  left: clamp(0.5rem, -0.455rem + 4.77vw, 3.125rem);
  display: flex;
  flex-direction: column;
  gap: clamp(0.75rem, -0.068rem + 4.09vw, 3rem);
  z-index: 2;
}

.content-text {
  display: flex;
  flex-direction: column;
  gap: clamp(0.188rem, -0.108rem + 1.48vw, 1rem);

  h1 {
    color: $white;
    font-size: clamp(1.25rem, 0.955rem + 1.48vw, 2.063rem);
  }

  h2 {
    font-size: clamp(0.75rem, 0.568rem + 0.91vw, 1.25rem);
    color: $white;
  }
}
</style>
