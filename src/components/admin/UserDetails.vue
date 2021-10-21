<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <Menu />
        </div>
        <div class="column is-9">
          <h2 class="title">User Details</h2>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Username</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input class="input is-static" :value="user.email" readonly />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">CC</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input class="input is-static" :value="user.cc" readonly />
                </p>
              </div>
            </div>
          </div>

          <div class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">Number of posts</label>
            </div>
            <div class="field-body">
              <div class="field">
                <p class="control">
                  <input class="input is-static" readonly />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from './Menu.vue';
import { USER_ID_QUERY } from '../../graphql';

@Component({
  components: { Menu },
})
export default class UserDetails extends Vue {
  private user = {};
  private id = this.$route.params.id;

  private async getUserById() {
    console.log(this.id);
    const { data } = await this.$apollo.query({
      query: USER_ID_QUERY,
      variables: { id: this.id },
    });

    this.user = data.getUserById;
  }

  protected async mounted() {
    await this.getUserById();
  }
}
</script>
