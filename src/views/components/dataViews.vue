<template>
    <div class="p-2">
        <h4 class="mb-4">信息管理</h4>
        <el-divider content-position="left">信息管理 信息管理</el-divider>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="工资表" name="工资表">
                <el-table :data="incomeData" stripe border style="max-width: 100%;width: 100%;">
                    <el-table-column fixed prop="Username" label="姓名" width="140">
                        <template #default="scope">
                            <el-input v-model="scope.row.Username" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="Certificate" label="身份证" width="180">
                        <template #default="scope">
                            <el-input v-model="scope.row.Certificate" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="Telephone" label="电话" width="120">
                        <template #default="scope">
                            <el-input v-model="scope.row.Telephone" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="CreditCard" label="银行卡号" width="180">
                        <template #default="scope">
                            <el-input v-model="scope.row.CreditCard" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="BasicSalary" label="基本工资" width="100">
                        <template #default="scope">
                            <el-input v-model="scope.row.BasicSalary" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="AttendanceRequired" label="应出勤天数" width="100">
                        <template #default="scope">
                            <el-input v-model="scope.row.AttendanceRequired" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="AttendanceActual" label="实出勤天数" width="100">
                        <template #default="scope">
                            <el-input v-model="scope.row.AttendanceActual" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="WorkHour" label="总工时" >
                        <template #default="scope">
                            <el-input v-model="scope.row.WorkHour" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="Performance" label="绩效" >
                        <template #default="scope">
                            <el-input v-model="scope.row.Performance" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="Allowance" label="津贴" >
                        <template #default="scope">
                            <el-input v-model="scope.row.Allowance" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="Subsidy" label="补助" >
                        <template #default="scope">
                            <el-input v-model="scope.row.Subsidy" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="OvertimeSalary" label="加班工资" width="100">
                        <template #default="scope">
                            <el-input v-model="scope.row.OvertimeSalary" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="Excitation" label="正负激励" width="100">
                        <template #default="scope">
                            <el-input v-model="scope.row.Excitation" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="Discipline" label="违纪扣款" width="100">
                        <template #default="scope">
                            <el-input v-model="scope.row.Discipline" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="Withholding" label="代扣部分" width="100">
                        <template #default="scope">
                            <el-input v-model="scope.row.Withholding" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="BackPayment" label="补发扣" >
                        <template #default="scope">
                            <el-input v-model="scope.row.BackPayment" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="ShouldSalary" label="应发工资" width="100">
                        <template #default="scope">
                            <el-input v-model="scope.row.ShouldSalary" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="UtilitiesFee" label="水电物业费" width="100">
                        <template #default="scope">
                            <el-input v-model="scope.row.UtilitiesFee" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="Tax" label="个税" >
                        <template #default="scope">
                            <el-input v-model="scope.row.Tax" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="AdvanceSalary" label="预支工资" width="100">
                        <template #default="scope">
                            <el-input v-model="scope.row.AdvanceSalary" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="ActualSalary" label="实发工资" width="100">
                        <template #default="scope">
                            <el-input v-model="scope.row.ActualSalary" />
                        </template>
                    </el-table-column>
                    <el-table-column prop="Date" label="日期" width="120">
                        <template #default="scope">
                            <el-input v-model="scope.row.Date" />
                        </template>
                    </el-table-column>
                    <el-table-column fixed="right" label="操作">
                        <template #default="scope">
                            <el-button type="danger" size="small" @click="delRow(scope)">
                                删除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="查询工资统计" name="查询工资统计">查询工资统计</el-tab-pane>
            <el-tab-pane label="招聘信息点击统计" name="招聘信息点击统计">招聘信息点击统计</el-tab-pane>
        </el-tabs>
        
        
        <!-- </el-card> -->
    </div>
</template>
  
<script>
export default {
    components:{
        
    },
    data() {
        return {
            activeName:'工资表',
            incomeData:[
                {
                    Username: "John Doe", // 姓名
                    Certificate: "123456789012345678", // 身份证号
                    Telephone: "1234567890", // 电话号码
                    CreditCard: "1234 5678 9012 3456", // 银行卡号
                    BasicSalary: 3000.50, // 基本工资
                    AttendanceRequired: 22, // 应出勤天数
                    AttendanceActual: 20, // 实出勤天数
                    WorkHour: 160, // 总工时
                    Performance: 0.85, // 绩效
                    Allowance: 200.75, // 津贴
                    Subsidy: 100.25, // 补助
                    OvertimeSalary: 500.50, // 加班工资
                    Excitation: 50.25, // 正负激励
                    Discipline: -20.50, // 违纪扣款
                    Withholding: 30.00, // 代扣部分
                    BackPayment: -50.75, // 补发扣
                    ShouldSalary: 3800.00, // 应发工资
                    UtilitiesFee: 50.00, // 水电物业费
                    Tax: 450.00, // 个税
                    AdvanceSalary: 200.00, // 预支工资
                    ActualSalary: 3200.00, // 实发工资
                    Date: '2024-05', // 日期
                },
                {
                    Username: "John Doe", // 姓名
                    Certificate: "123456789012345678", // 身份证号
                    Telephone: "1234567890", // 电话号码
                    CreditCard: "1234 5678 9012 3456", // 银行卡号
                    BasicSalary: 3000.50, // 基本工资
                    AttendanceRequired: 22, // 应出勤天数
                    AttendanceActual: 20, // 实出勤天数
                    WorkHour: 160, // 总工时
                    Performance: 0.85, // 绩效
                    Allowance: 200.75, // 津贴
                    Subsidy: 100.25, // 补助
                    OvertimeSalary: 500.50, // 加班工资
                    Excitation: 50.25, // 正负激励
                    Discipline: -20.50, // 违纪扣款
                    Withholding: 30.00, // 代扣部分
                    BackPayment: -50.75, // 补发扣
                    ShouldSalary: 3800.00, // 应发工资
                    UtilitiesFee: 50.00, // 水电物业费
                    Tax: 450.00, // 个税
                    AdvanceSalary: 200.00, // 预支工资
                    ActualSalary: 3200.00, // 实发工资
                    Date: '2024-05', // 日期
                },
            ],
        }
    },
    mounted(){

    },
    beforeUnmount() {
    
    },
    methods:{
        handleClick(){

        }
    }
}
</script>
  
<style scoped>
  
</style>
  