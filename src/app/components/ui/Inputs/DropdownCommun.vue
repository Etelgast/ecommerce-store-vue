<script setup>
import { useDropdowns } from './../../../../products/composables/useDropdowns'
const { updateSelectedOption, expandDropdown } = useDropdowns()
const { selectedOption, isDropdownExpanded } = updateSelectedOption()

defineProps({
  dropdownOptions: Array,
  optionDisplayed: String,
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <div class="dropdown-wrapper">
    <div
      class="dropdown-wrapper-selected"
      @click="expandDropdown(), emit('update:modelValue', selectedOption)"
    >
      <h4 v-if="!selectedOption">{{ optionDisplayed }}</h4>
      <h4 v-else-if="selectedOption" class="selected">{{ selectedOption }}</h4>
      <svg
        v-show="!selectedOption"
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
          fill="black"
        />
      </svg>
      <svg
        v-show="selectedOption"
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 1.13758L10 10M1 9.86242L10 1" stroke="black" stroke-width="1.5" />
      </svg>
    </div>
    <ul class="options-wrapper" v-show="isDropdownExpanded">
      <li
        v-for="(dropdownOption, index) in dropdownOptions"
        :key="index"
        @click="updateSelectedOption(dropdownOption), emit('update:modelValue', selectedOption)"
      >
        <h4>{{ dropdownOption }}</h4>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.dropdown-wrapper {
  max-width: 396px;
  width: 100%;
  border: none;
  color: $gray;
  font-size: 16px;
  font-family: $main-font;
  position: relative;
}

.dropdown-wrapper-selected {
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid $gray !important;
  padding-bottom: 12px !important;

  .selected {
    color: $black;
  }

  .arrow {
    transition: all 0.4s ease;
  }

  .rotated {
    transform: rotate(180deg);
  }
}

.options-wrapper {
  position: absolute;
  margin-top: 20px;
  width: 100%;
  height: auto;
  border-radius: 4px;
  border: 1px solid $gray;
  color: $black;
  z-index: 10;
  background: $white;

  li {
    padding: 15px 12px;
    cursor: pointer;

    &:hover {
      background-color: $accent;
    }
  }
}
</style>
