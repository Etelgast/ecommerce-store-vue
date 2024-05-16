<script setup>
import { useUserData } from '@/products/composables/useUserData'
import { computed } from 'vue'
const { getUserDataObject, logOut } = useUserData()

const userName = computed(() => {
  return 'Hello ' + getUserDataObject().name + ' (not ' + getUserDataObject().name + '?'
})
</script>

<template>
  <section class="dashboard">
    <span class="dashboard__welcome">
      {{ userName }}
      <RouterLink @click="logOut" to="login">Log Out</RouterLink>)
    </span>
    <p>
      From your account dashboard you can view your <a>recent orders</a>, manage your
      <a>shipping and billing addresses</a>, and
      <a>edit your password and account details</a>
    </p>
  </section>
</template>

<style lang="scss" scoped>
.dashboard {
  margin-top: 39px;

  .dashboard__welcome {
    display: inline-block;
    font-family: $main-font;
  }

  .dashboard__welcome a,
  p a {
    color: $accent;
    cursor: pointer;
  }
}
</style>
