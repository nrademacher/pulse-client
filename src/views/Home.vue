<template>
  <section class="section">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <h1 class="title">Latest Messages</h1>

        <h3 v-for="message in messages" :key="message.id" class="title is-5">
          <router-link :to="message.id">
            {{ message.message }}
          </router-link>
        </h3>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { ALL_USERS_CHATS_QUERY, PUBLIC_MESSAGES_SUBSCRIPTION } from '@/graphql';

@Component({
  apollo: {
    allChats: ALL_USERS_CHATS_QUERY,
  },
})
export default class Home extends Vue {
  private allChats: any[] = [];

  public get messages() {
    return this.allChats;
  }

  public set messages(value) {
    this.allChats = value;
  }

  protected async mounted() {
    this.$apollo.queries.allChats.subscribeToMore({
      document: PUBLIC_MESSAGES_SUBSCRIPTION,
      updateQuery: (previousResult, { subscriptionData }) => {
        this.messages = [
          subscriptionData.data.subscribeToChannel,
          ...previousResult.allChats,
        ];
      },
    });
  }
}
</script>
