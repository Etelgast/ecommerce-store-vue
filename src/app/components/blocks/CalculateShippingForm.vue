<script setup>
import { ref } from 'vue'

defineProps({
  dropdownOptions: Array,
  placeholder: String
})

const isDropdownExpanded = ref(false)
</script>

<template>
  <div class="dropdown-wrapper">
    <div class="dropdown__expander" @click="isDropdownExpanded = !isDropdownExpanded">
      {{ placeholder }}
      <svg
        class="arrow"
        :class="{ rotated: isDropdownExpanded }"
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.6551 0.103514C12.7208 0.0372643 12.8103 -5.20037e-08 12.9036 -4.7925e-08C12.9969 -4.38464e-08 13.0864 0.0372643 13.1521 0.103514L13.894 0.845401C13.9616 0.908905 14 0.997568 14 1.09036C14 1.18316 13.9616 1.27182 13.894 1.33533L7.46193 7.76735C7.36358 7.86582 7.23016 7.9212 7.09099 7.92133L6.90901 7.92133C6.76984 7.9212 6.63642 7.86582 6.53807 7.76735L0.106047 1.33533C0.0383834 1.27182 9.01957e-07 1.18316 9.06013e-07 1.09036C9.10069e-07 0.997567 0.0383834 0.908904 0.106047 0.8454L0.847934 0.103513C0.913642 0.0372638 1.00309 -5.68113e-07 1.0964 -5.64034e-07C1.18971 -5.59956e-07 1.27915 0.0372638 1.34486 0.103513L7 5.75865L12.6551 0.103514Z"
          fill="#707070"
        />
      </svg>
    </div>
    <form class="dropdown__form" v-if="isDropdownExpanded">
      <ul>
        <li v-for="dropdownOption in dropdownOptions" :key="dropdownOption">
          <input type="text" :placeholder="dropdownOption" :name="dropdownOption" required />
        </li>
      </ul>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.dropdown-wrapper {
  max-width: 390px;
  width: 100%;
  border: none;
  color: $black;
  font-size: 20px;
  font-family: $main-font;
  position: relative;
  text-transform: uppercase;

  .dropdown__expander {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-size: clamp(1rem, 0.909rem + 0.45vw, 1.25rem);

    svg {
      transition: all 0.4s ease;
    }

    .rotated {
      transform: rotate(180deg);
    }
  }

  .dropdown__form {
    margin-top: 23px;

    ul {
      display: flex;
      flex-direction: column;
      gap: 23px;
    }

    input {
      width: 100%;
      padding-bottom: 13px;
      border: none;
      border-bottom: 1px solid $gray;
    }
  }
}
</style>
