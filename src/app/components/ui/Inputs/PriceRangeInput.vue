<script setup>
import { ref } from 'vue'

const priceFiltered = ref(null)
</script>

<template>
  <div class="input-range-wrapper">
    <input type="range" min="10" max="100" v-model="priceFiltered" />
    <h5>Price: ${{ priceFiltered }}</h5>
  </div>
</template>

<style lang="scss" scoped>
.input-range-wrapper {
  margin-top: 44px;
  max-width: 261px;

  input {
    width: 100%;
  }

  h5 {
    margin-top: 8px;
    color: $dark-gray;
  }
}
</style>
