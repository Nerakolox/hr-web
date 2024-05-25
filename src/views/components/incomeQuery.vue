<template>
    <div style="margin-bottom: 70px;">
        <div class="p-2">
            <h3>工资查询</h3>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top" style="width: 100%;">
                <el-form-item label="身份证号" prop="idCard">
                    <el-input v-model="ruleForm.idCard"></el-input>
                </el-form-item>
                <el-form-item prop="date">
                    <el-date-picker class="w-100" v-model="ruleForm.date" value-format="YYYY-MM" type="month" placeholder="请选择日期"/>
                </el-form-item>
                <el-form-item>
                    <el-button class="w-100" type="primary" plain @click="goQuery('ruleForm')">查询工资条</el-button>
                </el-form-item>
            </el-form>
        </div>
        <el-divider content-position="left">工资表</el-divider>
        <el-descriptions direction="vertical" :column="2" border>
            <el-descriptions-item label="姓名">{{ incomeData.Username }}</el-descriptions-item>
            <el-descriptions-item label="身份证号">{{ incomeData.Certificate }}</el-descriptions-item>
            <el-descriptions-item label="电话号码">{{ incomeData.Telephone }}</el-descriptions-item>
            <el-descriptions-item label="银行卡号">{{ incomeData.CreditCard }}</el-descriptions-item>
            <el-descriptions-item label="基本工资">{{ incomeData.BasicSalary }}</el-descriptions-item>
            <el-descriptions-item label="应出勤天数">{{ incomeData.AttendanceRequired }}</el-descriptions-item>
            <el-descriptions-item label="实出勤天数">{{ incomeData.AttendanceActual }}</el-descriptions-item>
            <el-descriptions-item label="总工时">{{ incomeData.WorkHour }}</el-descriptions-item>
            <el-descriptions-item label="绩效">{{ incomeData.Performance }}</el-descriptions-item>
            <el-descriptions-item label="津贴">{{ incomeData.Allowance }}</el-descriptions-item>
            <el-descriptions-item label="补助">{{ incomeData.Subsidy }}</el-descriptions-item>
            <el-descriptions-item label="加班工资">{{ incomeData.OvertimeSalary }}</el-descriptions-item>
            <el-descriptions-item label="正负激励">{{ incomeData.Excitation }}</el-descriptions-item>
            <el-descriptions-item label="违纪扣款">{{ incomeData.Discipline }}</el-descriptions-item>
            <el-descriptions-item label="代扣部分">{{ incomeData.Withholding }}</el-descriptions-item>
            <el-descriptions-item label="补发扣">{{ incomeData.BackPayment }}</el-descriptions-item>
            <el-descriptions-item label="应发工资">{{ incomeData.ShouldSalary }}</el-descriptions-item>
            <el-descriptions-item label="水电物业费">{{ incomeData.UtilitiesFee }}</el-descriptions-item>
            <el-descriptions-item label="个税">{{ incomeData.Tax }}</el-descriptions-item>
            <el-descriptions-item label="预支工资">{{ incomeData.AdvanceSalary }}</el-descriptions-item>
            <el-descriptions-item label="实发工资">{{ incomeData.ActualSalary }}</el-descriptions-item>
            <el-descriptions-item label="日期">{{ incomeData.Date }}</el-descriptions-item>
        </el-descriptions>
    </div>
</template>
  
<script>
import http from '../../utils/axios'
export default {
    components:{
        
    },
    data() {
        return {
            ruleForm:{
                idCard:'',
                date:''
            },
            rules: {
                idCard: [
                    { required: true, message: '请输入身份证号码', trigger: 'blur' },
                    { pattern: /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(10|11|12))((0[1-9])|([1-2][0-9])|30|31)\d{3}[0-9Xx]$/, message: '请输入有效的身份证号码', trigger: 'blur' }
                ],
                date:[
                    { required: true, message: '请选择日期', trigger: 'blur' },
                ]
            },
            incomeData:{
                Username: "-", // 姓名
                Certificate: "-", // 身份证号
                Telephone: "-", // 电话号码
                CreditCard: "-", // 银行卡号
                BasicSalary: "-", // 基本工资
                AttendanceRequired: "-", // 应出勤天数
                AttendanceActual: "-", // 实出勤天数
                WorkHour: "-", // 总工时
                Performance: "-", // 绩效
                Allowance: "-", // 津贴
                Subsidy: "-", // 补助
                OvertimeSalary: "-", // 加班工资
                Excitation: "-", // 正负激励
                Discipline: "-", // 违纪扣款
                Withholding: "-", // 代扣部分
                BackPayment: "-", // 补发扣
                ShouldSalary: "-", // 应发工资
                UtilitiesFee: "-", // 水电物业费
                Tax: "-", // 个税
                AdvanceSalary: "-", // 预支工资
                ActualSalary: "-", // 实发工资
                Date: "-", // 日期
            }
        }
    },
    mounted(){
        this.ruleForm.date=this.getCurrentMonth()
    },
    beforeUnmount() {
    
    },
    methods:{
        getCurrentMonth() {
            const date = new Date()
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            return `${year}-${month.toString().padStart(2, '0')}`
        },
        goQuery(formName){
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    http.get(`/readsalary?certificate=${this.ruleForm.idCard}&date=${this.ruleForm.date}`)
                        .then(res=>{
                            this.incomeData=res.data
                        })
                        .catch(err=>{
                            this.incomeData={
                                Username: "-", // 姓名
                                Certificate: "-", // 身份证号
                                Telephone: "-", // 电话号码
                                CreditCard: "-", // 银行卡号
                                BasicSalary: "-", // 基本工资
                                AttendanceRequired: "-", // 应出勤天数
                                AttendanceActual: "-", // 实出勤天数
                                WorkHour: "-", // 总工时
                                Performance: "-", // 绩效
                                Allowance: "-", // 津贴
                                Subsidy: "-", // 补助
                                OvertimeSalary: "-", // 加班工资
                                Excitation: "-", // 正负激励
                                Discipline: "-", // 违纪扣款
                                Withholding: "-", // 代扣部分
                                BackPayment: "-", // 补发扣
                                ShouldSalary: "-", // 应发工资
                                UtilitiesFee: "-", // 水电物业费
                                Tax: "-", // 个税
                                AdvanceSalary: "-", // 预支工资
                                ActualSalary: "-", // 实发工资
                                Date: "-", // 日期
                            }
                        })
                }
            })
        }
    }
}
</script>
  
<style scoped>
  
</style>
  