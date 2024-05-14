<script setup>
const stateValue = defineModel()
</script>

<template>
  <div class="toggler">
    <button :class="{ active: stateValue === 'SignIn' }" @click="stateValue = 'SignIn'">
      Sign In
    </button>
    <button :class="{ active: stateValue === 'SignUp' }" @click="stateValue = 'SignUp'">
      Register
    </button>
  </div>
</template>

<style lang="scss" scoped>
.toggler {
  margin-top: clamp(1.5rem, 0.591rem + 4.55vw, 4rem);
  width: 100%;
  min-width: 288px;
  border-radius: 8px;
  background: $light-gray;
  display: flex;
  justify-content: space-between;
  gap: 25px;
  padding: 5px;

  button {
    // min-width: 134px;
    width: 46%;
    padding: 12px;
    border: none;
    font-size: 20px;
  }

  .active {
    background: $white;
    box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
}
</style>
