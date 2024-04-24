<script setup>
import { onMounted, onUnmounted } from 'vue'

onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = 'auto'
})
</script>

<template>
  <div class="modal">
    <div class="modal-wrapper" role="dialog" aria-modal="true">
      <div class="modal-wrapper__top">
        <svg id="Icons" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <circle cx="30" cy="30" fill="#4cbb17" stroke="white" r="29" />
          <path
            d="m24.262 42.07-6.8-6.642a1.534 1.534 0 0 1 0-2.2l2.255-2.2a1.621 1.621 0 0 1 2.256 0l4.048 3.957 11.353-17.26a1.617 1.617 0 0 1 2.2-.468l2.684 1.686a1.537 1.537 0 0 1 .479 2.154l-13.443 20.444a3.3 3.3 0 0 1 -5.032.529z"
            fill="#fff"
          />
        </svg>
        <h3>Success</h3>
      </div>
      <div class="modal-wrapper__body">
        <p>
          Your order is successfully created. Please, click on the button for redirecting to the
          oder details
        </p>
        <button class="modal-button" @click="$emit('close')">Got It</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);

  .modal-wrapper {
    max-width: 400px;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    svg {
      max-width: 200px;
      max-height: 200px;
    }

    .modal-wrapper__top {
      width: 100%;
      height: 50%;
      padding: 20px 35px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 15px;
      border-radius: 8px 8px 0 0;
      background-color: #4cbb17;
      color: $white;

      h3 {
        text-transform: uppercase;
      }
    }

    .modal-wrapper__body {
      width: 100%;
      height: 50%;
      padding: 20px 35px;
      border-radius: 0 0 8px 8px;
      text-align: center;
      background-color: $white;

      .modal-button {
        width: 50%;
        padding-block: 15px;
        color: $white;
        font-weight: 600;
        border-radius: 4px;
        border: 1px solid #4cbb17;
        background: #4cbb17;
        text-transform: uppercase;
        font-size: 16px;
        transition: all 0.6s ease;

        &:hover {
          color: #4cbb17;
          background-color: $white;
        }
      }
    }
  }
}
</style>
