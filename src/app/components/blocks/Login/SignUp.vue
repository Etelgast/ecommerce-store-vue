<script setup>
import { registerNewUser } from '@/app/services/auth'

import BlackButton from '@/app/components/ui/Buttons/BlackButton.vue'
import TextInput from '@/app/components/ui/Inputs/TextInput.vue'
import InputComponent from '@/products/classes/InputComponent'
import { ref } from 'vue'

const emailInputComponent = new InputComponent(
  'text',
  'Email',
  'Your e-mail is not valid',
  '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
  5,
  30,
  'off',
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
const nameInputComponent = new InputComponent('text', 'Name', 'Your name is not valid', '', 3, 20)

const userData = ref({
  email: '',
  name: '',
  password: ''
})

const confirmPassword = ref('')
const arePasswordsMatched = ref(true)

async function sendUserData() {
  if (validatePasswords()) {
    try {
      const response = await registerNewUser(userData.value)
      console.log(response + 'SUCCESS')
    } catch (error) {
      console.log(error)
    }
  } else {
    arePasswordsMatched.value = false
  }
}

function validatePasswords() {
  return userData.value.password === confirmPassword.value
}
</script>

<template>
  <section class="signup">
    <form class="signup__form" @submit.prevent="sendUserData">
      <TextInput :component-data="emailInputComponent" v-model="userData.email" />
      <TextInput :component-data="nameInputComponent" v-model="userData.name" />
      <TextInput :component-data="passwordInputComponent" v-model="userData.password" />
      <TextInput :component-data="passwordInputComponent" v-model="confirmPassword" />
      <span v-if="!arePasswordsMatched" class="error-message"
        >Passwords do not match. Please, be sure that the passwords are same</span
      >
      <BlackButton type="submit">Register Now</BlackButton>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.signup {
  width: 100%;

  .input-wrapper:first-child {
    margin-top: clamp(5.438rem, 4.551rem + 4.43vw, 7.875rem);
  }

  .input-wrapper:not(:first-child) {
    margin-top: 47px;
  }

  .black-btn {
    margin-top: clamp(0.75rem, -0.818rem + 7.84vw, 5.063rem);
    width: 100%;
    padding: 16px;
  }

  .error-message {
    display: inline-block;
    margin-top: 5px;
    font-family: $main-font;
    color: $error;
  }
}
</style>
