import { ref } from 'vue'

const productsArray = new Set(JSON.parse(localStorage.getItem('ac-products')))
const products = ref(productsArray)

export function useProducts() {
  function isInProducts(id) {
    return Array.from(products.value).some((obj) => obj.id === id)
  }

  function toggleProduct(product) {
    let obj = Array.from(products.value).find((obj) => obj.id === product.id)

    if (obj) {
      products.value.delete(obj)
    } else {
      products.value.add(product)
    }
    localStorage.setItem('ac-products', JSON.stringify(listProducts()))
  }

  function removeProduct(id) {
    let obj = Array.from(products.value).find((obj) => obj.id === id)
    products.value.delete(obj)
    localStorage.setItem('ac-products', JSON.stringify(listProducts()))
  }

  function listProducts() {
    return Array.from(products.value)
  }

  function gettingAmount(id) {
    return Array.from(products.value).find((obj) => obj.id === id)?.amount
  }

  function updatingAmount(id, count) {
    const obj = Array.from(products.value).find((obj) => obj.id === id)
    obj.amount = count
    localStorage.setItem('ac-products', JSON.stringify(listProducts()))
  }

  return { isInProducts, toggleProduct, removeProduct, listProducts, gettingAmount, updatingAmount }
}
