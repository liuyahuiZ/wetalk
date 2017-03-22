<template>
  <div id="secondcomponent">
    <!--<teheader tirtle='second'></teheader>-->
    <div class="page-header-main">
      <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
      <mt-field label="邮箱" placeholder="请输入邮箱" type="email"></mt-field>
      <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel"></mt-field>
      <mt-cell :title="animatedNumber">
        <!--<img slot="icon" src="../assets/logo.png" width="24" height="24">-->
        <input class="input-all" v-model.number="number" type="number" step="20">
      </mt-cell>
      <mt-field label="邮箱" state="success"></mt-field>
      <mt-field label="邮箱" state="error"></mt-field>
      <mt-field label="邮箱" state="warning"></mt-field>
    </div>
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="recents" title="Recents" icon="restore"/>
        <mu-bottom-nav-item value="favorites" title="Favorites" icon="favorite"/>
        <mu-bottom-nav-item value="nearby" title="Nearby" icon="location_on"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
import Vue from 'vue'
import {bottomNav, bottomNavItem} from 'muse-components/bottomNav'
import teheader from './teheader.vue'
import { Field, Cell } from 'mint-ui'
import TWEEN from 'tween.js'

Vue.component(Field.name, Field)
Vue.component(Cell.name, Cell)
Vue.component(bottomNav.name, bottomNav)
Vue.component(bottomNavItem.name, bottomNavItem)
export default {
  data () {
    return {
      author: '微信公众号 jinkey-love',
      topStatus: '',
      articles: [],
      number: 9999,
      animatedNumber: 0,
      bottomNav: 'recents'
    }
  },
  watch: {
    number: function (newValue, oldValue) {
      var vm = this
      function animate (time) {
        window.requestAnimationFrame(animate)
        TWEEN.update(time)
      }
      new TWEEN.Tween({ tweeningNumber: oldValue })
        .easing(TWEEN.Easing.Quadratic.Out)
        .to({ tweeningNumber: newValue }, 500)
        .onUpdate(function () {
          vm.animatedNumber = this.tweeningNumber.toFixed(0)
        })
        .start()
      animate()
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  },
  components: {
    teheader
  }
}
</script>