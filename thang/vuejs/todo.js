Vue.component('todo-item', {
  props: ['todo', 'index'],
  template: '<li>{{ todo.text }}</li>'
})

new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      { id: 1, text: 'Add some todos', done: false },
      { id: 2, text: 'Todo 2', done: true },
      { id: 3, text: 'Todo 3', done: true },
      { id: 4, text: 'Todo 4', done: false }
    ]
  },
  methods: {

    toggle: function (todo) {
      todo.done = !todo.done
    },

    addTodo: function () {
      var text = this.newTodo.trim()
      var id = this.todos.length + 2;
      if (text) {
        this.todos.push({ id: id, text: text, done: false });
        this.newTodo = ''
      }
    },
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

    allDone: function ()
    {
      for(var todo in this.todos)
        todo.done = true
    }
  }
    
  
})