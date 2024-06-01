<template>
    <div class="w-100 d-flex justify-content-center align-items-center" style="height: 100vh;">
        <div class="log-res-box" style="box-shadow: var(--el-box-shadow-dark);">
            <h4 class="text-center mt-3">实习生小助手</h4>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top" style="width: 100%;">
                <el-form-item v-if="isRes" label="姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item v-if="isRes" label="身份证" prop="idCard">
                    <el-input v-model="ruleForm.idCard"></el-input>
                </el-form-item>
                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="验证码" prop="code">
                    <el-input v-model="ruleForm.code">
                        <template #append>
                            <el-button @click="getAuthCode" :disabled="codeDisabled">{{ codeText }}</el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" class="w-100">立即{{ isRes?'注册':'登录' }}</el-button>
                    <el-button class="w-100 mt-1 ms-0" @click="isRes=!isRes">前往{{ isRes?'登录':'注册' }}</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
  
<script>
import {appStore,userStore} from '../stores/store'
import http from '../utils/axios'
import Cookie from 'js-cookie'
export default {
    data() {
        return {
            codeText:'获取验证码',
            codeDisabled:false,
            countDown:0,
            isRes:false,
            ruleForm: {
                name: '',
                phone:'',
                idCard:'',
                code:''
            },
            rules: {
                name: [
                    { required: true, message: '请输入有效姓名', trigger: 'blur' },
                    { min: 2, message: '请输入有效姓名', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    // { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
                ],
                idCard: [
                    { required: true, message: '请输入身份证号码', trigger: 'blur' },
                    { pattern: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(10|11|12))((0[1-9])|([1-2][0-9])|30|31)\d{3}[0-9Xx]$/, message: '请输入有效的身份证号码', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    console.log('submit!')
                    if(this.isRes){//注册
                        const query = {
                            certificate:this.ruleForm.idCard,
                            username:this.ruleForm.name,
                            telephone:this.ruleForm.phone,
                            authcode:this.ruleForm.code
                        }
                        http.post('/signup',query)
                            .then(res=>{
                                this.isRes=false
                                const query = {
                                    telephone:this.ruleForm.phone,
                                    authcode:this.ruleForm.code
                                }
                                http.post('/login',query)
                                    .then(res2=>{
                                        // console.log(res.data,Cookie)
                                        Cookie.set('token',res2.data.token)
                                        
                                        userStore().writeUsername(res2.data.username)
                                        userStore().writeTelephone(res2.data.telephone)
                                        userStore().writeAdmin(res2.data.admin)

                                        // console.log(res.data,userStore())
                                        if(userStore().admin){
                                            this.$router.push({path:'/admin'})
                                        }else{
                                            this.$router.push({path:'/user'})
                                        }
                                        // this.$router.push({path:'/admin'})
                                    })
                            })
                    }else{//登录
                        const query = {
                            telephone:this.ruleForm.phone,
                            authcode:this.ruleForm.code
                        }
                        http.post('/login',query)
                            .then(res=>{
                                // console.log(res.data,Cookie)
                                Cookie.set('token',res.data.token)
                                
                                userStore().writeUsername(res.data.username)
                                userStore().writeTelephone(res.data.telephone)
                                userStore().writeAdmin(res.data.admin)

                                // console.log(res.data,userStore())
                                if(userStore().admin){
                                    this.$router.push({path:'/admin'})
                                }else{
                                    this.$router.push({path:'/user'})
                                }
                                // this.$router.push({path:'/admin'})
                            })
                    }
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
        getAuthCode(){
            var regex = /^1[3-9]\d{9}$/
            if(regex.test(this.ruleForm.phone)){
                http.get(`/sms?telephone=${this.ruleForm.phone}`)
                    .then(res=>{
                        // console.log(res)
                    })
                this.codeDisabled = true
                this.countDown = 60
                this.codeText=`请${this.countDown}秒后再试`
                let interval = setInterval(() => {
                    this.countDown--
                    this.codeText=`请${this.countDown}秒后再试`
                    if (this.countDown <= 0) {
                        this.codeText='获取验证码'
                        clearInterval(interval)
                        this.codeDisabled = false
                    }
                }, 1000)
            }else{
                this.$message({
                    message: '请检查手机号是否正确',
                    type: 'error',
                    duration: 5000,
                    plain: true,
                })
            }
        }
    }
}
</script>
  
<style scoped>
.log-res-box{
    min-width: 360px;
    width: 50%;
    max-width: 500px;
    padding: 10px;
    border: 1px solid #efefef;
    border-radius: 10px;
}
</style>