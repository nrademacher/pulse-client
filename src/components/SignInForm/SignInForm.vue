<template>
  <section class="form-container mb-2">
    <div class="signin-form rounded p-4 mb-1">
      <b-form @submit.prevent="login">
        <b-form-group id="input-group-1">
          <label
            for="input-1"
            class="mb-2 d-flex align-items-center"
            style="font-weight: 600"
          >
            <img
              :src="`img/logos/itemis-bildmarke-${
                darkMode ? 'weiss' : 'schwarz'
              }-rgb.svg`"
              alt="itemis icon"
              style="width: 1.25em; margin-right: 0.425em"
            />
            ID or email</label
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
          label-class="mb-1"
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
          class="signin-btn w-100"
          style="font-weight: 600"
          >Sign In</b-button
        >
      </b-form>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { LOGIN_QUERY } from '@/graphql';
import Cookies from 'js-cookie';

@Component
export default class SignInForm extends Vue {
  private email = '';
  private password = '';
  @Prop() public darkMode!: boolean;

  protected async login() {
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
@import './SignInForm.scss';
</style>
