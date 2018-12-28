import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'

Vue.use(VueRouter)

Vue.config.productionTip = false
Vue.use(VueResource);
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
