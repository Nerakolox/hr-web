<template>
    <div class="p-2">
        <h4 class="mb-4">信息管理</h4>
        <el-divider content-position="left">信息管理 信息管理</el-divider>
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="工资表" name="工资表">
                <el-table :data="incomeData" stripe border style="max-width: 100%;width: 100%;">
                    <el-table-column fixed prop="Username" label="姓名" width="140">
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.Username" />
                        </template> -->
                    </el-table-column>
                    <el-table-column fixed prop="Date" label="日期" width="120">
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.Date" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="Certificate" label="身份证" width="180">
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.Certificate" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="Telephone" label="电话" width="120">
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.Telephone" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="CreditCard" label="银行卡号" width="180">
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.CreditCard" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="BasicSalary" label="基本工资" width="100">
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.BasicSalary" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="AttendanceRequired" label="应出勤天数" width="100">
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.AttendanceRequired" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="AttendanceActual" label="实出勤天数" width="100">
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.AttendanceActual" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="WorkHour" label="总工时" >
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.WorkHour" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="Performance" label="绩效" >
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.Performance" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="Allowance" label="津贴" >
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.Allowance" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="Subsidy" label="补助" >
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.Subsidy" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="OvertimeSalary" label="加班工资" width="100">
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.OvertimeSalary" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="Excitation" label="正负激励" width="100">
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.Excitation" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="Discipline" label="违纪扣款" width="100">
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.Discipline" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="Withholding" label="代扣部分" width="100">
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.Withholding" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="BackPayment" label="补发扣" >
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.BackPayment" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="ShouldSalary" label="应发工资" width="100">
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.ShouldSalary" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="UtilitiesFee" label="水电物业费" width="100">
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.UtilitiesFee" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="Tax" label="个税" >
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.Tax" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="AdvanceSalary" label="预支工资" width="100">
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.AdvanceSalary" />
                        </template> -->
                    </el-table-column>
                    <el-table-column prop="ActualSalary" label="实发工资" width="100">
                        <!-- <template #default="scope">
                            <el-input v-model="scope.row.ActualSalary" />
                        </template> -->
                    </el-table-column>
                    <!-- <el-table-column fixed="right" label="操作">
                        <template #default="scope">
                            <el-button type="danger" size="small" @click="delRow(scope)">
                                删除
                            </el-button>
                        </template>
                    </el-table-column> -->
                </el-table>
                <div class="mt-2 d-flex">
                    <el-pagination class="ms-auto" background layout="prev, pager, next" v-model:current-page="incomePage" :total="incomeTotal" @current-change="changeIncomePage"/>
                </div>
            </el-tab-pane>
            <el-tab-pane label="查询工资统计" name="查询工资统计">
                <el-table :data="incomeQueryData" stripe border style="max-width: 100%;width: 100%;">
                    <el-table-column fixed prop="Username" label="姓名"></el-table-column>
                    <el-table-column fixed prop="Telephone" label="电话"></el-table-column>
                    <el-table-column prop="CreatedAt" label="日期"></el-table-column>
                </el-table>
                <div class="mt-2 d-flex">
                    <el-pagination class="ms-auto" background layout="prev, pager, next" v-model:current-page="incomeQueryPage" :total="incomeQueryTotal" @current-change="changeIncomeQueryPage"/>
                </div>
            </el-tab-pane>
            <el-tab-pane label="招聘信息点击统计" name="招聘信息点击统计">
                <el-form :inline="true" :model="query" class="demo-form-inline">
                    <el-form-item label="手机号">
                        <el-input v-model="query.phone" placeholder="请输入手机号"></el-input>
                    </el-form-item>
                    <el-form-item label="招聘信息标题">
                        <el-input v-model="query.title" placeholder="请输入招聘信息标题"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="changeRecruitPage" plain>查询</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="info" plain @click="clearQuery">重置筛选条件</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="success" plain @click="exportToExcel">导出XSLX</el-button>
                    </el-form-item>
                </el-form>
                <el-table :data="recruitData" stripe border style="max-width: 100%;width: 100%;">
                    <el-table-column fixed prop="Username" label="姓名"></el-table-column>
                    <el-table-column fixed prop="Telephone" label="手机号"></el-table-column>
                    <el-table-column prop="CreatedAt" label="日期"></el-table-column>
                    <el-table-column prop="Title" label="标题"></el-table-column>
                </el-table>
                <div class="mt-2 d-flex">
                    <el-pagination class="ms-auto" background layout="prev, pager, next" v-model:current-page="recruitPage" :total="recruitTotal" @current-change="changeRecruitPage"/>
                </div>
            </el-tab-pane>
        </el-tabs>
        
        
        <!-- </el-card> -->
    </div>
