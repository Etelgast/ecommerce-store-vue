<script setup>
import BlackButton from '@/app/components/ui/buttons/BlackButton.vue'
import TextInput from '@/app/components/ui/inputs/TextInput.vue'
import InputComponent from '@/products/classes/InputComponent'

const stateValue = defineModel()

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
</script>

<template>
  <section class="forgot-password">
    <form class="forgot-password__form">
      <h1>Have you Forgotten Your Password ?</h1>
      <h3>
        If you've forgotten your password, enter your e-mail address and we'll send you an e-mail
      </h3>
      <TextInput :component-data="emailInputComponent" />
      <BlackButton>Reset Password</BlackButton>
      <h4 @click="stateValue = 1" role="link">Wait... Return to Sign In</h4>
    </form>
  </section>
</template>

<style lang="scss" scoped>
.forgot-password {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: clamp(1.25rem, 0.955rem + 1.48vw, 2.063rem);
    text-align: center;
  }

  h3 {
    margin-top: 39px;
    font-size: clamp(1rem, 0.909rem + 0.45vw, 1.25rem);
    text-align: center;
  }

  .input-wrapper {
    width: 100%;
    margin-top: clamp(5.438rem, 4.688rem + 3.75vw, 7.5rem);
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
}
</style>
