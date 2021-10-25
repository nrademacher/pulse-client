<template>
  <div id="app">
    <nav-bar v-if="loggedIn"></nav-bar>
    <router-view class="router-view" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cookies from 'js-cookie';
import NavBar from '@/components/NavBar.vue';

@Component({
  components: { NavBar },
})
export default class App extends Vue {
  public loggedIn = false;

  protected mounted() {
    const token = Cookies.get('pulse-user-token');

    if (token) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.router-view {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  overflow: auto;
  width: 100%;
  height: 100%;
}
</style>
