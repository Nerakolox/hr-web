<template>
    <div class="p-2">
        <h4 class="mb-4">招聘信息管理</h4>
        <el-divider content-position="left">招聘信息管理 招聘信息管理</el-divider>
        <div class="d-flex justify-content-end mb-2">
            <el-button type="primary" plain>添加招聘信息</el-button>
        </div>
        <el-card style="width: 100%" shadow="always">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h5>标题</h5>
                    <div>内容</div>
                </div>
                <div><el-button type="primary" plain @click="editBox">编辑</el-button></div>
            </div>
        </el-card>
        <el-drawer v-model="drawer" direction="rtl" :before-close="handleClose" size="1000">
            <template #header>
                <div>编辑招聘信息</div>
            </template>
            <template #default>
                <div class="d-flex justify-content-between h-100">
                    <div style="margin-right: 100px;height: 100%;position: relative;">
                        <el-input class="mb-1" v-model="title" placeholder="请输入标题"></el-input>
                        <el-input class="mb-1" v-model="disc" placeholder="请输入概览"></el-input>
                        <EDITOR @inputing="inputing"></EDITOR>
                        <small class="text-muted w-100 text-end" style="position: absolute;bottom: 0px;">*手机阅览效果可能与真实展示样式有出入</small>
                    </div>
                    <div class="phone">
                        <img class="img-fluid h-100" src="../../assets/phone.png" style="max-width: 400px;">
                        <div class="shows" v-html="content"></div>
                    </div>
                </div>
            </template>
            <template #footer>
                <div style="flex: auto">
                    <el-button @click="drawer=false">取消</el-button>
                    <el-button type="primary">确认</el-button>
                </div>
            </template>
        </el-drawer>
    </div>
</template>

<script>
import EDITOR from './editor.vue'
import http from '../../utils/axios'
export default {
    components:{
        EDITOR
    },
    data() {
        return {
            // img:''
            title:'',
            drawer:false,
            content:'',
            disc:''
        }
    },
    mounted(){
        // http.get('/readrecruit')
        //     .then(res=>{
        //         console.log(res)
        //         this.img=res.data
        //     })
    },
    beforeUnmount() {
    
    },
    methods:{
        editBox(){
            this.drawer=true
        },
        handleClose(){
            this.$confirm('确认取消编辑吗？')
                .then(() => {
                    this.drawer=false
                })
                .catch(() => {
                    // catch error
                })
        },
        inputing(data){
            this.content=data
        }
    }
}
</script>
  
<style scoped>
.phone{
    position: relative;
}
.shows{
    position: absolute;
    width: 87%;
    height: 90%;
    word-wrap: break-word;
    overflow-y: auto;
    top: 7%;
    left: 6%;
}
::-webkit-scrollbar {
    width: 4px; /* 设置滚动条的宽度 */
    height: 8px;
}
::-webkit-scrollbar-track {
    background-color: #e2e2e200;
}
::-webkit-scrollbar-thumb {
    background-color: #c3c3c3;
    border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
    background-color: #b6b6b6;
}
::-webkit-scrollbar-thumb:active {
    background-color: #afafaf;
}
</style>