</template>
  
<script>
import http from '../../utils/axios'
import * as XLSX from 'xlsx'
import { saveAs } from 'file-saver'
export default {
    components:{
        
    },
    data() {
        return {
            activeName:'工资表',
            incomePage:1,
            incomeTotal:0,
            incomeData:[],
            incomeQueryPage:1,
            incomeQueryTotal:0,
            incomeQueryData:[],
            recruitPage:1,
            recruitTotal:0,
            recruitData:[],
            query:{
                phone:'',
                title:''
            }
        }
    },
    mounted(){
        http.get(`/allsalary?page=${this.incomePage}`)
            .then(res=>{
                // console.log(res.data)
                this.incomeData=res.data
                this.incomeTotal=res.total
            })
        http.get(`/salaryreader?page=${this.incomeQueryPage}`)
            .then(res=>{
                // console.log(res.data)
                this.incomeQueryData=res.data
                this.incomeQueryTotal=res.total
            })
        http.get(`/recruitreader?page=${this.recruitPage}`)
            .then(res=>{
                // console.log(res.data)
                this.recruitData=res.data
                this.recruitTotal=res.total
            })
    },
    beforeUnmount() {
    
    },
    methods:{
        handleClick(){

        },
        changeIncomePage(){
            http.get(`/allsalary?page=${this.incomePage}`)
            .then(res=>{
                // console.log(res.data)
                this.incomeData=res.data
                this.incomeTotal=res.total
            })
        },
        changeIncomeQueryPage(){
            http.get(`/salaryreader?page=${this.incomeQueryPage}`)
                .then(res=>{
                    // console.log(res.data)
                    this.incomeQueryData=res.data
                    this.incomeQueryTotal=res.total
                })
        },
        changeRecruitPage(){
            http.get(`/recruitreader?page=${this.recruitPage}${this.query.title!=''?`&title=${this.query.title}`:''}${this.query.phone!=''?`&telephone=${this.query.phone}`:''}`)
                .then(res=>{
                    // console.log(res.data)
                    this.recruitData=res.data
                    this.recruitTotal=res.total
                })
        },
        exportToExcel() {
            const ws = XLSX.utils.json_to_sheet(this.recruitData)
            const wb = XLSX.utils.book_new()
            XLSX.utils.book_append_sheet(wb, ws, "Sheet1")

            // 生成XLSX文件的blob
            const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'binary' })
            function s2ab(s) {
            const buf = new ArrayBuffer(s.length)
            const view = new Uint8Array(buf)
            for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xFF
                return buf
            }
            // 保存文件
            saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), `招聘信息查看表${this.formatDate()}.xlsx`)
        },
        formatDate() {
            const date = new Date()
            const year = date.getFullYear()
            const month = (date.getMonth() + 1).toString().padStart(2, '0')
            const day = date.getDate().toString().padStart(2, '0')
            const hour = date.getHours().toString().padStart(2, '0')
            const minute = date.getMinutes().toString().padStart(2, '0')
            return `${year}-${month}-${day} ${hour}时${minute}分`
        },
        clearQuery(){
            this.query={
                phone:'',
                title:''
            }
            this.changeRecruitPage()
        },
    }
}
</script>

<style scoped>
  
</style>
  