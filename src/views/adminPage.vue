<template>
    <div class="d-flex flex-row h-100">
        <div style="width: 240px;min-height: 240px !important;">
            <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @select="changePage" style="height: 100vh;">
                <el-menu-item index="/admin/incoomeWrite">
                    <span>工资录入系统</span>
                </el-menu-item>
                <el-menu-item index="/admin/dataViews">
                    <span>用户信息管理</span>
                </el-menu-item>
                <el-menu-item index="/admin/editRecruitInfos">
                    <span>招聘信息管理</span>
                </el-menu-item>
                <!-- <el-menu-item >
                    <el-upload ref="upload" class="upload-demo" accept="image/*" action="#" :limit="1" :auto-upload="true" :before-upload="beforeUploadImg" :show-file-list="false">
                        <template #trigger>
                            <div>上传招聘图片</div>
                        </template>
                    </el-upload>
                </el-menu-item> -->
            </el-menu>
        </div>
        <RouterView style="flex-grow: 1;max-width: calc(100% - 240px);"/>
    </div>
</template>
  
<script>
import {appStore,userStore} from '../stores/store'
import http from '../utils/axios'
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
        beforeUploadImg(file){
            this.readImg(file)
            console.log(file)
            return false
        },
        readImg(file){
            // 创建一个 FileReader 对象
            const reader = new FileReader()

            // 设置读取完成后的回调函数
            let query={
                img:''
            }
            reader.onload = (event)=>{
                const base64Data = event.target.result
                // console.log("Base64 编码:", base64Data)
                query={
                    img:`${base64Data}`
                }
                // return {img:base64Data}
                http.post('/uploadimage',query)
                    .then(res=>{
                        this.$message({
                            message: res.msg,
                            type: 'success',
                            duration: 5000,
                            plain: true,
                        })
                    })
                console.log('query',query)
            }
            reader.readAsDataURL(file)
            console.log('query',query)
            
        }
    }
}
</script>
  
<style scoped>
  
</style>
  