<script></script>

<template>
  <button class="black-btn">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
.black-btn {
  color: $white;
  font-weight: 600;
  border-radius: 4px;
  border: 1px solid $black;
  background: $black;
  text-transform: uppercase;
  font-size: 16px;
  transition: all 0.6s ease;

  &[disabled] {
    background-color: $dark-gray;
    border: 1px solid $dark-gray;
  }

  &:not([disabled]):hover {
    background: $white;
    color: $black;
  }
}
</style>
