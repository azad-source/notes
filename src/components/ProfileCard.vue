<template>
  <v-card class="mx-auto" max-width="600" tile elevation="6">
    <v-img
      height="100%"
      cover
      src="https://cdn.vuetifyjs.com/images/cards/server-room.jpg"
    >
      <v-avatar color="rgba(255,255,255,.85)" size="250" rounded="6" class="mt-5">
        <v-img
          cover
          src="https://azad-source.github.io/CV/dist/static/media/avatar.4af517c3f7aa4cd20697.png"
        ></v-img>
      </v-avatar>
      <v-list-item
        class="text-white my-4"
        title="Azad MAMEDOV"
        subtitle="Frontend Engineer"
      ></v-list-item>
      <v-btn
        v-for="{ title, icon, link } in contacts"
        :key="title"
        class="mx-4 my-3"
        :icon="icon"
        variant="text"
        :href="link"
        link
        color="white"
        target="_blank"
        size="large"
        ><v-icon size="large">{{ icon }}</v-icon></v-btn
      >
    </v-img>
  </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    contacts: [
      { title: 'telegram', link: 'https://t.me/azad_63_mamedov', icon: 'mdi-telegram' },
      { title: 'email', link: 'mailto:azad_63_mamedov@mail.ru', icon: 'mdi-email' },
      {
        title: 'linkedin',
        link: 'https://www.linkedin.com/in/azad-mamedov/',
        icon: 'mdi-linkedin',
      },
    ],
  }),
});
</script>
