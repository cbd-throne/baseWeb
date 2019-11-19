<template lang="pug">
    main.center.bg
        a-form(:form="loginForm")
            a-form-item(label="邮箱", v-bind="layout")
                a-input( v-decorator="['email', {rules: [{ required: true, message: '请输入邮箱'}] }]", placeholder="请输入邮箱")
            a-form-item(label="密码", v-bind="layout")
                a-input-password( v-decorator="['pwd', {rules: [{ required: true, message: '请输入密码'}]}]", placeholder="请输入密码")
            a-form-item.flexSpace
                a-button.mr20(type="primary", @click="handleSubmit('login')") 登录
                a-button(type="primary", @click="handleSubmit('signin')") 注册
    span  假装有表单
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Login extends Vue {
  loginForm: any;
  layout = {
    labelCol: {
      xs: {
        span: 4
      }
    },
    wrapperCol: {
      xs: {
        span: 18,
        offset: 1
      }
    }
  };

  beforeCreate() {
    this.loginForm = this.$form.createForm(this);
  }
  handleSubmit(handleType: "login" | "signin") {
    console.log(handleType);
    this.loginForm.validateFields((err: string, values: object) => {
      if (!err) {
        // 登录
        if (handleType == "login") {
          this.$http.post("/api/user/create", values).then(res => {
            console.log(res);
          });
        }
        // 注册
        if (handleType == "signin") {
          this.$http.post("/api/user/create", values).then(res => {
            console.log(res);
          });
        }
      }
    });
  }
}
</script>

<style lang="less" scoped>
.center {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg {
  background: url("../assets/moca.jpg") no-repeat center center;
  background-size: cover;
}

.ant-form {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  opacity: 0.8;
}

.flexSpace {
  display: flex;
  justify-content: space-between;
}

.mr20 {
  margin-right: 20px;
}

h3 {
  text-align: center;
  font-size: 25px;
}
</style>
