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
      <slot name="subtitle"></slot>
    </div>
  </section>
</template>

<script></script>

<style lang="scss" scoped>
@import 'LogoComposite.scss';
</style>
