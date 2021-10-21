<template>
  <section class="section">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h2 class="title has-text-centered">Login</h2>

        <form method="POST" @submit.prevent="login">
          <div class="field">
            <label class="label">E-Mail Address</label>

            <p class="control">
              <input type="email" class="input" v-model="email" />
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
              Login
            </button>
          </p>
        </form>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { LOGIN_QUERY } from "../graphql";

@Component
export default class LogIn extends Vue {
  private email = "";
  private password = "";

  private async login() {
    const { data } = await this.$apollo.query({
      query: LOGIN_QUERY,
      variables: { email: this.email, password: this.password },
    });

    localStorage.setItem("itemize-user-token", `Bearer ${data.login}`);

    this.$router.replace("/admin/posts");
  }
}
</script>
