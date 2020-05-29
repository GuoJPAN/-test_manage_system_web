<template>
  <div>
    <el-card class="box-card">
      <h2 style="margin-bottom: 40px;text-align: center;border-bottom: #409EFF 5px solid;padding-bottom: 5px">解决切换tab页echarts显示问题</h2>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="第一个页签" name="first">
          <index_echarts ref="first" v-if="'first' === activeName"></index_echarts>
        </el-tab-pane>
        <el-tab-pane label="第二个页签" name="second">
          <index_echarts ref="second" v-if="'second' === activeName"></index_echarts>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
  import index_echarts from './index_echarts'

  export default {
    data() {
      return {
        activeName: 'first'
      };
    },
    components: {
      index_echarts
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>

<style scoped>

</style>
