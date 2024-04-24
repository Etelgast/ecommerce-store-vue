import { ref } from 'vue'

const userData = ref({
  name: '',
  email: ''
})

export function useUserData() {
  function fillUserData(data) {
    userData.value = {
      name: data.name,
      email: data.email
    }
  }

  function getUserDataObject() {
    return userData.value
  }

  function logOut() {
    localStorage.removeItem('ac-token')
    userData.value = {
      name: '',
      email: ''
    }
  }

  return { fillUserData, getUserDataObject, logOut }
}
