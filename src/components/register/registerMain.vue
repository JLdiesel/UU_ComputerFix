<template>
  <div class="register-main w">
    <div class="registerarea">
      <div class="reg_form">
        <form action="">
          <ul>
            <li>
              <label for="">手机号：</label
              ><input
                type="phone"
                class="inp"
                v-model="iphone"
                @focus="reErr"
              />
              <span v-show="!testPhone" class="error">
                手机号码格式不正确，请重新输入</span
              ><span style="color: red">{{ err }}</span>
              <!-- <span v-show="testPhone" class="success">手机号码格式正确</span> -->
            </li>

            <li>
              <label for="">登录密码：</label
              ><input
                type="password"
                class="inp"
                v-model="apassword"
                autocomplete="off"
              />
              <span v-show="!testPassword" class="error">
                必须包含字母和数字且在6-18位之间</span
              >
              <!-- <span v-show="testPassword" class="success">密码格式正确</span> -->
            </li>

            <li>
              <label for="">确认密码：</label
              ><input
                type="password"
                class="inp"
                v-model="sure"
                autocomplete="off"
              />
              <span class="error" v-show="sure !== apassword"> 密码不同</span>
            </li>
            <li class="agree">
              <input type="checkbox" />同意协议并注册
              <a href="">查看用户协议</a>
            </li>
            <li>
              <input
                type="button"
                value="完成注册"
                class="btn"
                @click="verfitycation"
              />
            </li>
          </ul>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
let phone = /0?(13|14|15|18|17|19)[0-9]{9}/;
let password = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
export default {
  name: "register-main",
  data() {
    return {
      iphone: "",
      apassword: "",
      sure: "",
      err: "",
    };
  },
  methods: {
    verfitycation() {
      if (this.testPhone && this.testPassword && this.sure === this.apassword) {
        axios({
          type: "post",
          url: `/api/ComputerClinic/register?phone=${this.iphone}&password=${this.apassword}`,
        }).then((res) => {
          // this.orderList[index].isdo = "1";
          if (res.data === "success") {
            alert("注册成功，请登录");
            this.$router.push("/login");
          } else {
            this.err = res.data;
          }
        });
      } else {
        console.log("失败");
      }
    },
    reErr() {
      this.err = "";
    },
  },
  computed: {
    testPhone() {
      return phone.test(this.iphone);
    },
    testPassword() {
      return password.test(this.apassword);
    },
  },
};
</script>

<style scoped>
.registerarea {
  height: 522px;
  border: 1px solid #ccc;
  margin-top: 20px;
}
.registerarea h3 {
  height: 42px;
  border-bottom: 1px solid #ccc;
  background-color: #ececec;
  line-height: 42px;
  padding: 0 10px;
  font-size: 18px;
  font-weight: 400;
}
.login {
  float: right;
  font-size: 14px;
}
.login a {
  color: #c81523;
}
.reg_form {
  width: 600px;
  margin: 50px auto 0;
}
.reg_form ul li {
  width: 1000px;
  margin-bottom: 20px;
}
.reg_form ul li label {
  display: inline-block;
  width: 88px;
  text-align: right;
}
.reg_form ul li .inp {
  width: 242px;
  height: 37px;
  border: 1px solid #ececec;
}
.error {
  color: red;
}
.success {
  color: green;
}

.safe {
  padding-left: 175px;
}
.safe em {
  color: #ffffff;
  padding: 0 12px;
}
.ruo {
  background-color: red;
}
.zhong {
  background-color: yellow;
}
.qiang {
  background-color: green;
}
.agree {
  padding-left: 95px;
}
.agree input {
  vertical-align: middle;
}
.agree a {
  color: #1ba1e6;
}
.btn {
  width: 200px;
  height: 34px;
  background-color: #c81623;
  font-size: 14px;
  color: #ffffff;
  margin: 30px 0 0 70px;
}
.mod_copyright {
  text-align: center;
  padding-top: 20px;
}
.links {
  margin-bottom: 15px;
}
.links a {
  margin: 0 3px;
}
.copyright {
  line-height: 20px;
}
</style>