<template>
    <div class="d-flex flex-row h-100">
        <div style="width: 240px;">
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @select="changePage" style="height: 100vh;">
                <el-menu-item index="/admin/incoomeWrite">
                    <span>工资录入</span>
                </el-menu-item>
                <el-menu-item index="/admin/dataViews">
                    <span>信息管理</span>
                </el-menu-item>
        </el-menu>
        </div>
        <RouterView style="flex-grow: 1;"/>
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
        if(this.$route.path==='/admin'){
            this.$router.push({path:'/admin/incoomeWrite'})
        }
    },
    beforeUnmount() {
        
    },
    methods:{
        changePage(key,keyPath){
            this.$router.push({path:key})
        },
    }
}
</script>
  
<style scoped>
  
</style>
  