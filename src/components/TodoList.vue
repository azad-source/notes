<template>
  <div>
    <ul>
      <TodoItem
        v-for="todo in todos"
        v-bind:todo="todo"
        v-bind:key="todo"
        v-on:switchTodo="switchTodo"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import TodoItem from '@/components/TodoItem.vue';
export default {
  props: ['todos'],
  components: {
    TodoItem,
  },
  methods: {
    switchTodo: (id: string) => {
      console.log('id', id);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
