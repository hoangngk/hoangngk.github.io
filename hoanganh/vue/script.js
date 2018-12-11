Vue.component('task-item', {
  template: '\
    <ul>\
      <li>\
      	{{ title }}\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
      </li>\
    </ul>\
  ',
  props: ['title']
})

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
          title: this.newTaskText
        })
        this.newTaskText = ''
      },
    }
  })