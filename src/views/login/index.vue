<template>
    <div class="login-container">
      <el-form ref="login-form" class="login-form" :model="user" :rules="rules">
        <el-form-item prop="username">
          <el-input placeholder="输入用户名" v-model.trim="user.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="输入密码" v-model.trim="user.password" ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-btn" :loading="loginLoading" @click="onSubmit">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
// import { login } from '@/api/user'
export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      loginLoading: false,
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            min: 3,
            max: 50,
            message: '长度在 3 到 50 个字符',
            trigger: 'blur'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      // 获取数据
      const user = this.user
      // 数据校验
      this.$refs['login-form'].validate((valid) => {
        if (valid) {
          // 防止用户多次点击按钮
          this.loginLoading = true
          if (user.username === 'admin1' && user.password === '123456') {
            this.$message({
              message: '登录成功',
              type: 'success'
            })
            this.loginLoading = false
            // 登录成功之后进行页面跳转
            this.$router.push({
              name: 'home'
            })
          } else {
            this.$message.error('用户名或者密码错误！')
            this.loginLoading = false
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
      /* // 发送请求
      login(user).then(res => {
        console.log(res)
        this.loginLoading = false
      }).catch(err => {
        this.$message({
          message: '登录失败，用户名或者密码错误',
          type: 'error'
        })
        console.log(err)
        this.loginLoading = false
      }) */
    }
  }
}
</script>

<style lang="less" scoped>
.login-container{
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex; //里面的子标签添加浮动
  justify-content: center; //水平居中
  align-items: center;// 垂直居中
  background: url("./login.jpg") no-repeat;
  background-size: cover;//设置图片的大小
  .login-form{
    background-color: #fff;
    padding: 50px;
    min-width: 300px; //设置登录框的大小
    .login-btn{
      width: 100%;
    }
  }
}
</style>
