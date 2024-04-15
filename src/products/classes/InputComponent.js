export default class InputComponent {
  constructor(
    type,
    placeholder,
    errorMessage,
    pattern,
    minLength,
    maxLength,
    autocomplete,
    name,
    required
  ) {
    this.type = type
    this.placeholder = placeholder
    this.errorMessage = errorMessage
    this.pattern = pattern
    this.minLength = minLength
    this.maxLength = maxLength
    this.autocomplete = autocomplete
    this.name = name
    this.required = required
  }
}
