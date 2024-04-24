<script setup>
import { ref } from 'vue'
import router from '@/app/router'

import { signIn } from '@/app/services/auth'
import { useUserData } from '@/products/composables/useUserData'
const { fillUserData } = useUserData()

import InputComponent from '@/products/classes/InputComponent'
import BlackButton from '@/app/components/ui/Buttons/BlackButton.vue'
import TextInput from '@/app/components/ui/Inputs/TextInput.vue'
import CheckboxInput from '../../ui/Inputs/CheckboxInput.vue'

const stateValue = defineModel()

const emailInputComponent = new InputComponent(
  'text',
  'Email',
  'Your e-mail is not valid',
  '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
  5,
  30,
  'on',
  'email',
  true
)
const passwordInputComponent = new InputComponent(
  'text',
  'Password',
  'Your password is not valid',
  '',
  6,
  35,
  'off',
  'password',
  true
)

const authData = ref({
  email: '',
  password: ''
})

const isErrorVisible = ref(false)

async function authorizeUser() {
  isErrorVisible.value = false
  try {
    const { data } = await signIn(authData.value)
    localStorage.setItem('ac-token', JSON.stringify(data.token))
    fillUserData(data.data)
    router.push({ name: 'home' })
  } catch (error) {
    isErrorVisible.value = true
  }
}
</script>

<template>
  <section class="signin">
    <form class="signin__form" @submit.prevent="authorizeUser">
      <TextInput :component-data="emailInputComponent" v-model="authData.email" />
      <TextInput :component-data="passwordInputComponent" v-model="authData.password" />
      <CheckboxInput name="remember">Remember</CheckboxInput>
      <span v-if="isErrorVisible" class="error-message"
        >Email or password is not correct. Please, use a correct email and password to sign in</span
      >
      <BlackButton type="submit">Sign In</BlackButton>
      <h4 @click="stateValue = 3" role="link">Have you forgotten your password?</h4>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.signin {
  width: 100%;

  .input-wrapper:first-child {
    margin-top: clamp(5.438rem, 4.551rem + 4.43vw, 7.875rem);
  }

  .input-wrapper:not(:first-child) {
    margin-top: 47px;
  }

  .checkbox-wrapper {
    margin-top: 15px;
  }

  .black-btn {
    margin-top: clamp(0.75rem, -0.818rem + 7.84vw, 5.063rem);
    width: 100%;
    padding: 16px;
  }

  h4 {
    margin-top: 13px;
    text-align: center;
    cursor: pointer;
  }

  .error-message {
    display: inline-block;
    margin-top: 10px;
    font-family: $main-font;
    color: $error;
  }
}
</style>
