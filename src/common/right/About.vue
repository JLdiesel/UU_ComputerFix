<template>
  <div class="right-about">
    <div>推荐文献</div>
    <div>
      <ul>
        <li>1.IE浏览器Flash插件怎么启用|IE Flash 设置在哪里</li>
        <li>2.机箱风扇噪音大怎么处理|主机风扇声音大怎么办</li>
        <li>3.Win10系统怎么卸载软件|两个卸载win10软件方法</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "aboutArticle",
};
</script>

<style>
.right-about {
  position: absolute;
  right: 22vh;
  width: 337px;
  font-size: 15px;
  padding: 15px;
  background-color: #fff;
  top: 0;
}
.right-about div:first-child {
  flex: 1;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 1px solid rgb(212, 207, 207);
}
.right-about ul {
  margin: 0;
  padding: 0;
}
.right-about ul li {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 5px;
  border-bottom: 1px solid rgb(212, 207, 207);
}
</style>