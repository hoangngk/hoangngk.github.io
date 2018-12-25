<template>
  <div>
    <h1>Todolist</h1>
    <p>Completed Tasks: {{todos.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{todos.filter(todo => {return todo.done === false}).length}}</p>
    <todo
      v-for="todo in todos"
      v-bind:todo="todo"
      v-bind:key="todo.id"
      v-on:remove-todo="removeTodo"
    ></todo>
  </div>
</template>


<script type = "text/javascript" >
import Todo from "./Todo";

export default {
  props: ["todos"],
  components: {
    Todo
  },
  methods: {
    removeTodo(todoId) {
      const todoIndex = this.todos.findIndex(todo => todo.id === todoId);
      this.todos.splice(todoIndex, 1);
    }
  }
};
</script>
<style>
</style>