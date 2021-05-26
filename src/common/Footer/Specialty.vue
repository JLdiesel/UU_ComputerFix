<template>
  <div class="specialty">
    <div class="w">
      <ul>
        <li>
          <img src="~img/s1.png" alt="" />
          <div>
            <h4>明码标价</h4>

            <div>付款后维修，问题若无法解决，全额退款</div>
          </div>
        </li>

        <li>
          <img src="~img/s2.png" alt="" />
          <div>
            <h4>极速维修</h4>
            <div>付款后，技术员30分钟内联系您维修</div>
          </div>
        </li>

        <li>
          <img src="~img/s3.png" alt="" />
          <div>
            <h4>7天保障</h4>
            <div>同一故障点7天内免费保修，满意为止</div>
          </div>
        </li>

        <li>
          <img src="~img/s4.png" alt="" />
          <div>
            <h4>技术支持</h4>
            <div>加入售后QQ群，将获得免费技术支持</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "specialty",
};
</script>

<style scoped>
.specialty {
  width: 100vw;
  height: 130px;
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
li > img {
  width: 90px;
  height: 90px;
}
.w ul li {
  display: flex;
  align-items: center;
}
img + div {
  display: flex;
  flex-direction: column;
}
h4 + div {
  color: #808284;
}
h4 {
  color: #424142;
}
</style>