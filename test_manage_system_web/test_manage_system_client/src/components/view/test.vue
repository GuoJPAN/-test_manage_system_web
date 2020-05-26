<template>
  <div>
    <el-row>
      <el-col :span="6"  class="myContainer">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../assets/img/dnf/mofashiProp.png" height="618" width="391"/>
          <div style="padding: 14px;text-align: center">
            <span style="">真牛逼</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6"  class="myContainer">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../assets/img/dnf/meng.png" height="618" width="391"/>
          <div style="padding: 14px;text-align: center">
            <span style="">真牛逼</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6"  class="myContainer">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../assets/img/dnf/jianhun.png" height="618" width="391"/>
          <div style="padding: 14px;text-align: center">
            <span style="">真牛逼</span>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6"  class="myContainer">
        <el-card :body-style="{ padding: '0px' }">
          <img src="../../assets/img/dnf/jianhunProp.png" height="618" width="391"/>
          <div style="padding: 14px;text-align: center">
            <span style="">真牛逼</span>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <drawer title="Hello, I'm drawer" :display.sync="display" :width="drawerWidth">
      <p>1. Hello, world!</p>
      <p>2. Do you like it?</p>
      <button class="btn try" @click="changeWidth">点我试试?</button>
    </drawer>

    <el-button>出来</el-button>
  </div>
</template>

<script>
  import drawer from '../../components/common/drawer'
  export default {
    data() {
      return {
        currentDate: new Date(),
        display: false,
        drawerWidth: '500px'
      };
    },
    methods: {
      changeWidth () {
        this.drawerWidth = (this.drawerWidth === '500px') ? '800px' : '500px'
      }
    },
    components: {
      drawer
    },
  }
</script>

<style>
  .myContainer{
    position: relative;
    display: flex;
    display: -webkit-flex; /* Safari */
    align-items: center;
    justify-content: center;
  }
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
