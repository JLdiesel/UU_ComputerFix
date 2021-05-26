<template>
  <div class="order-main w">
    <div class="order-form">
      <form action="">
        <ul>
          <li>
            姓名: &nbsp;<el-input
              class="name"
              v-model="name"
              autosize
              placeholder="姓名"
            ></el-input>
          </li>
          <li>
            手机: &nbsp;<el-input
              class="name"
              v-model="phoneNum"
              autosize
              placeholder="手机号码"
            ></el-input>
            <button type="button" @click="changePhone">使用当前手机</button>
          </li>

          <li>
            地址: &nbsp;<el-input v-model="address" placeholder="地址">
            </el-input>
          </li>
          <li>
            问题: &nbsp;<el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </li>
          <li>
            问题描述：<el-input
              type="textarea"
              autosize
              placeholder="请输入内容"
              v-model="textarea1"
            >
            </el-input>
          </li>
          <li>基础服务费：{{ price }}¥ (根据实际维修难度可能需适当补款)</li>
          <li>
            <el-button type="primary" class="btn" plain @click="addOrder"
              >提交订单</el-button
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
      options: [
        {
          value: "1",
          label: "优化加速",
        },
        {
          value: "2",
          label: "游戏问题",
        },
        {
          value: "3",
          label: "网络问题",
        },
        {
          value: "4",
          label: "系统故障",
        },
        {
          value: "5",
          label: "软件应用",
        },
        {
          value: "6",
          label: "数据恢复",
        },
        {
          value: "7",
          label: "重装系统",
        },
        {
          value: "8",
          label: "其他问题",
        },
      ],
      label: "",
      value: "",
      address: "",
      ID: "",
      name: "",
      textarea1: "",
      price: 5,
      phoneNum: "",
      data: this.getdate(),
    };
  },

  methods: {
    changePhone() {
      this.phoneNum = JSON.parse(localStorage.getItem("defaultPhone"));
    },
    getdate() {
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();

      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
    addOrder() {
      //判断字段是否为空
      if (!localStorage.getItem("defaultPhone")) {
        alert("请先登录");
        this.$router.push("/mine");
      } else if (
        this.value &&
        this.address &&
        this.name &&
        this.phoneNum &&
        this.textarea1
      ) {
        //添加订单
        axios({
          type: "post",
          url: `/api/ComputerClinic/addorder?name=${this.name}&phone=${
            this.phoneNum
          }&address=${this.address}&qtype=${
            this.options[this.value - 1].label
          }&qdesc=${this.textarea1}&data=${this.data}&price=${this.price}`,
        }).then(
          (res) => {
            //跳转到我的页面
            this.$router.push("/mine");
          },
          (err) => {
            console.log(err);
          }
        );
      } else {
        alert("无法提交空字段，请填写完整表单");
      }
    },
  },
};
</script>

<style scoped>
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
.name,
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
  background-color: #c81623;
  font-size: 14px;
  color: #ffffff;
  margin: 30px 0 0 70px;
}
</style>