<template>
    <div>
        <todo v-on:delete-todo="deleteTodo" v-for="todo in todos" v-bind:todo="todo.title"  v-bind:key="todo.id"></todo>
    </div>
</template>

<script>
import Todo from './Todo'


export default {
    props: ['todos'],
    components: {
        Todo,
    },
    methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
        },
    }
}
</script>

<style>

</style>


