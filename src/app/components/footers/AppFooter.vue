<script setup>
import ThirdPartyLinks from '@/app/components/blocks/ThirdPartyLinks.vue'
</script>

<template>
  <footer class="footer">
    <span class="footer__divider"></span>
    <nav>
      <div class="footer__support">
        <router-link to="/contact-us">CONTACT</router-link>
        <router-link to="/home">TERMS OF SERVICES</router-link>
        <router-link to="/home">SHIPPING AND RETURNS</router-link>
      </div>

      <div class="footer__input-wrapper">
        <input
          class="input__email-subscription"
          type="text"
          placeholder="Give an email, get the newsletter."
        />
        <svg
          width="25"
          height="9"
          viewBox="0 0 25 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 4.99124V3.74124C0 3.39606 0.279908 3.11624 0.625193 3.11624H20.0062V0.616238C20.0097 0.366191 20.1619 0.142308 20.3933 0.0470931C20.6246 -0.0481216 20.8904 0.00366328 21.069 0.178738L24.8201 3.92874C25.0599 4.17601 25.0599 4.56897 24.8201 4.81624L21.069 8.56624C20.8887 8.74287 20.6199 8.79382 20.3875 8.69542C20.1551 8.59702 20.0047 8.36856 20.0062 8.11624V5.61624H0.625193C0.279908 5.61624 0 5.33642 0 4.99124Z"
            fill="#707070"
          />
        </svg>
      </div>
    </nav>
    <div class="additional-info">
      <div class="terms">
        <p>
          © 2024 Shelly. <a href="#!">Terms of use</a> and
          <router-link to="/privacy-policy">privacy policy</router-link>.
        </p>
      </div>
      <ThirdPartyLinks />
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  margin-top: clamp(1.625rem, -3.466rem + 25.45vw, 15.625rem);
  display: flex;
  flex-direction: column;
  border-top: 1px solid $gray;

  @include mobile-xl() {
    border: none;

    nav {
      flex-wrap: wrap;
      gap: 71px;
    }
  }

  nav {
    margin-top: 52px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.footer__divider {
  width: 100%;
  height: 1px;
  background-color: $gray;
}

.footer__support {
  display: flex;
  gap: clamp(0.5rem, -0.25rem + 3.75vw, 2.563rem);
  text-wrap: balance;
  align-items: center;

  a {
    font-size: clamp(0.75rem, 0.659rem + 0.45vw, 1rem);
    text-transform: uppercase;
    color: $dark-gray;
    transition: all 0.4s ease;
    text-align: center;

    &:hover {
      color: $black;
    }
  }

  @include mobile() {
    flex-direction: column;
    align-items: stretch;

    a {
      text-align: left;
    }
  }
}

.footer__input-wrapper {
  position: relative;
  flex: 0 1 396px;

  @include mobile-xl() {
    order: -1;
  }

  svg {
    position: absolute;
    bottom: 20px;
    right: 0;
    cursor: pointer;

    path {
      transition: fill 0.4s ease;
    }
  }

  svg:hover path {
    fill: $black;
  }

  .input__email-subscription {
    width: 100%;
    height: 50px;
    padding-block: 6px;
    border: none;
    border-bottom: 1px solid $black !important;
    color: $dark-gray;
    font-size: 16px;
    font-weight: 400;
    outline: none;
  }
}

.additional-info {
  margin-top: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .terms {
    font-family: $main-font;
    p {
      color: $black;
    }

    a {
      color: $dark-gray;
    }
  }

  @include mobile-s() {
    flex-direction: column;
    align-items: stretch;
    gap: 36px;

    .third-party {
      order: -1;
      align-items: center;

      h5 {
        display: block;
      }
    }
  }
}
</style>
