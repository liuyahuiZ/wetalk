<template>
<div class="home">
    <el-carousel height="450px">
      <el-carousel-item >
        <img class="images-con" src="../Img/bg1.jpg">
      </el-carousel-item>
      <el-carousel-item >
        <img class="images-con" src="../Img/bg2.jpg">
      </el-carousel-item>
      <el-carousel-item >
        <img class="images-con" src="../Img/pi1.jpg">
      </el-carousel-item>
    </el-carousel>
    <div class="box-flex flex-direction-column margin-top-2">
        <div class="box-flex width-80 margin-auto">
            <div class="flex-1">
            <img class="images-con" src="../Img/pic.jpg">
            </div>
            <div class="flex-1 padding-all">
                <span class="font-size-16 lineThrou">The Iron man</span>
            </div>
        </div>
        <div class="box-flex width-80 margin-auto margin-top-2">
            <div class="flex-1">
                <span class="font-size-16 lineThrou">Mountine</span>
            </div>
            <div class="flex-1">
            <img class="images-con" src="../Img/pi2.jpg">
            </div>
        </div>
    </div>
    <div class="box-flex width-80 margin-auto margin-top-2">
        <div class="line-height-30 font-size-26 lineThrou">My Work</div>
    </div>
    <div class="box-flex text-align-center line-height-30 flex-direction-row flex-wrap flex-justify-center flex-items-center flex-content-space-around height-200">
      <div class="height-30 bg-e9f5fa" style="flex:1 1;height: 60%">1</div>
      <div class="height-30 bg-button-red" style="flex:2 1;height: 70%">2</div>
      <div class="height-30 bg-e9f5fa" style="flex:3 1;height: 80%">3</div>
      <div class="height-30 bg-button-red" style="flex:4 1;height: 90%">4</div>
      <div class="height-30 bg-e9f5fa" style="flex:5 1;height: 100%">5</div>
    </div>

    <div class="box-flex width-80 margin-auto margin-top-2">
        <div class="line-height-30 font-size-26 lineThrou">My Skill</div>
    </div>
    <div class="box-flex text-align-center line-height-30 flex-direction-row flex-wrap flex-justify-center flex-items-center flex-content-space-around height-200">
      <div class="height-30 bg-e9f5fa" style="flex:1 1;height: 60%">1</div>
      <div class="height-30 bg-button-red" style="flex:2 1;height: 70%">2</div>
      <div class="height-30 bg-e9f5fa" style="flex:3 1;height: 80%">3</div>
      <div class="height-30 bg-button-red" style="flex:4 1;height: 90%">4</div>
      <div class="height-30 bg-e9f5fa" style="flex:5 1;height: 100%">5</div>
    </div>

    <div class="box-flex height-200 bg-333 margin-top-2 flex-direction-column flex-justify-center flex-items-center" >
        <div class="line-height-30 font-size-12 textclolor-black-low">© 2015 All rights reserved. Design and development by Juraj Molnár</div>
        <div class="line-height-30 font-size-12 textclolor-white ">Projects made with </div>
        <div class="width-80 margin-auto text-align-center flex-justify-center flex-items-center flex-content-center">
            <span class="flex-1 ion-social-github font-size-20 textclolor-white margin-right-3"></span>
            <span class="flex-1 ion-social-twitter font-size-20 textclolor-white margin-right-3"></span>
            <span class="flex-1 ion-social-facebook font-size-20 textclolor-white margin-right-3"></span>
            <span class="flex-1 ion-social-googleplus font-size-20 textclolor-white margin-right-3"></span>
            <span class="flex-1 ion-social-dribbble-outline font-size-20 textclolor-white margin-right-3"></span>
        </div>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return {
      colors: [{thecolor: ''}],
      number: '',
      open: false,
      docked: true,
      bottomSheet: false,
      dialog: false
    }
  },
  watch: {
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
.box-flex img {
    transition: .8s all;
    opacity: 0.7;
}
.box-flex img:hover { opacity: 0.9; box-shadow: 1px 1px 20px #333;
transform:scale(1.1,1.1); }
.lineThrou{transition: .8s all;}
.lineThrou:hover{text-decoration:line-through;}

</style>
