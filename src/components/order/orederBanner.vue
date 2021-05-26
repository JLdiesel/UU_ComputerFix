<template>
  <div class="w">
    <div class="order-banner">
      <div class="left">&nbsp; &nbsp;订单页面</div>
      <div class="middle"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "orderBanner",
  data() {
    return {};
  },
};
</script>

<style scoped>
.order-banner {
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