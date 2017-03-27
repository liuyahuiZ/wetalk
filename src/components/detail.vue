<template>
  <div id="mywork">
    <div class="page-header-main">
      <div class="box-flex width-80 margin-auto margin-top-2 flex-direction-column flex-justify-center flex-items-center">
        <div class="line-height-50 font-size-22">{{article.tirtle}}</div>
        <div class="line-height-30 font-size-12">- {{article.updateTime | time}} 阅读 3032 / 评论 48 / 喜欢 194 -</div>
        <div class="text-align-center margin-top-2">
          <img class="images-con border-radius-9" v-bind:src="('http://localhost:2016/getphotoPal/'+article.img_group[0].photopath)">
        </div>
        <div v-html="article.content"></div>
      </div>
    </div>

  </div>
</template>
<script>
import Service from '@/util/service'
import Vue from 'vue'
Vue.filter('time', function (value) {
        return new Date(parseInt(value)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
})
export default {
  data () {
    return {
      topStatus: '',
      articles: [],
      article: {}
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
  },
  components: {
  }
}
</script>
