<template>
  <div class="w">
    <div class="register-banner">
      <div class="left">&nbsp; &nbsp;</div>
      <div class="middle">
        我有账号，去<router-link to="/login"><a>登录</a></router-link>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "registerBanner",
  data() {
    return {};
  },
};
</script>

<style scoped>
.register-banner {
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