import Vue from 'vue'
import Router from 'vue-router'
import contact from '@/components/contact.vue'
import articleList from '@/components/articleList.vue'
import workList from '@/components/workList.vue'
import tabs from '@/components/tabs.vue'
import pictures from '@/components/pictures.vue'
import Home from '@/components/Home.vue'
import myshill from '@/components/myshill.vue'
import detail from '@/components/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/workList',
      name: 'workList',
      component: workList
    },
    {
      path: '/articleList',
      name: 'articleList',
      component: articleList
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
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
      path: '/myshill',
      name: 'myshill',
      component: myshill
    },
    {
      path: '/pictures',
      name: 'pictures',
      component: pictures
    }
  ]
})
