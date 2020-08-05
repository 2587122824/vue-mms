<template>
  <div class="login-container">
    <el-form :rules="rules" ref="form" :model="form" label-width="80px" class="login-form">
      <h2>管理系统</h2>
      <el-form-item label="账号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" type="password" @keyup.enter.native="submitForm('form')"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import {login,getUserInfo} from '@/api/login'
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          // 对应el-form-item 的 prop 值
          { required: true, message: "请输入有效帐号", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入有效密码", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
       submitForm(formName) {
        this.$refs[formName].validate(vaild => {
          if(vaild){
              //   //提交表单给后台验证
              // login(this.form.username,this.form.password).then(res => {
              //     if(res.data.flag){ 
              //       //验证成功
              //        getUserInfo(res.data.data.token).then(res => {
              //          console.log(res.data);
                       //前往首页
                       this.$router.push('/');
              //        });
              //     }
              //     else{
              //       //验证失败
              //         this.$message.error('验证失败');
              //     }
              // })
             
            }
          else{
                console.log('哈哈哈');
            }
        });
      }  
  }
}

</script>

<style scoped>
.login-form {
  width: 350px;
  background-color: blanchedalmond;
  padding: 30px;
  margin: 200px auto;
  border-radius: 20px;
}
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0px;
  background-color: rgb(158, 144, 139);
}
</style>