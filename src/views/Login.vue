<template>
  <section
    class="
      login-page
      d-flex
      flex-column
      justify-content-center
      align-items-center
      px-3
    "
  >
    <logo-composite></logo-composite>
    <sign-in-form></sign-in-form>
  </section>
</template>

<script lang="ts">
import LogoComposite from '@/components/LogoComposite.vue';
import SignInForm from '@/components/SignInForm.vue';

export default {
  components: {
    LogoComposite,
    SignInForm,
  },
};
</script>

<style lang="scss" scoped>
.login-page {
  justify-content: flex-start;
  width: 100%;
  overflow: auto;
}
</style>
