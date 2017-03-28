<template>
  <div class="page-tabbar" >
    <teheader :totitle='totitle' :fromtitle='fromtitle' :showbar='showBar' :name="transitionName"></teheader>
    <div class="page-content">
    <transition  :name="transitionName" :mode="transModule" >
      <router-view class="view"></router-view>
    </transition>
    </div>
    <!--<router-view class="view"></router-view>-->
  </div>
</template>
<script>
import H from './util/history.js'
import teheader from './components/teheader.vue'
import 'animate.css'
console.log(H.history)
export default {
  data () {
    return {
      msg: 'Hello Vue!',
      selected: 'first',
      active: '',
      transitionName: 'slide-fade',
      transModule: 'out-in',
      historyRoute: H.history,
      showBar: false,
      totitle: '',
      fromtitle: '',
      transName: {},
      scrolled: false
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter', to, from, next)
  },
  watch: {
    '$route' (to, from) {
      let Toresult = this.inarray(this.historyRoute, to.path)
      let Fromresult = this.inarray(this.historyRoute, from.path)
      if (Toresult.status === false) {
        this.historyRoute.push({'path': to.path})
      }
      // console.log(to, from, Toresult, this.historyRoute)
      this.totitle = to.name
      this.fromtitle = from.name
      this.transitionName = Toresult.status ? 'slide-left' : 'slide-fade'
      if (Toresult.index >= Fromresult.index) {
        this.transitionName = 'slide-fade'
        this.transModule = 'out-in'
        this.transName.enter = 'animated fadeInRight'
        this.transName.leave = 'animated fadeOutLeft'
      } else {
        this.transitionName = 'slide-left'
        this.transName.enter = 'animated fadeInLeft'
        this.transName.leave = 'animated fadeOutRight'
      }
      if (to.name === 'home') {
        this.showBar = false
      }
      console.log(this.transitionName)
      document.body.scrollTop=0
    }
  },
  methods: {
    inarray: function (arr, item) {
      let status = {}
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].path === item) {
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
    scroll: function () {
      console.log('123')
    },
    handleScroll () {
      // console.log(window.scrollY)
      if (window.scrollY > 30) {
        this.showBar = true
      } else {
        this.showBar = false
      }
    }
  },
  created: function () {
    window.addEventListener('scroll', this.handleScroll)
  },
  components: {
    teheader
  }
}
</script>
<style>
body {
  font-family: Helvetica, sans-serif;
  -webkit-overflow-scrolling: touch;
}
a{text-decoration: blink;}
.slide-fade-enter-active {
  animation: bounce-in 0.15s ease;
}

.slide-fade-leave-active {
  animation: bounce-out 0.15s ease;
}

@keyframes bounce-in {
  0% {
    transform: translateY(800px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes bounce-out {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(-800px);
  }
}
@keyframes pounce-in {
  0% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes pounce-out {
  0% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(800px);
  }
}

.slide-left-enter-active {
  animation: pounce-in 0.15s ease;
}
.slide-left-leave-active {
  animation: pounce-out 0.15s ease;
}
.slide-left-enter, .slide-left-leave-active {
  opacity: 1;
}

</style>
