<template>
  <!--<div id="header" v-show="showbar">
    <div class="header is-fixd">
      <div class="header-left">
        <div v-on:click="goback"><i class="mintui mintui-back"></i>返回</div>
      </div>
        <transition-group :name="slidName" tag="div" class="header-title relative" mode="out-in">
          <span  v-for="item in title" v-bind:key="item" class="list-item">
            {{ item.name }}
          </span>
        </transition-group>
      <div class="header-right">...</div>
    </div>
  </div>-->
  <div>
  <div class="fixed width-100 zindex-100 height-120 text-align-center ">
        <div class="width-80 margin-auto box-flex text-align-center flex-direction-row flex-wrap flex-justify-center flex-items-center height-100">
        <div class="flex-1 height-30 flex-self-center">
            <span class="ion-navicon-round font-size-26" @click="openBottomSheet"></span>
        </div>
        <div class="flex-3 height-30 height-50 line-height-50 flex-direction-row flex-items-flex-start">
            <div class="flex-2"><img class="height-100" src="../Img/logo_b.png" lazy="loaded"></div>
        </div>
        <div class="flex-1 height-30 bg-button-red flex-self-flex-start">5</div>
        </div>
    </div>
    <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet" >
      <div class="line-height-50 text-align-right bg-333" @click="closeBottomSheet">
          <span class="ion-close-round font-size-20 margin-right-5 textclolor-white"></span>
      </div>
      <ul class="list-all bg-333" @Click="closeBottomSheet">
        <router-link to="/home">
          <li class="line-height-50 text-align-center textclolor-white" @click="closeBottomSheet">
              Home
          </li>
        </router-link>
        <router-link to="/first">
          <li class="line-height-50 text-align-center textclolor-white" @click="closeBottomSheet">
              page1
          </li>
        </router-link>
        <router-link to="/second">
          <li class="line-height-50 text-align-center textclolor-white" @click="closeBottomSheet">
                page2
          </li>
        </router-link>
          <li class="line-height-50 text-align-center textclolor-white">12312312</li>
      </ul>
      <mu-list @itemClick="closeBottomSheet" class="bg-333">
        <mu-sub-header>
          请选择一个
        </mu-sub-header>
        <mu-list-item title="阴阳师"/>
        <mu-list-item title="Inbox">
            <mu-icon slot="left" value="inbox"/>
        </mu-list-item>
      </mu-list>
    </mu-bottom-sheet>
  </div>
</template>
<script>
export default {
  data () {
    return {
      author: 'Jinkey',
      focusStatus: true,
      title: [],
      slidName: 'list',
      bottomSheet: false
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
    },
    closeBottomSheet () {
      this.bottomSheet = false
    },
    openBottomSheet () {
      this.bottomSheet = true
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
      // this.title.push({'name': newQuestion})
      let o = this.title
      setTimeout(function () {
        o.splice(0, 1)
      }, 10)
      this.title.splice(1, 0, {'name': newQuestion})
    }
  },
  created: function () {
    console.log('enter')
    // var location = window.location
    // location.href = 'http://www.baidu.com'
    this.title.push({'name': this.totitle})
  },
  components: {
  }
}
</script>
<style>
.page-header-main {
  overflow: hidden;margin-top: 120px;min-height: 95vh;
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
  text-align: left;-webkit-box-flex: .5; -ms-flex: .5;flex: .5;z-index: 10;
}
.header-title{
   overflow: hidden;text-overflow: ellipsis;white-space: nowrap;
    font-size: inherit;font-weight: 400;-webkit-box-flex: 1;-ms-flex: 1;
    flex: 1;text-align: center;position: absolute;width: 100%;z-index: 5;
    left: 0;top: 0;height: 50px;
}
.is-fixd{
    top: 0;right: 0;left: 0;position: fixed;z-index: 1;
}
.header-right{
  text-align: right;-webkit-box-flex: .5;-ms-flex: .5;flex: .5;z-index: 10;
}
.list-item {
  display: inline-block;
  width: 100%;height: 50px;line-height: 50px;
  left: 0px;top: 0px;z-index: 5;position: absolute;
}
.list-enter-active {
  animation: left-in 0.5s ease;
}
.list-leave-active {
  animation: left-out 0.5s ease;
}
/*.list-move {
  transition: transform 1s;
}*/
/*从右向左滑动*/
@keyframes left-in {
  0% {
    transform: translateY(270px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes left-out {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(-270px);
    opacity: 0;
  }
}

.topleave-enter-active{
  animation: right-in 0.5s ease;
}

.topleave-leave-active{
  animation: right-out 0.5s ease;
}

/*从左向右滑动*/
@keyframes right-in {
  0% {
    transform: translateY(-270px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes right-out {
  0% {
    transform: translateY(0px);
    opacity: 1;
  }
  100% {
    transform: translateY(270px);
    opacity: 0;
  }
}
</style>
