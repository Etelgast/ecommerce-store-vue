<script setup>
defineProps({
  componentData: Object
})
</script>

<template>
  <div class="radio-wrapper">
    <input type="radio" name="radiobutton" :id="componentData.name" :value="componentData.name" />
    <label :for="componentData.name">
      <slot></slot>
    </label>
  </div>
</template>

<style lang="scss">
.radio-wrapper {
  input {
    opacity: 0;
  }

  label {
    position: relative;
    margin-left: 8px;
    font-family: $main-font;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 18px;
  }

  label::before {
    content: '';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    margin-right: 8px;
    border: 2px solid $black;
    border-radius: 50%;
  }

  label::after {
    content: '';
    position: absolute;
    left: 5px;
    width: 6px;
    height: 6px;
    background-color: $black;
    border-radius: 50%;
    opacity: 0;
  }

  input:checked + label::after {
    opacity: 1;
  }
}
</style>
