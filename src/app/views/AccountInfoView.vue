<script setup>
import { ref } from 'vue'

import AccountNavigation from '@/app/components/blocks/Account/AccountNavigation.vue'
import Dashboard from '@/app/components/blocks/Account/Dashboard.vue'
import Orders from '@/app/components/blocks/Account/Orders.vue'

const state = ref(0)
</script>

<template>
  <div class="account-info">
    <h1 v-if="state === 0">My Account</h1>
    <AccountNavigation v-model="state" />
    <Dashboard v-if="state === 0" />
    <Orders v-if="state === 1" />
    <Orders v-if="state === 2" />
  </div>
</template>

<style lang="scss" scoped>
.account-info {
  h1 {
    text-align: center;
  }
}
</style>
