<template>
    <div :id="theid" v-if="theshow">
    <span class="relative" >{{totitle}} </span>
    </div>
</template>
<script>
export default {
  data () {
    return {
      theid: '',
      theshow: ''
    }
  },
  props: ['totitle', 'show', 'fromtitle'],
  methods: {
  },
  watch: {
    show: function (newQuestion) {
      console.log('newQuestion', newQuestion)
      let Rand = Math.random(1000)
      this.theid = Rand
      let o = this
      setTimeout(function () {
        o.theshow = o.show
      }, 500)
    }
  },
  created: function () {
  }
}
</script>