<script setup>
import { onMounted, ref } from 'vue'
import router from '@/app/router'

import { useOrder } from '@/products/composables/useOrder'
const { getOrder, removeOrder, validateBillingForm } = useOrder()

import { placeOrder } from '@/app/services/products'

import RadioInput from '@/app/components/ui/Inputs/RadioInput.vue'
import BlackButton from '@/app/components/ui/Buttons/BlackButton.vue'

const props = defineProps({
  billingDetails: Object
})

const orderDetails = ref({
  products: []
})

async function sendOrder() {
  const requiredFields = [
    'firstName',
    'lastName',
    'country',
    'streetAddress',
    'postCode',
    'city',
    'phone',
    'email'
  ]
  if (validateBillingForm(props.billingDetails, requiredFields)) {
    try {
      let data = getOrder()
      const response = await placeOrder(data)
      localStorage.removeItem('ac-products')
      if (response.status === 201) {
        removeOrder()
        router.push({ name: 'home' })
      }
    } catch (err) {
      console.log(err)
    }
  } else {
    alert('NEED TO FILL ALL REQUIRED INPUTS')
  }
}

onMounted(() => {
  orderDetails.value = getOrder()
})
</script>

<template>
  <section class="order">
    <h2>Your Order</h2>
    <div class="order__block">
      <div class="order__block-header">
        <h3>Product</h3>
        <h3>Total</h3>
      </div>
      <div class="order__block-products">
        <ul>
          <li v-for="product in orderDetails.products" :key="product.id">
            <h3>{{ product.title }}</h3>
            <span>$ {{ product.price }}</span>
          </li>
        </ul>
      </div>
      <div class="order__block-subtotal">
        <h3>Subtotal</h3>
        <span>$ {{ orderDetails.summary }}</span>
      </div>
      <div class="order__block-shipping">
        <h3>Shipping</h3>
        <span>Free shipping</span>
      </div>
      <div class="order__block-total">
        <h3>Total</h3>
        <span>$ {{ orderDetails.total }}</span>
      </div>
      <div class="order__block-options">
        <RadioInput :component-data="{ name: 'direct' }">Direct bank transfer</RadioInput>
        <p>
          Make your payment directly into our bank account. Please use your Order ID as the payment
          reference. Your order will not be shipped until the funds have cleared in our account
        </p>
        <RadioInput :component-data="{ name: 'check' }">Check payments</RadioInput>
        <RadioInput :component-data="{ name: 'cash' }">Cash on delivery</RadioInput>
        <RadioInput :component-data="{ name: 'paypal' }">
          Pay Pal
          <svg
            :style="{ 'margin-left': '8px' }"
            width="13"
            height="16"
            viewBox="0 0 13 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M10.9137 3.92184C10.5446 6.2604 8.53789 7.98157 6.18226 7.97996H3.63704C3.34237 7.97667 3.0904 8.19229 3.04661 8.48522L2.44023 12.2867C2.39644 12.5796 2.14447 12.7952 1.8498 12.7919H0.405644C0.286846 12.7964 0.17247 12.7463 0.0948464 12.6558C0.0172233 12.5653 -0.0152129 12.4442 0.00670657 12.3268L1.88171 0.673747C1.94493 0.281523 2.28433 -0.00504559 2.67959 6.79661e-05H8.26472C9.0744 0.00102164 9.8438 0.355163 10.3735 0.970696C10.9032 1.58623 11.141 2.40255 11.0254 3.20806L10.9137 3.92184ZM12.6613 7.12993L12.773 6.41615C12.8756 5.68865 12.6862 4.94998 12.2464 4.36304C11.6783 7.27799 9.13763 9.38147 6.18254 9.38355H4.82615C4.57256 9.38715 4.34877 9.55104 4.26764 9.79257L3.36604 15.5349C3.34445 15.6509 3.3759 15.7706 3.45169 15.8607C3.52748 15.9509 3.63958 16.0021 3.757 16H5.20115C5.49639 16.0005 5.74906 15.7872 5.79956 15.4948L6.39797 11.6933C6.44492 11.4022 6.69496 11.1882 6.9884 11.188H7.89797C10.2657 11.2055 12.2904 9.48055 12.6613 7.12993Z"
              fill="black"
            />
          </svg>
        </RadioInput>
      </div>
      <BlackButton @click.prevent="sendOrder" form="orderPersonalDetails">Place Order</BlackButton>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.order {
  max-width: 650px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  .order__block {
    margin-top: 39px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-block: clamp(1.25rem, 0.818rem + 2.16vw, 2.438rem);
    padding-inline: clamp(1rem, 0.023rem + 4.89vw, 3.688rem);
    background-color: $light-gray;

    h3 {
      font-size: clamp(1rem, 0.909rem + 0.45vw, 1.25rem);
    }

    .order__block-header,
    .order__block-subtotal,
    .order__block-shipping {
      display: flex;
      justify-content: space-between;
      padding-bottom: 12px;
      border-bottom: 1px solid $gray;

      h3 {
        text-transform: uppercase;
      }

      span {
        color: $dark-gray;
        font-family: $main-font;
      }
    }

    .order__block-products {
      margin-top: 10px;

      li {
        color: $dark-gray;
        display: flex;
        justify-content: space-between;
      }

      li:not(:first-child) {
        margin-top: 10px;
      }
    }

    .order__block-total {
      display: flex;
      justify-content: space-between;

      h3,
      span {
        font-weight: 600;
        font-family: $main-font;
        text-transform: uppercase;
      }
    }

    .order__block-options {
      display: flex;
      flex-direction: column;
      gap: 18px;

      p {
        margin: 0px;
        font-size: 14px;
        color: $dark-gray;
      }
    }

    .black-btn {
      width: 100%;
      margin-top: 39px;
      padding-block: 16px;
    }
  }
}
</style>
