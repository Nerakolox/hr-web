<template>
    <div style="max-width: 600px;position: relative;">
        <RouterView style="width: 100%;"/>
        <div class="p-2 d-flex flex-row w-100" style="position: fixed;bottom: 0;height: 70px;background: #ffffff50;width: 100%;backdrop-filter: blur(5px);">
            <div class="d-flex flex-row justify-content-around align-items-center w-100">
                <div class="d-flex flex-column align-items-center nav-box">
                    <router-link to="/user/incomeQuery" class="d-flex flex-column align-items-center nav-box">
                        <el-icon :color="$route.path==='/user/incomeQuery'?'#409EFF':'#434343'" size="20"><WalletFilled /></el-icon>
                        <small :style="{'color':$route.path==='/user/incomeQuery'?'#409EFF':'',}">工资查询</small>
                    </router-link>
                </div>
                <div class="d-flex flex-column align-items-center nav-box">
                    <router-link to="/user/recruitInfo" class="d-flex flex-column align-items-center nav-box">
                        <el-icon :color="$route.path==='/user/recruitInfo'?'#409EFF':'#434343'" size="20"><Briefcase /></el-icon>
                        <small :style="{'color':$route.path==='/user/recruitInfo'?'#409EFF':'',}">招聘信息</small>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    components:{
        
    },
    data() {
        return {
            
        }
    },
    mounted(){
        if(this.$route.path==='/user'){
            this.$router.push({path:'/user/incomeQuery'})
        }
    },
    beforeUnmount() {
    
    },
    methods:{
        
    }
}
</script>
  
<style scoped>
.nav-box{
    cursor: pointer;
    transition: 0.2s ease;
    &:hover{
        color:#409EFF;
    }
}
a{
    color: #434343;
    text-decoration: none;
}
</style>
  