<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" md="10">
        <AddTodo @creatTodo="creatTodo" />
      </v-col>
      <v-col cols="12" md="2">
        <v-select v-model="filter" :items="filterSelectItems" label="filter" outlined />
      </v-col>
      <div v-if="filteredTodos.length > 0" class="ml-auto">
        <v-btn variant="text" icon size="large" @click="sortByDate"
          ><v-icon size="large"
            >mdi-sort-calendar-{{
              sort.date === 'desc' ? 'descending' : 'ascending'
            }}</v-icon
          ></v-btn
        >
        <v-btn variant="text" icon size="large" @click="sortByTitle"
          ><v-icon size="large"
            >mdi-sort-alphabetical-{{
              sort.title === 'desc' ? 'descending' : 'ascending'
            }}</v-icon
          ></v-btn
        >
      </div>
      <v-col cols="12">
        <Loader v-if="loading" />
        <TodoList
          v-else-if="filteredTodos.length"
          :todos="filteredTodos"
          @switchTodo="switchTodo"
          @removeTodo="removeTodo"
        />
        <p v-else>No taks in your list!</p>
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

type sortDir = 'asc' | 'desc';

export default defineComponent({
  name: 'app',
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
  data: () => ({
    todos: [] as TodoType[],
    loading: false,
    filter: 'All',
    filterSelectItems: ['All', 'Completed', 'Not completed'],
    sort: {
      date: 'desc',
      title: 'desc',
    } as { date: sortDir; title: sortDir },
  }),
  computed: {
    filteredTodos() {
      let items = [];
      switch (this.filter) {
        case 'Completed':
          items = this.todos.filter((i) => i.completed);
          break;
        case 'Not completed':
          items = this.todos.filter((i) => !i.completed);
          break;
        default:
          items = this.todos;
          break;
      }

      return items;
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
    sortByDate() {
      this.sort.date = this.sort.date === 'desc' ? 'asc' : 'desc';
      this.todos.sort((a, b) => {
        const prevId = parseInt(a.id);
        const nextId = parseInt(b.id);
        const sortDir = this.sort.date === 'desc' ? prevId - nextId : nextId - prevId;
        return sortDir;
      });
    },
    sortByTitle() {
      this.sort.title = this.sort.title === 'desc' ? 'asc' : 'desc';
      this.todos.sort((a, b) => {
        const sortDir = this.sort.title === 'desc' ? 1 : -1;
        if (a.title < b.title) {
          return -1 * sortDir;
        }
        if (a.title > b.title) {
          return 1 * sortDir;
        }
        return 0;
      });
    },
  },
});
</script>
