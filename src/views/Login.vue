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
    <logo-composite :darkMode="darkMode">
      <template v-slot:subtitle>
        The collaboration and networking platform for Itemikers.
      </template>
    </logo-composite>
    <sign-in-form :darkMode="darkMode"></sign-in-form>
    <p class="mb-5">
      New to Pulse? <router-link to="/signup">Sign up</router-link>
    </p>
    <div class="misc-links mb-2 d-flex align-items-center flex-column small">
      <a href="https://www.itemis.com/" class="mb-4">About itemis</a>
      <a @click="themeToggle()" class="theme-switch mb-2">{{
        darkMode ? 'Light theme' : 'Dark theme'
      }}</a>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import LogoComposite from '@/components/LogoComposite/LogoComposite.vue';
import SignInForm from '@/components/SignInForm.vue';

@Component({
  components: {
    LogoComposite,
    SignInForm,
  },
})
export default class Login extends Vue {
  @Prop() public themeToggle!: () => void;
  @Prop() public darkMode!: boolean;
}
</script>

<style lang="scss" scoped>
.login-page {
  justify-content: flex-start;
  width: 100%;
  overflow: auto;
}

.theme-switch {
  font-size: 0.75rem;
}
</style>
