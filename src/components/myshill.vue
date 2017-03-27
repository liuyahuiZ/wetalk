<template>
  <div id="mywork">
    <div class="page-header-main">
      <div class="box-flex width-80 margin-auto margin-top-2 flex-direction-column flex-justify-center flex-items-center">
        <div class="line-height-50 font-size-30">My Shill</div>
        <div class="line-height-30 font-size-22">- Drop me a line -</div>
      </div>
      <div class="box-flex width-80 text-align-center margin-auto margin-top-2 flex-direction-row flex-justify-center flex-items-center">
          <div class="flex-direction-column">
						<el-progress type="circle" class="margin-right-1" :percentage="25"></el-progress>
						<span>JavaScript</span>
          </div>
					<div class="flex-direction-column">
						<el-progress type="circle" class="margin-right-1" :percentage="55"></el-progress>
						<span>Node</span>
					</div>
					<div class="flex-direction-column">
						<el-progress type="circle" class="margin-right-1" :percentage="55"></el-progress>
						<span>React</span>
					</div>
			</div>
			<div class="box-flex width-80 margin-auto margin-top-2 flex-direction-column flex-justify-center flex-items-center">
				<div id="bar" class="flex-1 charts"></div>
				<div id="line" class="flex-1 charts"></div>
			</div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts"
export default {
  data () {
    return {
			optione1: {
				title: { text: 'ECharts 入门示例' },
				tooltip: {},
				xAxis: {
						data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
				},
				yAxis: {},
				series: [{
						name: '销量',
						type: 'bar',
						data: [5, 20, 36, 10, 10, 20]
				}]
			},
			optione2: {
					title: {
							text: '堆叠区域图'
					},
					tooltip : {
							trigger: 'axis',
							axisPointer: {
									type: 'cross',
									label: {
											backgroundColor: '#6a7985'
									}
							}
					},
					legend: {
							data:['视频广告','直接访问','搜索引擎']
					},
					toolbox: {
							feature: {
									saveAsImage: {}
							}
					},
					grid: {
							left: '3%',
							right: '4%',
							bottom: '3%',
							containLabel: true
					},
					xAxis : [
							{
									type : 'category',
									boundaryGap : false,
									data : ['周一','周二','周三','周四','周五','周六','周日']
							}
					],
					yAxis : [
							{
									type : 'value'
							}
					],
					series : [
							{
									name:'视频广告',
									type:'line',
									stack: '总量',
									areaStyle: {normal: {}},
									data:[150, 232, 201, 154, 190, 330, 410]
							},
							{
									name:'直接访问',
									type:'line',
									stack: '总量',
									areaStyle: {normal: {}},
									data:[320, 332, 301, 334, 390, 330, 320]
							},
							{
									name:'搜索引擎',
									type:'line',
									stack: '总量',
									label: {
											normal: {
													show: true,
													position: 'top'
											}
								},
								areaStyle: {normal: {}},
								data:[820, 932, 901, 934, 1290, 1330, 1320]
							}
					]
    	}
		}
  },
  methods: {
    
  },
	mounted (){
			var bar = echarts.init(document.getElementById('bar'));
			bar.setOption(this.optione1);
			var line = echarts.init(document.getElementById('line'));
			line.setOption(this.optione2);
  }
}
</script>
<style>
.charts {
  width:600px;
	height:400px;
}
</style>
