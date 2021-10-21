<template>
  <section class="section">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h2 class="title has-text-centered">Signup</h2>

        <form method="POST" @submit.prevent="signUp">
          <div class="field">
            <label class="label">Email</label>
            <p class="control">
              <input type="email" class="input" v-model="email" />
            </p>
          </div>

          <div class="field">
            <label class="label">CC</label>
            <p class="control">
              <input type="text" class="input" v-model="cc" />
            </p>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <p class="control">
              <input type="password" class="input" v-model="password" />
            </p>
          </div>

          <p class="control">
            <button class="button is-primary is-fullwidth is-uppercase">
              SignUp
            </button>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SIGNUP_MUTATION } from '../graphql';

@Component
export default class SignUp extends Vue {
  private email = '';
  private password = '';
  private cc = '';

  private async signUp() {
    await this.$apollo.mutate({
      mutation: SIGNUP_MUTATION,
      variables: { email: this.email, password: this.password, cc: this.cc },
    });

    this.$router.replace('/login');
  }
}
</script>
