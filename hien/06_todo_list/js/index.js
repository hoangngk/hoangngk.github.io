new Vue({
	el: "#app",
	data: {
		todos: [
			{ id: "1", text: "Go to school", done: false },
			{ id: "2", text: "Travel", done: false },
			{ id: "3", text: "Play ABC", done: false },
			{ id: "4", text: "Learn something", done: false },
			{ id: "5", text: "Happy Birthday", done: false },
			{ id: "6", text: "Something tomorow", done: false },
			{ id: "7", text: "Sing something", done: false }
		]
	},

	filters: {
		pluralize: function (n) {
			return n === 1 ? 'todo' : 'todos'
		}
	},

	methods: {
		toggle: function (todo) {
			todo.done = !todo.done
		},

		remove: function (todo) {
			this.todos.splice(this.todos.indexOf(todo), 1)
		},
		deleteAll: function () {
			this.todos = null
		},
		edit: function (todo) {
			this.beforeEditCache = todo.text
			this.editedTodo = todo

			var e = document.getElementById('editText');
			if(e.style.display == 'block')
				e.style.display = 'none';
			else
				e.style.display = 'block';
		},

		doneEdit: function (todo) {
			if (!this.editedTodo) {
				return
			}
			this.editedTodo = null
			todo.title = todo.text.trim()
			if (!todo.text) {
				this.removeTodo(todo)
			}
		},
		cancelEdit: function (todo) {
			this.editedTodo = null
			todo.title = this.beforeEditCache
			document.getElementById("edit").style.display = "none";
		},
	},
	created: () => {
		console.log('todos ', this);
	}


})