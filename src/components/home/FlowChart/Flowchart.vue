<template>
  <div class="flowchart">
    <div class="w">
      <ul>
        <li>
          <img src="~img/lc1.jpg" alt="" />
          <div>1.在线下单</div>
        </li>
        <div>></div>
        <li>
          <img src="~img/lc2.jpg" alt="" />
          <div>2.客服确认</div>
        </li>
        <div>></div>

        <li>
          <img src="~img/lc3.jpg" alt="" />
          <div>3.远程修复/上门修复</div>
        </li>
        <div>></div>

        <li>
          <img src="~img/lc4.jpg" alt="" />
          <div>4.服务评价</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Flowchart",
};
</script>

<style scoped>
.flowchart {
  width: 100vw;
  height: 100px;
  background-color: #fff;
}

.w > ul {
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  color: black;
  font-size: 20px;
}
li + div {
  font-size: 30px;
  color: #b5b5b5;
}
</style>