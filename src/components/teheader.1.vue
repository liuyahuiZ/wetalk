<template>
  <div id="header" v-if="showbar">
    <div class="header is-fixd">
      <div class="header-left">
        <!--<router-link to="/" slot="left"><i class="mintui mintui-back"></i>返回
        </router-link>-->
        <div v-on:click="goback"><i class="mintui mintui-back"></i>返回</div>
      </div>
      <div class="header-title relative">
        <transition-group :name="slidName" tag="div" mode="out-in">
          <span  v-for="item in title" v-bind:key="item" class="list-item relative">
            {{ item.name }}
          </span>
        </transition-group>
      </div>
      <div class="header-right">...</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      author: 'Jinkey',
      focusStatus: true,
      title: [],
      slidName: 'list'
    }
  },
  props: ['totitle', 'fromtitle', 'showbar', 'name'],
  methods: {
    goback: function () {
      window.history.back()
    },
    inarray: function (arr, item) {
      let status = {}
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === item) {
          status = {'status': true, 'index': i}
          break
        }
        if (i === (arr.length - 1)) {
          status = {'status': false, 'index': i}
        }
      }
      if (arr.length === 0) {
        status = {'status': false, 'index': 0}
      }
      return status
    }
  },
  watch: {
    name: function (newQuestion) {
      console.log('newQuestion', newQuestion)
      if (newQuestion === 'slide-fade') {
        this.focusStatus = true
        this.slidName = 'list'
      } else {
        this.focusStatus = false
        this.slidName = 'topleave'
      }
      console.log(this.focusStatus)
    },
    totitle: function (newQuestion) {
      console.log(this.title, newQuestion)
      this.title.push({'name': newQuestion})
      let o = this.title
      o.splice(0, 1)
    }
  },
  created: function () {
    console.log('enter')
    this.title.push({'name': this.totitle})
  },
  components: {
  }
}
</script>
<style>
.page-header-main {
  overflow: hidden;padding-top: 50px;min-height: 95vh;
}
.page-content{
  overflow: hidden;min-height: 100vh;
}
.header{
    -webkit-box-align: center;-ms-flex-align: center;align-items: center;background-color: #26a2ff;
    box-sizing: border-box;color: #fff;display: flex;font-size: 14px;height: 50px;line-height: 1;
    padding: 0 10px;position: relative;text-align: center;white-space: nowrap;}
.header a{color: #fff;}
.header-left{
  text-align: left;-webkit-box-flex: .5; -ms-flex: .5;flex: .5;
}
.header-title{
   overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
    font-size: inherit;font-weight: 400;-webkit-box-flex: 1;-ms-flex: 1;
    flex: 1;text-align: center;
}
.is-fixd{
    top: 0;right: 0;left: 0;position: fixed;z-index: 1;
}
.header-right{
  text-align: right;-webkit-box-flex: .5;-ms-flex: .5;flex: .5;
}
.defaultP{
  right: 100px;
  opacity: 0;
}


.list-item {
  display: inline-block;
}
.list-enter-active, .list-leave-active {
  transition: all 0.3s;
}
.list-enter{
  opacity: 0;
  transform: translateX(100px);
}
.list-leave-active {
  opacity: 0;
  transform: translateX(-100px);
}

.topleave-enter-active{
  transform: translateX(0px);
  transition: all 0.3s ease;
}
.topleave-enter{
  transform: translateX(-100px);
  opacity: 0.3;
  transition: all 0.3s ease;
}
.topleave-leave-active{
  transform: translateX(100px);
  opacity: 1;
  transition: all 0.3s ease;
}
.topleave-leave{
  transform: translateX(0px);
  opacity: 0.3;
  transition: all 0.3s ease;
}
</style>