<script setup></script>

<template>
  <div class="slider-skeleton">
    <div class="product-info">
      <div class="info-content">
        <h3></h3>
        <span class="price"></span>
        <span class="button"></span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.slider-skeleton {
  position: relative;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: clamp(22.125rem, 15.489rem + 33.18vw, 40.375rem);
  border-radius: 16px;
  background-color: $light-gray;
  animation: pulse-bs 1s infinite;

  .product-info {
    position: absolute;
    width: 100%;
    bottom: clamp(1.625rem, -2.898rem + 22.61vw, 14.063rem);
    padding-inline: clamp(0.5rem, -0.455rem + 4.77vw, 3.125rem);
    display: flex;
    flex-direction: column;
    gap: clamp(0.75rem, -0.068rem + 4.09vw, 3rem);

    .info-content {
      display: flex;
      flex-direction: column;
      gap: clamp(0.188rem, -0.108rem + 1.48vw, 1rem);

      h3 {
        width: 200px;
        height: 35px;
        border-radius: 16px;
        animation: pulse-bg 1s infinite;
      }

      .price {
        width: 100px;
        height: 25px;
        border-radius: 16px;
        animation: pulse-bg 1s infinite;
      }

      .button {
        width: 150px;
        height: 50px;
        border-radius: 16px;
        animation: pulse-bg 1s infinite;
      }
    }
  }
}

@keyframes pulse-bg {
  0% {
    background-color: $light-gray;
  }
  50% {
    background-color: $gray;
  }
  100% {
    background-color: $light-gray;
  }
}

@keyframes pulse-bs {
  0% {
    box-shadow:
      0 14px 28px $light-gray,
      0 10px 10px $light-gray;
  }
  50% {
    box-shadow:
      0 14px 28px $gray,
      0 10px 10px $gray;
  }
  100% {
    box-shadow:
      0 14px 28px $light-gray,
      0 10px 10px $light-gray;
  }
}
</style>
