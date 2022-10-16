<template>
  <div>
    <h1>Todo list</h1>
    <AddTodo @creatTodo="creatTodo" />
    <hr />
    <TodoList v-bind:todos="todos" @switchTodo="switchTodo" @removeTodo="removeTodo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoList from '@/components/TodoList.vue';
import AddTodo from '@/components/AddTodo.vue';
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
  },
  data: () => ({
    todos: [] as TodoType[],
  }),
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=12')
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
      });
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
