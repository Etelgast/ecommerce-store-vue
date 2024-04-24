<script setup></script>

<template>
  <section class="orders">
    <div class="orders__empty">
      <span>No order has been made yet.</span>
      <RouterLink to="shop">BROWSE PRODUCT</RouterLink>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.orders__empty {
  margin-top: 39px;
  width: 100%;
  padding: 19px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  background-color: $light-gray;
  border-top: 2px solid $accent;

  span {
    display: inline-block;
    font-family: $main-font;
  }

  a {
    color: $accent;
    font-weight: 600;
  }
}
</style>
