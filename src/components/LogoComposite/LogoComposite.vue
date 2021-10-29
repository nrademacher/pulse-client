<template>
  <header>
    <div class="logo-composite">
      <img
        class="logo-composite__logo"
        :src="`img/logos/itemis-wortmarke-${
          darkMode ? 'weiss' : 'blau'
        }-rgb.svg`"
        alt="itemis Logo"
      />
      <hr class="logo-composite__divider text-muted" />
      <h1 class="logo-composite__title">PULSE</h1>
    </div>
    <div class="logo-composite__subtitle text-muted text-center font-italic">
      <slot name="subtitle"></slot>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class LogoComposite extends Vue {
  @Prop() public darkMode!: boolean;
}
</script>

<style lang="scss" scoped>
@import 'LogoComposite.scss';
</style>
