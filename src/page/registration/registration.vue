<style scoped lang="less">
  .signin{ padding: 3rem 0;}
  section{ margin: 0 5%;
    input[type="text"]{ background-color: red !important;}
    input[type="password"]{ background-color: red !important;}
    .icon-hpone{  height: 1.2rem ; width: 1rem}
    .icon-sousuo{  height: 1.2rem ; width: 1rem}
    .el-button{ width: 100%}
    .icationinput{ width: 60%; float: left;}
    .verification{ width: 35%; float: right;}
  }
  .icon-icon-logo{ width: 3rem; height: 3rem; margin-top:0.5rem; margin-bottom: 0.5rem;}

</style>
<template>
  <div class="signin">

    <svg style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <symbol id="icon-hpone" viewBox="0 0 16 32">
          <title>hpone</title>
          <path fill="#55606e" style="fill: var(--color1, #55606e)" d="M14.561 0h-13.093c-0.79 0-1.467 0.677-1.467 1.467v28.444c0 0.79 0.677 1.467 1.467 1.467h13.037c0.79 0 1.467-0.677 1.467-1.467v-28.444c0.056-0.79-0.621-1.467-1.411-1.467zM6.772 1.467h2.427c0.169 0 0.282 0.169 0.282 0.282 0 0.169-0.169 0.282-0.282 0.282h-2.427c-0.169 0-0.282-0.169-0.282-0.282s0.056-0.282 0.282-0.282zM7.958 30.307c-0.734 0-1.354-0.564-1.354-1.355s0.564-1.355 1.354-1.355 1.355 0.564 1.355 1.355c0.056 0.79-0.508 1.355-1.354 1.355zM14.617 25.848c0 0.451-0.282 0.734-0.734 0.734h-11.795c-0.452 0-0.734-0.282-0.734-0.734v-21.785c0-0.452 0.282-0.734 0.734-0.734h11.795c0.451 0 0.734 0.282 0.734 0.734v21.785z"></path>
        </symbol>
        <symbol id="icon-sousuo" viewBox="0 0 32 32">
          <title>sousuo</title>
          <path fill="#55616f" style="fill: var(--color1, #55616f)" d="M25.115 11.965c0-0.113 0.056-0.169 0.056-0.282 0-4.854-3.951-8.748-8.748-8.748-4.854 0-8.748 3.951-8.748 8.748 0 0.113 0 0.169 0.056 0.282-1.129 0.677-1.919 1.975-1.919 3.386v9.764c0 2.201 1.75 3.951 3.951 3.951h13.432c2.201 0 3.951-1.75 3.951-3.951v-9.764c-0.113-1.411-0.903-2.709-2.032-3.386zM16.367 5.192c3.499 0 6.321 2.765 6.49 6.208h-12.981c0.169-3.443 3.048-6.208 6.49-6.208zM24.776 25.115c0 0.959-0.734 1.693-1.693 1.693h-13.376c-0.959 0-1.693-0.734-1.693-1.693v-9.764c0-0.959 0.734-1.693 1.693-1.693h13.432c0.959 0 1.693 0.734 1.693 1.693v9.764z"></path>
          <path fill="#55616f" style="fill: var(--color1, #55616f)" d="M18.511 19.189c0-1.185-0.959-2.145-2.088-2.145s-2.088 0.959-2.088 2.145c0 0.677 0.339 1.242 0.79 1.637l-0.451 3.668c0 0.056 0 0.169 0.056 0.226s0.113 0.113 0.226 0.113h2.822c0 0 0 0 0 0 0.169 0 0.282-0.113 0.282-0.282 0-0.056 0-0.056 0-0.113l-0.395-3.612c0.508-0.395 0.847-0.959 0.847-1.637z"></path>
        </symbol>
      </defs>
    </svg>
      <header-top :toptitles=toptitle :righttit=righttits></header-top>
    <section>
      <el-form :model="ruleForm2" labelPosition="top" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
        <el-form-item  prop="tels">
          <el-input type="text" v-model="ruleForm2.tels"  class="inputbox">
            <template slot="prepend" class="inputlficon"> <svg class="icon icon-hpone"><use xlink:href="#icon-hpone"></use></svg></template>
          </el-input>

        </el-form-item>
        <el-form-item  prop="ication">
          <el-input type="password" v-model="ruleForm2.ication" auto-complete="off"  class="icationinput" >
            <template slot="prepend" class="inputlficon"> <svg class="icon icon-sousuo"><use xlink:href="#icon-sousuo"></use></svg></template>
          </el-input>
             <el-button type="info" class="verification" @click="icationever()" :disabled="disabled" >{{icationhtml}}</el-button>
          </el-form-item>

        <el-form-item  prop="Pass">
          <el-input type="text" v-model="ruleForm2.Pass"  class="inputbox">
            <template slot="prepend" class="inputlficon"> <svg class="icon icon-hpone"><use xlink:href="#icon-hpone"></use></svg></template>
          </el-input>

        </el-form-item>
        <el-form-item  prop="checkPass">
          <el-input type="text" v-model="ruleForm2.checkPass"  class="inputbox">
            <template slot="prepend" class="inputlficon"> <svg class="icon icon-hpone"><use xlink:href="#icon-hpone"></use></svg></template>
          </el-input>

        </el-form-item>
        <el-form-item>
          <el-button class="el-button" type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        </el-form-item>
      </el-form>
    </section>
  </div>



</template>

<script>
  import store from '../../store/index'
  import api from "../../axios/axiso"
  import headerTop from "../../components/header"
  import logSvg from "../../components/logosvg";
  const tlehoneRE = /^(((13[0-9]{1})|(15[0-9]{1})|(14[0-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  const passworRE = /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{6,16}$/;

  export default {
    data() {
      var validateTel = (rule, value, callback) => {
        if (value === '' || !tlehoneRE.exec(value)) {
          this.disabled=true;
          callback(new Error('请输入手机号码'));
        } else {
          this.disabled=false;
          callback();
        }

      };
      var validateication = (rule, value, callback) => {
        if (value === '' || !passworRE.exec(value)) {
          callback(new Error('验证码不正确'));
        } else {
          callback();
        }

      };
      var validatePass = (rule, value, callback) => {
        if (value === ''|| !passworRE.exec(value)) {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.Pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        disabled:true,
        ruleForm2: {
          tels: '',
          Pass: '',
          ication:'',
          checkPass:''
        },
        rules2: {
          tels: [
            { validator: validateTel, trigger: 'blur' }
          ],
          Pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          ication:[
            {validator:validateication,trigger: 'blur'}
            ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],

        },
        toptitle:"用户注册",
        righttits:"登录",
        icationhtml:"获取验证码",
      };
    },
    components:{
      headerTop,
      logSvg
    },
    methods: {
      icationever(){
          console.log(";sl;")
        var countdown = 20;
        var interval = setInterval(()=> {
          if (countdown == 0) {
            this.icationhtml="免费获取验证码";
            clearInterval(interval);
            this.disabled = false;
            return false;
          } else {
            this.disabled =true ;
            this.icationhtml="重新发送(" + countdown + ")";
            countdown--;
          }
        }, 1000 );
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          let opt =this.ruleForm2;

          if (valid) {
            api.userRegister(opt).then(({data})=>{
                //setTimeout((data)=>{
                 this.$store.dispatch('UserLogin',this.ruleForm2.Pass);
                  this.$store.dispatch('UserName',this.ruleForm2.tels,);
                  let redirectUrl = decodeURIComponent(this.$route.query.redirect || '/');
                  this.$router.push({
                    path: redirectUrl
                  });
               // },1000);
            })

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },

    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

