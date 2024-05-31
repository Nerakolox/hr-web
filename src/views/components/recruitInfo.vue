<template>
    <div class="recruit p-2">
        <h5 class="p-3">招聘市场</h5>
        <div style="height: 100%;" v-infinite-scroll="load" :infinite-scroll-disabled="noMore">
            <div v-for="(item,index) in recruits" :key="item.id">
                <el-card class="mb-2 recruit-card" style="width: 100%" shadow="hover" @click="showRecruit(item)">
                    <div class="d-flex flex-column">
                        <h5 style="font-size: 120%;">{{ item.title }}</h5>
                        <div>{{ item.summary }}</div>
                    </div>
                </el-card>
            </div>
        </div>
        
        <p v-if="loading">Loading...</p>
        <p v-if="this.page<this.totalpages">No more</p>  
        
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
            recruits:[],
            shows:{
                title:'',
                time:'',
                disc:'',
                content:``
            },
            drawer:false,
            page:1,
            loading:false,
            totalpages:-1
        }
    },
    mounted(){
        http.get(`/readrecruit?page=${this.page}`)
            .then(res=>{
                // console.log(res.data)
                this.recruits=res.data
                this.totalpages=res.totalpages
                // console.log(this.totalpages)
            })

    },
    beforeUnmount() {
    
    },
    methods:{
        showRecruit(item){
            this.drawer=true
            http.get(`/readrecruit?id=${item.id}`)
                .then(res=>{
                    // console.log(res.data)
                    this.shows={
                        title:res.data.title,
                        time:res.data.UpdatedAt,
                        disc:res.data.summary,
                        content:res.data.content
                    }
                })
        },
        goBack(){
            this.drawer=false
        },
        load(){
            if (!this.loading && this.page<this.totalpages){
                this.loading=true
                this.page++
                console.log(this.page)
                http.get(`/readrecruit?page=${this.page}`)
                    .then(res=>{
                        // console.log(res.data)
                        res.data.forEach(item=>{
                            this.recruits.push(item)
                        })
                        this.totalpages=res.totalpages
                        this.$nextTick(()=>{
                            this.loading = false
                        })
                    })
                // setTimeout(() => {
                    // this.recruits += 10
                // }, 2000)
            }
        }
    },
    watch:{
        drawer(newVal){
            if(newVal===false){
                this.shows={
                    title:'',
                    time:'',
                    disc:'',
                    content:``
                }
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
  