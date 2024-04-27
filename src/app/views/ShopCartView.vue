<script setup>
import { onMounted, ref, watch } from 'vue'
import { useProducts } from '@/products/composables/useProducts'
const { listProducts } = useProducts()

import { useOrder } from '@/products/composables/useOrder'
const { calculateSummaryPrice } = useOrder()

import ActionCardButton from '@/app/components/ui/buttons/ActionCardButton.vue'
import BlackButton from '@/app/components/ui/buttons/BlackButton.vue'
import ShopCartItem from '@/products/components/ShopCartItem.vue'
import CartDetails from '@/products/components/CartDetails.vue'
import TextInput from '../components/ui/inputs/TextInput.vue'
import InputComponent from '@/products/classes/InputComponent'

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

const items = ref([])
const summaryPrice = ref(0)

function updatingSummaryPrice() {
  summaryPrice.value = calculateSummaryPrice(items.value)
}

function updateListItems() {
  items.value = listProducts()
}

onMounted(() => {
  updateListItems()
  updatingSummaryPrice()
})

watch(
  items,
  () => {
    updatingSummaryPrice()
  },
  { deep: true }
)
</script>

<template>
  <div class="cart__wrapper">
    <h1>Shopping Cart</h1>
    <div class="cart__body">
      <div class="cart__body-items">
        <TransitionGroup name="list">
          <ShopCartItem
            v-for="item in items"
            :key="item.id"
            :item="item"
            @updating-event="updateListItems"
          />
        </TransitionGroup>
        <div class="items__actions-block">
          <ActionCardButton>UPDATE CART</ActionCardButton>
          <div class="actions-block__coupon">
            <TextInput :component-data="couponInputComponent" />
            <BlackButton>Apply Coupon</BlackButton>
          </div>
        </div>
      </div>
      <CartDetails :summary-price="summaryPrice" :items="items" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart__wrapper {
  display: flex;
  flex-direction: column;
  gap: clamp(2rem, 1.273rem + 3.64vw, 4rem);

  h1 {
    text-align: center;
  }
}

.cart__body {
  display: flex;
  justify-content: space-between;
  gap: clamp(2.438rem, 1.324rem + 5.57vw, 5.5rem);
  flex-wrap: wrap;
}

.cart__body-items {
  max-width: 750px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  .items__actions-block {
    max-width: 100%;
    margin-top: 39px;
    display: flex;
    flex-direction: column;
    gap: clamp(3rem, 2.364rem + 3.18vw, 4.75rem);

    .action-card__btn,
    .black-btn {
      padding-block: clamp(0.375rem, 0.148rem + 1.14vw, 1rem);
      min-width: 168px;
      align-self: flex-end;
    }

    .actions-block__coupon {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      flex-wrap: wrap;
      gap: clamp(1.5rem, 0.318rem + 5.91vw, 4.75rem);

      .input-wrapper {
        flex-grow: 1;
      }
    }

    @include mobile {
      .action-card__btn,
      .black-btn,
      .input-wrapper {
        align-self: stretch;
        width: 100%;
      }
    }
  }
}
</style>
