<template>
  <div id="app">
    <img src="./assets/logo.png">
    <todo-list v-bind:todos="todos"></todo-list>
    <create-todo v-on:create-todo="addTodo"></create-todo>

  </div>
</template>

<script>
import TodoList from './components/TodoList'
import CreateTodo from './components/CreateTodo'

export default {
  name: 'App',
  components: {
    TodoList,
    CreateTodo,
  },
  data () {
    return {
      nextTodoId: 1,
      todos: [],
    }
  },
  methods: {
    addTodo(title) {
      this.todos.push({
        id: this.nextTodoId++,
        title,
      });
    },
  }
}
</script>

<style>
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
