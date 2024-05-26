import{s as S}from"./axios-CcArrTKS.js";import{_ as g,c as C,a as s,b as e,w as t,r as i,o as A,f as a,t as r}from"./index-D3HcCBAl.js";const v={components:{},data(){return{ruleForm:{idCard:"",date:""},rules:{idCard:[{required:!0,message:"请输入身份证号码",trigger:"blur"},{pattern:/^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(10|11|12))((0[1-9])|([1-2][0-9])|30|31)\d{3}[0-9Xx]$/,message:"请输入有效的身份证号码",trigger:"blur"}],date:[{required:!0,message:"请选择日期",trigger:"blur"}]},incomeData:{Username:"-",Certificate:"-",Telephone:"-",CreditCard:"-",BasicSalary:"-",AttendanceRequired:"-",AttendanceActual:"-",WorkHour:"-",Performance:"-",Allowance:"-",Subsidy:"-",OvertimeSalary:"-",Excitation:"-",Discipline:"-",Withholding:"-",BackPayment:"-",ShouldSalary:"-",UtilitiesFee:"-",Tax:"-",AdvanceSalary:"-",ActualSalary:"-",Date:"-"}}},mounted(){this.ruleForm.date=this.getCurrentMonth()},beforeUnmount(){},methods:{getCurrentMonth(){const c=new Date,n=c.getFullYear(),u=c.getMonth()+1;return`${n}-${u.toString().padStart(2,"0")}`},goQuery(c){this.$refs[c].validate(n=>{n&&S.get(`/readsalary?certificate=${this.ruleForm.idCard}&date=${this.ruleForm.date}`).then(u=>{this.incomeData=u.data}).catch(u=>{this.incomeData={Username:"-",Certificate:"-",Telephone:"-",CreditCard:"-",BasicSalary:"-",AttendanceRequired:"-",AttendanceActual:"-",WorkHour:"-",Performance:"-",Allowance:"-",Subsidy:"-",OvertimeSalary:"-",Excitation:"-",Discipline:"-",Withholding:"-",BackPayment:"-",ShouldSalary:"-",UtilitiesFee:"-",Tax:"-",AdvanceSalary:"-",ActualSalary:"-",Date:"-"}})})}}},F={style:{"margin-bottom":"70px"}},x={class:"p-2"},k=s("h3",null,"工资查询",-1);function w(c,n,u,B,l,_){const f=i("el-input"),m=i("el-form-item"),p=i("el-date-picker"),b=i("el-button"),D=i("el-form"),y=i("el-divider"),o=i("el-descriptions-item"),h=i("el-descriptions");return A(),C("div",F,[s("div",x,[k,e(D,{model:l.ruleForm,rules:l.rules,ref:"ruleForm","label-position":"top",style:{width:"100%"}},{default:t(()=>[e(m,{label:"身份证号",prop:"idCard"},{default:t(()=>[e(f,{modelValue:l.ruleForm.idCard,"onUpdate:modelValue":n[0]||(n[0]=d=>l.ruleForm.idCard=d)},null,8,["modelValue"])]),_:1}),e(m,{prop:"date"},{default:t(()=>[e(p,{class:"w-100",modelValue:l.ruleForm.date,"onUpdate:modelValue":n[1]||(n[1]=d=>l.ruleForm.date=d),"value-format":"YYYY-MM",type:"month",placeholder:"请选择日期"},null,8,["modelValue"])]),_:1}),e(m,null,{default:t(()=>[e(b,{class:"w-100",type:"primary",plain:"",onClick:n[2]||(n[2]=d=>_.goQuery("ruleForm"))},{default:t(()=>[a("查询工资条")]),_:1})]),_:1})]),_:1},8,["model","rules"])]),e(y,{"content-position":"left"},{default:t(()=>[a("工资表")]),_:1}),e(h,{direction:"vertical",column:2,border:""},{default:t(()=>[e(o,{label:"姓名"},{default:t(()=>[a(r(l.incomeData.Username),1)]),_:1}),e(o,{label:"身份证号"},{default:t(()=>[a(r(l.incomeData.Certificate),1)]),_:1}),e(o,{label:"电话号码"},{default:t(()=>[a(r(l.incomeData.Telephone),1)]),_:1}),e(o,{label:"银行卡号"},{default:t(()=>[a(r(l.incomeData.CreditCard),1)]),_:1}),e(o,{label:"基本工资"},{default:t(()=>[a(r(l.incomeData.BasicSalary),1)]),_:1}),e(o,{label:"应出勤天数"},{default:t(()=>[a(r(l.incomeData.AttendanceRequired),1)]),_:1}),e(o,{label:"实出勤天数"},{default:t(()=>[a(r(l.incomeData.AttendanceActual),1)]),_:1}),e(o,{label:"总工时"},{default:t(()=>[a(r(l.incomeData.WorkHour),1)]),_:1}),e(o,{label:"绩效"},{default:t(()=>[a(r(l.incomeData.Performance),1)]),_:1}),e(o,{label:"津贴"},{default:t(()=>[a(r(l.incomeData.Allowance),1)]),_:1}),e(o,{label:"补助"},{default:t(()=>[a(r(l.incomeData.Subsidy),1)]),_:1}),e(o,{label:"加班工资"},{default:t(()=>[a(r(l.incomeData.OvertimeSalary),1)]),_:1}),e(o,{label:"正负激励"},{default:t(()=>[a(r(l.incomeData.Excitation),1)]),_:1}),e(o,{label:"违纪扣款"},{default:t(()=>[a(r(l.incomeData.Discipline),1)]),_:1}),e(o,{label:"代扣部分"},{default:t(()=>[a(r(l.incomeData.Withholding),1)]),_:1}),e(o,{label:"补发扣"},{default:t(()=>[a(r(l.incomeData.BackPayment),1)]),_:1}),e(o,{label:"应发工资"},{default:t(()=>[a(r(l.incomeData.ShouldSalary),1)]),_:1}),e(o,{label:"水电物业费"},{default:t(()=>[a(r(l.incomeData.UtilitiesFee),1)]),_:1}),e(o,{label:"个税"},{default:t(()=>[a(r(l.incomeData.Tax),1)]),_:1}),e(o,{label:"预支工资"},{default:t(()=>[a(r(l.incomeData.AdvanceSalary),1)]),_:1}),e(o,{label:"实发工资"},{default:t(()=>[a(r(l.incomeData.ActualSalary),1)]),_:1}),e(o,{label:"日期"},{default:t(()=>[a(r(l.incomeData.Date),1)]),_:1})]),_:1})])}const T=g(v,[["render",w]]);export{T as default};
