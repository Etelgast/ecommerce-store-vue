import router from '@/app/router'
import { ref } from 'vue'

const isModalShow = ref(false)
const component = ref()

export function useModals() {
  return {
    component,
    isModalShow,
    showModal: () => (isModalShow.value = true),
    hideModal: (route) => {
      isModalShow.value = false
      router.push({ name: route })
    }
  }
}
