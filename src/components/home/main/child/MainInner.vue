<template>
  <div class="w">
    <div class="main-inner">
      <!-- 左边模块 -->
      <a href="" class="main-left"><img src="~img/zjyc.jpg" alt="" /></a>
      <!-- 右边模块 -->
      <div class="main-right">
        <ul>
          <li>
            <router-link to="/order"
              ><a href="" class="optimize">
                <img src="~img/icon/optimize.jpg" alt="" />
                <div>优化加速</div>
                <div class="describe">
                  <p>
                    <span>优化加速</span>
                  </p>
                  <div class="buyBtn">在线下单</div>
                </div>
              </a></router-link
            >
          </li>
          <li>
            <router-link to="/order">
              <a href="" class="game-problem">
                <img src="~img/icon/game-problem.jpg" alt="" />
                <div>游戏问题</div>

                <div class="describe">
                  <p>
                    <span>游戏问题</span>
                  </p>
                  <div class="buyBtn">在线下单</div>
                </div></a
              ></router-link
            >
          </li>
          <li>
            <router-link to="/order">
              <a href="" class="network-problem">
                <img src="~img/icon/network-problem.jpg" alt="" />
                <div>网络问题</div>
                <div class="describe">
                  <p>
                    <span>网络问题</span>
                  </p>
                  <div class="buyBtn">在线下单</div>
                </div>
              </a></router-link
            >
          </li>
          <li>
            <router-link to="/order">
              <a href="" class="system-err">
                <img src="~img/icon/system-err.jpg" alt="" />
                <div>系统故障</div>
                <div class="describe">
                  <p>
                    <span>电脑蓝屏</span>
                    <span>经常死机</span>
                    <span>电脑没声音</span>
                  </p>
                  <div class="buyBtn">在线下单</div>
                </div>
              </a></router-link
            >
          </li>
          <li>
            <router-link to="/order">
              <a href="" class="software">
                <img src="~img/icon/software.jpg" alt="" />
                <div>软件应用</div>
                <div class="describe">
                  <p>
                    <span>应用软件安装</span>
                    <span>特殊应用软件安装</span>
                  </p>
                  <div class="buyBtn">在线下单</div>
                </div>
              </a></router-link
            >
          </li>
          <li>
            <router-link to="/order">
              <a href="" class="date-recover">
                <img src="~img/icon/data-recover.jpg" alt="" />
                <div>数据恢复</div>
                <div class="describe">
                  <p>
                    <span>机械硬盘&lt;1T</span>
                    <span>机械硬盘≥1T</span>
                    <span>U盘&lt;32G</span>
                  </p>
                  <div class="buyBtn">在线下单</div>
                </div>
              </a></router-link
            >
          </li>
          <li>
            <router-link to="/order">
              <a href="" class="system-reset">
                <img src="~img/icon/system-reset.jpg" alt="" />
                <div>重装系统</div>
                <div class="describe">
                  <p>
                    <span>普通系统(能进桌面)</span>
                    <span>原版系统(能进桌面)</span>
                    <span>外星人笔记本(能进桌面)</span>
                  </p>
                  <div class="buyBtn">在线下单</div>
                </div>
              </a></router-link
            >
          </li>
          <li>
            <router-link to="/order">
              <a href="" class="another">
                <img src="~img/icon/game-problem.jpg" alt="" />
                <div>其他问题</div>
                <div class="describe">
                  <p>
                    <span>上门服务(不含维修费)</span>
                    <span>未知问题</span>
                    <span>打印机问题</span>
                  </p>
                  <div class="buyBtn">在线下单</div>
                </div>
              </a></router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainInner",
};
</script>

<style scoped>
/* flex布局 */
.main-inner {
  display: flex;
  height: 390px;
}
/* 超出ul宽度自动换行 */
.main-right > ul {
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
}
/* flex布局打造界面 */
.main-right > ul li {
  position: relative;
  overflow: hidden;
  text-align: center;
  height: 193px;
  width: 198px;
  background-color: #fff;
  cursor: pointer;
  border: 1px solid #f6f7fb;
}
.describe {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 193px;
  width: 198px;
  top: 194px;
  left: 0;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  transition: all 0.25s;
}
.main-right > ul li:hover .describe {
  top: 0;
}
.describe p {
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
}
.buyBtn {
  border: 1px solid #fff;
}
</style>