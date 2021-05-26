<template>
  <!-- banner模块 -->
  <div class="banner">
    <div class="left">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      ></el-avatar
      >客服二号为你服务
    </div>
    <ul class="banner-right">
      <router-link to="/"
        ><el-button type="primary">结束沟通返回首页</el-button></router-link
      >
    </ul>
  </div>
</template>

<script>
export default {
  name: "askBanner",
};
</script>

<style scoped>

/* flex布局 设置高度 给横幅添加一个1px的下边框   */
.banner {

  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  height: 50px;
}
.el-button {
  border: 1px solid #fff;
}
</style>