<template>
    <div class="p-2">
        <h4 class="mb-4">招聘信息管理</h4>
        <el-divider content-position="left">招聘信息管理 招聘信息管理</el-divider>
        <div class="d-flex justify-content-end mb-2">
            <el-button type="primary" plain @click="editBox('','add')">添加招聘信息</el-button>
        </div>
        <el-card class="mb-2" style="width: 100%" shadow="hover" v-for="item in recruits" :key="item.id">
            <div class="d-flex justify-content-between align-items-center">
                <div>
                    <h5>{{ item.title }}</h5>
                    <div>{{ item.summary }}</div>
                </div>
                <div>
                    <div><small class="d-flex align-items-center" style="font-size: 80%;"><el-icon><View /></el-icon>{{  item.click  }}</small></div>
                    <el-button type="primary" plain @click="editBox(item.id,'edit')">编辑</el-button>
                    <el-button type="danger" plain @click="delRecruit(item.id)">删除</el-button>
                </div>
            </div>
        </el-card>
        <div class="mt-2 d-flex">
            <el-pagination class="ms-auto" background layout="prev, pager, next" v-model:current-page="page" :total="recruitTotal" @current-change="getRecruit"/>
        </div>
        <el-drawer v-model="drawer" direction="rtl" :before-close="handleClose" size="1000">
            <template #header>
                <div>{{ type }}招聘信息</div>
            </template>
            <template #default>
                <div class="d-flex justify-content-between h-100" style="position: relative;">
                    <div style="margin-right: 100px;height: 100%;position: relative;">
                        <el-input class="mb-1" v-model="title" placeholder="请输入标题"></el-input>
                        <el-input class="mb-1" v-model="disc" placeholder="请输入概览"></el-input>
                        <EDITOR @inputing="inputing" :newHtml="newHtml"></EDITOR>
                    </div>
                    <div class="phone" ref="phone">
                        <img class="img-fluid h-100" src="../../assets/phone.png" style="max-width: 400px;">
                        <div class="shows" v-html="content"></div>
                        <!-- <div class="w-100" v-html="content" :style="{'transform': `translate(-${transform*24}%, -${transform*23}%) scale(${transform})`}"></div> -->
                    </div>
                </div>
            </template>
            <template #footer>
                <div style="flex: auto">
                    <el-button @click="drawer=false">取消</el-button>
                    <el-button type="primary" @click="upLoad">确认</el-button>
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
            disc:'',
            transform:1,
            page:1,
            recruits:[],
            type:'',
            newHtml:'',
            id:'',
            recruitTotal:0
        }
    },
    mounted(){
        // http.get('/readrecruit')
        //     .then(res=>{
        //         console.log(res)
        //         this.img=res.data
        //     })
        this.getRecruit()
    },
    beforeUnmount() {
    
    },
    methods:{
        getRecruit(){
            http.get(`/readrecruit?page=${this.page}`)
                .then(res=>{
                    // console.log(res.data)
                    this.recruits=res.data
                    this.recruitTotal=res.totalpages*10
                })
        },
        editBox(id,type){
            this.drawer=true
            if(type==='edit'){
                this.type='编辑'
                http.get(`/readrecruit?id=${id}`)
                    .then(res=>{
                            this.content=this.newHtml=res.data.content
                            this.disc=res.data.summary
                            this.title=res.data.title
                            this.id=res.data.ID
                        })
            }else if(type==='add'){
                this.type='新建'
                this.content=this.newHtml=this.disc=this.title=''
            }
            
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
        },
        delRecruit(id){
            http.get(`/delete/recruit?id=${id}`)
                .then(res=>{
                    // console.log(res)
                    this.getRecruit()
                })
        },
        upLoad(){
            if(this.title==''||this.content==''||this.disc==''){
                this.$message({
                    message: '请输入有效标题、描述或内容',
                    type: 'warning',
                    plain: true,
                    duration: 5000
                })
            }else{
                const query={
                    title:this.title,
                    summary:this.disc,
                    content:this.content,
                }
                if(this.type==='新建'){
                    http.post('/upload/recruit',query)
                        .then(res=>{
                            console.log(res)
                            this.content=this.newHtml=this.disc=this.title=this.id=''
                            this.drawer=false
                            http.get(`/readrecruit?page=${this.page}`)
                                .then(res2=>{
                                    // console.log(res2.data)
                                    this.recruits=res2.data
                                })
                        })
                }else if(this.type==='编辑'){
                    const query2={
                        id:this.id,
                        title:this.title,
                        summary:this.disc,
                        content:this.content,
                    }
                    console.log(query2)
                    http.post('/edit/recruit',query2)
                        .then(res=>{
                            console.log(res)
                            this.content=this.newHtml=this.disc=this.title=this.id=''
                            this.drawer=false
                            http.get(`/readrecruit?page=${this.page}`)
                                .then(res2=>{
                                    // console.log(res2.data)
                                    this.recruits=res2.data
                                })
                        })
                }
            }
        }
    },
    watch:{
        // drawer(newval){
        //     if(newval){
        //         this.$nextTick(()=>{
        //             console.log(this.$refs.phone.offsetHeight/1080)
        //             this.transform=this.$refs.phone.offsetHeight/1080
        //         })
        //     }
        // }
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
