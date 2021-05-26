<template>
  <div class="w">
    <div class="main-banner">
      <div class="left">&nbsp; &nbsp;远程维修</div>
      <div class="behind-left">选择维修类型,专家远程</div>
      <div class="middle"></div>
      <div class="right">
        累计远程
        <span class="count">{{ fixCount }}</span>
        次维修服务
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBanner",
  data() {
    return {
      fixCount: 999,
    };
  },
};
</script>
<style scoped>
.main-banner {
  display: flex;
  height: 52px;
  font-size: 18px;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f7fb;
}
.left {
  color: black;
  border-left: 3px solid skyblue;
}
.behind-left {
  font-size: 16px;
  padding-left: 20px;
  color: #b5b5b5;
}
.middle {
  flex: 1;
}
.right {
  font-size: 16px;
  color: #b5b5b5;
}
.count {
  font-size: 18px;
  color: black;
}
</style>