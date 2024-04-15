<script setup>
import route from '@/app/router'
import { ref, computed } from 'vue'

import BurgerMenu from './../blocks/BurgerMenu.vue'

const isBurgerMenuActive = ref(false)

const isHomePage = computed(() => {
  return route.name === 'home'
})
</script>

<template>
  <header :class="isHomePage || isBurgerMenuActive ? 'header header__no-border' : 'header'">
    <div class="header-wrapper">
      <RouterLink :to="{ name: 'home' }">
        <img src="./../../assets/icons/logo.png" alt="Logo" />
      </RouterLink>
      <nav class="nav">
        <ul class="link-items">
          <li>
            <RouterLink class="link" :to="{ name: 'shop' }" aria-label="Shop List">
              Shop
            </RouterLink>
          </li>
          <li>
            <RouterLink class="link" :to="{ name: 'blog' }" aria-label="Blog"> Blog </RouterLink>
          </li>
          <li>
            <RouterLink class="link" :to="{ name: 'about-us' }" aria-label="About Us">
              Our story
            </RouterLink>
          </li>
        </ul>

        <span class="divider"></span>

        <ul class="link-icons">
          <li>
            <RouterLink class="link" :to="{ name: 'search' }" aria-label="Search">
              <img src="./../../assets/icons/search.svg" alt="" />
            </RouterLink>
          </li>
          <li>
            <RouterLink class="link" :to="{ name: 'drawer' }" aria-label="Shop Cart">
              <img src="./../../assets/icons/drawer.svg" alt="" />
            </RouterLink>
          </li>
          <li>
            <RouterLink class="link" :to="{ name: 'login' }" aria-label="Account">
              <img src="./../../assets/icons/profile.svg" alt="" />
            </RouterLink>
          </li>
        </ul>
      </nav>

      <nav class="nav mobile">
        <RouterLink class="link" :to="{ name: 'search' }" aria-label="Shop Cart">
          <img src="./../../assets/icons/drawer.svg" alt="" />
        </RouterLink>
        <img
          @click="isBurgerMenuActive = !isBurgerMenuActive"
          class="burger-menu"
          src="./../../assets/icons/burger-menu.svg"
          alt="Menu"
          role="button"
        />
      </nav>

      <div class="search-input__wrapper">
        <input class="header__search-input" type="search" placeholder="Search" />
        <img src="./../../assets/icons/mobile-search.svg" alt="search" />
      </div>

      <BurgerMenu :is-burger-menu-active="isBurgerMenuActive" v-model="isBurgerMenuActive" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  padding-bottom: 17px;
  border-bottom: 1px solid $gray;

  &.header__no-border {
    border-bottom: none;
  }
}

.header-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  flex: 1 1 666px;
  gap: 1rem;
}

.nav {
  display: flex;
  align-items: center;
  gap: clamp(1.5rem, 0.955rem + 2.73vw, 3rem); //48px;

  @include tablet-s() {
    width: 100%;
    justify-content: space-between;
  }

  @include mobile-xl() {
    display: none;
  }
}

.link-items {
  display: flex;
  align-items: center;
  gap: 64px;

  li {
    position: relative;
    font-size: 20px;
    cursor: pointer;
  }

  a::before {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: $black;
    transition: width 0.4s ease;
  }

  a:hover::before {
    width: 100%;
  }
}

.nav.mobile {
  display: none;

  @include mobile-xl() {
    display: flex;
  }
}

.search-input__wrapper {
  display: none;
  width: 100%;
  position: relative;

  @include mobile-xl() {
    display: block;
  }

  .header__search-input {
    height: 36px;
    background: $light-gray;
    border-radius: 4px;
    padding-inline: 30px 10px;
    padding-block: 6px;
    width: 100%;
    border: none;
    color: $dark-gray;
    font-weight: 600;
  }

  img {
    position: absolute;
    top: 12px;
    left: 10px;
  }
}

.link-icons {
  display: flex;
  align-items: center;
  gap: 39px;
}

.burger-menu {
  display: none;
  cursor: pointer;

  @include mobile-xl() {
    display: block;
  }
}

.divider {
  width: 1px;
  height: 17px;
  background: #707070;

  @include tablet-s() {
    display: none;
  }
}
</style>
