<script></script>

<template>
  <button class="action-card__btn">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.action-card__btn {
  // padding-block: clamp(0.375rem, 0.148rem + 1.14vw, 1rem);
  // padding-inline: clamp(6.625rem, 6.148rem + 2.39vw, 7.938rem);
  font-size: 16px;
  color: $black;
  border: 1px solid $black;
  border-radius: 4px;
  font-family: $main-font;
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.6s ease-in;

  &:hover {
    color: $white;
    background-color: $black;
  }
}
</style>
