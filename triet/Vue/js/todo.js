var app = new Vue ({
  el: '#app',
  data: {
    newTodo: "",
    todos: [
      {id: 0, text : "so 1", done: false},
      {id: 1, text : "so 2", done: false},
      {id: 2, text : "so 3", done: false},
      {id: 3, text : "so 4", done: true},
    ]
  },

  methods: {
    isDone: function (todo) {
      return todo.done ? 'line-through' : '';
    },
    addTodo: function () {
      var todo = this.newTodo.trim();
      if(todo) {
        this.todos.push({text: todo, done: false});
      }
      this.newTodo = "";
    },
    removeElement : function (todo) {
      //  for (var index = 0; index < this.todos.length; index++) {
      //    if (this.todos[index].id == todo.id) {
      //      this.todos.splice(index, 1);
      //      break;
      //    }
      var index = this.todos.indexOf(todo);
      this.todos.splice(index, 1);
      
    },
    updateElement : function (todo) {
      for (var index = 0; index < this.todos.length; index++) {
        if (this.todos[index].id == todo.id) {
          var retVal = prompt("Edit your todo : ", "your todo here");
          return this.todos[index].text = retVal;
        }
      }
    },
    clearAll: function () {
      return this.todos = [];
    },

  }
});

var filters = {
  all: function (todos) {
    return todos
  },
  active: function (todos) {
    return todos.filter(function (todo) {
      return !todo.completed
    })
  },
  completed: function (todos) {
    return todos.filter(function (todo) {
      return todo.completed
    })
  }
}


// Vue.component('task-list', {
//   template: '#task-list',
//   props: {
//     tasks: {default: []}
//   },
//   data() {
//     return {
//       newTask: ''
//     };
//   },
//   computed: {
//     incomplete() {
//       return this.tasks.filter(this.inProgress).length;
//     }
//   },
//   methods: {
//     addTask() {
//       if (this.newTask) {
//         this.tasks.push({
//           title: this.newTask,
//           completed: false
//         });
//         this.newTask = '';
//       }
//     },
//     completeTask(task) {
//       task.completed = ! task.completed;
//     },
//     removeTask(index) {
//       this.tasks.splice(index, 1);
//     },
//     clearCompleted() {
//       this.tasks = this.tasks.filter(this.inProgress);
//     },
//     clearAll() {
//       this.tasks = [];
//     },

//     updateVal(payload) {
// 			this.todos[this.todos.findIndex(t => t.text === payload.oldText)].text = payload.text;
// 		},
    
//     inProgress(task) {
//       return ! this.isCompleted(task);
//     },
//     isCompleted(task) {
//       return task.completed;
//     }
//   }
// });

// Vue.component('task-item', {
//   template: '#task-item',
//   props: ['task'],
//   computed: {
//     className() {
//       let classes = ['tasks__item__toggle'];
//       if (this.task.completed) {
//         classes.push('tasks__item__toggle--completed');
//       }
//       return classes.join(' ');
//     }
//   }
// });

// new Vue({
//   el: '#app',
//   data: {
//     tasks: [
//       {
//         title: 'task1',
//         completed: true
//       },
//       {
//         title: 'task2',
//         completed: false
//       }
//     ]
//   }
// });
