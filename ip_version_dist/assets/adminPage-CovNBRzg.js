import{_ as h,u as p,c as _,a as n,b as a,w as s,r as c,o as g}from"./index-BeX5Rnoo.js";import{s as f}from"./axios-CVbaXV-p.js";const x={components:{},data(){return{}},mounted(){this.$route.path==="/admin"&&p().admin?this.$router.push({path:"/admin/incoomeWrite"}):this.$router.push({path:"/user"})},beforeUnmount(){},methods:{changePage(e,o){this.$router.push({path:e})},beforeUploadImg(e){return this.readImg(e),console.log(e),!1},readImg(e){const o=new FileReader;let t={img:""};o.onload=l=>{t={img:`${l.target.result}`},f.post("/uploadimage",t).then(r=>{this.$message({message:r.msg,type:"success",duration:5e3,plain:!0})}),console.log("query",t)},o.readAsDataURL(e),console.log("query",t)}}},w={class:"d-flex flex-row h-100"},$={style:{width:"240px","min-height":"240px !important"}},v=n("span",null,"工资录入系统",-1),y=n("span",null,"用户信息管理",-1),b=n("span",null,"招聘信息管理",-1);function R(e,o,t,l,d,r){const i=c("el-menu-item"),u=c("el-menu"),m=c("RouterView");return g(),_("div",w,[n("div",$,[a(u,{"default-active":e.$route.path,class:"el-menu-vertical-demo",onSelect:r.changePage,style:{height:"100vh"}},{default:s(()=>[a(i,{index:"/admin/incoomeWrite"},{default:s(()=>[v]),_:1}),a(i,{index:"/admin/dataViews"},{default:s(()=>[y]),_:1}),a(i,{index:"/admin/editRecruitInfos"},{default:s(()=>[b]),_:1})]),_:1},8,["default-active","onSelect"])]),a(m,{style:{"flex-grow":"1","max-width":"calc(100% - 240px)"}})])}const P=h(x,[["render",R]]);export{P as default};