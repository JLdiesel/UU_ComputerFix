<template>
  <div class="order-main w">
    <div class="order-form">
      <form action="">
        <ul>
          <li>服务费：{{ price }}¥ (根据实际维修难度可能需适当补款)</li>
          <li>
            支付方式: &nbsp;<el-select v-model="pay" placeholder="请选择">
              <el-option
                v-for="item in payItem"
                :key="item.id"
                :label="item.item"
                :value="item.id"
              >
              </el-option>
            </el-select>
          </li>
          <li>请扫码支付:</li>
          <li><img src="~img/zhifu.jpg" alt="" /></li>

          <li>
            <el-button @click="payIt" type="primary" class="btn" plain
              >支付完成，点击查看订单</el-button
            >
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "orderMain",
  data() {
    return {
      payItem: [
        {
          id: "1",
          item: "支付宝",
        },
        {
          id: "2",
          item: "微信",
        },
        {
          id: "3",
          item: "银行卡",
        },
      ],
      pay: "",
      id: this.$route.query.id,
      price: 5,
    };
  },
  methods: {
    payIt() {
      console.log(this.id);
      axios({
        type: "post",
        url: `/api/ComputerClinic/ispay?id=${this.id}`,
      }).then((res) => {
        this.$router.push("/mine");
      });
    },
  },
};
</script>

<style scoped >
.order-main {
  height: 522px;
  border: 1px solid #ccc;
  margin-top: 20px;
}
.order-form {
  width: 600px;
  margin: 50px auto;
}
.order-form ul {
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: space-around;
}
.order-form ul li {
  margin-top: 15px;
}
img {
  width: 200px;
  height: 200px;
}
.el-input__inner {
  width: 242px;
  height: 37px;
  border: 1px solid #ececec;
}
.inp {
  width: 242px;
  height: 37px;
  border: 1px solid #ececec;
}
.btn {
  width: 200px;
  height: 34px;
  font-size: 14px;
  margin: 30px 0 0 70px;
}
</style>