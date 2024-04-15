<script setup>
import InputComponent from '@/products/classes/InputComponent'
import TextInput from '@/app/components/ui/Inputs/TextInput.vue'
import CheckboxInput from '@/app/components/ui/Inputs/CheckboxInput.vue'

const firstNameInput = new InputComponent(
  'text',
  'First name *',
  'Your name should not be less than 3 symbol',
  '',
  3,
  15,
  'off',
  'first-name',
  true
)

const lastNameInput = new InputComponent(
  'text',
  'Last name *',
  'Your name should not be less than 3 symbol',
  '',
  3,
  30,
  'off',
  'last-name',
  true
)

const companyNameInput = new InputComponent(
  'text',
  'Company Name',
  '',
  '',
  3,
  30,
  'off',
  'company-name',
  false
)

const countryInput = new InputComponent('text', 'Country', '', '', 3, 30, 'off', 'country', true)

const streetAddressInput = new InputComponent(
  'text',
  'Street Address',
  'Your street address is not existing',
  '',
  5,
  50,
  'off',
  'street-address',
  true
)

const postCodeInput = new InputComponent(
  'number',
  'Postcode / ZIP *',
  'Your post code is not existing',
  '',
  8,
  10,
  'off',
  'post-code',
  true
)

const cityInput = new InputComponent(
  'text',
  'Town / City *',
  'Your city is not existing',
  '',
  3,
  20,
  'off',
  'city',
  true
)

const phoneInput = new InputComponent(
  'tel',
  'Phone *',
  'Your number is not valid',
  '',
  8,
  15,
  'off',
  'phone',
  true
)

const emailInput = new InputComponent(
  'email',
  'Email *',
  'Your email is not valid',
  '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
  5,
  30,
  'off',
  'email',
  true
)

const orderNotesInput = new InputComponent(
  'text',
  'Order Notes',
  '',
  '',
  5,
  150,
  'off',
  'order-notes',
  false
)
</script>

<template>
  <div class="wrapper">
    <h2>Billing Details</h2>
    <form class="billing-form">
      <div class="name-inputs__wrapper">
        <TextInput :component-data="firstNameInput" />
        <TextInput :component-data="lastNameInput" />
      </div>
      <TextInput :component-data="companyNameInput" />
      <TextInput :component-data="countryInput" />
      <TextInput :component-data="streetAddressInput" />
      <TextInput :component-data="postCodeInput" />
      <TextInput :component-data="cityInput" />
      <TextInput :component-data="phoneInput" />
      <TextInput :component-data="emailInput" />
      <CheckboxInput name="create-account">Create an account?</CheckboxInput>
      <CheckboxInput name="ship-to-address">Ship to a different address?</CheckboxInput>
      <TextInput :component-data="orderNotesInput" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  max-width: 650px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.billing-form {
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  gap: 37px;

  .name-inputs__wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 25px;

    @include mobile {
      .input-wrapper {
        width: 100%;
      }
    }
  }
}
</style>
