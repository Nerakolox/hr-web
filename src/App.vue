<template>
  <RouterView />
</template>

<script>
import {appStore} from './stores/store'
import Cookies from 'js-cookie'
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
          
        }
      }
    }
}
</script>

<style scoped>

</style>
