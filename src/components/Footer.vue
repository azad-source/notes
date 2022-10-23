<template>
  <v-footer color="primary" padless app>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="{ title, link } in links"
        :key="title"
        color="white"
        variant="text"
        class="mx-5"
        :to="link"
      >
        {{ title }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        <strong>© Mamedov A.</strong> — {{ new Date().getFullYear() }}
      </v-col>
    </v-row>
  </v-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    links: [
      { title: 'Todo List', link: '/' },
      { title: 'About', link: '/about' },
      { title: 'Contacts', link: '/contacts' },
    ],
  }),
});
</script>
