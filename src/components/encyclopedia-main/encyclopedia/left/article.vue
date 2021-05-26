<template>
  <div class="articleList">
    <ul>
      <li>
        <router-link to="/article"
          ><div class="img"><img src="~img/case.png" alt="" /></div
        ></router-link>

        <!-- <div class="img"><solt name="image"></solt></div> -->
        <div class="inner-text">
          <h2 class="question">
            <router-link to="/article"
              ><a href=""
                >Win10怎么看电脑显卡型号|电脑怎么看显卡参数</a
              ></router-link
            >
          </h2>
          <div>
            <span class="read-times">4156 阅读</span>
            <span class="main-question">
              新买的电脑除了要看CPU、内存、硬盘等重要的设备信息，对于游戏爱好者来说，最重要的就是显卡配置了，那怎么看显卡型号？这篇文章是UU诊所给大家带来的Win10查看显卡型号方法教程。</span
            >
          </div>
        </div>
      </li>
      <li>
        <router-link to="/article"
          ><div class="img"><img src="~img/case.png" alt="" /></div
        ></router-link>
        <!-- <div class="img"><solt name="image"></solt></div> -->
        <div class="inner-text">
          <h2 class="question">
            <router-link to="/article"
              ><a href=""
                >Win10怎么看电脑显卡型号|电脑怎么看显卡参数</a
              ></router-link
            >
          </h2>
          <div>
            <span class="read-times">4156 阅读</span>
            <span class="main-question">
              新买的电脑除了要看CPU、内存、硬盘等重要的设备信息，对于游戏爱好者来说，最重要的就是显卡配置了，那怎么看显卡型号？这篇文章是UU诊所给大家带来的Win10查看显卡型号方法教程。</span
            >
          </div>
        </div>
      </li>
      <li>
        <router-link to="/article"
          ><div class="img"><img src="~img/case.png" alt="" /></div
        ></router-link>
        <!-- <div class="img"><solt name="image"></solt></div> -->
        <div class="inner-text">
          <h2 class="question">
            <router-link to="/article"
              ><a href=""
                >Win10怎么看电脑显卡型号|电脑怎么看显卡参数</a
              ></router-link
            >
          </h2>
          <div>
            <span class="read-times">4156 阅读</span>
            <span class="main-question">
              新买的电脑除了要看CPU、内存、硬盘等重要的设备信息，对于游戏爱好者来说，最重要的就是显卡配置了，那怎么看显卡型号？这篇文章是UU诊所给大家带来的Win10查看显卡型号方法教程。</span
            >
          </div>
        </div>
      </li>
      <li>
        <router-link to="/article"
          ><div class="img"><img src="~img/case.png" alt="" /></div
        ></router-link>
        <!-- <div class="img"><solt name="image"></solt></div> -->
        <div class="inner-text">
          <h2 class="question">
            <router-link to="/article"
              ><a href=""
                >Win10怎么看电脑显卡型号|电脑怎么看显卡参数</a
              ></router-link
            >
          </h2>
          <div>
            <span class="read-times">4156 阅读</span>
            <span class="main-question">
              新买的电脑除了要看CPU、内存、硬盘等重要的设备信息，对于游戏爱好者来说，最重要的就是显卡配置了，那怎么看显卡型号？这篇文章是UU诊所给大家带来的Win10查看显卡型号方法教程。</span
            >
          </div>
        </div>
      </li>
      <li>
        <router-link to="/article"
          ><div class="img"><img src="~img/case.png" alt="" /></div
        ></router-link>
        <!-- <div class="img"><solt name="image"></solt></div> -->
        <div class="inner-text">
          <h2 class="question">
            <router-link to="/article"
              ><a href=""
                >Win10怎么看电脑显卡型号|电脑怎么看显卡参数</a
              ></router-link
            >
          </h2>
          <div>
            <span class="read-times">4156 阅读</span>
            <span class="main-question">
              新买的电脑除了要看CPU、内存、硬盘等重要的设备信息，对于游戏爱好者来说，最重要的就是显卡配置了，那怎么看显卡型号？这篇文章是UU诊所给大家带来的Win10查看显卡型号方法教程。</span
            >
          </div>
        </div>
      </li>
    </ul>
    <ul class="tab-bar">
      <li><span>«</span></li>
      <li
        v-for="(item, index) in pageList"
        @click="changePages(index)"
        :class="index === changePage ? 'on' : ''"
        :key="index"
      >
        {{ index + 1 }}
      </li>
      <li>»</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      pageList: ["page1", "page2", "page3"],
      changePage: 0,
    };
  },
  methods: {
    changePages(index) {
      this.changePage = index;
    },
  },
};
</script>

<style scoped>
.articleList {
  position: relative;
  background-color: #fff;
  top: 0;
  width: 810px;
  left: 25vh;
}
.articleList ul {
  margin: 0;
  padding: 0;
}
.articleList ul:first-child li {
  display: flex;
  border-bottom: 1px dotted rgb(212, 207, 207);
}
.question {
  font-size: 17px;
  color: #333;
}
.img img {
  width: 210px;
  height: 140px;
  padding: 16px;
}
.inner-text {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.read-times {
  font-size: 14px;
  padding: 3px;
  margin-left: 5px;
  text-align: center;
  background: #46a6f6;
  color: #fff;
}
.main-question {
  height: 30px;
  font-size: 14px;
  color: #888787;
}
.tab-bar {
  display: flex;
}
.tab-bar li {
  border: 1px solid rgb(212, 207, 207);
  margin: 8px 0px 8px 8px;
  align-items: center;
  text-align: center;
  padding: 5px;
  width: 15px;
}
.on {
  background: #46a6f6;
}
</style>