<template>
    <div class="p-2">
        <h4 class="mb-4">工资录入</h4>
        <el-divider content-position="left">工资录入 工资录入</el-divider>
        <!-- <el-card style="width: 100%" shadow="always"> -->
        <div class="d-flex flex-row justify-content-end">
            <el-upload ref="upload" class="upload-demo" accept=".xlsx" action="#" :limit="1" :auto-upload="true" :before-upload="beforeUpload">
                <template #trigger>
                    <el-button type="primary" plain>读取excel文件</el-button>
                </template>
            </el-upload>
            <el-button class="ms-3" plain @click="addRows">添加表格行</el-button>
            <el-button type="success" plain @click="upLoadDatas">上传薪资信息</el-button>
        </div>
        <el-table :data="tableData" stripe border style="max-width: 100%;width: 100%;">
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
        
        <!-- </el-card> -->
    </div>
</template>
  
<script>
import * as XLSX from 'xlsx'
import http from '../../utils/axios'
export default {
    components:{
        
    },
    data() {
        return {
            tableData:[],
            tableData2:[]
        }
    },
    mounted(){

    },
    beforeUnmount() {
    
    },
    methods:{
        delRow(row){
            // console.log(row)
            this.tableData.splice(row.$index,1)
        },
        addRows(){
            this.tableData.push({})
        },
        upLoadDatas(){
            // console.log(this.tableData)
            this.$alert('请再次确认信息录入是否正确','上传确认', {
                confirmButtonText: '确定',
                dangerouslyUseHTMLString: true,
                callback: action => {
                    if(action=='confirm'){
                        const query = this.tableData
                        const stringifyValues = (data) => {
                            return JSON.parse(JSON.stringify(data, (key, value) => {
                                return (typeof value === 'number' || typeof value === 'boolean') ? value.toString() : value;
                            }));
                        };

                        const stringifiedData = stringifyValues(query)
                        console.log(stringifiedData)
                        http.post('addsalary',stringifiedData)
                            .then(res=>{
                                console.log(res)
                                // console.log(this.tableData)
                                this.$message({
                                    type: 'success',
                                    message: `已上传`,
                                    plain: true,
                                })
                                this.tableData=[]
                                this.tableData2=[]
                            })
                    }else{}
                }
            })
        },
        beforeUpload(file) {
            // console.log(file)
            this.readExcel(file)
            return false
        },
        readExcel(file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                try {
                    const data = new Uint8Array(e.target.result);
                    const workbook = XLSX.read(data, { type: 'array' })
                    const firstSheetName = workbook.SheetNames[0]
                    const worksheet = workbook.Sheets[firstSheetName]
                    let dataExcel=XLSX.utils.sheet_to_json(worksheet, { header: 1 })
                    // console.log('excel=head=>', dataExcel[0])
                    var tableData = dataExcel.slice(1) // 移除第一条数据

                    // 获取当前年月
                    const currentDate = new Date()
                    const year = currentDate.getFullYear()
                    const month = String(currentDate.getMonth() + 1).padStart(2, '0') // 将月份转换为两位数

                    // 转换数据格式并添加日期
                    const formattedData = tableData.map((row) => {
                        const obj = {
                            Username: row[0],
                            Certificate: row[1],
                            CreditCard: row[2],
                            Telephone: row[3],
                            BasicSalary: row[4],
                            AttendanceRequired: row[5],
                            AttendanceActual: row[6],
                            WorkHour: row[7],
                            Performance: row[8],
                            Allowance: row[9],
                            Subsidy: row[10],
                            OvertimeSalary: row[11],
                            Excitation: row[12],
                            Discipline: row[13],
                            Withholding: row[14],
                            BackPayment: row[15],
                            ShouldSalary: row[16],
                            UtilitiesFee: row[17],
                            Tax: row[18],
                            AdvanceSalary: row[19],
                            ActualSalary: row[20],
                            Date: `${year}-${month}` // 添加当前年月
                        };
                        return obj
                    })
                    // console.log(formattedData)
                    // this.tableData=formattedData
                    this.tableData2=formattedData
                    const content=`
                        <div style="word-wrap: break-word;max-width:400px;">
                            <p style="word-wrap: break-word;">读取内容如下，是否加载到工作表中。<strong>此操作会覆盖工作表，请谨慎确定！</strong></p>
                            <p style="word-wrap: break-word;">表头：${dataExcel[0]}</p>
                            <p style="word-wrap: break-word;">第一行：${dataExcel[1]}</p>
                        </div>
                    `
                    this.$alert(`${content}`,'内容阅览', {
                        confirmButtonText: '确定',
                        dangerouslyUseHTMLString: true,
                        callback: action => {
                            if(action=='confirm'){
                                this.$message({
                                    type: 'success',
                                    message: `已加载`,
                                    plain: true,
                                })
                                this.tableData=formattedData
                            }else{}
                        }
                    })
                } catch (error) {
                    this.$message({
                        message: `读取或处理Excel文件时出错：${error}`,
                        type: 'error',
                        plain: true,
                    })
                }
            };

            reader.onerror = (error) => {
                console.error('读取文件时发生错误', error)
            };

            reader.readAsArrayBuffer(file); // 开始读取文件
        },
    }
}
</script>
  
<style scoped>
  
</style>
  