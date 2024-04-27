<script setup>
import { ref } from 'vue'

import AccountNavigation from '@/products/components/account/AccountNavigation.vue'
import DashboardComponent from '@/products/components/account/DashboardComponent.vue'
import OrdersComponent from '@/products/components/account/OrdersComponent.vue'

const state = ref(0)
</script>

<template>
  <div class="account-info">
    <h1 v-if="state === 0">My Account</h1>
    <AccountNavigation v-model="state" />
    <DashboardComponent v-if="state === 0" />
    <OrdersComponent v-if="state === 1" />
    <OrdersComponent v-if="state === 2" />
  </div>
</template>

<style lang="scss" scoped>
.account-info {
  h1 {
    text-align: center;
  }
}
</style>
