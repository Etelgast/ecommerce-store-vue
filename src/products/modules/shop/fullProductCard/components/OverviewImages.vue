<script setup>
defineProps({
  mainImage: String,
  additionalImages: Array
})
</script>

<template>
  <div class="main-info__side-images">
    <div class="side-img" v-for="(additionalImage, index) in additionalImages" :key="index">
      <img :src="'/assets/images/' + additionalImage" alt="Additional Image" />
    </div>
  </div>
  <div class="main-info__main-image">
    <img :src="'/assets/images/' + mainImage" alt="Main Image" />
  </div>
</template>

<style lang="scss" scoped>
.main-info__side-images {
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-width: 120px;
  height: 100%;

  .side-img {
    width: 100%;
    height: 120px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
  }
}

.main-info__main-image {
  max-width: 640px;
  width: 100%;

  img {
    width: 100%;
    max-height: 680px;
    border-radius: 8px;
  }
}

@media (max-width: 1200px) {
  .main-info__side-images {
    display: none !important;
  }
}
</style>
