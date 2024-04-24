<script setup>
import { ref, markRaw } from 'vue'

import { useModals } from '@/products/composables/useModals'
const modal = useModals()

import BillingForm from '../components/Checkout/BillingForm.vue'
import YourOrderSection from '../components/Checkout/YourOrderSection.vue'
import TextInput from '@/app/components/ui/Inputs/TextInput.vue'
import InputComponent from '@/products/classes/InputComponent'
import BlackButton from '@/app/components/ui/Buttons/BlackButton.vue'
import ModalConfirm from '@/app/components/ui/Modals/ModalConfirm.vue'

const couponInputComponent = new InputComponent(
  'text',
  'Coupon Code',
  '',
  '',
  '3',
  '10',
  'off',
  'coupon',
  'true'
)

const billingDetails = ref({
  firstName: '',
  lastName: '',
  companyName: '',
  country: '',
  streetAddress: '',
  postCode: '',
  city: '',
  phone: '',
  email: '',
  orderNotes: ''
})

function openModalConfirmation() {
  modal.component.value = markRaw(ModalConfirm)
  modal.showModal()
}
</script>

<template>
  <Teleport to="#app">
    <Transition>
      <component
        :is="modal.component.value"
        v-if="modal.isModalShow.value"
        @close="modal.hideModal('home')"
      ></component>
    </Transition>
  </Teleport>
  <div class="checkout-wrapper">
    <h1>Checkout</h1>
    <section class="additional-section">
      <div class="suggest-login">
        <RouterLink to="/login"><span>Returning customer?</span> Click here to login</RouterLink>
      </div>
      <div class="coupon">
        <span>If you have a coupon code, please apply it below.</span>
        <TextInput :component-data="couponInputComponent" />
        <BlackButton>Apply Coupon</BlackButton>
      </div>
    </section>
    <div class="checkout-details">
      <BillingForm v-model="billingDetails" />
      <YourOrderSection :billing-details="billingDetails" @open-modal="openModalConfirmation" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.checkout-wrapper {
  display: flex;
  flex-direction: column;
  gap: 48px;

  h1 {
    text-align: center;
  }

  .additional-section {
    max-width: 650px;

    .suggest-login {
      a {
        color: $black;
      }

      span {
        color: $dark-gray;
      }
    }

    .coupon {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;
      gap: clamp(1.5rem, 0.318rem + 5.91vw, 4.75rem);
      padding: 24px;
      margin-top: 24px;
      border: 1px solid $light-gray;

      span {
        color: $dark-gray;
        font-family: $main-font;
      }

      .input-wrapper {
        flex-grow: 1;
      }

      .black-btn {
        padding-block: clamp(0.375rem, 0.148rem + 1.14vw, 1rem);
        min-width: 168px;
      }

      @include mobile {
        .black-btn,
        .input-wrapper {
          align-self: stretch;
          width: 100%;
        }
      }
    }
  }

  .checkout-details {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: clamp(2.438rem, 1.324rem + 5.57vw, 5.5rem);
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
