<script setup>
import InputComponent from '@/products/classes/InputComponent'
import TextInput from '@/app/components/ui/Inputs/TextInput.vue'
import CheckboxInput from '@/app/components/ui/Inputs/CheckboxInput.vue'

const formDetails = defineModel()

const firstNameInput = new InputComponent(
  'text',
  'First name *',
  'Your name should not be less than 3 symbol',
  '',
  3,
  15,
  'on',
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
  'on',
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

const countryInput = new InputComponent('text', 'Country *', '', '', 3, 30, 'off', 'country', true)

const streetAddressInput = new InputComponent(
  'text',
  'Street Address *',
  'Your street address is not existing',
  '',
  5,
  50,
  'on',
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
  'on',
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
  'on',
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
  'on',
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
  'on',
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
    <form class="billing-form" name="orderPersonalDetails" id="orderPersonalDetails">
      <div class="name-inputs__wrapper">
        <TextInput :component-data="firstNameInput" v-model="formDetails.firstName" />
        <TextInput :component-data="lastNameInput" v-model="formDetails.lastName" />
      </div>
      <TextInput :component-data="companyNameInput" v-model="formDetails.companyName" />
      <TextInput :component-data="countryInput" v-model="formDetails.country" />
      <TextInput :component-data="streetAddressInput" v-model="formDetails.streetAddress" />
      <TextInput :component-data="postCodeInput" v-model="formDetails.postCode" />
      <TextInput :component-data="cityInput" v-model="formDetails.city" />
      <TextInput :component-data="phoneInput" v-model="formDetails.phone" />
      <TextInput :component-data="emailInput" v-model="formDetails.email" />
      <CheckboxInput name="create-account">Create an account?</CheckboxInput>
      <CheckboxInput name="ship-to-address">Ship to a different address?</CheckboxInput>
      <TextInput :component-data="orderNotesInput" v-model="formDetails.orderNotes" />
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
