import { ref } from 'vue'

const productsArray = new Set(JSON.parse(localStorage.getItem('ac-products')))

export function useProducts() {
  const products = ref(productsArray)

  function isInProducts(id) {
    return listProducts().some((obj) => obj.id === id)
  }

  function toggleProduct(product, amount) {
    const objectToUpdate = listProducts().find((obj) => obj.id === product.id)
    if (objectToUpdate) {
      products.value.delete(objectToUpdate)
    } else {
      products.value.add({ ...product, amount })
    }
    localStorage.setItem('ac-products', JSON.stringify(listProducts()))
  }

  function removeProduct(id) {
    const objectToRemove = listProducts().find((obj) => obj.id === id)
    if (objectToRemove) {
      products.value.delete(objectToRemove)
      localStorage.setItem('ac-products', JSON.stringify(listProducts()))
    }
  }

  function listProducts() {
    return Array.from(products.value)
  }

  function gettingAmount(id) {
    return listProducts().find((obj) => obj.id === id).amount
  }

  function updatingAmount(id, count) {
    const obj = listProducts().find((obj) => obj.id === id)
    obj.amount = count
    products.value.add(obj)
    localStorage.setItem('ac-products', JSON.stringify(listProducts()))
  }

  return {
    isInProducts,
    toggleProduct,
    removeProduct,
    listProducts,
    gettingAmount,
    updatingAmount,
    products
  }
}
