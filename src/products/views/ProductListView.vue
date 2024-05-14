<script setup>
import { onMounted, ref, computed, watch } from 'vue'
import { getLatestCards, getCardsBy } from './../../app/services/products'
import debounce from 'lodash.debounce'
import CommunLatestCard from './../components/CommunLatestCard.vue'

const props = defineProps({
  searchFiltered: String,
  onSaleCheckbox: Boolean,
  inStockCheckbox: Boolean,
  sortByOption: String
})

const cards = ref([])

async function getCards() {
  try {
    const { data } = await getLatestCards()
    cards.value = data
  } catch (error) {
    console.log(error)
  }
}

const search = ref('')

const getFilteredCards = debounce(async () => {
  search.value = props.searchFiltered
  fetchItems()
}, 300)

const fetchItems = async () => {
  try {
    const params = {
      title: search.value,
      onSale: filters.value.onSale,
      inStock: filters.value.inStock,
      sortBy: filters.value.sortBy
    }

    const { data } = await getCardsBy(params)
    cards.value = data
  } catch (error) {
    console.log(error)
  }
}

const searchQuery = computed(() => props.searchFiltered)
const filters = computed(() => ({
  onSale: props.onSaleCheckbox,
  inStock: props.inStockCheckbox,
  sortBy: props.sortByOption
}))

watch(searchQuery, async () => {
  getFilteredCards()
})

watch(filters, () => {
  fetchItems()
})

onMounted(() => {
  getCards()
})
</script>

<template>
  <div class="shop-content">
    <CommunLatestCard v-for="card in cards" :key="card.id" :product="card" />
  </div>
</template>

<style lang="scss" scoped>
.shop-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 380px), 1fr));
  gap: clamp(1rem, 0.091rem + 4.55vw, 3.5rem);
}
</style>
