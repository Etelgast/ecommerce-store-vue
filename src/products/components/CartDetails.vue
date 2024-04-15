<script setup>
import { onMounted, ref, watch } from 'vue'
import router from '@/app/router'

import ActionCardButton from '@/app/components/ui/buttons/ActionCardButton.vue'
import BlackButton from '@/app/components/ui/buttons/BlackButton.vue'
import CalculateShippingForm from '@/app/components/blocks/CalculateShippingForm.vue'

const dropdownOptions = ['SELECT A COUNTRY', 'CITY', 'POST CODE / ZIP']
const placeholder = 'calculate shipping'

defineProps({
  summaryPrice: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="cart__body-details">
    <h2>Cart totals</h2>

    <div class="details-content">
      <div class="content__subtotal">
        <h3>Subtotal</h3>
        <span>$ {{ summaryPrice }}</span>
      </div>
      <div class="content__shipping">
        <h3>Shipping</h3>
        <div class="content__shipping-column">
          <p>Shipping costs will be calculated once you have provided address.</p>
          <CalculateShippingForm :dropdown-options="dropdownOptions" :placeholder="placeholder" />
          <ActionCardButton>Update Totals</ActionCardButton>
        </div>
      </div>
      <span class="content__divider"></span>
      <div class="content__total">
        <h3>Total</h3>
        <p>$ {{ summaryPrice + 15 }}</p>
      </div>
      <BlackButton @click="router.push({ name: 'checkout' })">Proceed to Checkout</BlackButton>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart__body-details {
  display: flex;
  flex-direction: column;
  max-width: 650px;
  padding-block: clamp(0.938rem, 0.392rem + 2.73vw, 2.438rem);
  padding-inline: clamp(1rem, 0.023rem + 4.89vw, 3.688rem);

  h2 {
    font-size: clamp(1.125rem, 0.943rem + 0.91vw, 1.625rem);
  }

  .details-content {
    margin-top: clamp(1.438rem, 0.96rem + 2.39vw, 2.75rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 23px;
    font-family: $main-font;

    h3 {
      font-size: clamp(1rem, 0.864rem + 0.68vw, 1.375rem);
    }
  }

  .content__subtotal {
    display: flex;
    align-items: center;
    gap: clamp(3rem, 1.364rem + 8.18vw, 7.5rem);

    span {
      color: $dark-gray;
    }
  }

  .content__shipping {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: clamp(3.375rem, 1.693rem + 8.41vw, 8rem);

    .content__shipping-column {
      display: flex;
      flex-direction: column;
      gap: 24px;

      p {
        margin: 0;
        color: $dark-gray;
      }

      .action-card__btn {
        padding: 16px;
      }
    }
  }

  .content__divider {
    width: 100%;
    height: 1px;
    background-color: $dark-gray;
  }

  .content__total {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      font-weight: 500;
    }
  }

  .black-btn {
    padding-block: 16px;
  }

  h3 {
    text-transform: uppercase;
  }
}
</style>
