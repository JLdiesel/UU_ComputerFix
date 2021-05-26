<template>
  <div class="w">
    <div class="Encyclopedia-banner">
      <div class="left">&nbsp; &nbsp;教程百科</div>
      <div class="behind-left">电脑维修常见问题以及解决方法</div>
      <div class="middle"></div>
      <div class="right">
        一共发布
        <span class="count">{{ count }}</span>
        篇文章
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
      return this.$store.state.articleCount;
    },
  },
};
</script>

<style scoped>
.Encyclopedia-banner {
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