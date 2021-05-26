<template>
  <div>
    <div class="middle">
      <ul class="kefu">
        <li class="session-main">
          <span
            ><img
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              alt=""
            />
            客服小二：</span
          >
          <span class="result">您好，有什么问题吗</span>
        </li>
        <li class="session-main">
          <span
            ><img
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              alt=""
            />
            客服小二：</span
          >
          <span class="result">您好，有什么问题吗</span>
        </li>
      </ul>
      <ul class="user">
        <li class="session-main"></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "askMain",
};
</script>

<style>
.kefu {
  position: absolute;
  left: 0;
}
.user {
  position: absolute;
  right: 180px;
}
.middle ul {
  display: flex;
  flex-direction: column;
}
.middle ul li {
  display: flex;
  text-align: left;
  flex-direction: column;
}
.session-main {
  margin-bottom: 20px;
}
span {
  line-height: 30px;
}
li span img {
  width: 40px;
}

.result {
  padding-left: 28px;
}
</style>