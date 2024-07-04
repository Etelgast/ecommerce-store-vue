<script setup>
const modelValue = defineModel()
</script>

<template>
  <div class="shop__input-wrapper">
    <input class="shop__input-search" type="text" placeholder="Search..." v-model="modelValue" />
    <img src="/assets/icons/search.svg" alt="Search" />
  </div>
</template>

<style lang="scss" scoped>
.shop__input-wrapper {
  position: relative;

  .shop__input-search {
    width: 261px;
    height: 35px;
    padding: 2px 0 11px 0;
    border: none;
    border-bottom: 1px solid $gray !important;
    color: $dark-gray;
    font-size: 16px;
    font-weight: 400;
  }

  img {
    position: absolute;
    bottom: 15px;
    right: 0;
    cursor: pointer;
  }
}
</style>
