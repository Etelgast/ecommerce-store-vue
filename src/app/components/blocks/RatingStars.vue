<script setup>
const ratingStars = 5

const modelValue = defineModel()
</script>

<template>
  <div class="choosing-rate__stars">
    <div v-for="index in ratingStars" :key="index" class="rate-stars__item">
      <input type="radio" :id="index" :value="index" name="rating-star" v-model="modelValue" />
      <label :for="index"
        ><svg
          width="25"
          height="25"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="path"
            d="M29.4568 11.2568L29.4569 11.2568C29.9133 11.2981 30.3009 11.607 30.4433 12.0446C30.586 12.4842 30.4541 12.9627 30.1086 13.2659L23.3441 19.1973L23.1203 19.3936L23.1862 19.684L25.1806 28.4681C25.2827 28.9199 25.1074 29.3845 24.7347 29.6539L24.7342 29.6543C24.3615 29.9243 23.8661 29.9458 23.4716 29.7101L15.7567 25.0963L15.5001 24.9428L15.2434 25.0963L7.5269 29.7102L7.52676 29.7103C7.34489 29.8191 7.14177 29.873 6.93867 29.873C6.70192 29.873 6.46689 29.8003 6.26641 29.6547L6.26542 29.6539C5.89279 29.3846 5.71751 28.9201 5.81941 28.4684C5.81944 28.4683 5.81946 28.4682 5.81949 28.4681L7.8139 19.684L7.87983 19.3936L7.65596 19.1973L0.891426 13.2658C0.891414 13.2658 0.891402 13.2658 0.89139 13.2658C0.545951 12.9628 0.414296 12.4833 0.55648 12.0454C0.70011 11.6078 1.08744 11.2988 1.54405 11.2567L10.4935 10.4443L10.7909 10.4173L10.9081 10.1428L14.4447 1.86286L14.4448 1.86262C14.6257 1.43859 15.0391 1.16553 15.5 1.16553C15.9605 1.16553 16.3742 1.43818 16.5569 1.8631C16.5569 1.86329 16.557 1.86349 16.5571 1.86368L20.0934 10.1428L20.2106 10.4173L20.508 10.4443L29.4568 11.2568Z"
            stroke="black"
          />
        </svg>
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.choosing-rate__stars {
  margin-top: 17px;
  display: inline-flex;
  flex-direction: row-reverse;
  gap: 10px;
  position: relative;

  .rate-stars__item input {
    position: absolute;
    opacity: 0;
    visibility: hidden;
  }

  .rate-stars__item label {
    cursor: pointer;

    svg {
      fill: white;
      transition: all 0.3s;
    }
  }

  .rate-stars__item:hover ~ .rate-stars__item label svg,
  .rate-stars__item:hover svg,
  .rate-stars__item input:checked + label svg,
  .rate-stars__item:has(input:checked) ~ .rate-stars__item label svg {
    fill: black;
  }
}
</style>
