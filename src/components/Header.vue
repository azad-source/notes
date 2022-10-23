<template>
  <v-app-bar color="primary" density="compact">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>Todo list</v-app-bar-title>
  </v-app-bar>
  <v-navigation-drawer v-model="drawer" absolute temporary>
    <v-list nav dense>
      <v-list-item
        v-for="{ title, icon, link } in menuItems"
        :key="title"
        :prepend-icon="icon"
        :title="title"
        :to="link"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    drawer: false,
    menuItems: [
      { title: 'Todo List', link: '/', icon: 'mdi-clipboard-list' },
      { title: 'About', link: '/about', icon: 'mdi-information' },
      { title: 'Contacts', link: '/contacts', icon: 'mdi-contacts' },
    ],
  }),
});
</script>
