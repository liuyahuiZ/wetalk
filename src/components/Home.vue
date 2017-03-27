<template>
<div class="home">
    <el-carousel height="450px">
      <el-carousel-item v-for="(B,index) in banners">
        <img class="images-con" v-bind:src="(config.api+B.img_group[0].photopath)">
      </el-carousel-item>
    </el-carousel>
    <div class="box-flex flex-direction-column margin-top-2">
        <div class="box-flex width-80 margin-auto" v-for="(A,index) in HomeArticle">
           <div class="box-flex width-100" v-if="index%2==0"> 
            <div class="flex-1">
              <img class="images-con imgpic" v-bind:src="(config.api+A.img_group[0].photopath)" >
            </div>
            <div class="box-flex flex-1 padding-all flex-direction-column">
                <router-link :to="('/detail/'+A._id)">
                <span class="font-size-16 lineThrou">{{A.tirtle}}</span>
                </router-link>
                <span class="font-size-12">{{A.info}}</span>
            </div>
           </div>
           <div class="box-flex width-100" v-else> 
            <div class="box-flex flex-1 padding-all flex-direction-column">
                <router-link :to="('/detail/'+A._id)">
                  <span class="font-size-16 lineThrou">{{A.tirtle}}</span>
                </router-link>
                <span class="font-size-12">{{A.info}}</span>
            </div>
            <div class="flex-1">
              <img class="images-con imgpic" v-bind:src="(config.api+A.img_group[0].photopath)" >
            </div>
           </div>
        </div>
    </div>
    <div class="box-flex width-80 margin-auto margin-top-2">
        <div class="line-height-30 font-size-26 lineThrou">My Work</div>
    </div>
    <div class="box-flex width-90 margin-auto text-align-center flex-direction-column flex-wrap flex-justify-center flex-items-center flex-content-space-around">
        <div class="box-flex flex-direction-row margin-top-2" style="height:60vh">
            <div class="flex-2 overflow-hide flex-direction-column">
              <div style="height:20vh">
                <img class="images-height100 imgpic" src="../Img/pi2.jpg">
              </div>
              <div style="height:20vh">
                <img class="images-height100 imgpic" src="../Img/pic.jpg">
              </div>
              <div style="height:20vh">
                <img class="images-height100 imgpic" src="../Img/bg1.jpg">
              </div>
            </div>
            <div class="flex-4 flex-direction-column">
              <div class="flex-4 overflow-hide" style="height:40vh">
                <img class="images-height100 imgpic" src="../Img/bg2.jpg">
              </div>
              <div class="box-flex flex-2 overflow-hide flex-direction-row flex-justify-flex-start flex-items-flex-start" style="height:20vh">
                  <div class="flex-1" style="width:50%;height:20vh">
                    <img class="images-height100 imgpic" src="../Img/bg3.jpg">
                  </div>
                  <div class="flex-1" style="width:50%;height:20vh">
                    <img class="images-height100 imgpic" src="../Img/pi2.jpg">
                  </div>
              </div>
           </div>
            <div class="flex-2 overflow-hide flex-direction-column">
              <div style="height:20vh">
                <img class="images-height100 imgpic" src="../Img/pic.jpg">
              </div>
              <div style="height:20vh">
                <img class="images-height100 imgpic" src="../Img/bg1.jpg">
              </div>
              <div style="height:20vh">
                <img class="images-height100 imgpic" src="../Img/pi1.jpg">
              </div>
            </div>
        </div>
    </div>

    <div class="box-flex width-80 margin-auto margin-top-2">
        <div class="line-height-30 font-size-26 lineThrou">My Skill</div>
    </div>
     <div class="box-flex width-100 text-align-center margin-auto margin-top-2 margin-bottom-3 flex-direction-row flex-justify-center flex-items-center">
          <div class="flex-direction-column">
						<el-progress type="circle" class="margin-right-1" :percentage="95"></el-progress>
						<span>JavaScript</span>
          </div>
					<div class="flex-direction-column">
						<el-progress type="circle" class="margin-right-1" :percentage="75"></el-progress>
						<span>Node</span>
					</div>
					<div class="flex-direction-column">
						<el-progress type="circle" class="margin-right-1" :percentage="90"></el-progress>
						<span>PS</span>
					</div>
          <div class="flex-direction-column">
						<el-progress type="circle" class="margin-right-1" :percentage="65"></el-progress>
						<span>React</span>
					</div>
			</div>
    <div class="box-flex height-200 bg-333 margin-top-2 flex-direction-column flex-justify-center flex-items-center" >
        <div class="line-height-30 font-size-12 textclolor-black-low">© 2015 All rights reserved. Design and development by Liu Yahui</div>
        <div class="line-height-30 font-size-12 textclolor-white ">Projects made with </div>
        <div class="width-80 margin-auto text-align-center flex-justify-center flex-items-center flex-content-center">
            <a href="https://github.com/liuyahuiZ">
            <span class="flex-1 ion-social-github font-size-20 textclolor-white margin-right-3"></span>
            </a>
            <span class="flex-1 ion-social-twitter font-size-20 textclolor-white margin-right-3"></span>
            <span class="flex-1 ion-social-facebook font-size-20 textclolor-white margin-right-3"></span>
            <a href="Mailto:liuyahui991@gmail.com">
            <span class="flex-1 ion-social-googleplus font-size-20 textclolor-white margin-right-3"></span>
            </a>
            <span class="flex-1 ion-social-dribbble-outline font-size-20 textclolor-white margin-right-3"></span>
        </div>
    </div>
</div>
</template>
<script>
import Service from '@/util/service'
import configs from '@/util/configs'
export default {
  data () {
    return {
      colors: [{thecolor: ''}],
      number: '',
      open: false,
      docked: true,
      bottomSheet: false,
      dialog: false,
      banners: [],
      HomeArticle: [],
      config: configs.config,
    }
  },
  watch: {
  },
  beforeCreate: function () {
      console.log('beforeCreate is triggered.')
      let reqbody={
        "typecode" : "HomeBanner"
      }
      Service.Post('PictureList',reqbody)
      .then(data => {
          console.log(data,data.data)
          this.banners = data.data
      })
      .catch(error => console.log(error))

      let reqabody={
        "typecode" : "Home"
      }
      Service.Post('ArticleList',reqabody)
      .then(data => {
          console.log(data,data.data)
          this.HomeArticle = data.data
      })
      .catch(error => console.log(error))
  },
  methods: {
    add: function () {
      let item = {thecolor: ''}
      this.colors.push(item)
    },
    closeBottomSheet () {
      this.bottomSheet = false
    },
    openBottomSheet () {
      this.bottomSheet = true
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style >
.box-flex .imgpic {
    transition: .7s all;
    opacity: 0.8;
}
.box-flex .imgpic:hover { opacity: 1; box-shadow: 1px 1px 20px #333;
transform:scale(1.1,1.1);cursor: pointer; }
.lineThrou{transition: .8s all;}
.lineThrou:hover{text-decoration:line-through;cursor: pointer}

</style>
