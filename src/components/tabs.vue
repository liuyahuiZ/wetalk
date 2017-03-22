<template>
  <div class="page-tabbar absolute home">
    <div class="page-wrap">
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="first">
        <mt-swipe :auto="4000" class="height-200x">
            <mt-swipe-item class="bg-efeff4">1</mt-swipe-item>
            <mt-swipe-item class="bg-51b0d6">2</mt-swipe-item>
            <mt-swipe-item class="bg-ea3a3a">3</mt-swipe-item>
        </mt-swipe>
        <router-link to="/first">
          <mt-cell title="page1">page1</mt-cell>
         </router-link>
         <router-link to="/second">
          <mt-cell title="page2">page2</mt-cell>
         </router-link>
        <mt-cell v-for="n in 10" key=n title="tab-container 1"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="second">
        <colors ></colors>
      </mt-tab-container-item>
      <mt-tab-container-item id="thired">
        <pictures></pictures>
      </mt-tab-container-item>
      <mt-tab-container-item id="forth">
        <surch ></surch>
      </mt-tab-container-item>
    </mt-tab-container>
    </div>

    <mt-tabbar class="is-fixed" v-model="selected">
      <mt-tab-item id="first">
        <img slot="icon" src="../assets/logo.png">
        first
      </mt-tab-item>
      <mt-tab-item id="second">
        <img slot="icon" src="../assets/logo.png">
        second
      </mt-tab-item>
      <mt-tab-item id="thired">
        <img slot="icon" src="../assets/logo.png">
        thired
      </mt-tab-item>
      <mt-tab-item id="forth">
        <img slot="icon" src="../assets/logo.png">
        forth
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
import Vue from 'vue'
import { Tabbar, TabItem, TabContainer, TabContainerItem, Swipe, SwipeItem, Lazyload, Cell } from 'mint-ui'
import surch from './surch.vue'
import colors from './colors.vue'
import pictures from './pictures.vue'
Vue.use(Lazyload)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

Vue.component(Tabbar.name, Tabbar)
Vue.component(TabItem.name, TabItem)
Vue.component(TabContainer.name, TabContainer)
Vue.component(TabContainerItem.name, TabContainerItem)
Vue.component(Cell.name, Cell)
export default {
  ready () {
    console.log('123')
  },
  data () {
    return {
      msg: 'Hello Vue!',
      selected: 'first',
      active: '',
      percent2: 30,
      strokeColor2: '#3FC7FA'
    }
  },
  methods: {
    update: function () {
      const colorMap = ['#3FC7FA', '#85D262', '#FE8C6A']
      this.percent2 = parseInt(Math.random() * 100, 10)
      this.strokeColor2 = colorMap[parseInt(Math.random() * 3, 10)]
    }
  },
  created: function () {
    // console.log('123')
  },
  components: {
    surch, colors, pictures
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
  padding: 0;
  margin: 0;
}
.bg-efeff4{background:#FD7C40}
.bg-51b0d6{background:#1FB8EC}
.bg-ea3a3a{background:#EE5254}
.height-200x{height: 200px;}
.page-lazyload-list{box-sizing:border-box;margin: 0;padding: 0;padding-bottom: 60px;}
.page-lazyload-list li{list-style: none;padding: 5%;}
.page-lazyload-list li img{width:100%;}
.hello {}

</style>
