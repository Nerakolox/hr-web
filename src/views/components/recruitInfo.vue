<template>
    <div class="recruit">
        
    </div>
</template>

<script>
import http from '../../utils/axios'
export default {
    components:{
        
    },
    data() {
        return {
            
        }
    },
    mounted(){
        http.get('/readrecruit')
            .then(res=>{

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
    height: 100vh;
    width: 100%;
    background-image: url('../../assets/recruit.jpg');
    background-position: center;
    background-size: contain;
    margin-bottom: 70px;
}
</style>
  