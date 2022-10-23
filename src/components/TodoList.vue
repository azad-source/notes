<template>
  <div>
    <v-list class="px-4">
      <TodoItem
        v-for="todo in todos"
        v-bind:todo="todo"
        v-bind:key="todo"
        @switchTodo="switchTodo"
        @removeTodo="removeTodo"
      />
    </v-list>
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
