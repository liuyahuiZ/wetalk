<template>
  <div id="mywork">
    <div class="page-header-main">
      <div class="box-flex width-80 margin-auto margin-top-2 flex-direction-column flex-justify-center flex-items-center">
        <div class="line-height-50 font-size-22">{{article.tirtle}}</div>
        <div class="line-height-30 font-size-12">- {{article.updateTime | time}} 阅读 {{article.sea}} / 评论 {{article.comment?article.comment.length:0}} / 喜欢 194 -</div>
        <div class="text-align-center margin-top-2">
          <img class="images-con border-radius-9" v-bind:src="(config.api+article.img_group[0].photopath)">
        </div>
        <div class="detailContent" v-html="article.content"></div>
      </div>
      <div class="box-flex width-80 margin-auto margin-top-2 flex-direction-column flex-justify-center flex-items-center">
        <div class="box-flex width-100 flex-direction-row">
          <div class="box-flex flex-1">
            <span>Mr.AndSen</span>
          </div>
          <div class="box-flex flex-6 width-100">
            <el-input type="textarea" :rows="2" placeholder="写下你的评论" v-model="textarea"></el-input>
          </div>
        </div>
        <div class="box-flex width-100 margin-top-2 flex-items-flex-end flex-justify-flex-end margin-bottom-3">
          <el-button @click="cacle">取消</el-button>
          <el-button type="primary" @click="doCommit" >发送</el-button>
        </div>
      </div>

      <div class="box-flex width-80 margin-auto margin-top-2 margin-bottom-3 flex-direction-column flex-justify-center flex-items-center" v-for="(n,index) in article.comment">
          <div class="width-100">{{n.user}} 回复 {{n.repayuser}}  {{n.createTime| time}}</div>
          <div class="width-100">{{n.content}}</div>
      </div>

    </div>

  </div>
</template>
<script>
import Service from '@/util/service'
import configs from '@/util/configs'
import Vue from 'vue'
Vue.filter('time', function (value) {
        return new Date(parseInt(value)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
})
export default {
  data () {
    return {
      config: configs.config,
      topStatus: '',
      articles: [],
      article: {},
      textarea: ''
    }
  },
  beforeCreate: function () {
    console.log('beforeCreate is triggered.')
    let reqbody={
        "id" : this.$route.params.id
      }
      Service.Post('ArticleDetail',reqbody)
      .then(data => {
          console.log(data,data.data)
          this.article = data.data
      })
      .catch(error => console.log(error))
  },
  watch: {
  },
  methods: {
    loadDitail () {
      let reqbody={
        "id" : this.$route.params.id
      }
      Service.Post('ArticleDetail',reqbody)
      .then(data => {
          console.log(data,data.data)
          this.article = data.data
      })
      .catch(error => console.log(error))
    },
    doCommit () {
      console.log('textarea',this.textarea)
      let reqbody={
        "id" : this.$route.params.id,
        "comment" : {
          'user' : 'you',
          'repayuser' : 'theme',
          'content' : this.textarea
        }
      }
      Service.Post('MKcommit',reqbody)
      .then(data => {
          console.log(data)
          this.$message(data.message);
          this.loadDitail()
      })
      .catch(error => console.log(error))
    },
    cacle () {
      this.textarea = ''
    }
  },
  components: {
  }
}
</script>
