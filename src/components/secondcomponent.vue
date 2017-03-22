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

  </div>
</template>

<script>
import Vue from 'vue'
import teheader from './teheader.vue'
import { Field, Cell } from 'mint-ui'
import TWEEN from 'tween.js'

Vue.component(Field.name, Field)
Vue.component(Cell.name, Cell)
export default {
  data () {
    return {
      author: '微信公众号 jinkey-love',
      topStatus: '',
      articles: [],
      number: 9999,
      animatedNumber: 0
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
  },
  components: {
    teheader
  }
}
</script>
