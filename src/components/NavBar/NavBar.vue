<template>
  <b-navbar class="navbar" toggleable="sm" sticky>
    <div class="align-self-center" href="#">Pulse</div>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Link</b-nav-item>
        <b-nav-item href="#" disabled>Disabled</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto align-items-baseline">
        <a @click="themeToggle()" class="small mr-3">Toggle theme</a>
        <div class="d-flex align-items-baseline">
          <a href="/login" class="btn btn-sm btn-outline-secondary mr-2"
            >Log In</a
          >
          <a class="small">Sign Up</a>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
  @Prop() public themeToggle!: () => void;
}
</script>

<style lang="scss" scoped>
@import 'NavBar';
</style>
