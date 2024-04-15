<script setup>
import { ref } from 'vue'
import BlackButton from '@/app/components/ui/Buttons/BlackButton.vue'
import TextInput from '@/app/components/ui/Inputs/TextInput.vue'
import InputComponent from '@/products/classes/InputComponent'
import CheckboxInput from '@/app/components/ui/Inputs/CheckboxInput.vue'

const emailInputComponent = new InputComponent(
  'text',
  'Email',
  'Your e-mail is not valid',
  '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
  5,
  30
)
const passwordInputComponent = new InputComponent(
  'text',
  'Password',
  'Your password is not valid',
  '',
  6,
  35
)
const nameInputComponent = new InputComponent('text', 'Name', 'Your name is not valid', '', 3, 20)

const toggleBtns = ref({
  toggleBtnSignIn: true,
  toggleBtnRegister: false
})

function toggleButtons() {
  toggleBtns.value.toggleBtnRegister = !toggleBtns.value.toggleBtnRegister
  toggleBtns.value.toggleBtnSignIn = !toggleBtns.value.toggleBtnSignIn
  isNotRegister.value = !isNotRegister.value
}

const state = ref(1)
const isNotRegister = ref(false)
</script>

<template>
  <section class="login">
    <div class="login-wrapper" v-if="state == 1">
      <h1>My Account</h1>
      <div class="toggler">
        <button :class="{ active: toggleBtns.toggleBtnSignIn }" @click="toggleButtons()">
          Sign In
        </button>
        <button :class="{ active: toggleBtns.toggleBtnRegister }" @click="toggleButtons()">
          Register
        </button>
      </div>

      <div class="login-content" v-if="!isNotRegister">
        <TextInput :component-data="emailInputComponent" />
        <TextInput :component-data="passwordInputComponent" />
        <CheckboxInput>Remember</CheckboxInput>
        <BlackButton> Sign In </BlackButton>
        <h4 @click="state = 3">Have you forgotten your password?</h4>
      </div>

      <div class="register-content" v-if="isNotRegister">
        <TextInput :component-data="emailInputComponent" />
        <TextInput :component-data="nameInputComponent" />
        <TextInput :component-data="passwordInputComponent" />
        <TextInput :component-data="passwordInputComponent" />

        <BlackButton>Register Now</BlackButton>
      </div>
    </div>
    <div class="forgot-wrapper" v-if="state == 3">
      <h1>Have you Forgotten Your Password ?</h1>
      <h3>
        If you've forgotten your password, enter your e-mail address and we'll send you an e-mail
      </h3>
      <TextInput :component-data="emailInputComponent" />
      <BlackButton>Reset Password</BlackButton>
      <h4 @click="state = 1">Wait... Return to Sign In</h4>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.login {
  margin-top: clamp(1.5rem, -0.227rem + 8.64vw, 6.25rem);
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: $heading-one-mobile;
    text-align: center;
  }

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

.toggler {
  margin-top: clamp(1.5rem, 0.591rem + 4.55vw, 4rem);
  width: 100%;
  min-width: 288px;
  border-radius: 8px;
  background: $light-gray;
  display: flex;
  justify-content: space-between;
  gap: 25px;
  padding: 5px;

  button {
    // min-width: 134px;
    width: 46%;
    padding: 12px;
    border: none;
    font-size: 20px;
  }

  .active {
    background: $white;
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
}

.login-wrapper {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.black-btn {
  margin-top: clamp(0.75rem, -0.818rem + 7.84vw, 5.063rem);
  width: 100%;
  padding: 16px;
}

.forgot-wrapper {
  width: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-top: 39px;
    text-align: center;
  }

  .input-wrapper {
    width: 100%;
    margin-top: clamp(5.438rem, 4.688rem + 3.75vw, 7.5rem);
  }
}

.login-content,
.register-content {
  width: 100%;

  .input-wrapper:first-child {
    margin-top: clamp(5.438rem, 4.551rem + 4.43vw, 7.875rem);
  }

  .input-wrapper:not(:first-child) {
    margin-top: 47px;
  }
}
</style>
