<template>
  <div>
    <ul>
      <TodoItem
        v-for="todo in todos"
        v-bind:todo="todo"
        v-bind:key="todo"
        @switchTodo="switchTodo"
        @removeTodo="removeTodo"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoItem from '@/components/TodoItem.vue';
export default defineComponent({
  props: ['todos'],
  components: {
    TodoItem,
  },
  methods: {
    switchTodo(id: string) {
      this.$emit('switchTodo', id);
    },
    removeTodo(id: string) {
      this.$emit('removeTodo', id);
    },
  },
});
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
