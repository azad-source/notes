<template>
  <form @submit.prevent="onSubmit">
    <input type="text" v-model="title" />
    <button type="submit">Create</button>
  </form>
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

<style scoped>
form {
  display: flex;
  justify-content: center;
}

input {
  width: 400px;
}
</style>
