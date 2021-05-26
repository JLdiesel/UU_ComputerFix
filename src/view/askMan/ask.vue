<template>
  <div>
    <el-container class="ask-all">
      <el-header>
        <AskBanner />
      </el-header>
      <el-container class="main">
        <el-container class="main-left">
          <el-main><ask-main /></el-main>
          <el-footer style="height: 200px"><ask-footer /></el-footer>
        </el-container>
        <el-aside style="width: 200px"
          ><div>
            <div>
              <img
                id="kefuIcon"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                alt=""
              />
            </div>
            <div>UU客服欢迎你!!</div>
          </div></el-aside
        >
      </el-container>
    </el-container>
  </div>
</template>

<script>
import AskBanner from "components/ask/askBanner.vue";
import AskFooter from "../../components/ask/askFooter.vue";
import AskMain from "../../components/ask/askMain.vue";
export default {
  components: { AskBanner, AskFooter, AskMain },
};
</script>

<style scoped>
.ask-all {
  height: 100vh;
}
.el-header {
  background-color: #409eff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-footer {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 80px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 800px;
}

.el-main {
  overflow: hidden;
  flex: auto;
  background-color: #fff;
  color: #333;
  text-align: center;
}

.el-container {
  height: 100vh;
}

.main {
  background-color: #fff;
  line-height: 260px;
}
</style>
