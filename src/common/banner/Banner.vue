<template>
  <div class="top">
    <div class="w">
      <!-- banner模块 -->
      <div class="banner">
        <router-link to="/">
          <a href=""> <img class="logo" src="~img/logo.png" /></a
        ></router-link>
        <div class="center"></div>
        <ul class="banner-right">
          <router-link to="/"
            ><li><a>首页</a></li></router-link
          >
          <router-link to="/about"
            ><li><a>技术教程</a></li></router-link
          >
          <router-link to="/mine"
            ><li><a href="">我的</a></li></router-link
          >
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
/* 设置横幅背景颜色 */
.top {
  width: 100vw;
  background-color: #fff;
}
/* flex布局 设置高度 给横幅添加一个1px的下边框   */
.banner {
  display: flex;
  height: 50px;
  border-bottom: 1px solid #f6f7fb;
}
.logo {
  height: 50px;
}
.center {
  flex-grow: 1;
}
.banner-right {
  display: flex;
}
.banner-right a {
  margin-left: 60px;
}
/* 鼠标经过li时字体变蓝 变化出现2px的下边框 */
.banner-right li:hover a {
  border-bottom: 2px solid #1d98ff;
  color: #1d98ff;
  transition: all 0.2s;
}
</style>