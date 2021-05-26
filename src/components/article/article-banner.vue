<template>
  <div class="w">
    <div class="article-banner">
      <div class="left">
        <router-link to="/"><a href="">>首页</a></router-link>
        <router-link to="/about"
          ><a href="">->技术教程->硬件设备-></a></router-link
        >
        Win10怎么看电脑显卡型号|电脑怎么看显卡参数
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EncyclopediaBanner",
  data() {
    return {};
  },
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style scoped>
.article-banner {
  display: flex;
  height: 52px;
  font-size: 15px;
  align-items: center;
  padding-left: 15px;
}
.left {
  color: #666;
  text-decoration: none;
}
.left a:hover {
  color: #409eff;
}
</style>