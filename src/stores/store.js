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
    userName: '',
  }),
  getters: {
    
  },
  actions: {
    writeUserName(value) {
      this.userName=value
    },
  }
})