<script setup>
defineProps({
  totalPages: Number,
  currentPage: Number,
  openingNewPage: Function
})
</script>

<template>
  <div class="pagination-wrapper">
    <span
      v-for="page in totalPages"
      :key="page"
      class="page-number"
      :class="{ active: page == currentPage }"
      @click="openingNewPage(page)"
      >{{ page }}</span
    >
  </div>
</template>

<style lang="scss" scoped>
.pagination-wrapper {
  justify-self: center;
  grid-column: 1 / -1;

  .page-number {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: 1px solid $light-gray;
    border-radius: 4px;
    font-family: $main-font;
    color: $black;
    cursor: pointer;
  }

  .page-number:not(:first-child) {
    margin-left: 9px;
  }

  .active {
    border: none;
    background-color: $black;
    color: $white;
  }
}
</style>
