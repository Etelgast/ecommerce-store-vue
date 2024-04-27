<script setup>
import AppHeader from './../components/headers/AppHeader.vue'
import AppFooter from '../components/footers/AppFooter.vue'
import AppContentPane from '../components/AppContentPane.vue'
</script>

<template>
  <div class="app">
    <AppHeader />

    <main class="main-pane">
      <AppContentPane />
    </main>

    <AppFooter />
  </div>
</template>

<style lang="scss">
body {
  &:has(.burger-menu__wrapper.active) {
    overflow: hidden;
  }
}

.app {
  display: flex;
  flex-direction: column;
  padding-inline: $padding-inline;
  padding-block: clamp(1rem, 0.136rem + 4.32vw, 3.375rem);
  min-height: 100vh;
  min-height: 100svh;
}

.main-pane {
  // margin-top: clamp(1rem, 0.773rem + 1.14vw, 1.625rem);
  // max-width: 80ch;
}
</style>
