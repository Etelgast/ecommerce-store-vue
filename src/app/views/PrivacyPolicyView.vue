<template>
  <section class="privacy-policy">
    <h1>Privacy Policy</h1>
    <p>
      Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida
      arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna
      maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus,
      ac sodales lectus placerat quis.
    </p>

    <h2>Security</h2>
    <p>
      Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida
      arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque.
    </p>

    <h2>Cookies</h2>
    <ul>
      <li>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin.</li>
      <li>Nam fringilla molestie velit, eget pellentesque risus scelerisque a</li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.privacy-policy {
  margin-top: clamp(2.438rem, 1.142rem + 6.48vw, 6rem);
  margin-inline: auto;
  max-width: 671px;
  display: flex;
  flex-direction: column;
  gap: 24px;

  h1 {
    text-align: center;
    font-size: clamp(1.25rem, 0.955rem + 1.48vw, 2.063rem);

    @include mobile-s() {
      text-align: left;
    }
  }

  h2 {
    font-size: clamp(1rem, 0.773rem + 1.14vw, 1.625rem);
  }

  ul li::before {
    content: '●';
    margin-right: 5px;
  }
}
</style>
