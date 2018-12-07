var app = new Vue ({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
});

var app2 = new Vue ({
  el: '#app-2',
  data: {
    message : 'Loaded this page on' + new Date().toLocaleDateString()
  }
});

var app3 = new Vue ({
  el: '#app-3',
  data: {
    seen:true,
  }
});

var app4 = new Vue ({
  el: '#app-4',
  data : {
    todos: [
      { text : 'abc' },
      { text : 'bcd' },
      { text : 'cde' },
    ]
  }
});

var app5 = new Vue ({
  el: '#app-5',
  data : {
    message: "Hello Vue!",
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
});

var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!'
  }
});

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      {id: 0, text: 'Vegetables'},
      {id: 1, text: 'Cheese'},
      {id: 2, text: 'Whatever'},
    ]
  }
});

var exam = new Vue({
  el: '#example',
  data : {
    message: 'hello',
  },
  computed: {
    reversedMessage : function () {
      return this.message.split('').reverse().join('');
    }
  }
});

var exam2 = new Vue({
  el: '#example2',
  data : {
    message: 'hello',
  },
  methods: {
    reversedMessage : function () {
      return this.message.split('').reverse().join('');
    }
  }
});



var vm = new Vue({
  el: '#demo',
  data : {
    firstname: 'a',
    lastname: 'b',
  },
  computed : {
    fullName : function () {
      return this.firstname + ' ' + this.lastname;
    }
  }
});

var vm = new Vue({
  el: '#demo2',
  data : {
    firstname: 'a',
    lastname: 'b',
    fullName: 'a b'
  },
  watch : {
    firstname: function (val) {
      this.fullName = val + ' ' + this.lastname;
    },
    lastname: function (val) {
      this.fullName = this.firstname + ' ' + val;
    }
  }
});

var classs = new Vue({
  el: '#cla',
  data : {
    classObject : {
      active : true,
      'text-danger' : false,
    }
  }
});

var watch = new Vue({
  el : '#watcher',
})

setTimeout(function(){ app.message = 'tangna' }, 1000);


