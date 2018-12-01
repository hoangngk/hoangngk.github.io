new Vue({
	el: "#app",
	data: {
		todos: [
			{ text: "Go to school", done: false },
			{ text: "Travel", done: false },
			{ text: "Play ABC", done: false },
			{ text: "Learn something", done: false }
		]
	},
	methods: {
		toggle: function(todo){
			todo.done = !todo.done
		}
	},
	created: () => {
		console.log('todos ', this);
	}
})