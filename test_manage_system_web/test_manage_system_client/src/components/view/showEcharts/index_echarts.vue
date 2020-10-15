<template>
  <div>
    <h2 style="margin-bottom: 40px;text-align: center;border-bottom: #409EFF 5px solid;padding-bottom: 5px">一个div显示多个echarts图，浏览器窗口大小改变之后重新绘制echarts图（自适应）</h2>
    <div class="myChart" style="width: 100%;height: 650px" ref="chart"></div>
  </div>
</template>

<script>
const option = {// 简单的 柱状图+饼图 展示
// 设置柱状图位置，x：与左侧边界距离；y：与上侧边界距离；width：柱状图宽度；height：柱状图高度
  grid: [{x: '5%', y: '5%', width: '30%', height: '16%' },
    {x: '50%', y: '5%', width: '30%', height: '16%'},
    {x: '5%', y: '35%', width: '30%', height: '16%'},
    {x: '50%', y: '35%', width: '30%', height: '16%'}
  ],
  // 图表标题设置，其内容以及位置
  title:
      [{
        text: '数据完整率',
        left: '15%'
      },
      {
        text: '数据有效率',
        left: '60%'
      }, {
        text: '在线仪器运转率',
        left: '15%',
        top: '30%'
      }, {
        text: '数据超标率',
        left: '60%',
        top: '30%'
      }, {
        text: '报警类型分布图',
        left: '15%',
        top: '60%'
      }, {
        text: '报警响应分布图',
        left: '57%',
        top: '60%'
      } ],
  // X轴
  xAxis: [
    {
      gridIndex: 0, // 定义index
      type: 'category',
      data: ['1', '2', '3', '4', '5']
    },
    {
      gridIndex: 1,
      type: 'category',
      data: ['1', '2', '3', '4', '10']
      // data: msg.intergrity_xAxis[0].data,
    },
    {
      gridIndex: 2,
      type: 'category',
      data: ['1', '2', '3', '4', '5']
      // data: msg.intergrity_xAxis[0].data,
    },
    {
      gridIndex: 3,
      type: 'category',
      data: ['1', '2', '3', '4', '5']
      // data: msg.intergrity_xAxis[0].data,
    }
  ],
  yAxis: [ // y轴
    {gridIndex: 0 }, // 定义y轴index
    {gridIndex: 1 },
    {gridIndex: 2 },
    {gridIndex: 3 }
  ],
  tooltip: {
    trigger: 'item',
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  series: [
    {
      type: 'bar',
      xAxisIndex: 0, // 使用x轴的index-0，y轴的index-0
      yAxisIndex: 0,
      barWidth: 20, // 柱图宽度
      show: false, // 是否进行展示
      data: ['1', '2', '3', '4', '5']
    },
    {
      type: 'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      barWidth: 20, // 柱图宽度
      data: ['1', '2', '3', '4', '5']
      // data: msg.intergrity_series[0].data,
    },
    {
      type: 'bar',
      xAxisIndex: 2,
      yAxisIndex: 2,
      barWidth: 20, // 柱图宽度
      data: ['1', '2', '3', '4', '10']
      // data: msg.intergrity_series[0].data,
    },
    {
      type: 'bar',
      // X与Y使用的INDEX
      xAxisIndex: 3,
      yAxisIndex: 3,
      barWidth: 20, // 柱图宽度
      data: ['1', '2', '3', '4', '5']
      // data: msg.intergrity_series[0].data,
    },
    {// 饼图
      name: 'NB-ZZ', // 图形名称
      type: 'pie', // 图形类型
      // 饼图半径
      radius: '25%',
      center: ['20%', '85%'],
      // 在数据为0的时候不显示扇区
      data: [
        {value: 0, name: '直接访问'},
        {value: 0, name: '邮件营销'},
        {value: 0, name: '联盟广告'},
        {value: 0, name: '视频广告'},
        {value: 0, name: '搜索引擎'}

      ]
    }, {
      name: 'NB-CC',
      type: 'pie',
      radius: '25%',
      center: ['65%', '85%'],
      data: [
        {value: 335, name: '直接访问'},
        {value: 310, name: '邮件营销'},
        {value: 234, name: '联盟广告'},
        {value: 135, name: '视频广告'},
        {value: 1548, name: '搜索引擎'}
      ]
    }
  ]
}
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
    this.drawLine()
  },
  methods: {

    drawLine () {
      // 这里是实例化一个echarts对象并且初始化上面创建好的dom
      // let myChart = this.$echarts.init(document.getElementById('myChart'))
      var charts = this.$refs.chart
      if (charts) {
        let myChart = this.$echarts.init(charts)
        myChart.setOption(option)

        // 浏览器窗口大小改变，重新绘制图表
        window.onresize = () => {
          myChart.resize()
        }
      } else {
        console.log('charts不能为空')
      }
      // 制作图标的具体实现
      // myChart.setOption({
      //   title: {text: '在Vue中使用echarts'},
      //   tooltip: {},
      //   xAxis: {
      //     data: ['一月', '二月', '三月', '四月']
      //   },
      //   yAxis: {},
      //   series: [{
      //     name: '裤衩',
      //     type: 'bar',
      //     data: [5, 20, 36, 10, 10, 20]
      //     //略。。。
      //   }]
      // });
    }
  }
}
</script>

<style scoped>

</style>
