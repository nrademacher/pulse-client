<template>
  <aside class="menu">
    <p class="menu-label">Message</p>
    <ul class="menu-list">
      <li>
        <router-link to="/admin/messages/new">New Message</router-link>
      </li>
      <li>
        <router-link to="/admin/messages">Messages</router-link>
      </li>
    </ul>
    <p class="menu-label">User</p>
    <ul class="menu-list">
      <li>
        <router-link to="/admin/users">Users</router-link>
      </li>
    </ul>
  </aside>
</template>
