import { defineStore } from 'pinia'

export const appStore = defineStore('app', {
  state: () => ({
    isMobile: false,
  }),
  getters: {
    
  },
  actions: {
    changeMobileStatus(value) {
      this.isMobile=value
    },
  }
})

export const userStore = defineStore('user', {
  state: () => ({
    telephone: '',
    username:'',
    admin:false
  }),
  getters: {
    
  },
  actions: {
    writeUsername(value) {
      this.username=value
    },
    writeTelephone(value) {
      this.telephone=value
    },
    writeAdmin(value) {
      this.admin=value
    },
  }
})