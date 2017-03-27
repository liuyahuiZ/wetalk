<template>
  <div id="articleList">
    <!--<teheader tirtle='first'></teheader>-->
    <div id="page" class="page-header-main" @mousedown="startDrag" @touchstart="startDrag"
    @mousemove="onDrag" @touchmove="onDrag"
    @mouseup="stopDrag" @touchend="stopDrag" @mouseleave="stopDrag">
      <div class="content" :style="contentPosition">
        <div class="loadmore-top" v-if="!refresh" v-bind:class="{ transroute: rotate, transnone: !rotate }">↓</div>
        <div class="loadmore-top" v-if="refresh"><div class="spanner span-inner" ></div></div>
        <div class="box-flex width-80 margin-auto margin-top-2 flex-wrap">
          <div class="box-flex images-half flex-direction-column"  >
            <div class="padding-all masonry" v-for="(L,index) in workListLeft">
            <img class="images-con imgpic" v-bind:src="(config.api+L.img_group[0].photopath)">
            </div>
          </div>
          <div class="box-flex images-half flex-direction-column" >
            <div class="padding-all masonry" v-for="(R,index) in workListRight">
            <img class="images-con imgpic" v-bind:src="(config.api+R.img_group[0].photopath)">
            </div>
          </div>
        </div>
        <div class="loadmore-bottom" v-if="!showloading" v-bind:class="{ transroute: !rotate, transnone: rotate }">↓</div>
        <div class="loadmore-bottom" v-if="showloading"><div class="spanner span-inner"></div></div>
      </div>
      <!--<svg class="bg" width="420" height="260">
      <path :d="headerPath" fill="#3F51B5"></path>
      </svg>
        -->
    </div>
  </div>
</template>

<script>
import Service from '@/util/service'
import configs from '@/util/configs'
import teheader from './teheader.vue'
import dynamics from 'dynamics.js'
import { Spinner } from 'mint-ui'
import Vue from 'vue'
Vue.component(Spinner.name, Spinner)
// let page = document.getElementById('page')
// console.log(page)

export default {
  data () {
    return {
      dragging: false,
      // quadratic bezier control point
      c: { x: 160, y: 160 },
      // record drag start point
      start: { x: 0, y: 0 },
      rotate: false,
      refresh: false,
      showloading: false,
      deny: 0,
      limitHight: 190,
      limitlow: -190,
      lineNem: 8,
      workListLeft: [],
      workListRight: [],
      config: configs.config
    }
  },
  components: {
    teheader
  },
  beforeCreate: function () {
    console.log('beforeCreate is triggered.')
    let reqbody={}
    Service.Post('PictureList',reqbody)
    .then(data => {
        console.log(data,data.data)
        for(var i=0;i<data.data.length;i++){
          if(i%2==0){
            this.workListLeft.push(data.data[i])
          }else{
            this.workListRight.push(data.data[i])
          }
        }
    })
    .catch(error => console.log(error))
  },
  computed: {
    headerPath: function () {
      return 'M0,0 L320,0 320,160' +
        'Q' + this.c.x + ',' + this.c.y +
        ' 0,160'
    },
    contentPosition: function () {
      var dy = this.c.y - 160
      var dampen = dy > 0 ? 2 : 4
      return {
        transform: 'translate3d(0,' + dy / dampen + 'px,0)'
      }
    }
  },
  methods: {
    startDrag: function (e) {
      e = e.changedTouches ? e.changedTouches[0] : e
      this.dragging = true
      this.start.x = e.pageX
      this.start.y = e.pageY
    },
    onDrag: function (e) {
      e = e.changedTouches ? e.changedTouches[0] : e
      if (this.dragging) {
        this.c.x = 160 + (e.pageX - this.start.x)
        // dampen vertical drag by a factor
        var dy = e.pageY - this.start.y
        var dampen = dy > 0 ? 1.5 : 2
        this.c.y = 160 + dy / dampen
        // console.log(dy)
        if (dy > 0) {
          if (dy > this.limitHight) {
            this.rotate = true
          } else {
            this.rotate = false
          }
        } else {
          if (dy < this.limitlow) {
            this.rotate = true
          } else {
            this.rotate = false
          }
        }
        this.deny = dy
      }
    },
    stopDrag: function () {
      if (this.dragging) {
        this.dragging = false
        this.rotate = false
        var o = this
        console.log(o.deny)
        if (o.deny > 0) {
          if (o.deny > o.limitHight) {
            o.refresh = true // 显示loading
            o.rebacload(o)
            // 获取数据
            this.getdate(o).then(function (result) {
              console.log(result)
              o.refresh = false
              o.rebac(o)
              o.lineNem = 8
            })
          } else {
            o.rebac(o)
          }
        } else {
          if (o.deny < o.limitlow) {
            o.showloading = true // 显示loading
            o.moreload(o)
            // 获取数据
            this.getdate(o).then(function (result) {
              console.log(result)
              o.showloading = false
              o.rebac(o)
              o.lineNem += 5
            })
          } else {
            o.rebac(o)
          }
        }
      }
    },
    rebacload: function (o) {
      dynamics.animate(o.c, {
        x: 160,
        y: 300
      }, {
        type: dynamics.spring,
        duration: 700,
        friction: 280
      })
    },
    rebac: function (o) {
      dynamics.animate(o.c, {
        x: 160,
        y: 160
      }, {
        type: dynamics.spring,
        duration: 700,
        friction: 280
      })
    },
    moreload: function (o) {
      dynamics.animate(o.c, {
        x: 160,
        y: 0
      }, {
        type: dynamics.spring,
        duration: 700,
        friction: 280
      })
    },
    loadDitail () {
      let reqbody={}
      Service.Post('PictureList',reqbody)
      .then(data => {
          console.log(data,data.data)
          for(var i=0;i<data.data.length;i++){
            if(i%2==0){
              this.workListLeft.push(data.data[i])
            }else{
              this.workListRight.push(data.data[i])
            }
          }
      })
      .catch(error => console.log(error))
    },
    getdate: function () {
      return new Promise(function (resolve, reject) {
        var data = '123'
        setTimeout(function () {
          console.log('456')
          resolve(data)
        }, 1000)
      })
    }
  }
}
</script>
<style>
  h1 {
  font-weight: 300;
  font-size: 1.8em;
  margin-top: 0;
}
.bg-313991{
  background: #313991
}

.content {
  color: #333;
  line-height: 1.5em;
  min-height: 100vh;
}
.padding-all{
  padding: 3%;
}
/**/
.isshow{
  display: none
}
.loadmore-top{
  width: 100%;height: 50px;text-align: center;margin-top: -50px;line-height: 50px;
}
.loadmore-bottom{
  width: 100%;height: 50px;text-align: center;margin-bottom: -50px;line-height: 50px;
  position: absolute;bottom: 0px;
}
.transroute{
  transform:rotate(180deg);
  transition: all 0.5s ease;
}
.transnone{
  transform:rotate(0deg);
  transition: all 0.5s ease;
}
.spanner{
  -webkit-animation: mint-spinner-rotate 0.8s infinite linear;
    animation: mint-spinner-rotate 0.8s infinite linear;
    border: 4px solid transparent;
    border-radius: 50%;
}
.span-inner{
  margin: 0 auto;
   border-top-color: rgb(204, 204, 204);
    border-left-color: rgb(204, 204, 204);
    border-bottom-color: rgb(204, 204, 204);
    height: 20px;
    width: 20px;
}
.masonry img {
    transition: .8s all;
    opacity: 0.7;
}
.masonry img:hover { opacity: 0.9; box-shadow: 1px 1px 20px #333;cursor: pointer }
</style>
