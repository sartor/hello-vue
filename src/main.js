import Vue from 'vue'
import Events from './components/Events.vue'
import VueRouter from 'vue-router'
import Members from './components/Members'
import Member from './components/Member'
import Event from './components/Event'

Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Events },
    { path: '/events/add', component: Event },
    { path: '/events/edit/:name', component: Event },
    { path: '/members', component: Members },
    { path: '/members/add', component: Member },
    { path: '/members/edit/:name', component: Member },
  ]
});

new Vue({
  router
}).$mount('#app')