<template>
  <div id="app" class="ui todo-list">
    <todo-list v-bind:todos="todos"></todo-list>
    <create-todo v-on:add-todo="addTodo"></create-todo>
    <div class="ui bottom red basic button" v-on:click="clearAll">Clear All</div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList";
import CreateTodo from "./components/CreateTodo";
export default {
  name: "app",
  components: {
    TodoList,
    CreateTodo,
  },

  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Todo A",
          done: false
        },
        {
          id: 2,
          title: "Todo B",
          done: true
        },
        {
          id: 3,
          title: "Todo C",
          done: false
        },
        {
          id: 4,
          title: "Todo D",
          done: false
        }
      ]
    };
  },
  methods: {
    addTodo(title) {
      let nextId = this.todos.length;
      this.todos.push({
        id: nextId,
        title,
        done: false
      });
    },
    clearAll() {
      this.todos = [];
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
