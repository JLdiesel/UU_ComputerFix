<template>
  <div class="login-main w">
    <div class="login-form">
      <form action="" method="post">
        <ul>
          <li>
            手机号：<input
              type="phone"
              class="inp"
              name="phoneNun"
              id="phoneNun"
              v-model="phoneNum"
            />
          </li>
          <li>
            密码：<input
              type="password"
              class="inp"
              name="password"
              id="password"
              v-model="password"
              autocomplete="off"
            />
          </li>
          <div style="color: red">{{ err }}</div>
          <li>
            <input type="button" class="btn" value="登录" @click="verify" />
          </li>
        </ul>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "loginMain",
  data() {
    return {
      // phoneNum: "",
      password: "",
      err: "",
      phoneNum: "",
    };
  },
  methods: {
    verify() {
      if (this.phoneNum === "" || this.password === "") {
        alert("手机或密码不能为空");
      } else {
        axios({
          type: "post",
          url: `/api/ComputerClinic/login?phone=${this.phoneNum}&password=${this.password}`,
        }).then(
          (res) => {
            console.log(res.data);
            //请求成功后通知更新状态
            switch (res.data) {
              case "success":
                this.$store.commit("setPhone", this.phoneNum);
                alert("登录成功");

                this.$router.push("/mine");

                break;
              case 1:
                this.err = "用户名不能为空";
                break;
              case 2:
                this.err = "密码不能为空";

                break;
              case 3:
                this.err = "用户名不存在";

                break;
              case 4:
                this.err = "密码错误";
                break;
            }
          },
          (err) => {
            console.log(err);
          }
        );
      }
    },
  },
};
</script>

<style scoped>
.login-main {
  height: 522px;
  border: 1px solid #ccc;
  margin-top: 20px;
}
.login-form {
  width: 600px;
  margin: 50px auto 0;
}
.login-form ul {
  height: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
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