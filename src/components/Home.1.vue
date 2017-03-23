<template>
<div class="home">
    <div class="fixed home zindex-d10"> 
        <img class="images-con" src="../Img/bg1.jpg" lazy="loaded">
    </div>
    <div class="box-flex margin-top-120x text-align-center line-height-30 flex-direction-row flex-wrap flex-justify-center flex-items-center flex-content-space-around height-200">
      <div class="height-30 bg-e9f5fa" style="flex:1 1;height: 60%">1</div>
      <div class="height-30 bg-button-red" style="flex:2 1;height: 70%">2</div>
      <div class="height-30 bg-e9f5fa" style="flex:3 1;height: 80%">3</div>
      <div class="height-30 bg-button-red" style="flex:4 1;height: 90%">4</div>
      <div class="height-30 bg-e9f5fa" style="flex:5 1;height: 100%">5</div>
    </div>
    <div class="box">
        <div class="Grid-cell u-full">
            <img class="images-con" src="http://fuss10.elemecdn.com/b/18/0678e57cb1b226c04888e7f244c20jpeg.jpeg" lazy="loaded">
          </div>
          <div class="Grid-cell u-1of2">
            <img class="images-con" src="http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg" lazy="loaded">
          </div>
          <div class="Grid-cell u-1of2">
            <img class="images-con" src="http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg" lazy="loaded">
          </div>
          <div class="Grid-cell u-1of3">
            <img class="images-con" src="http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg" lazy="loaded">
          </div>
          <div class="Grid-cell u-1of3">
            <img class="images-con" src="http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg" lazy="loaded">
          </div>
          <div class="Grid-cell u-1of3">
            <img class="images-con" src="http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg" lazy="loaded">
          </div>
    </div>
    
    <mu-raised-button label="ditogglealog" @click="toggle(true)"/>
    <mu-drawer :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item title="Menu Item 1"/>
        <mu-list-item title="Menu Item 2"/>
        <mu-list-item title="Menu Item 3"/>
        <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
      </mu-list>
    </mu-drawer>
    
    <mu-raised-button label="dialog" @click="opendialog"/>
    <mu-dialog :open="dialog" title="Dialog" @close="close">
      这是一个简单的弹出框123321
      <mu-flat-button slot="actions" @click="close" primary label="取消"/>
      <mu-flat-button slot="actions" primary @click="close" label="确定"/>
    </mu-dialog>
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
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    },
    closeBottomSheet () {
      this.bottomSheet = false
    },
    openBottomSheet () {
      this.bottomSheet = true
    },
    opendialog () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style >

</style>
