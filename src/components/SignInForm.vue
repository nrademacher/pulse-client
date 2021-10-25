<template>
  <div class="mt-5 d-flex w-100 justify-content-center align-items-center">
    <div class="" style="width: 20%">
      <h2 class="text-center">Login</h2>

      <form method="POST" @submit.prevent="login">
        <div class="">
          <label class="">E-Mail Address</label>

          <p class="">
            <input type="email" class="input" v-model="email" />
          </p>
        </div>

        <div class="">
          <label class="">Password</label>

          <p class="">
            <input type="password" class="input" v-model="password" />
          </p>
        </div>

        <p class="mt-3">
          <button class="btn btn-primary w-100">Login</button>
        </p>
      </form>
    </div>
  </div>
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

<style lang="scss" scoped></style>
