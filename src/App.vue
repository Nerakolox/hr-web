<template>
  <RouterView />
</template>

<script>
import {appStore} from './stores/store'
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
      }
    }
}
</script>

<style scoped>

</style>
