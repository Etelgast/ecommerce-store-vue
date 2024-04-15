import { ref } from 'vue'
const favArray = new Set(JSON.parse(localStorage.getItem('ac-favourites')))
const favourites = ref(favArray)

export function useFavourites() {
  function isInFavourite(id) {
    return favourites.value.has(id)
  }

  function toggleFavourite(id) {
    if (favourites.value.has(id)) {
      favourites.value.delete(id)
    } else {
      favourites.value.add(id)
    }
    localStorage.setItem('ac-favourites', JSON.stringify(listFavourites()))
  }

  function listFavourites() {
    return Array.from(favourites.value)
  }

  return { toggleFavourite, isInFavourite, listFavourites }
}
