<template>
  <v-app>
    <Header />
    <v-main>
      <v-container fluid><router-view /></v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/components/Header.vue';

export default defineComponent({
  components: {
    Header,
  },
});
</script>
