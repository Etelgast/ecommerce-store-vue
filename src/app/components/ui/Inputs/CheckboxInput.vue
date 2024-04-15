<script setup>
defineProps({
  name: String
})

const modelValue = defineModel()
</script>

<template>
  <div class="checkbox-wrapper">
    <input :id="name" :name="name" type="checkbox" v-model="modelValue" hidden />
    <label :for="name"><slot></slot></label>
  </div>
</template>

<style lang="scss" scoped>
.checkbox-wrapper {
  align-self: flex-start;

  input {
    opacity: 0;
  }

  label {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: $main-font;
    font-size: 14px;
    color: $dark-gray;
  }

  label::before {
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 16px;
    min-height: 16px;
    border-radius: 2px;
    border: 1px solid $gray;
    cursor: pointer;
    margin-right: 8px;
    transition: box-shadow 0.3s;
  }

  &:hover > label::before {
    box-shadow: 0 0 0 0.2rem $dark-gray;
  }

  label::after {
    content: '';
    position: absolute;
    left: 3px;
    min-width: 10px;
    min-height: 10px;
    opacity: 0;
    background-color: $dark-gray;
  }

  input:checked + label::after {
    opacity: 1;
  }
}
</style>
