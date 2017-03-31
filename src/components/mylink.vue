<template>
    <div class="width-80 margin-auto text-align-center flex-justify-center flex-items-center flex-content-center">
        <a href="https://github.com/liuyahuiZ">
        <span class="flex-1 ion-social-github font-size-20 textclolor-white margin-right-3"></span>
        </a>
        <a href="https://twitter.com/Mr_paoying">
        <span class="flex-1 ion-social-twitter font-size-20 textclolor-white margin-right-3"></span>
        </a>
        <span class="flex-1 ion-social-facebook font-size-20 textclolor-white margin-right-3"></span>
        <a href="Mailto:liuyahui991@gmail.com">
        <span class="flex-1 ion-social-googleplus font-size-20 textclolor-white margin-right-3"></span>
        </a>
        <span class="flex-1 ion-social-dribbble-outline font-size-20 textclolor-white margin-right-3"></span>
    </div>
</template>
<script>
export default {
  data () {
    return {
      author: 'Jinkey',
    }
  },
  methods: {
    goback: function () {
      window.history.back()
    },
  },
  components: {
  }
}
</script>