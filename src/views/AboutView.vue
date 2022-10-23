<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" md="6" v-for="(item, index) in descriptions" :key="index">
        <v-card
          elevation="4"
          max-width="440"
          class="mx-auto"
          theme="dark"
          color="#385F73"
        >
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.text }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data: () => ({
    descriptions: [
      {
        title: 'Manage your to do list online',
        text: `A truly cross platform task management app. Whether you're at home using the desktop app or are using the mobile app on the go you can access your task list and stay organized.`,
      },
      {
        title: 'A smart daily planner',
        text: `Set yourself up for success with My Day, intelligent and personalized suggestions to update your daily or weekly to do list. With both a Microsoft to do desktop app and mobile app available, it is easy to stay on task all day long.`,
      },
      {
        title: 'Sharing made easy',
        text: `Sharing an online to do list can help keep you connected with friends, family and colleagues.`,
      },
      {
        title: 'Make managing tasks easier',
        text: `Break tasks down into simple steps, add due dates, and set reminders for your daily checklist to keep you on track.`,
      },
    ],
  }),
});
</script>
