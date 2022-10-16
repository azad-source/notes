<template>
  <div>
    <h1>asdasdasdasd</h1>
    <hr />
    <TodoList v-bind:todos="todos" />
  </div>
</template>

<script lang="ts">
import TodoList from '@/components/TodoList.vue';
export default {
  name: 'app',
  components: {
    TodoList,
  },
  data: () => ({
    todos: [
      { id: '1', title: 'Купить хлеб', completed: false },
      { id: '2', title: 'Купить соль', completed: false },
      { id: '3', title: 'Купить масло', completed: false },
    ],
  }),
};
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
