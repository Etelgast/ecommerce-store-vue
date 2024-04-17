<script setup>
import OffersSlider from '@/app/components/ui/Sliders/OffersSlider.vue'
import ProductListView from '@/products/views/ProductListView.vue'
</script>

<template>
  <OffersSlider />

  <div class="shop-latest">
    <div class="top">
      <h1>Shop The Latest</h1>
      <router-link class="accent-link" to="/shop">View All</router-link>
    </div>
    <div class="shop-content-wrapper">
      <ProductListView />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shop-latest {
  margin-top: 74px;
}

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: clamp(1rem, 0.614rem + 1.93vw, 2.063rem);
  }
}

.accent-link {
  color: $accent;
  font-size: clamp(0.75rem, 0.568rem + 0.91vw, 1.25rem);
  font-weight: 500;
}

.shop-content-wrapper {
  margin-top: clamp(0.813rem, 0.313rem + 2.5vw, 2.188rem);
}
</style>
