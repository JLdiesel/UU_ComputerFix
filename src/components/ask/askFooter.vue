<template>
  <div class="footer">
    <div class="emojy">
      <div class="el-icon-star-on">表情</div>
      <div class="el-icon-folder">文件</div>
      <div class="el-icon-picture">图片</div>
    </div>

    <el-input
      type="textarea"
      :rows="7"
      placeholder="请输入内容"
      v-model="textarea"
      style="
        min-height: 33px;
        margin-top: 0px;
        margin-bottom: 0px;
        height: 160px;
      "
    >
    </el-input>

    <el-button> 发送</el-button>
  </div>
</template>

<script>
export default {
  name: "askFooter",
  data() {
    return {
      textarea: "",
    };
  },
};
</script>

<style scoped>
.emojy {
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  background-color: skyblue;
}
.emojy div {
  margin-left: 20px;
}
.footer {
  position: relative;
}
.el-button {
  position: absolute;
  right: 0;
  top: 100px;
}
.session {
  height: 100px;
  background-color: #fff;
}
</style>