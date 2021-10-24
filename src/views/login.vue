<template>
  <div  id="wrap">
    <div class="logGet">
      <Tabs value="name1">
        <TabPane label="登录" name="name1" class="fonts" >
          <div class="logD logDtip">
            <p class="p1">登录</p>
          </div>
          <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
            <div>
            <FormItem prop="user">
              <Input style="width:270px;" type="text" v-model="formInline.user" placeholder="用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            </div>
            <br>
            <div>
            <FormItem prop="password">
              <Input style="width:270px;" type="password" v-model="formInline.password" placeholder="用户密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>
            </div>
            <br>
            <div>
            <FormItem>
              <Button type="primary" long size="large" @click="login('formInline')">登录</Button>
            </FormItem>
            </div>
          </Form>
        </TabPane>

        <TabPane label="注册" name="name2">
          <div class="logD logDtip">
            <p class="p1">注册</p>
          </div>
          <Form ref="formInline" :model="formInline" :rules="ruleInline" inline>

            <FormItem prop="user">
              <Input style="width:270px;" type="text" v-model="formInline.user" placeholder="用户名">
                <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>

            <br>

            <FormItem prop="password">
              <Input style="width:270px;" type="password" v-model="formInline.password" placeholder="用户密码">
                <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
            </FormItem>

            <br>

              <FormItem prop="password">
                <Input style="width:270px;" type="password" v-model="formInline.passwordOK" placeholder="确认密码">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
              </FormItem>

            <br>
            <FormItem>
              <Button type="warning" long size="large" @click="register('formInline')">注册</Button>
            </FormItem>
          </Form>
        </TabPane>
      </Tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgSrc: '../assets/login.jpg',
      username: '',
      password: '',
      formInline: {
        user: '',
        password: '',
        passwordOK:''
      },
      ruleInline: {
        user: [
          {required: true, message: '请输入登录名', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'},
          {type: 'string', min: 6, message: '密码长度不能小于6位数', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    login() {
      /*this.$axios("http://localhost:8701/bank-provide/test/login", {
        params: {
          username: this.username, password: this.password
        }
      }).then(({data}) => {
        console.log(data)
        if (data.username == null) {
          this.$message({type: "error", message: '密码不正确'})
        } else {
          this.$router.push('/index');
          this.$message({type: "success", message: '登录成功'})
        }
      })*/
      this.$router.push('/index');
    },
    register() {
      if (this.formInline.password!=this.formInline.passwordOK){
        alert('两次密码不一致')
      }else {
        alert('注册成功')
      }
    }
  }
}
</script>

<style scoped>

#wrap {
  background: url("../assets/login.jpg");
  height: 100vh;
  width: 100%;
  position: relative;
  background-size: cover;
}

#head {
  height: 120px;
  width: 100px;
  background-color: #66CCCC;
  text-align: center;
  position: relative;
}

#wrap .logGet {
  padding: 10px;
  height: 408px;
  width: 368px;
  position: absolute;
  /*backdrop-filter: saturate(500%) blur(20px);*/
  background-color: rgba(245, 245, 245, 0.02);
  border-radius: 6px;
  transition: ease all .4s;
  box-shadow: 1px 1px 21px 12px rgba(0, 0, 0, 0.09);
  top: 120px;
  margin-left: 35%;
}

.logC a button {
  width: 100%;
  height: 45px;
  background-color: #ee7700;
  border: none;
  color: white;
  font-size: 18px;
}

.logGet .logD.logDtip .p1 {
  display: inline-block;
  font-size: 28px;
  margin-top: 5px;
  width: 86%;
  color: rgba(85, 114, 199, 0.99);
}

#wrap .logGet .logD.logDtip {
  width: 84%;
  border-bottom: 1px solid #ee7700;
  margin-bottom: 60px;
  margin-top: 0px;
  margin-right: auto;
  margin-left: auto;
}

.logGet .lgD img {
  position: absolute;
  top: 12px;
  left: 8px;
}

.logGet .lgD input {
  width: 100%;
  height: 42px;
  text-indent: 2.5rem;
}

#wrap .logGet .lgD {
  width: 86%;
  position: relative;
  margin-bottom: 30px;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
}

#wrap .logGet .logC {
  width: 86%;
  margin-top: 0px;
  margin-right: auto;
  margin-bottom: 0px;
  margin-left: auto;
}


.title {
  font-family: "宋体";
  color: #FFFFFF;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 使用css3的transform来实现 */
  font-size: 36px;
  height: 40px;
  width: 30%;
}

.copyright {
  font-family: "宋体";
  color: #FFFFFF;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* 使用css3的transform来实现 */
  height: 60px;
  width: 40%;
  text-align: center;
}
.fonts{
  color: black;
  font-size: 20px;

}
#building {
  background: url("../assets/login.jpg");
  width: 100%; /*大小设置为100%*/
  height: 100%; /*大小设置为100%*/
  position: fixed;
  background-size: 100% 100%;
}
</style>
