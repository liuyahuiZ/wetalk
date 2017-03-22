<template>
    <div class="list-cell padding-bottom-60x">
        <div class="list-cell padding-all line-height-30 text-align-center" @click="add()">add item</div>
        <div class="tirtles bg-e9f5fa padding-all relative overflow-hide" v-for="n in colors" v-bind:style="{ color: '#333333' , background: n.thecolor}">
            <input class="input-all tirtles-left" v-model="n.thecolor" type="text" step="20" placeholder="输入颜色">
        </div>
        <div class="list-cell padding-all line-height-30">input the color you like : #339988</div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      colors: [{thecolor: ''}],
      number: ''
    }
  },
  watch: {
  },
  methods: {
    add: function () {
      let item = {thecolor: ''}
      this.colors.push(item)
    }
  }
}
</script>
<style >

</style>
