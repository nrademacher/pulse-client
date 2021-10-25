<template>
  <section class="form-container mb-4 pb-5">
    <div class="signin-form rounded p-4 my-3 mt-4" style="">
      <b-form @submit.prevent="login" @reset="onReset">
        <b-form-group
          id="input-group-1"
          label="Username or email"
          label-for="input-1"
          label-size="sm"
          label-class="mb-1"
          style="font-weight: 600"
        >
          <b-form-input
            id="input-1"
            v-model="email"
            type="email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Password"
          label-for="input-2"
          label-size="sm"
          label-class="mb-2"
          style="font-weight: 600"
        >
          <b-form-input
            id="input-2"
            v-model="password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button
          type="submit"
          class="w-100"
          style="font-weight: 600"
          variant="primary"
          >Sign In</b-button
        >
      </b-form>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { LOGIN_QUERY } from '@/graphql';
import Cookies from 'js-cookie';

@Component
export default class SignInForm extends Vue {
  private email = '';
  private password = '';

  public async login() {
    const { data } = await this.$apollo.query({
      query: LOGIN_QUERY,
      variables: { email: this.email, password: this.password },
    });

    Cookies.set('pulse-user-token', data.login);

    this.$router.replace('/user/messages');
  }
}
</script>

<style lang="scss" scoped>
.form-container {
  width: 20rem;
}

.signin-form {
  max-width: calc(100vw - 2rem);
  border: 1px solid var(--itemis-nav-dark-border);
  background: var(--itemis-nav-dark);
  font-size: 0.875rem;
}
</style>
