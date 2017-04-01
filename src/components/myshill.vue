<template>
  <div id="mywork">
    <div class="page-header-main">
      <div class="box-flex width-80 margin-auto margin-top-2 flex-direction-column flex-justify-center flex-items-center">
        <div class="line-height-50 font-size-30">My Shill</div>
        <div class="line-height-30 font-size-22">- Drop me a line -</div>
      </div>
      <div class="box-flex width-80 text-align-center margin-auto margin-top-2 flex-direction-row flex-justify-center flex-items-center">
          <div class="flex-direction-column">
						<el-progress type="circle" class="margin-right-1" :percentage="90"></el-progress>
						<span>JavaScript</span>
          </div>
					<div class="flex-direction-column">
						<el-progress type="circle" class="margin-right-1" :percentage="75"></el-progress>
						<span>Node</span>
					</div>
					<div class="flex-direction-column">
						<el-progress type="circle" class="margin-right-1" :percentage="75"></el-progress>
						<span>React</span>
					</div>
					<div style="display:none">{{workdate}}</div>
			</div>
			<div class="box-flex width-80 margin-auto margin-top-2 flex-direction-column flex-justify-center flex-items-center">
				<div id="line" class="flex-1 charts"></div>
				<div id="bar" class="flex-1 charts"></div>
			</div>
    </div>
  </div>
</template>
<script>
import Service from '@/util/service'
import getDate from '@/util/getDate'
import echarts from "echarts"
export default {
  data () {
    return {
		optione1: {
			color: ['#79D46D'],
			title: { text: 'My Shill' },
			tooltip: {},
			xAxis: {
					data: ["PHP","JavaScript","PS","Node","React","Vue"]
			},
			yAxis: {},
			series: [{
					name: '销量',
					type: 'bar',
					data: [80, 90, 85, 70, 75, 70],
			}]
		},
		datelist: '',
		workdate: []
		}
  },
  beforeCreate: function () {
    console.log('beforeCreate is triggered.')
    let reqbody={
      }
      Service.Post('dataStatiList',reqbody)
      .then(data => {
		  this.datelist=data.data
          console.log(data,data.data)
		  let date=getDate('bz_wek')
		let imcomelist=[]
		// console.log(date)
		for(var j=0;j<date.length;j++){
		imcomelist[j]=this.getcom(this.datelist,date[j]);
		}
		console.log(imcomelist)
		this.workdate=imcomelist
      })
      .catch(error => console.log(error))
  },
  created: function(){
  },
  updated:function(){
	console.log('updated');
	console.log('work',this.workdate)
	var line = echarts.init(document.getElementById('line'));
	var optione2={
					title: {
							text: '访客记录'
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
							data:['直接访问']
					},
					toolbox: {
							feature: {
									saveAsImage: {}
							}
					},
					lineStyle: {
						normal: {
						type: 'solid',
						color:"#F96C43",
						opacity :"0.5"
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
								data : ['周日','周一','周二','周三','周四','周五','周六']
							}
					],
					yAxis : [
							{
								type : 'value'
							}
					],
					series : [
							{
								name:'直接访问',
								type:'line',
								stack: '总量',
								areaStyle: {normal: {
									color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: 'rgba(249,108,67, 1)'
									}, {
										offset: 1,
										color: 'rgba(249,108,67, 0.9)'
									}])
								}},
								data:this.workdate
							}
					]
    	}
	line.setOption(optione2);
  },
  methods: {
    getcom:function(allincom,time){
        var arr={};
        var incomAmount=[];
        var acount=0;
        for(var i=0;i<allincom.length;i++){
			// console.log(parseInt(allincom[i].createTime),time.start,time.end)
          if(parseInt(allincom[i].createTime)>=time.start&&parseInt(allincom[i].createTime)<=time.end){
              incomAmount.push(allincom[i]);
          }
        }
        arr['incomAmount']=incomAmount;
        arr['incomeDate']=time;
        return arr['incomAmount'].length;
      }
  },
  mounted (){
			var bar = echarts.init(document.getElementById('bar'));
			bar.setOption(this.optione1);
			// var line = echarts.init(document.getElementById('line'));
			// line.setOption(this.optione2);
  }
}
</script>
