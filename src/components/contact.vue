<template>
  <div id="Contact">
    <div class="fixed home zindex-d10 top-0"> 
        <img class="images-allhei" src="../Img/bg3.jpg" lazy="loaded">
    </div>
    <div class="page-header-main">
      <div class="box-flex width-80 margin-auto margin-top-2 flex-direction-column flex-justify-center flex-items-center">
        <div class="line-height-50 font-size-30">Say Hello</div>
        <div class="line-height-30 font-size-22">- Drop me a line -</div>
      </div>
      <div class="box-flex width-80 margin-auto margin-top-2 flex-direction-column">
        <div class="box-flex">
          <div class="flex-1 padding-all">
            <el-input v-model="name" placeholder="请输入姓名"></el-input>
          </div>
          <div class="flex-1 padding-all"><el-input v-model="email" placeholder="请输入Email"></el-input></div>
        </div>
        <div class="box-flex">
          <div class="flex-1 padding-all"><el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="content"></el-input></div>
        </div>
        <div class="box-flex flex-justify-center flex-items-center padding-all">
            <el-button type="primary" size="large" class="iconFont" @click="doCommit">Send Message</el-button>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Service from '@/util/service'

export default {
  data () {
    return {
      topStatus: '',
      articles: [],
      number: 9999,
      animatedNumber: 0,
      name: '',
      email: '',
      content: '',
      lockButton: false
    }
  },
  methods: {
    doCommit () {
      console.log(this.name)
      if(this.lockButton==true){
        this.$message({
          message: '正在提交中。。。',
          type: 'warning'
        });
        return false
      }
      if(this.name==''||this.name==null){
        this.$message({
          message: '请填写您的名称，以方便我称呼您',
          type: 'warning'
        });
        return false
      }
      if(this.email==''||this.email==null){
        this.$message({
          message: '请填写您的邮箱，以方便我联系您',
          type: 'warning'
        });
        return false
      }
      if(this.content==''||this.content==null){
        this.$message({
          message: '请写下内容',
          type: 'warning'
        });
        return false
      }
      this.lockButton=true
      let reqbody={
        "username" : this.name,
        "email" : this.email,
        "content" : this.content,
        "tirtle": this.name+"say hi",
        "toEmail" : "liuyahui991@gmail.com"
      }
      Service.Post('sendEmail',reqbody)
      .then(data => {
          console.log(data)
          this.$message(data.message);
          this.lockButton=false
      })
      .catch(error => {
        this.lockButton=false
        console.log(error)
      })
    },
  },
  components: {
  }
}
</script>
<style>
.box-flex .el-input__inner{
  transition: .8s all;
  height:50px;background:transparent;border: 1px solid #333;
}
.box-flex .el-textarea__inner{
  transition: .8s all;
  height:150px;background:transparent;border: 1px solid #333;
}
.box-flex  input::-webkit-input-placeholder,.box-flex  textarea::-webkit-input-placeholder { 
  color:#333 !important; 
} 
.box-flex  input:focus,.box-flex  textarea:focus{background: #fff;	border: 1px solid #000;}
.box-flex .el-button--large{
  transition: .8s all;
  background: #fff;width:40%;height:60px;color:#333;border:none
}
.box-flex .el-button--large:hover{
  width:100%;
}
</style>