<template>
    <div class="recruit p-2">
        <h5 class="p-3">招聘市场</h5>
        <div style="height: 100%;" v-infinite-scroll="load" :infinite-scroll-disabled="page>=totalpages">
            <div v-for="(item,index) in recruits" :key="item.id">
                <el-card class="mb-2 recruit-card" style="width: 100%" shadow="hover" @click="showRecruit(item)">
                    <div class="d-flex flex-column">
                        <h5 style="font-size: 120%;">{{ item.title }}</h5>
                        <div class="d-flex justify-content-between">
                            <div>{{ item.summary }}</div>
                            <small class="d-flex align-items-center" style="font-size: 80%;"><el-icon><View /></el-icon>{{  item.click  }}</small>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
        
        <div class="text-muted text-center w-100" v-if="loading">
            <el-icon class="is-loading"><Loading /></el-icon>
        </div>
        <div class="text-muted text-center w-100" v-if="page>=totalpages">
            <small>没有更多招聘信息了</small>  
        </div>
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
            <small>更新日期：{{ formatDate(shows.time) }}</small>
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
            item.click++
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
                console.log(this.page)
                http.get(`/readrecruit?page=${this.page+1}`)
                    .then(res=>{
                        this.page++
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
        ,
        formatDate(dateString) {
            const date = new Date(dateString)
            const year = date.getFullYear()
            const month = (date.getMonth() + 1).toString().padStart(2, '0')
            const day = date.getDate().toString().padStart(2, '0')
            const hour = date.getHours().toString().padStart(2, '0')
            const minute = date.getMinutes().toString().padStart(2, '0')
            return `${year}-${month}-${day} ${hour}:${minute}`
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
  