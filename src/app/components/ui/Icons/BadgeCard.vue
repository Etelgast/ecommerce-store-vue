<script setup>
defineProps({
  inStock: Boolean,
  onSale: Boolean
})
</script>

<template>
  <div class="badge" v-if="!inStock">Sold Out</div>
  <div class="badge" v-else-if="onSale">On Sale</div>
</template>

<style lang="scss" scoped>
.badge {
  position: absolute;
  top: 16px;
  left: 16px;
  width: auto;
  padding: 2px 8px;
  color: $white;
  font-family: $main-font;
  border-radius: 4px;
  background: $accent;
}
</style>
