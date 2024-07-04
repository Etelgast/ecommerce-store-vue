<script setup></script>

<template>
  <section class="about-us">
    <div class="about-us__top">
      <div class="about-us__top-heading">
        <h1>About</h1>
        <h3>Who we are and why we do what we do!</h3>
      </div>
      <p>
        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida
        arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna
        maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
        lacus, ac sodales lectus placerat quis.
      </p>
    </div>

    <div class="about-us__center">
      <h2>Top trends</h2>
      <img src="/assets/images/about__img-1.png" alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat
        hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris
        eget arcu facilisis consequat sed eu felis.
      </p>
      <ul>
        <li>consectetur adipiscing elit. Aliquam placerat</li>
        <li>Lorem ipsum dolor sit amet consectetur</li>
      </ul>
    </div>

    <div class="about-us__bootom">
      <h2>Produced with care</h2>
      <img src="/assets/images/about__img-1.png" alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat
        hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris
        eget arcu facilisis consequat sed eu felis.
      </p>
    </div>
  </section>
</template>

<style lang="scss">
.about-us {
  max-width: 659px;
  margin-inline: auto;
  margin-top: clamp(2.438rem, 1.142rem + 6.48vw, 6rem);
  display: flex;
  flex-direction: column;
  gap: 39px;
}

.about-us__top {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: clamp(1.438rem, 0.915rem + 2.61vw, 2.875rem);

  .about-us__top-heading {
    display: flex;
    flex-direction: column;
    gap: clamp(0.75rem, 0.432rem + 1.59vw, 1.625rem);
  }

  h1 {
    font-size: clamp(1.25rem, 0.955rem + 1.48vw, 2.063rem);
  }

  h3 {
    font-size: clamp(0.875rem, 0.602rem + 1.36vw, 1.625rem);
  }

  p {
    text-align: left;
  }
}

.about-us__center,
.about-us__bootom {
  display: flex;
  flex-direction: column;
  gap: 23px;

  h3 {
    text-align: left;
  }

  ul li::before {
    content: '●';
    margin-right: 5px;
  }
}
</style>
