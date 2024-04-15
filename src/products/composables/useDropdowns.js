import { ref } from 'vue'

export function useDropdowns() {
  const selectedOption = ref('')
  const isDropdownExpanded = ref(null)
  const optionDisplayed = ref('')
  function updateSelectedOption(dropdownOption) {
    selectedOption.value = dropdownOption
    isDropdownExpanded.value = false

    return { selectedOption, isDropdownExpanded }
  }

  function updateSelectedOptionWithMapOptions(dropdownOption) {
    selectedOption.value = dropdownOption
    optionDisplayed.value = dropdownOption

    return { selectedOption, isDropdownExpanded, optionDisplayed }
  }

  function expandDropdown() {
    if (selectedOption.value) {
      selectedOption.value = ''
      isDropdownExpanded.value = true
    } else {
      isDropdownExpanded.value = !isDropdownExpanded.value
    }
  }

  return { updateSelectedOption, expandDropdown, updateSelectedOptionWithMapOptions }
}
