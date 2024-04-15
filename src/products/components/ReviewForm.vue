<script setup>
import { onMounted, ref } from 'vue'

import InputComponent from '@/products/classes/InputComponent'

import { sendReviewProduct } from '@/app/services/products'

import TextInput from '@/app/components/ui/Inputs/TextInput.vue'
import TextArea from '@/app/components/ui/Inputs/TextArea.vue'
import BlackButton from '@/app/components/ui/Buttons/BlackButton.vue'
import RatingStar from '@/app/components/blocks/RatingStars.vue'
import CheckboxInput from '@/app/components/ui/Inputs/CheckboxInput.vue'

const review = ref({
  comment: '',
  name: '',
  email: '',
  rate: null
})

const isAutocompleteShouldBeActive = ref(false)

const reviewInputComponent = new InputComponent(
  'text',
  'Your Review*',
  'Your review should not be less then 3 symbols',
  '',
  3,
  300,
  'off',
  'comment',
  true
)

const nameInputComponent = new InputComponent(
  'text',
  'Enter your name*',
  'Your name should not be less then 3 symbols',
  '',
  3,
  30,
  'username',
  'username',
  true
)

const emailInputComponent = new InputComponent(
  'email',
  'Enter your Email*',
  'Your email is not valid. Please re-check it',
  '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
  5,
  30,
  'email',
  'email',
  true
)

const isFormValid = ref(false)

function validateForm(isValid) {
  isFormValid.value = isValid
}

function updatingLocalStorageItem() {
  localStorage.isAutocompleteActive = isAutocompleteShouldBeActive.value
}

function checkingLocalStorageItem() {
  if (localStorage.isAutocompleteActive) {
    isAutocompleteShouldBeActive.value = localStorage.isAutocompleteActive
  } else {
    localStorage.setItem('isAutocompleteActive', 'false')
  }
}

async function submit() {
  if (!isFormValid.value || !review.value.rate) {
    alert('Warning')
  } else {
    try {
      await sendReviewProduct(review.value)
      updatingLocalStorageItem()
    } catch (error) {
      console.log(error)
    }
  }
}

onMounted(() => {
  checkingLocalStorageItem()
})
</script>

<template>
  <form class="review-form" action="" :autocomplete="isAutocompleteShouldBeActive ? 'on' : 'off'">
    <TextArea
      v-model:modelValue="review.comment"
      @form-validate="validateForm"
      :component-data="reviewInputComponent"
    />
    <TextInput
      v-model="review.name"
      @form-validate="validateForm"
      :component-data="nameInputComponent"
    />
    <TextInput
      v-model="review.email"
      @form-validate="validateForm"
      :component-data="emailInputComponent"
    />
    <CheckboxInput v-model="isAutocompleteShouldBeActive"
      >Save my name, email, and website in this browser for the next time I comment</CheckboxInput
    >
    <div class="choosing-rate">
      <h5>Your Rating*</h5>
      <RatingStar v-model="review.rate" @form-validate="validateForm" />
    </div>
    <BlackButton @click.prevent="submit" :disabled="!isFormValid || !review.rate"
      >Submit</BlackButton
    >
  </form>
</template>

<style lang="scss" scoped>
.review-form {
  display: flex;
  flex-direction: column;
  gap: 46px;

  .input-wrapper:first-child {
    margin-top: 46px;
  }

  .black-btn {
    padding: 16px 34px;
    width: 123px;
  }
}
</style>
