<template>
    <div class="w-100 d-flex justify-content-center align-items-center" style="height: 100vh;">
        <div class="log-res-box" style="box-shadow: var(--el-box-shadow-dark);">
            <h4 class="text-center mt-3">欢迎来到XX平台</h4>
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
                            <el-button>{{ getCode }}</el-button>
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
import {appStore} from '../stores/store'
export default {
    data() {
        return {
            getCode:'获取验证码',
            isRes:false,
            ruleForm: {
                name: '',
                phone:'',
                idCard:'',
            },
            rules: {
                name: [
                    { required: true, message: '请输入有效姓名', trigger: 'blur' },
                    { min: 2, message: '请输入有效姓名', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '请输入手机号', trigger: 'blur' },
                    { pattern: /^1[3-9]\d{9}$/, message: '请输入正确的手机号', trigger: 'blur' }
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
                } else {
                    console.log('error submit!!')
                    return false
                }
            })
        },
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