<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <Menu />
        </div>
        <div class="column is-9">
          <h2 class="title">Messages</h2>

          <table class="table is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
              <tr>
                <th>Title</th>
                <th>User</th>
                <th>Recipient</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="message in messages" :key="message.id">
                <td>{{ message.message }}</td>
                <td>{{ message.from.email }}</td>
                <td>{{ message.to ? message.to.email : '' }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import {
  GET_USER_CHATS_QUERY,
  PUBLIC_MESSAGES_SUBSCRIPTION,
} from '../../graphql';
import { Component, Vue } from 'vue-property-decorator';
import Menu from './Menu.vue';

@Component({
  components: { Menu },
  apollo: {
    ownChats: GET_USER_CHATS_QUERY,
  },
})
export default class Messages extends Vue {
  private ownChats: any[] = [];

  public get messages() {
    return this.ownChats;
  }

  public set messages(value) {
    this.ownChats = value;
  }

  protected async mounted() {
    await this.$apollo.queries.ownChats.refetch();

    this.$apollo.queries.ownChats.subscribeToMore({
      document: PUBLIC_MESSAGES_SUBSCRIPTION,
      updateQuery: (previousResult, { subscriptionData }) => {
        this.messages = [
          ...previousResult.ownChats,
          subscriptionData.data.subscribeToChannel,
        ];
      },
    });
  }
}
</script>
