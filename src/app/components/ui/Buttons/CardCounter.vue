<script setup>
const modelValue = defineModel()

function increaseAmount() {
  modelValue.value++
}

function decreaseAmount() {
  if (modelValue.value > 1) {
    --modelValue.value
  } else {
    return modelValue
  }
}
</script>

<template>
  <div class="counter">
    <span @click="decreaseAmount">-</span>
    <span>{{ modelValue }}</span>
    <input type="number" v-model="modelValue" />
    <span @click="increaseAmount">+</span>
  </div>
</template>

<style lang="scss" scoped>
.counter {
  padding: 14px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 120px;
  height: 56px;

  background-color: $light-gray;
  border-radius: 4px;

  span {
    font-size: 18px;
    font-family: $main-font;
    color: $dark-gray;
    font-weight: 700;
    cursor: pointer;
  }

  input {
    display: none;
    border: none;
    width: 50px;
  }
}
</style>
