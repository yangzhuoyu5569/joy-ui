<template>
  <div class="login-page">
    <div class="login-area">
      <div class="login-header">
        <img class="logo" src="data:image/png;base64,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">
        <div class="text">倬裕科技</div>
      </div>
      <div class="login-body">
        <el-form ref="loginForm" :model="form" :rules="loginRules">
          <el-form-item prop="account">
            <el-input v-model="form.account" placeholder="请输入用户名" prefix-icon="el-icon-search"></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input v-model="form.password" placeholder="请输入密码" show-password prefix-icon="el-icon-search"></el-input>
          </el-form-item>

          <el-form-item prop="captcha">
            <div class="items-input">
              <el-input v-model="form.captcha" placeholder="请输入验证码" prefix-icon="el-icon-search"></el-input>
            </div>
            <div class="items-img">
              <img class="captcha" width="120" height="40" :src="captchaContent">
            </div>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" style="width: 100%" @click="handleLogin">立即登录</el-button>
          </el-form-item>

        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { getLoginCaptcha, login, getInfo, getAdminRules } from "@/api/user"

export default {
  name: "index",
  data() {
    return {
      form: {
        account: 'admin',
        password:'yzy5569',
        captcha: '',
        uniqid: ''
      },
      loginRules: {
        account: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ],
        captcha: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ]
      },
      captchaContent: ''
    }
  },
  created() {
    this.handleGetLoginCaptcha()
  },
  methods: {
    handleGetLoginCaptcha() {
      getLoginCaptcha().then(res => {
        let { content, uniqid } = res.data
        this.captchaContent = content
        this.form.uniqid = uniqid
      })
    },
    handleLogin() {
      this.$refs['loginForm'].validate(async(valid) => {
        if (valid) {
          await login(this.form).then(res => {
            this.$store.commit('user/SET_TOKEN', res.data.token)
          }).catch(() => {
            this.handleGetLoginCaptcha()
          })
          await getInfo().then(res => {
            this.$store.commit('user/SET_ADMIN_INFO', JSON.stringify(res.data))
          })
          await getAdminRules().then(res => {
            this.$store.commit('user/SET_MENU_LIST', JSON.stringify(res.data.items))
            this.$router.push({path:'/dashboard'}).catch((error) => {
              console.log(error)
            })
          })
        }
      });

    }
  }
}
</script>

<style scoped>
  .login-page {
    height: 100vh;
    width: 100vw;
    background-color: #fbfbfb;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .login-area {
    width: 400px;
    box-sizing: border-box;
    border: 1px solid #D5D5D7;
    background-color: #ffffff;
  }

  .login-header {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 56px 0 28px 0;
  }

  .login-header .logo {
    width: 64px;
    height: 64px;
  }

  .login-header .text {
    display: inline-block;
    color: #1F2329;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    margin-top: 16px;
    margin-bottom: 10px;
  }

  .login-body {
    padding: 20px 50px 20px 50px;
  }

  .items-img {
    height: 40px;
    width: 120px;
    float: right;
  }

  .items-input {
    float: left;
    height: 40px;
    width: calc(100% - 120px);
  }
</style>
