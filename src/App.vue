<template>
  <div id="app">
    <nav-bar v-if="loggedIn" :themeToggle="switchTheme"></nav-bar>
    <router-view class="router-view" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Cookies from 'js-cookie';
import NavBar from '@/components/NavBar/NavBar.vue';
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark({
  attribute: 'color-scheme',
  valueDark: 'dark',
  valueLight: 'light',
});
const toggleDark = useToggle(isDark);

@Component({
  components: { NavBar },
})
export default class App extends Vue {
  public loggedIn = false;

  public switchTheme() {
    toggleDark();
  }

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
