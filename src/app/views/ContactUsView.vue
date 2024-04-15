<script setup>
import { ref } from 'vue'
import TextInput from '../components/ui/Inputs/TextInput.vue'
import TextArea from '../components/ui/Inputs/TextArea.vue'
import DropdownCommun from '../components/ui/Inputs/DropdownCommun.vue'
import BlackButton from '../components/ui/Buttons/BlackButton.vue'

import InputComponent from '@/products/classes/InputComponent'

const firstNameInputComponent = new InputComponent(
  'text',
  'First Name',
  'This field should contain only letters',
  '',
  2,
  30
)

const lastNameInputComponent = new InputComponent(
  'text',
  'Last Name',
  'This field should contain only letters',
  '',
  2,
  30
)

const emailInputComponent = new InputComponent(
  'text',
  'Email',
  'Your e-mail is not valid',
  '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
  5,
  30
)

const commentInputComponent = new InputComponent(
  'text',
  'Message',
  'This field should be not empty or contain the forbidden symbols',
  '',
  10,
  300
)

const dropdownOptions = ['Conflict', 'Suggest', 'Appreciate']
const optionDisplayed = 'Subject'
const sortByOption = ref('')
</script>

<template>
  <section class="contact-us">
    <h1>Contact Us</h1>
    <h3>
      Say Hello send us your thoughts about our products or share<br />your ideas with our Team!
    </h3>
    <div class="wrapper-inputs">
      <TextInput :component-data="firstNameInputComponent" />
      <TextInput :component-data="lastNameInputComponent" />
      <TextInput :component-data="emailInputComponent" />
      <DropdownCommun
        :option-displayed="optionDisplayed"
        :dropdown-options="dropdownOptions"
        v-model="sortByOption"
      />
      <TextArea :component-data="commentInputComponent" />
    </div>

    <div class="wrapper-button">
      <BlackButton>Send</BlackButton>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact-us {
  margin-top: clamp(2.438rem, 0.483rem + 9.77vw, 7.813rem);
  margin-inline: auto;
  max-width: 910px;
  display: flex;
  flex-direction: column;

  h1,
  h3 {
    text-align: center;
  }

  h3 {
    margin-top: clamp(2.625rem, 1.716rem + 4.55vw, 5.125rem);
  }

  @include mobile-s() {
    h1 {
      align-self: start;
      font-size: 20px;
    }

    h3 {
      display: none;
    }
  }
}

.wrapper-inputs {
  max-width: 100%;
  margin-top: clamp(3.875rem, 2.966rem + 4.55vw, 6.375rem);
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 116px;
  row-gap: clamp(2.875rem, 1.784rem + 5.45vw, 5.875rem);

  .input-wrapper {
    width: 100%;
  }

  & > .input-wrapper:last-child {
    max-width: 910px;
    padding-bottom: 44px !important;

    @media (min-width: 725px) {
      grid-column: span 2;
    }
  }

  @include mobile-xl() {
    grid-template-columns: 1fr;
    justify-items: center;
  }
}

.wrapper-button {
  margin-top: clamp(1.875rem, 0.375rem + 7.5vw, 6rem);
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    max-width: 500px;
    padding-block: clamp(0.375rem, 0.148rem + 1.14vw, 1rem);
    padding-inline: clamp(8.063rem, 5.79rem + 11.36vw, 14.313rem);
  }
}
</style>
