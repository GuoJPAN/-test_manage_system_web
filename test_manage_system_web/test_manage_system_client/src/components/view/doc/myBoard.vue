<template>
  <div>
    <!--按钮互斥效果-->
    <el-button @click="testReq">发请求</el-button>
  </div>
</template>

<script>
import Axios from "axios"

export default {
  data () {
    return {
      levelList: [
        {
          code: "",
          codeValue: "全部"
        },
        {
          code: "",
          codeValue: "铜"
        },
        {
          code: "",
          codeValue: "银"
        },
        {
          code: "",
          codeValue: "金"
        },
        {
          code: "",
          codeValue: "白金"
        },
        {
          code: "",
          codeValue: "铂金"
        }
      ], // 等级筛选数据
      itemType: 0, // 等级筛选选中的标识
      materialCode: "" // 分类的code值
    }
  },
  methods: {
    // 等级筛选互斥效果
    materTay (itemType, code) {
      // 等级筛选选中的标识-高亮效果
      this.itemType = itemType
      // 分类的code值
      this.materialCode = code
    },
    testReq: function () {
      Axios.post('/api/test')
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>
.level-screening {
  padding-left: 40px;
  box-sizing: border-box;
  height: 120px;
  text-align: left;
  line-height: 80px;
}

.level-screening .el-button {
  border-color: #0085f4;
  background-color: #fff;
  color: #0085f4;
}

.level-screening .highlight {
  background-color: #8e66f6 !important;
  color: #fff;
}
</style>
