<template>
  <section class="section">
    <div class="columns">
      <div class="column is-6 is-offset-3">
        <router-link class="button is-link is-small" to="/"
          >Back Home</router-link
        >

        <div class="content">
          {{ message.message }}
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { MESSAGE_QUERY } from '@/graphql';

@Component({
  apollo: {
    message: {
      query: MESSAGE_QUERY,
      variables() {
        return {
          id: this.id,
        };
      },
    },
  },
})
export default class Message extends Vue {
  public message = '';
  public id = this.$route.params.id;
}
</script>
