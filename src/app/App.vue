<script setup>
import { onMounted } from 'vue'
import { checkingAuthToken } from './services/auth'
import { useUserData } from '@/products/composables/useUserData'
const { fillUserData } = useUserData()
import MainLayout from './layouts/MainLayout.vue'

async function checkAuth() {
  const token = JSON.parse(localStorage.getItem('ac-token'))
  if (token) {
    try {
      const { data } = await checkingAuthToken(token)
      // localStorage.setItem('ac-data', JSON.stringify(data))
      fillUserData(data)
    } catch (error) {
      console.log(error)
    }
  }
}

onMounted(() => {
  checkAuth()
})
</script>

<template>
  <MainLayout />
</template>

<style></style>
