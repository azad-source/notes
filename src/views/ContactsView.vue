<template>
  <v-container>
    <v-row class="text-center">
      <v-col col="12" class="flex-column">
        <ProfileCard />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProfileCard from '@/components/ProfileCard.vue';

export default defineComponent({
  components: {
    ProfileCard,
  },
});
</script>
