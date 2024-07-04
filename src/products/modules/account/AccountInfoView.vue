<script setup>
import { ref } from 'vue'

import AccountNavigation from './components/AccountNavigation.vue'
import DashboardComponent from './components/DashboardComponent.vue'
import OrdersComponent from './components/OrdersComponent.vue'

const state = ref(0)
const tabs = [DashboardComponent, OrdersComponent]
</script>

<template>
  <div class="account-info">
    <h1 v-if="state === 0">My Account</h1>
    <AccountNavigation v-model="state" />
    <component :is="tabs[state]"></component>
  </div>
</template>

<style lang="scss" scoped>
.account-info {
  h1 {
    text-align: center;
  }
}
</style>
