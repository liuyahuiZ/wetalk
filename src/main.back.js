import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import './styles/common.scss'

Vue.use(Mint)
Vue.use(VueRouter)
Vue.use(VueResource)
// 定义组件, 也可以像教程之前教的方法从别的文件引入
import secondcomponent from './components/secondcomponent.vue'
import firstcomponent from './components/firstcomponent.vue'
import tabs from './components/tabs.vue'
// 创建一个路由器实例
// 并且配置路由规则
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'home',
      component: tabs
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
    }
  ]
})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
new Vue({
  router: router,
  render: h => h(App),
  components: { firstcomponent, secondcomponent }
}).$mount('#app')
// new Vue({
//   el: '#app',
//   template: '<App/>',
//   components: { App }
// })
