<template>
  <div class="hot-article">
    <div>热门文献</div>
    <div>
      <ul>
        <li v-for="(item, index) in List" :key="index">
          <router-link to="/article"
            ><a href="">{{ index }}.{{ item }}</a>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "hotArticle",
  data() {
    return {
      List: {
        1: "Win10开自带FPS显示 | Xbox Game Bar实时显示帧数方法",
        2: "新版MicrosoftEdge怎么设置默认搜索引擎 | Edge添加搜索引擎",
        3: "Win10运行DNF全屏后黑屏怎么办 | DNF全屏后黑屏解决方法",
        4: "系统蓝屏代码大全 | 所有电脑蓝屏代码大汇总",
        5: "为什么Windows无法访问U盘 | 电脑U盘被拒绝访问",
        6: "AMD显卡驱动怎么设置 | AMD显卡驱动设置高性能图文教程",
        7: "Win10怎么看电脑显卡型号 | 电脑怎么看显卡参数",
        8: "Win10此电脑怎么放在桌面上 | Win10显示桌面图标在哪里设置",
        9: "打印机正常但无法打印 | 打印机连接正常打印没反应",
        10: "Win10关机风扇还在转 | 解决win10关机后风扇继",
      },
    };
  },
};
</script>

<style>
.hot-article {
  position: absolute;
  font-size: 15px;
  padding: 15px;
  width: 337px;

  background-color: #fff;
  top: 150px;
  right: 22vh;
}
.hot-article div:first-child {
  flex: 1;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(212, 207, 207);
}
.hot-article ul {
  margin: 0;
  padding: 0;
}
.hot-article ul li {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 5px;
  border-bottom: 1px solid rgb(212, 207, 207);
}
</style>