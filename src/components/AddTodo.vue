<template>
  <v-form @submit.prevent="onSubmit">
    <v-row class="justify-center">
      <v-col cols="12" md="10">
        <v-text-field v-model="title" label="task" required />
      </v-col>
      <v-col cols="12" md="2">
        <v-btn type="submit" color="primary" size="x-large">Create</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      title: '',
    };
  },
  methods: {
    onSubmit() {
      if (this.title.trim()) {
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false,
        };

        this.$emit('creatTodo', newTodo);
        this.title = '';
      }
    },
  },
});
</script>
