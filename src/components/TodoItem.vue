<template>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input type="checkbox" v-on:change="$emit('switchTodo', todo.id)" />
      <strong>{{ todo.id }}</strong>
      {{ todo.title }}
    </span>
    <button class="rm">&times;</button>
  </li>
</template>

<script lang="ts">
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}

input {
  margin-right: 1rem;
}

.rm {
  background: red;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
}

.done {
  text-decoration: line-through;
}
</style>
