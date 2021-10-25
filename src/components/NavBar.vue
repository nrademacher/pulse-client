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
        <div>
          <a href="/login" class="btn btn-sm btn-outline-secondary mr-1"
            >Log In</a
          >
          <a>Sign Up</a>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 2.5rem;
  min-height: 40px;
  width: 100%;
  border-bottom: 1px solid var(--itemis-nav-dark-border);
  background: var(--itemis-nav-dark);
  padding: 0 1rem;
  align-items: center;
}
</style>
