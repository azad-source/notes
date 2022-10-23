<template>
  <v-list-item
    class="mb-3"
    :class="todo.completed && 'bg-success'"
    :elevation="todo.completed ? 1 : 6"
    @click="$emit('switchTodo', todo.id)"
  >
    <v-list-item-content class="d-flex"
      ><v-checkbox
        :label="todo.title"
        class="d-flex"
        color="success"
        :checked="todo.completed"
      />
      <div v-if="todo.completed" class="done bg-white" />
      <v-btn variant="text" @click="$emit('removeTodo', todo.id)" icon>
        <v-icon color="error">mdi-beaker-remove</v-icon>
      </v-btn></v-list-item-content
    >
  </v-list-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
  computed: {
    uppercasedTitle() {
      return this.todo.title.toUpperCase();
    },
  },
});
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0 10px;
  margin-bottom: 1rem;
  position: relative;
}

.done {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
}
</style>
