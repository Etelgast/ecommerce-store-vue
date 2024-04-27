<script setup>
import { ref, watchEffect } from 'vue'
import { getCardsBy } from '@/app/services/products'

import SearchInput from '@/app/components/ui/inputs/SearchInput.vue'
import SortDropdownInput from '@/app/components/ui/inputs/SortDropdownInput.vue'
import PriceRangeInput from '@/app/components/ui/inputs/PriceRangeInput.vue'
import ProductListView from './../../products/views/ProductListView.vue'

const isFilterMobile = ref(false)

const onSaleCheckbox = ref(false)
const inStockCheckbox = ref(false)
const searchFiltered = ref('')

const sortByOption = ref('')
const dropdownOptions = ['New Product', 'Small Price', 'High Price']
const valueMapOptions = {
  'New Product': 'new_product',
  'Small Price': 'price',
  'High Price': '-price'
}
const placeholder = 'Sort By'

watchEffect(sortByOption, getCardsBy(sortByOption))
</script>

<template>
  <section class="shop-view">
    <div class="shop-title">
      <h1>Shop The Latest</h1>
    </div>
    <div class="shop-wrapper">
      <div class="filter-mobile" @click="isFilterMobile = !isFilterMobile">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.2133 3.95389H7.18145C6.96063 3.29805 6.3403 2.82422 5.61095 2.82422C4.8816 2.82422 4.26127 3.29805 4.04045 3.95389H2.78674C2.49551 3.95389 2.2594 4.19 2.2594 4.48124C2.2594 4.77247 2.49551 5.00858 2.78674 5.00858H4.04049C4.2613 5.66442 4.88163 6.13826 5.61099 6.13826C6.34034 6.13826 6.96067 5.66442 7.18149 5.00858H15.2133C15.5046 5.00858 15.7407 4.77247 15.7407 4.48124C15.7407 4.19 15.5046 3.95389 15.2133 3.95389ZM5.61095 5.08357C5.27883 5.08357 5.00862 4.81336 5.00862 4.48124C5.00862 4.14912 5.27883 3.87891 5.61095 3.87891C5.94307 3.87891 6.21328 4.14912 6.21328 4.48124C6.21328 4.81336 5.94307 5.08357 5.61095 5.08357Z"
            fill="#A18A68"
          />
          <path
            d="M15.2133 8.47245H13.9595C13.7387 7.81661 13.1184 7.34277 12.389 7.34277C11.6597 7.34277 11.0394 7.81661 10.8186 8.47245H2.78674C2.49551 8.47245 2.2594 8.70856 2.2594 8.99979C2.2594 9.29103 2.49551 9.52714 2.78674 9.52714H10.8186C11.0394 10.183 11.6598 10.6568 12.3891 10.6568C13.1184 10.6568 13.7388 10.183 13.9596 9.52714H15.2133C15.5046 9.52714 15.7407 9.29103 15.7407 8.99979C15.7407 8.70856 15.5046 8.47245 15.2133 8.47245ZM12.3891 9.60212C12.057 9.60212 11.7867 9.33191 11.7867 8.99979C11.7867 8.66767 12.057 8.39746 12.3891 8.39746C12.7212 8.39746 12.9914 8.66767 12.9914 8.99979C12.9914 9.33191 12.7212 9.60212 12.3891 9.60212Z"
            fill="#A18A68"
          />
          <path
            d="M15.2133 12.991H9.44084C9.22002 12.3352 8.59969 11.8613 7.87034 11.8613C7.14099 11.8613 6.52065 12.3352 6.29984 12.991H2.78674C2.49551 12.991 2.2594 13.2271 2.2594 13.5183C2.2594 13.8096 2.49551 14.0457 2.78674 14.0457H6.29984C6.52065 14.7015 7.14099 15.1754 7.87034 15.1754C8.59969 15.1754 9.22002 14.7015 9.44084 14.0457H15.2133C15.5046 14.0457 15.7407 13.8096 15.7407 13.5183C15.7407 13.2271 15.5046 12.991 15.2133 12.991ZM7.87034 14.1207C7.53822 14.1207 7.268 13.8505 7.268 13.5184C7.268 13.1863 7.53822 12.9161 7.87034 12.9161C8.20246 12.9161 8.47267 13.1862 8.47267 13.5183C8.47267 13.8505 8.20246 14.1207 7.87034 14.1207Z"
            fill="#A18A68"
          />
        </svg>

        Filter
      </div>
      <Teleport to="body" :disabled="!isFilterMobile">
        <div :class="isFilterMobile ? 'shop__menu-sort--mobile' : 'shop__menu-sort'">
          <div v-show="isFilterMobile" class="filter-header">
            <svg
              v-show="isFilterMobile"
              @click="isFilterMobile = !isFilterMobile"
              width="10"
              height="16"
              viewBox="0 0 10 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.93468 14.463C9.01039 14.5381 9.05298 14.6403 9.05298 14.747C9.05298 14.8536 9.01039 14.9558 8.93468 15.0309L8.08681 15.8788C8.01423 15.9561 7.9129 16 7.80685 16C7.7008 16 7.59947 15.9561 7.52689 15.8788L0.176008 8.52792C0.0634705 8.41552 0.000175199 8.26303 3.50226e-05 8.10398L3.50407e-05 7.89602C0.000175245 7.73696 0.0634706 7.58448 0.176008 7.47208L7.52689 0.121197C7.59947 0.043866 7.7008 -1.18212e-07 7.80685 -1.0894e-07C7.9129 -9.96687e-08 8.01423 0.0438661 8.08681 0.121197L8.93468 0.969068C9.01039 1.04416 9.05298 1.14639 9.05298 1.25303C9.05298 1.35966 9.01039 1.46189 8.93468 1.53698L2.47166 8L8.93468 14.463Z"
                fill="black"
              />
            </svg>
            <h3>Filter</h3>
          </div>

          <SearchInput v-show="!isFilterMobile" v-model="searchFiltered" />
          <SortDropdownInput
            v-model="sortByOption"
            :dropdownOptions="dropdownOptions"
            :value-map-options="valueMapOptions"
            :placeholder="placeholder"
          />
          <PriceRangeInput />
          <div class="checkbox-wrapper" @click="onSaleCheckbox = !onSaleCheckbox">
            <h4>On sale</h4>
            <div class="on-sale-checkbox">
              <svg
                v-if="!onSaleCheckbox"
                width="34"
                height="20"
                viewBox="0 0 34 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 0H23.3333C28.8562 0 33.3333 4.47716 33.3333 10C33.3333 15.5228 28.8562 20 23.3333 20H10C4.47715 20 0 15.5228 0 10C0 4.47716 4.47715 0 10 0ZM3.33337 9.99998C3.33337 13.6819 6.31814 16.6666 10 16.6666C11.7682 16.6666 13.4638 15.9643 14.7141 14.714C15.9643 13.4638 16.6667 11.7681 16.6667 9.99998C16.6667 6.31808 13.6819 3.33331 10 3.33331C6.31814 3.33331 3.33337 6.31808 3.33337 9.99998Z"
                  fill="#707070"
                />
              </svg>
              <svg
                v-else
                width="34"
                height="20"
                viewBox="0 0 34 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 0H23.3333C28.8562 0 33.3333 4.47715 33.3333 10C33.3333 15.5228 28.8562 20 23.3333 20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM17 9.66667C17 13.3486 19.9848 16.3333 23.6667 16.3333C25.4348 16.3333 27.1305 15.631 28.3807 14.3807C29.631 13.1305 30.3333 11.4348 30.3333 9.66667C30.3333 5.98477 27.3486 3 23.6667 3C19.9848 3 17 5.98477 17 9.66667Z"
                  fill="#3DC727"
                />
              </svg>
            </div>
          </div>
          <div class="checkbox-wrapper">
            <h4>In stock</h4>
            <div class="in-stock-checkbox" @click="inStockCheckbox = !inStockCheckbox">
              <svg
                v-if="!inStockCheckbox"
                width="34"
                height="20"
                viewBox="0 0 34 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 0H23.3333C28.8562 0 33.3333 4.47716 33.3333 10C33.3333 15.5228 28.8562 20 23.3333 20H10C4.47715 20 0 15.5228 0 10C0 4.47716 4.47715 0 10 0ZM3.33337 9.99998C3.33337 13.6819 6.31814 16.6666 10 16.6666C11.7682 16.6666 13.4638 15.9643 14.7141 14.714C15.9643 13.4638 16.6667 11.7681 16.6667 9.99998C16.6667 6.31808 13.6819 3.33331 10 3.33331C6.31814 3.33331 3.33337 6.31808 3.33337 9.99998Z"
                  fill="#707070"
                />
              </svg>
              <svg
                v-else
                width="34"
                height="20"
                viewBox="0 0 34 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 0H23.3333C28.8562 0 33.3333 4.47715 33.3333 10C33.3333 15.5228 28.8562 20 23.3333 20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0ZM17 9.66667C17 13.3486 19.9848 16.3333 23.6667 16.3333C25.4348 16.3333 27.1305 15.631 28.3807 14.3807C29.631 13.1305 30.3333 11.4348 30.3333 9.66667C30.3333 5.98477 27.3486 3 23.6667 3C19.9848 3 17 5.98477 17 9.66667Z"
                  fill="#3DC727"
                />
              </svg>
            </div>
          </div>
        </div>
      </Teleport>
      <div class="shop-content-wrapper">
        <ProductListView
          :searchFiltered="searchFiltered"
          :on-sale-checkbox="onSaleCheckbox"
          :in-stock-checkbox="inStockCheckbox"
          :sort-by-option="sortByOption"
        />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.shop-view {
  margin-top: clamp(1.563rem, -0.051rem + 8.07vw, 6rem);
  display: flex;
  flex-direction: column;
  gap: clamp(0.938rem, 0.392rem + 2.73vw, 2.438rem);
}

.shop__menu-sort--mobile {
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  padding: 13px 25px;
  background-color: #fff;
  overflow: hidden;

  .filter-header {
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;

    svg {
      justify-self: start;
      cursor: pointer;
    }

    h3 {
      font-weight: 500;
    }
  }
}

.shop-title {
  display: flex;
  justify-content: flex-start;
}

.shop-wrapper {
  display: flex;
  gap: 36px;

  @include mobile() {
    flex-direction: column;
    .filter-mobile {
      display: flex;
    }

    .shop__menu-sort {
      display: none;
    }
  }
}

.filter-mobile {
  display: none;
  align-items: center;
  gap: 8px;
  color: $accent;
  font-size: 16px;
  font-family: $main-font;
  cursor: pointer;
}

.checkbox-wrapper {
  margin-top: 39px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

.shop-content-wrapper {
  flex-grow: 1;
}
</style>
