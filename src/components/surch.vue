<template>
    <div>
    <div class="tirtles bg-e9f5fa padding-all relative overflow-hide">
          <div class="list-cell" v-bind:class="{ unsurch: !focusStatus, surch: focusStatus }" @click="focus()">
          <i class="mintui mintui-search float-left line-height-42"></i>
          <input class="input-all tirtles-left" v-bind:class="{ unfocus: !focusStatus, focus: focusStatus }"
             v-model="question" type="text" step="20" placeholder="搜索">
          </div>
          <span class="absolute line-height-42 right-d-5" v-bind:class="{ uncancle: !focusStatus, cancle: focusStatus }"  @click="blurs()">取消</span>
    </div>
    <div @click="blurs()" class="tirtles margin-top-2 padding-all" id="watch-example">
          <p>{{ answer }}</p>
        </div>
    </div>
</template>
<script>
import _ from 'lodash'
import axios from 'axios'
export default {
  data () {
    return {
      question: '',
      answer: 'I cannot give you an answer until you ask a question!',
      number: '',
      animatedNumber: 0,
      focusStatus: false
    }
  },
  watch: {
    // 如果 question 发生改变，这个函数就会运行
    question: function (newQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.getAnswer()
    }
  },
  methods: {
    focus: function () {
      console.log('focus')
      this.focusStatus = true
    },
    blurs: function () {
      console.log('blurs')
      this.focusStatus = false
    },
    getAnswer: _.debounce(
      function () {
        var vm = this
        // if (this.question.indexOf('?') === -1) {
        //   vm.answer = 'Questions usually contain a question mark. ;-)'
        //   return
        // }
        vm.answer = 'Thinking...'
        axios.get('https://www.baidu.com/s?ie=UTF-8&tn=null&wd=' + this.question)
          .then(function (response) {
            console.log(response)
            // vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      // 这是我们为用户停止输入等待的毫秒数
      500
    )
  }
}
</script>
<style >
.unsurch{
  width: 100%;background: #fff;border-radius: 5px;padding-left: 45%;
  transition: all .5s ease;
}
.surch{
  width: 88%;background: #fff;border-radius: 5px;padding-left: 5%;
  transition: all .5s ease;
}
.unfocus{
  width: 50%;
  text-align: left;
  transition: all .3s ease;
}
.focus{
  width: 90%;
  text-align: left;
  transition: all .3s ease;
}
.uncancle{
    right: -50px;
    transition: all .5s ease;
}
.cancle{
    right: 10px;
    transition: all .5s ease;
}
</style>
