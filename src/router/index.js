import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import secondcomponent from '@/components/secondcomponent.vue'
import firstcomponent from '@/components/firstcomponent.vue'
import tabs from '@/components/tabs.vue'
import pictures from '@/components/pictures.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'home',
      component: pictures
    },
    {
      path: '/first',
      name: 'first',
      component: firstcomponent
    },
    {
      path: '/second',
      name: 'second',
      component: secondcomponent
    },
    {
      path: '/third',
      name: 'third',
      component: tabs
    }
  ]
})
