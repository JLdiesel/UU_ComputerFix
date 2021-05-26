<template>
  <div class="mine-main w">
    <div class="w">
      <div class="Encyclopedia-banner">
        <div class="left">&nbsp; &nbsp;我的订单</div>
        <div class="middle">
          查看订单状态，快速解决电脑问题 &nbsp;&nbsp;&nbsp;<a
            v-show="phoneNum"
            @click="outLogin"
            style="font-size: 18px"
            >退出登录</a
          >
        </div>
        <div class="right">
          <router-link to="/changepw"
            ><a style="font-size: 18px" v-show="phoneNum"
              >修改密码&nbsp;&nbsp;&nbsp;&nbsp;</a
            ></router-link
          >
          当前订单数
          <span class="count">{{ orderList.length }}</span>
        </div>
      </div>
    </div>
    <div class="order-nologin" v-show="!phoneNum">
      <div>
        您还未登录，请先<router-link to="/login"><a>登录</a></router-link>
      </div>
      <div>
        还未拥有账号？点击<router-link to="/register"><a>注册</a></router-link>
      </div>
    </div>

    <div class="order-nologin" v-show="phoneNum && orderList.length === 0">
      <div>暂无订单信息</div>
      <div>
        点击<router-link to="/"><a>立马保修</a></router-link>
      </div>
    </div>
    <div class="tableOrder" v-show="orderList.length">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>订单类型</th>
            <th>订单日期</th>
            <th>地址</th>
            <th>支付价格</th>
            <th>订单状态</th>
            <th>操作</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(item, index) in orderList" :key="item.id">
            <td>{{ item.Id }}</td>
            <td>{{ item.qtype }}</td>
            <td>{{ item.data }}</td>
            <td>{{ item.address }}</td>
            <td>
              {{
                item.ispay.trim() === "0"
                  ? "未支付"
                  : "已支付" + item.price * 1 + "元"
              }}
              <button @click="goPay(index)" v-show="item.ispay.trim() === '0'">
                去支付
              </button>
            </td>
            <td>
              {{ item.isdo.trim() === "0" ? "未完成" : "已完成" }}
              <button @click="changeClick(index)">状态更改</button>
            </td>

            <td><button @dblclick="removeClick(index)">删除订单</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mine-foot">
      温馨提示：远程服务可享受7天保障（7天内同一台电脑同一故障复现，可以享受免费再次调试）。付款订单将会在3天后自动确认完成，
      维修完成后请及时给予技术员服务评价，你的反馈及鼓励是我们前进的最大动力！
      <router-link to="/ask"><a href="">客服咨询</a></router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  name: "mineMain1",
  data() {
    return {
      orderList: [],
      phoneNum: JSON.parse(localStorage.getItem("defaultPhone")),
    };
  },

  beforeCreate() {
    //在页面创建之前请求当前手机号下现有的订单列表
    axios({
      type: "post",
      url: `/api/ComputerClinic/order?phone=${JSON.parse(
        localStorage.getItem("defaultPhone")
      )}`,
    }).then(
      (res) => {
        // console.log(JSON.parse(res.data[0]));
        let jsonArr = res.data;
        jsonArr.map((item) => {
          this.orderList.push(JSON.parse(item));
        });

        // console.log((jsonArr));
      },
      (err) => {
        console.log(err);
      }
    );
  },

  methods: {
    outLogin() {
      //删除localstorage然后刷新界面
      localStorage.removeItem("defaultPhone");
      location.reload();
    },
    goPay(index) {
      //点击后去支付页面并传入query参数id
      this.$router.push({
        path: "/pay",
        query: { id: this.orderList[index].Id },
      });
    },
    changeClick(index) {
      // 传入id 0/1更改订单完成状态
      console.log(this.orderList[index].isdo.trim());
      axios({
        type: "post",
        url: `/api/ComputerClinic/updateisdo?id=${
          this.orderList[index].Id
        }&isdo=${this.orderList[index].isdo.trim() === "0" ? "1" : "0"}`,
      }).then((res) => {
        // this.orderList[index].isdo = "1";
        this.orderList[index].isdo =
          this.orderList[index].isdo.trim() === "0" ? "1" : "0";
      });
    },
    removeClick(index) {
      if (confirm("是否要删除订单")) {
        //删除
        axios({
          type: "post",
          url: `/api/ComputerClinic/delete?id=${this.orderList[index].Id}`,
        }).then((res) => {
          this.orderList.splice(index, 1);
        });
      }
    },
  },
};
</script>

<style scoped>
.Encyclopedia-banner {
  display: flex;
  height: 52px;
  font-size: 18px;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f7fb;
}
.left {
  color: black;
  border-left: 3px solid skyblue;
}
.behind-left {
  font-size: 16px;
  padding-left: 20px;
  color: #b5b5b5;
}
.middle {
  color: #b5b5b5;
  font-size: 14px;
  margin-top: 5px;
  padding-left: 10px;
  flex: 1;
}
.right {
  font-size: 16px;
  color: #b5b5b5;
}
.count {
  font-size: 18px;
  color: black;
}
.mine-main {
  height: 60vh;
}
.order-nologin {
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fff;
  height: 20vh;
}
.order-nologin a {
  color: #1d98ff;
  text-decoration: underline;
}

.tableOrder {
  background-color: #fff;
  overflow: scroll;
  /* overflow-y: auto; */
  height: 40vh;
}

table {
  width: 100%;
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
}

th,
td {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: center;
}

th {
  background-color: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
}
.mine-foot {
  margin-top: 20px;
  color: #999;
  background-color: #fff;
  padding: 0;
  line-height: 40px;
}
.mine-foot a {
  color: #1d98ff;
  text-decoration: underline;
}
</style>