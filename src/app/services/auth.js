import axios from 'axios'

const API_URL = 'https://0dd36075f8c4147b.mokky.dev'

export function registerNewUser(data) {
  return axios.post(`${API_URL}/register`, data)
}

export function signIn(data) {
  return axios.post(`${API_URL}/auth`, data)
}

export function checkingAuthToken(token) {
  return axios.get(`${API_URL}/auth_me`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
}
