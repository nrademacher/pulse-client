<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <Menu />
        </div>
        <div class="column is-9">
          <h2 class="title">Add Message</h2>

          <form method="post" @submit.prevent="addMessage">
            <div class="field">
              <label class="label">Channel</label>

              <p class="control">
                <input
                  class="input"
                  v-model="channel"
                  placeholder="Chat channel"
                />
              </p>
            </div>

            <div class="field">
              <label class="label">Content</label>

              <p class="control">
                <textarea
                  class="textarea"
                  rows="10"
                  v-model="message"
                  placeholder="Message content"
                ></textarea>
              </p>
            </div>

            <p class="control">
              <button class="button is-primary">Add Message</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Menu from './Menu.vue';
import { SEND_MESSAGE_MUTATION } from '../../graphql';

@Component({
  components: { Menu },
})
export default class AddMessage extends Vue {
  private message = '';
  private recipientEmail = '';
  private channel = '';

  private async addMessage() {
    await this.$apollo.mutate({
      mutation: SEND_MESSAGE_MUTATION,
      variables: {
        message: this.message,
        recipientEmail: this.recipientEmail,
        channel: this.channel,
      },
    });

    this.$router.replace('/admin/messages');
  }
}
</script>
