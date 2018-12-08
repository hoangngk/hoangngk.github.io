new Vue({
    el: '#task-list',
    data: {
      newTaskText: '',
      tasks: [
      ],
      nextTaskId: 1
    },
    methods: {
      addNewTask: function () {
        this.tasks.push({
          id: this.nextTaskId++,
          title: this.newTaskText,
          done: false
        })
        this.newTaskText = ''
      },
      toggle: function(task){
          task.done = !task.done
      },
      deleteTask: function(index) {
        this.tasks.splice(index, 1);
  }
    }
  })