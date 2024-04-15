<template>
  <button class="white-btn">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.white-btn {
  min-width: 96px;
  // padding: 13px 32px;
  padding-inline: clamp(0.625rem, 0.125rem + 2.5vw, 2rem);
  padding-block: clamp(0.375rem, 0.216rem + 0.8vw, 0.813rem);
  border-radius: 6px;
  border: 2px solid $white;
  color: $white;
  font-size: clamp(0.75rem, 0.568rem + 0.91vw, 1.25rem);
  font-weight: 700;
  transition: all 0.6s ease-in;

  &:hover {
    color: $black;
    background-color: $white;
  }
}
</style>
