import Vue from 'vue'
import Router from 'vue-router'
import contact from '@/components/contact.vue'
import firstcomponent from '@/components/firstcomponent.vue'
import tabs from '@/components/tabs.vue'
import pictures from '@/components/pictures.vue'
import Home from '@/components/Home.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/first',
      name: 'first',
      component: firstcomponent
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/third',
      name: 'third',
      component: tabs
    },
    {
      path: '/pictures',
      name: 'pictures',
      component: pictures
    }
  ]
})
