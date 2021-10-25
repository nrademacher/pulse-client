<template>
  <aside class="menu">
    <p class="menu-label">Message</p>
    <ul class="menu-list">
      <li>
        <router-link to="/user/messages/new">New Message</router-link>
      </li>
      <li>
        <router-link to="/user/messages">Messages</router-link>
      </li>
    </ul>
    <p class="menu-label">User</p>
    <ul class="menu-list">
      <li>
        <router-link to="/users">Users</router-link>
      </li>
    </ul>
  </aside>
</template>
