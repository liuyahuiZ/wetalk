<template>
  <div class="padding-bottom-60x">
     <router-link to="/first">
      <mt-cell title="page1">page1</mt-cell>
     </router-link>
     <router-link to="/second">
      <mt-cell title="page2">page2</mt-cell>
     </router-link>
     <router-link to="/third">
      <mt-cell title="page3">page3</mt-cell>
     </router-link>
    <mu-raised-button label="undocked drawer" @click="toggle(true)"/>
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

    <mu-raised-button @click="openBottomSheet" label="Open Bottom Sheet" />
    <mu-bottom-sheet :open="bottomSheet" @close="closeBottomSheet">
      <mu-list @itemClick="closeBottomSheet">
        <mu-sub-header>
          请选择一个
        </mu-sub-header>
        <mu-list-item title="阴阳师"/>
        <mu-list-item title="贪吃蛇大作战"/>
        <mu-list-item title="一划到底"/>
        <mu-list-item title="全民斗地主"/>
      </mu-list>
    </mu-bottom-sheet>
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
    <div class="Media padding-all-15x">
      <img class="Media-figure images-iocn" src="http://fuss10.elemecdn.com/3/1e/42634e29812e6594c98a89e922c60jpeg.jpeg" lazy="loaded">
      <div class="Media-body">病毒传播中的用户心理把握 法国社会心理学家古斯塔夫·勒庞(Gustave Le Bon)在他的经典著作《乌合之众》中认为， 群体不善推理，却急于行动，原本理性的个人一旦结成群体，便容易智商尽失，轻易被影响 操纵。互联网是人性的试炼场，互联网产品的病毒传播策略如果能把握群体心理中的一些特 征共性，就能从深层次激发人们的传播动力。</div>
    </div>
    <div class="box-flex text-align-center line-height-30 bg-ccc padding-all-15x flex-direction-row flex-wrap flex-justify-center flex-items-flex-start flex-content-space-around height-300">
      <div class="Grid-cell u-1of2 height-30 bg-bar">1</div>
      <div class="Grid-cell u-1of2 height-30 bg-bar">2</div>
      <div class="Grid-cell u-1of3 height-30 bg-button-red flex-self-flex-end">3</div>
      <div class="Grid-cell u-1of3 height-30 bg-button-red height-50 line-height-50">4</div>
      <div class="Grid-cell u-1of3 height-30 bg-button-red flex-self-flex-start">5</div>
      <div class="Grid-cell u-1of3 flex-items-center bg-button-green height-30">6</div>
    </div>
    <div class="box-flex text-align-center line-height-30 bg-e9f5fa flex-direction-row flex-wrap flex-justify-center flex-items-center flex-content-space-around height-200">
      <div class="height-30 bg-ccc" style="flex:1 1">1</div>
      <div class="height-30 bg-button-red" style="flex:2 1">2</div>
      <div class="height-30 bg-ccc" style="flex:3 1">3</div>
      <div class="height-30 bg-button-red" style="flex:1 1">4</div>
    </div>
    <div class="box-flex text-align-center line-height-30 bg-ccc flex-direction-row flex-wrap flex-justify-center flex-items-center flex-content-space-around height-200">
      <div class="height-30 bg-e9f5fa" style="flex:1 1;height: 60%">1</div>
      <div class="height-30 bg-button-red" style="flex:2 1;height: 70%">2</div>
      <div class="height-30 bg-e9f5fa" style="flex:3 1;height: 80%">3</div>
      <div class="height-30 bg-button-red" style="flex:4 1;height: 90%">4</div>
      <div class="height-30 bg-e9f5fa" style="flex:5 1;height: 100%">5</div>
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
    }
  }
}
</script>
<style >

</style>
