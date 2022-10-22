<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" md="10">
        <AddTodo @creatTodo="creatTodo" />
      </v-col>
      <v-col cols="12" md="2">
        <v-select v-model="filter" :items="filterSelectItems" label="filter" outlined />
      </v-col>
      <v-col cols="12">
        <Loader v-if="loading" />
        <TodoList
          v-else-if="filteredTodos.length"
          :todos="filteredTodos"
          @switchTodo="switchTodo"
          @removeTodo="removeTodo"
        />
        <p v-else>No todos!</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
import Loader from '@/components/Loader.vue';

type TodoType = {
  id: string;
  title: string;
  completed: boolean;
};
export default defineComponent({
  name: 'app',
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
  data: () => ({
    todos: [] as TodoType[],
    loading: true,
    filter: 'All',
    filterSelectItems: ['All', 'Completed', 'Not completed'],
  }),
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=12')
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
        this.loading = false;
      });
  },
  // watch: {
  //   filter(value) {
  //     console.log('value', value);
  //   },
  // },
  computed: {
    filteredTodos() {
      switch (this.filter) {
        case 'Completed':
          return this.todos.filter((i) => i.completed);
        case 'Not completed':
          return this.todos.filter((i) => !i.completed);
        default:
          return this.todos;
      }
    },
  },
  methods: {
    switchTodo(id: string) {
      this.todos = this.todos.map((item: TodoType) => ({
        ...item,
        completed: id === item.id ? !item.completed : item.completed,
      }));
    },
    removeTodo(id: string) {
      this.todos = this.todos.filter((item: TodoType) => id !== item.id);
    },
    creatTodo(todo: TodoType) {
      this.todos.push(todo);
    },
  },
});
</script>
