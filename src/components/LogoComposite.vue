<template>
  <section>
    <div class="logo-composite mb-3">
      <img
        class="logo-composite__logo"
        src="img/logos/itemis-wortmarke-weiss-rgb.svg"
        alt=""
      />
      <hr class="logo-composite__divider text-muted" />
      <h1 class="logo-composite__subtitle">PULSE</h1>
    </div>
    <div
      class="text-muted text-center mb-4 font-italic"
      style="font-weight: 300; font-size: 0.75rem"
    >
      The collaboration and networking platform for Itemikers.
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
.logo-composite {
  margin-top: 6rem;
  display: flex;
  align-items: center;

  &__divider {
    height: 4rem;
    margin: 0 2rem;
    border-left-width: 1px;
    border-style: solid;
    border-color: var(--itemis-nav-dark-border);
  }

  &__logo {
    width: 12rem;
    max-width: 90%;
    min-height: 54px;
    padding-bottom: 1rem;
  }

  &__subtitle {
    letter-spacing: 0.25em;
    font-size: 3rem;
    font-weight: 200;
    line-height: 0;
  }
}
</style>
