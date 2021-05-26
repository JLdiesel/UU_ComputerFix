<template>
  <div class="w">
    <div class="pay-banner">
      <div class="left">&nbsp; &nbsp;支付页面</div>
      <div class="middle"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "payBanner",
  data() {
    return {};
  },
};
</script>

<style scoped>
.pay-banner {
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

.middle {
  color: #b5b5b5;
  font-size: 14px;
  margin-top: 5px;
  padding-left: 10px;
  flex: 1;
}
.right {
  font-size: 16px;
  color: #b5b5b5;
}
</style>