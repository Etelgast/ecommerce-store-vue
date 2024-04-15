import axios from 'axios'

const API_URL = 'https://0dd36075f8c4147b.mokky.dev'

export function getLatestCards(data) {
  return axios.get(`${API_URL}/cards`, data)
}

export function getCardsByTitle(title) {
  return axios.get(`${API_URL}/cards?title=*${title}`)
}

export function getOffersSlider(data) {
  return axios.get(`${API_URL}/offers`, data)
}

export function getCardsBy(params) {
  let queryString = ''

  if (params.onSale) {
    queryString = `&on_sale=${params.onSale}`
  }
  if (params.inStock) {
    queryString += `&in_stock=${params.inStock}`
  }
  if (params.sortBy) {
    queryString += `&sortBy=${params.sortBy}`
  }

  return axios.get(`${API_URL}/cards?title=*${params.title}` + queryString)
}

export function getFullCards(id) {
  return axios.get(`${API_URL}/full-cards?id=${id}`)
}

export function sendReviewProduct(data) {
  return axios.post(`${API_URL}/reviews`, data)
}

export function getBlogArticles(page) {
  return axios.get(`${API_URL}/blog?page=${page}&limit=4`)
}

export function getFilteredBlogArticles(params) {
  let queryString = ''
  if (params.categorie) {
    queryString = `&categories=${params.categorie}`
  }
  return axios.get(`${API_URL}/blog?page=1&limit=4&title=*${params.title}` + queryString)
}

export function getFullArticle(id) {
  return axios.get(`${API_URL}/articles?id=${id}`)
}
