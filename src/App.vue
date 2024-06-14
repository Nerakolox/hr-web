<template>
  <RouterView />
</template>

<script>
import {appStore,userStore} from './stores/store'
import Cookies from 'js-cookie'
import http from './utils/axios'
export default {
    components:{
        
    },
    data() {
        return {
          windowWidth: 0
        }
    },
    mounted(){
      this.getPageWidth()
      window.addEventListener('resize', this.getPageWidth)
      this.getAdminInfo()
    },
    beforeUnmount() {
      window.removeEventListener('resize', this.getPageWidth)
    },
    methods:{
      getPageWidth(){
        this.windowWidth = window.innerWidth
        if(this.windowWidth<565){
          appStore().changeMobileStatus(true)
        }else{
          appStore().changeMobileStatus(false)
        }
        console.log(appStore().isMobile)
      },
      getAdminInfo(){
        const token = Cookies.get('token')
        if (token) {
          http.get('/userinfo')
            .then(res=>{
                // console.log(res.data,Cookies)
                // Cookies.set('token',res.data.token)
                
                userStore().writeUsername(res.data.username)
                userStore().writeTelephone(res.data.telephone)
                userStore().writeAdmin(res.data.admin)

                if(!userStore().admin){
                  this.$router.push({path:'/user'})
                }
            })
        }
      }
    }
}
</script>

<style scoped>

</style>
