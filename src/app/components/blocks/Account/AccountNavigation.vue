<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const stateValue = defineModel()
const isMobile = ref(false)

const navigationItems = [
  'dashboard',
  'orders',
  'downloads',
  'addresses',
  'account details',
  'logout'
]

function toggleState(index) {
  stateValue.value = index
}

function onResize() {
  isMobile.value = window.innerWidth <= 860
}

function scrollNavigationMobile(element, arrow) {
  arrow === 'right-arrow' ? (element.scrollLeft += 200) : (element.scrollLeft -= 200)
}

function scrollToElement(elementId) {
  document.getElementById(elementId).scrollIntoView({ inline: 'center' })
}

onMounted(() => {
  window.addEventListener('resize', onResize)
  onResize()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <nav v-show="!isMobile" class="account-navigation">
    <ul>
      <li
        v-for="(item, index) in navigationItems"
        :key="index"
        class="navigation__item"
        :class="{ active: stateValue === index }"
        @click="toggleState(index)"
      >
        {{ item }}
      </li>
    </ul>
  </nav>
  <nav v-show="isMobile" class="account-navigation mobile">
    <div class="left-arrow" @click="scrollNavigationMobile($refs.list, 'left-arrow')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </div>
    <ul ref="list">
      <li
        v-for="(item, index) in navigationItems"
        :key="index"
        :id="index"
        class="navigation__item"
        :class="{ active: stateValue === index }"
        @click="toggleState(index), scrollToElement(index)"
      >
        {{ item }}
      </li>
    </ul>
    <div class="right-arrow" @click="scrollNavigationMobile($refs.list, 'right-arrow')">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.account-navigation {
  margin-top: 64px;

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 49px;
    padding-bottom: 34px;
    border-bottom: 1px solid $light-gray;

    li {
      position: relative;
      text-align: center;
      white-space: nowrap;
      font-size: clamp(1rem, 0.909rem + 0.45vw, 1.25rem);
      text-transform: capitalize;
      color: $dark-gray;
      cursor: pointer;
    }

    .active {
      color: $black;
      &::after {
        position: absolute;
        content: '';
        bottom: -34px;
        left: 0;
        height: 1px;
        width: 100%;
        background-color: $black;
      }
    }
  }
}

.account-navigation.mobile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  .left-arrow,
  .right-arrow {
    padding-top: 5px;
    align-self: start;
    cursor: pointer;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  ul {
    scroll-behavior: smooth;
    overflow-y: hidden;
    overflow-x: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  ul::-webkit-scrollbar {
    display: none;
  }
}
</style>
