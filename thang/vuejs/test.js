var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    date: '17/11/2018'
  }
})

function alertFunc() {
  app.message = '655555555';
}

myVar = setTimeout(alertFunc, 1000);

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  }
})

myVar = setTimeout(function change() {
  app3.seen = false;
}, 1000)

myVar = setTimeout(function change() {
  app3.seen = true;
}, 2000)

var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Learn PHP' },
      { text: 'Learn Laravel' },
      { text: 'Build something awesome' }
    ]
  }
})

addItem = setTimeout(function change() {
  app4.todos.push({text : 'Learn tán gái'});
}, 1000)

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    changeMessage: function () {
      var text = this.message;
      this.message = "Hello Thang Dang!!"
     
      
    }
  }
})

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
})