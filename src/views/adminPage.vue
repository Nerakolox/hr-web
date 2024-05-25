<template>
    <div class="d-flex flex-row h-100">
        <div style="width: 240px;min-height: 240px !important;">
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @select="changePage" style="height: 100vh;">
                <el-menu-item index="/admin/incoomeWrite">
                    <span>工资录入</span>
                </el-menu-item>
                <el-menu-item index="/admin/dataViews">
                    <span>信息管理</span>
                </el-menu-item>
            </el-menu>
        </div>
        <RouterView style="flex-grow: 1;max-width: calc(100% - 240px);"/>
    </div>
</template>
  
<script>
import {appStore,userStore} from '../stores/store'
export default {
    components:{
        
    },
    data() {
        return {
            
        }
    },
    mounted(){
        if(this.$route.path==='/admin'&&userStore().admin){
            this.$router.push({path:'/admin/incoomeWrite'})
        }else{
            this.$router.push({path:'/user'})
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
  