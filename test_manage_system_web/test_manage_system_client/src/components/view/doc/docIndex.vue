<template>
    <div>
      <el-card shadow="never" style="height: 800px" class="main">
        从这里开始
        <el-row :gutter="10">
          <el-col :span="6">2</el-col>
          <el-col :span="6">3</el-col>
          <el-col :span="6">4</el-col>
          <el-col :span="6">5</el-col>
        </el-row>
      </el-card>
    </div>
</template>

<script>
    export default {
        name: "docIndex"
    }
</script>

<style scoped>
  .main .el-col{
    background-color: #97a8be;
    height: 750px;
  }
</style>
