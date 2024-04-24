<script setup>
import { ref } from 'vue'

import Toggler from '@/app/components/ui/Buttons/Toggler.vue'
import SignUp from '../components/blocks/Login/SignUp.vue'
import SignIn from '../components/blocks/Login/SignIn.vue'
import ForgotPassword from '../components/blocks/Login/ForgotPassword.vue'

const state = ref(1)
</script>

<template>
  <section class="login">
    <div class="login-wrapper">
      <Toggler v-show="state !== 3" v-model="state" />
      <SignIn v-if="state === 1" v-model="state" />
      <SignUp v-if="state === 2" />
      <ForgotPassword v-if="state === 3" v-model="state" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.login {
  margin-top: clamp(1.5rem, -0.227rem + 8.64vw, 6.25rem);
  display: flex;
  align-items: center;
  justify-content: center;

  h4 {
    margin-top: 16px;
    transition: all 0.6s ease;
    cursor: pointer;
    text-align: center;

    &:hover {
      color: $dark-gray;
    }
  }

  .checkbox-wrapper {
    margin-top: 8px;
  }
}

.login-wrapper {
  width: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.black-btn {
  margin-top: clamp(0.75rem, -0.818rem + 7.84vw, 5.063rem);
  width: 100%;
  padding: 16px;
}
</style>
