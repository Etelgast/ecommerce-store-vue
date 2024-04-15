<script setup>
const props = defineProps({
  isBurgerMenuActive: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

function updateActiveState() {
  const isActive = false
  emit('update:modelValue', isActive)
}
</script>

<template>
  <div class="burger-menu__wrapper" :class="{ active: props.isBurgerMenuActive }">
    <ul>
      <li>
        <RouterLink class="link" :to="{ name: 'home' }" @click="updateActiveState">Home</RouterLink>
      </li>
      <li>
        <RouterLink class="link" :to="{ name: 'shop' }" @click="updateActiveState">Shop</RouterLink>
      </li>
      <li>
        <RouterLink class="link" :to="{ name: 'search' }" @click="updateActiveState"
          >About</RouterLink
        >
      </li>
      <li>
        <RouterLink class="link" :to="{ name: 'blog' }" @click="updateActiveState">Blog</RouterLink>
      </li>
      <li>
        <RouterLink class="link" :to="{ name: 'search' }" @click="updateActiveState"
          >Help</RouterLink
        >
      </li>
      <li>
        <RouterLink class="link" :to="{ name: 'contact-us' }" @click="updateActiveState"
          >Contact</RouterLink
        >
      </li>
      <li>
        <RouterLink class="link" :to="{ name: 'search' }" @click="updateActiveState"
          >Search</RouterLink
        >
      </li>
      <span></span>
      <li>
        <RouterLink class="link" :to="{ name: 'search' }" @click="updateActiveState"
          >My Account</RouterLink
        >
      </li>
      <li>
        <RouterLink class="link" :to="{ name: 'search' }" @click="updateActiveState"
          >Logout</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.burger-menu__wrapper {
  visibility: hidden;
  position: fixed;
  left: -300px;
  opacity: 0;
}

.burger-menu__wrapper.active {
  visibility: visible;

  top: calc(16vh - 39px);
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  padding-top: 13px;
  padding-inline: $padding-inline;
  background-color: #fff;

  z-index: 99;
  opacity: 1;
  transition: all 0.6s ease-in-out;

  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;

    li {
      font-size: 20px;
      cursor: pointer;
    }

    span {
      margin-top: 10px;
      width: 100%;
      height: 2px;
      background: $gray;
    }

    span ~ li {
      position: relative;
      padding-left: 30px;
      display: flex;
      align-items: center;

      &::before {
        margin-top: 2px;
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
      }
    }

    span + li::before {
      background-image: url(./../../assets/icons/profile.svg);
    }

    span + li + li::before {
      background-image: url(./../../assets/icons/logout.svg);
    }
  }
}
</style>
