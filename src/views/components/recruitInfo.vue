<template>
    <div class="recruit">
        <img v-if="img===''" class="recruit-img" src="../../assets/recruit.jpg" />
        <img v-else class="recruit-img" :src="img" />
    </div>
</template>

<script>
import http from '../../utils/axios'
export default {
    components:{
        
    },
    data() {
        return {
            img:''
        }
    },
    mounted(){
        http.get('/readrecruit')
            .then(res=>{
                console.log(res)
                this.img=res.data
            })
    },
    beforeUnmount() {
    
    },
    methods:{
        
    }
}
</script>
  
<style scoped>
.recruit{
    /* height: 100vh; */
    width: 100%;
    /* background-image: url('../../assets/recruit.jpg');
    background-position: center;
    background-size: contain; */
    margin-bottom: 70px; 
}
.recruit-img{
    max-width: 100%;  /* 最大宽度为容器宽度 */
    height: auto;  /* 高度自适应 */
    /* min-height: 100vh;  */
}
</style>
  