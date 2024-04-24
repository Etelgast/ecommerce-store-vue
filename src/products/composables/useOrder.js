import { ref } from 'vue'

const tax = 15

const orderStorage = JSON.parse(localStorage.getItem('order'))
const order = ref(orderStorage)

export function useOrder() {
  function fillOrder(items) {
    order.value = {
      products: items,
      summary: calculateSummaryPrice(items),
      total: calculateSummaryPrice(items) + tax
    }

    localStorage.setItem('order', JSON.stringify(order.value))
  }

  function getOrder() {
    return order.value
  }

  function removeOrder() {
    localStorage.removeItem('order')
    localStorage.removeItem('ac-products')
  }

  function validateBillingForm(billingDetails, requiredFields) {
    const isValid = requiredFields.every((field) => billingDetails[field] !== '')
    if (isValid) {
      order.value.details = billingDetails
    }

    return isValid
  }

  function calculateSummaryPrice(items) {
    return items.reduce((sum, item) => sum + Math.round(item.price * item.amount), 0)
  }

  return { fillOrder, getOrder, calculateSummaryPrice, removeOrder, validateBillingForm }
}
