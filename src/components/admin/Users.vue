<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <Menu />
        </div>
        <div class="column is-9">
          <h2 class="title">Users</h2>

          <table class="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in allUsers" :key="user.id">
                <td>{{ user.email }}</td>
                <td>
                  <router-link :to="`/admin/users/${user.id}`"
                    >View</router-link
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from './Menu.vue';
import { USER_ROLE_QUERY } from '../../graphql';

@Component({
  components: { Menu },
})
export default class Users extends Vue {
  private role = 'SOFTWARE_DEVELOPER';
  private allUsers = [];

  private async getUsersByRole() {
    const response = await this.$apollo.query({
      query: USER_ROLE_QUERY,
      variables: { role: this.role },
    });

    this.allUsers = response.data.getUsersByRole;
  }

  async mounted() {
    await this.getUsersByRole();
    console.log(this.allUsers);
  }
}
</script>
