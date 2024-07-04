<script setup>
import { ref, watch } from 'vue'
import { useProducts } from '@/products/composables/useProducts'
const { updatingAmount, removeProduct } = useProducts()
import CardCounter from '@/app/components/ui/buttons/CardCounter.vue'

const props = defineProps({
  item: Object
})

const emit = defineEmits(['updatingEvent'])

const amount = ref(props.item.amount)

watch(amount, () => {
  updatingAmount(props.item.id, amount.value)
  emit('updatingEvent', true)
})
</script>

<template>
  <article class="cart-item">
    <img :src="'/assets/images/' + props.item.img" alt="Item Image" />
    <div class="cart-item__info">
      <h2>{{ item.title }}</h2>
      <h4>Black / Medium</h4>
      <h4>$ {{ item.price }}</h4>
    </div>
    <CardCounter v-model="amount" />
    <svg
      @click="removeProduct(props.item.id), emit('updatingEvent', true)"
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1.18344L12.8166 13M1 12.8166L12.8166 1" stroke="black" stroke-width="1.5" />
    </svg>
  </article>
</template>

<style lang="scss" scoped>
.cart-item {
  display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(min(100%, 130px), 1fr));
  grid-template-columns: minmax(136px, 1fr) 1.5fr 0.5fr 0.2fr;
  gap: clamp(0.5rem, -0.227rem + 3.64vw, 2.5rem);
  height: 170px;
  width: 100%;
  padding-bottom: clamp(0.875rem, 0.307rem + 2.84vw, 2.438rem);
  border-bottom: 1px solid $light-gray;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }

  .cart-item__info {
    display: flex;
    flex-direction: column;
    font-family: $main-font;
    gap: clamp(0.125rem, -0.148rem + 1.36vw, 0.875rem);

    h2 {
      font-size: clamp(1rem, 0.773rem + 1.14vw, 1.625rem);
    }

    h4 {
      color: $dark-gray;
      font-size: clamp(0.875rem, 0.739rem + 0.68vw, 1.25rem);
    }
  }

  svg {
    justify-self: end;
    cursor: pointer;
  }
}

@include mobile {
  .cart-item {
    grid-template-columns: minmax(136px, 1fr) 1fr 0.2fr;
    grid-template-rows: 1fr 1fr;

    img {
      grid-row: 1 / span 2;
    }

    .counter {
      grid-row: 2;
      align-self: self-end;
      max-width: 80px;
    }
  }
}
</style>
