<template>
<div class="home">
    <el-carousel class="bannerHeight">
      <el-carousel-item v-for="(B,index) in banners" key={{index}}>
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
                <span class="tirtleFont lineThrou">{{A.tirtle}}</span>
                </router-link>
                <span class="contentFont">{{A.info}}</span>
            </div>
           </div>
           <div class="box-flex width-100" v-else> 
            <div class="box-flex flex-1 padding-all flex-direction-column">
                <router-link :to="('/detail/'+A._id)">
                  <span class="tirtleFont lineThrou">{{A.tirtle}}</span>
                </router-link>
                <span class="contentFont">{{A.info}}</span>
            </div>
            <div class="flex-1">
              <img class="images-con imgpic" v-bind:src="(config.api+A.img_group[0].photopath)" >
            </div>
           </div>
        </div>
    </div>
    <div class="box-flex width-80 margin-auto margin-top-2 padding-top-5 padding-bottom-3 text-align-center flex-justify-center flex-items-center">
        <div class="line-height-30 font-size-26 lineThrou">My Work</div>
    </div>
    <div class="box-flex width-100 margin-auto text-align-center flex-direction-column flex-wrap flex-justify-center flex-items-center flex-content-space-around">
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

    <div class="box-flex width-100 margin-auto margin-top-2 padding-top-5 padding-bottom-5 bg-69cb89 text-align-center flex-justify-center flex-items-center">
        <div class="line-height-30 font-size-26 lineThrou textclolor-white">My Skill</div>
    </div>
    <div class="box-flex width-100 bg-69cb89 text-align-center margin-auto padding-top-2 padding-bottom-10 flex-direction-row flex-justify-center flex-items-center">
          <div class="flex-direction-column">
            <!--<mu-circular-progress mode="determinate" class="margin-right-1" :size="120" :value="95" :strokeWidth="10" color="#05A762" />-->
						<el-progress type="circle" class="margin-right-1" :percentage="80"></el-progress>
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

    <div class="box-flex width-100 margin-auto margin-top-2 padding-top-5 padding-bottom-5 text-align-center flex-justify-center flex-items-center">
        <div class="line-height-30 font-size-26 lineThrou">Personal Profile</div>
    </div>
    <div class="box-flex width-100 text-align-center margin-auto padding-all padding-bottom-5 perenContent flex-justify-center flex-items-center">
      <div class="box-flex flex-1 flex-direction-column flex-justify-center flex-items-center">
        <div class="box-flex width-100 flex-direction-row">
          <div class="box-flex flex-1 flex-justify-flex-end height-40 line-height-40">
            <span class="ion-happy-outline font-size-16"></span>
          </div>
          <div class="box-flex flex-3 height-40 line-height-40 padding-left-3">{{userInfo.username}}</div>
        </div>
        <div class="box-flex width-100 flex-direction-row">
          <div class="box-flex flex-1 flex-justify-flex-end height-40 line-height-40">
            <span class="ion-ios-email-outline font-size-16"></span>
          </div>
          <div class="box-flex flex-3 height-40 line-height-40 padding-left-3">{{userInfo.email}}</div>
        </div>
        <div class="box-flex width-100 flex-direction-row">
          <div class="box-flex flex-1 flex-justify-flex-end height-40 line-height-40">
            <span class="ion-ios-telephone-outline font-size-16"></span>
          </div>
          <div class="box-flex flex-3 height-40 line-height-40 padding-left-3">{{userInfo.phone}}</div>
        </div>
        <div class="box-flex width-100 flex-direction-row">
          <div class="box-flex flex-1 flex-justify-flex-end height-40 line-height-40">
            <span class="ion-ios-list-outline font-size-16"></span>
          </div>
          <div class="box-flex flex-3 padding-left-3 text-align-left" v-html="userInfo.content"></div>
        </div>
      </div>
      <div class="box-flex flex-1 flex-direction-column flex-justify-center flex-items-center">
        <div class="imground">
        <img class="imground" v-if="userInfo.personfile" v-bind:src="(config.api+userInfo.personfile.personimg[0].photopath)">
        </div>
      </div>
    </div>

    <div class="box-flex height-200 bg-333 flex-direction-column flex-justify-center flex-items-center" >
        <div class="line-height-30 tirtleFont textclolor-black-low">© 2015 All rights reserved. Design and development by Liu Yahui</div>
        <div class="line-height-30 iconFont textclolor-white ">Projects made with </div>
        <mylink></mylink>
    </div>
</div>
</template>
<script>
import Service from '@/util/service'
import configs from '@/util/configs'
import mylink from '@/components/mylink'
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
      userInfo: {},
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
          // console.log("pictureList",data)
          this.banners = data.data
      })
      .catch(error => console.log(error))

      let reqabody={
        "typecode" : "Home"
      }
      Service.Post('ArticleList',reqabody)
      .then(data => {
          this.HomeArticle = data.data
      })
      .catch(error => console.log(error))

      let reqbbody={
        "username" : "lyh"
      }
      Service.Post('finduser',reqbbody)
      .then(data => {
          console.log(data,data.data)
          this.userInfo=data.data[0]
      })
      .catch(error => console.log(error))
  },
  created: function(){
    let msg = localStorage.getItem("wetalks_user");
    if(msg){
      console.log(msg)
      this.dataSati()
    }else{
      let tmp_name = (Date.parse(new Date())/1000);
      let userid = 'wetalksuser-' + tmp_name + '-' + (Math.round(Math.random()*9999));
      let username = this.randomString(5) 
      localStorage.setItem("wetalks_user",username);
      localStorage.setItem("wetalks_user_id",userid);
      this.dataSati()
    }
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
    },
    dataSati () {
      let reqbody={
        "wetalks_user" : localStorage.getItem("wetalks_user")
      }
      Service.Post('dataStati',reqbody)
      .then(data => {
          console.log(data,data.data)
      })
    },
    randomString (len) {
      len = len || 32;
      let $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
      let maxPos = $chars.length;
      let pwd = '';
      for (let i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
      }
      return pwd;
    }
  },
  components: {
    mylink
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
