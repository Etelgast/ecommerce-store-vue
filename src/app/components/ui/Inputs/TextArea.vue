<script setup>
import { ref } from 'vue'

const props = defineProps({
  componentData: Object
})

const emit = defineEmits(['update:modelValue', 'form-validate'])

const modelValue = defineModel()

const localError = ref('')

const checkValidation = (event) => {
  const isPatternValid = props.componentData.pattern
    ? !!event.target.value.match(props.componentData.pattern)
    : true

  const isLengthValid =
    event.target.value.length >= props.componentData.minLength &&
    event.target.value.length <= props.componentData.maxLength

  if (!isPatternValid || !isLengthValid) {
    localError.value = props.componentData.errorMessage
  } else {
    localError.value = ''
  }
  emit('form-validate', !!(isPatternValid && isLengthValid))
}

const textAreaHeight = ref()
function autoSize(event) {
  textAreaHeight.value = event.target.scrollHeight
}
</script>

<template>
  <div class="input-wrapper">
    <textarea
      class="text-area"
      :name="componentData.name"
      :placeholder="componentData.placeholder"
      :autocomplete="componentData.autocomplete"
      :minLength="componentData.minLength"
      :maxLength="componentData.maxLength"
      :required="componentData.required"
      :style="{ height: `${textAreaHeight}px` }"
      v-model="modelValue"
      @blur="checkValidation"
      v-on:keyup="autoSize"
      v-on:keydown="autoSize"
    ></textarea>
    <span class="field-error" v-if="localError">{{ localError }}</span>
  </div>
</template>

<style lang="scss" scoped>
.input-wrapper {
  position: relative;

  .text-area {
    width: 100%;
    padding-bottom: 61px;
    border: none;
    font-size: 16px;
    font-family: $main-font;
    border-bottom: 1px solid $gray;
    overflow: hidden;
    resize: none;
  }

  .text-area::-webkit-scrollbar {
    width: 0px;
  }

  .btn-clear {
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
  }

  .field-error {
    display: inline-block;
    margin-top: 10px;
    font-family: $main-font;
    font-size: 14px;
    color: $error;
  }
}
</style>
