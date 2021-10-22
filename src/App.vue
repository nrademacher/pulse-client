<template>
  <div id="app">
    <nav
      class="navbar is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="container">
        <div class="navbar-brand">
          <router-link class="navbar-item" to="/">itemize</router-link>

          <button class="button navbar-burger">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  name: 'app',
};
</script>
