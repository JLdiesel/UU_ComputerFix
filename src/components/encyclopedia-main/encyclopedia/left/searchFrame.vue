<template>
  <div class="searchFrame">
    <ul class="subNav">
      <li>文献分类：</li>
      <li v-for="(item, index) in problem" :key="index">
        <a
          :class="index === choiced ? 'changered' : null"
          @click="choice(index)"
          >{{ item }}</a
        >
      </li>
    </ul>
    <div class="searchBar">
      <form action="/article/search" method="get">
        <input
          type="search"
          placeholder="搜索"
          id="searchTxt"
          name="keyword"
          value=""
        />
        <button type="submit" id="searchSubmit" value=""></button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchFrame",
  data() {
    return {
      problem: ["全部", "硬件设备", "软件故障", "系统问题"],
      choiced: 0,
    };
  },
  methods: {
    choice(index) {
      this.choiced = index;
    },
  },
};
</script>

<style scoped>
.searchFrame {
  position: relative;
  background-color: #fff;
  width: 810px;
  height: 78px;
  left: 25vh;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  border-bottom: 1px dotted rgb(212, 207, 207);
}
.subNav {
  display: flex;
}
.subNav li {
  padding: 5px;
}
.changered {
  color: #46a6f6;
}
.subNav li > a:hover {
  color: #46a6f6;
  border-bottom: 1px solid #46a6f6;
  transition: all 0.2s;
}
.searchBar {
  position: absolute;
  right: 40px;
}
#searchTxt {
  width: 266px;
  height: 31px;
  border: 1px solid #ddd;
  border-right: transparent;
}
input {
  padding-left: 10px;
}
#searchSubmit {
  position: absolute;
  width: 28px;
  height: 31px;
  background-color: black;
  background: url(src/assets/images/searchSubmit.png) no-repeat center;
  border: 1px solid #ddd;
  border-left: 1px solid transparent;
}
</style>