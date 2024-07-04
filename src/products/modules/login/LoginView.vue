<script setup>
import { ref } from 'vue'

import Toggler from '@/app/components/ui/buttons/Toggler.vue'
import SignUp from './components/SignUp.vue'
import SignIn from './components/SignIn.vue'
import ForgotPassword from './components/ForgotPassword.vue'

const state = ref('SignIn')
const tabs = { SignUp, SignIn, ForgotPassword }
</script>

<template>
  <section class="login">
    <div class="login-wrapper">
      <Toggler v-show="state !== 'ForgotPassword'" v-model="state" key="toggler" />
      <Transition name="list">
        <component :is="tabs[state]" :key="state" v-model="state"></component>
      </Transition>
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

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>
