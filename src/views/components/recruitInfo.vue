<template>
    <div class="recruit p-2">
        <h5 class="p-3">招聘市场</h5>
        <div style="height: 100%;"v-infinite-scroll="load" :infinite-scroll-disabled="noMore">
            <div v-for="(item,index) in recruits" :key="index">
                <el-card class="mb-2 recruit-card" style="width: 100%" shadow="hover" @click="showRecruit(item)">
                    <div class="d-flex flex-column">
                        <h5 style="font-size: 120%;">标题</h5>
                        <div>描述</div>
                    </div>
                </el-card>
            </div>
        </div>
        
        <p v-if="loading">Loading...</p>
        <p v-if="noMore">No more</p>  
        
    </div>

    <el-drawer v-model="drawer" :show-close="false" size="100%">
        <template #header="{ close, titleId, titleClass }">
            <el-page-header @back="goBack">
                <template #content>
                    <span class="text-large font-600 mr-3"> {{ shows.title }} </span>
                </template>
            </el-page-header>
        </template>
        <div>{{ shows.disc }}</div>
        <div class="w-100 text-end">
            <small>更新日期：{{ shows.time }}</small>
        </div>
        <hr class="m-2 ms-0 me-0" style="border: 1px solid #c3c3c3;"/>
        <div v-html="shows.content"></div>
    </el-drawer>
</template>

<script>
import http from '../../utils/axios'
export default {
    components:{
        
    },
    data() {
        return {
            img:'',
            recruits:10,
            shows:{
                title:'标题信息 标题信息',
                time:'2024-04-04',
                disc:'描述，这个是描述，描述信息',
                content:`<p>主要内容主要内容</p>`
            },
            drawer:false,
            page:1,
            loading:false,
            noMore:false,
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
        showRecruit(item){
            this.drawer=true
        },
        goBack(){
            this.drawer=false
        },
        load(){
            if (!this.loading && !this.noMore){
                console.log(this.page)
                this.loading=true
                setTimeout(() => {
                    this.recruits += 10
                    this.loading = false
                }, 2000)
            }
            
        }
    }
}
</script>
  
<style scoped>
.recruit{
    width: 100%;
    height: 100%;
    margin-bottom: 65px;
}
.recruit-card{
    cursor: pointer;
}
</style>
  