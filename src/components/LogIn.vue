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
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { LOGIN_QUERY } from '@/graphql';
import Cookies from 'js-cookie';

@Component
export default class LogIn extends Vue {
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
.login-page {
  justify-content: flex-start;
  width: 100%;
  overflow: auto;
}

.logo-composite {
  margin-top: 6rem;
  display: flex;
  align-items: center;

  &__divider {
    height: 4rem;
    margin: 0 2rem;
    border-left: 1px solid #adb5bd;
  }

  &__logo {
    width: 12rem;
    max-width: 90%;
    min-height: 54px;
    padding-bottom: 1rem;
  }

  &__subtitle {
    letter-spacing: 0.5rem;
    font-size: 3rem;
    font-weight: 100;
    line-height: 0;
  }
}
</style>
