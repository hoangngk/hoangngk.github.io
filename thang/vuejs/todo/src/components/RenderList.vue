<template>
  <div>
    <ul class="todo-list">
      <li v-for="(todo, index) in todos" :key="todo.id">
        <div class="view">
          <input type="checkbox" class="toggle"
                v-on:change="toggle(todo)"
                v-bind:checked="todo.done">

          <span v-bind:style="{textDecoration: todo.done ? 'line-through' : ''}">{{ todo.text }}</span>
          <!-- <label v-on:dblclick="editTodo(todo)">{{ todo.text }}</label> -->
          <button v-on:click="removeTodo(index)">X</button>
          <button v-on:click="editTodo(todo)">Edit</button>
        </div>
      </li>
      <button v-on:click="clearAll()">Clear all</button>

    </ul>
  </div>
</template>

<script>
export default {
  name: 'RenderList',
  props: ["todos"],
  methods: {
    toggle: function (todo) {
      todo.done = !todo.done
    },

    // addTodo: function () {
    //   var text = this.newTodo.trim()
    //   var id = this.todos.length + 2;
    //   if (text) {
    //     this.todos.push({ id: id, text: text, done: false });
    //     this.newTodo = ''
    //   }
    // },
    removeTodo: function (index) {
      this.todos.splice(index, 1)
    },

    editTodo: function (todo) {
      var editText = prompt('Type something');

      if (editText) {
        var result = this.todos.find(function (element) {
          return element.id === todo.id;
        });
        result.text = editText;
      }
    },

    clearAll: function ()
    {
      for(var todo in this.todos)
        this.todos.splice(todo, this.todos.length)
    },

    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
